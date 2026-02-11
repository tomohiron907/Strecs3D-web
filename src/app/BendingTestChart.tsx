"use client";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  ComposedChart,
  ReferenceLine,
} from "recharts";

// Normal specimen data (9 points)
// Raw data: (Load [N], Bend [10⁻²mm])
const normalData = [
  { bend: 20, load: 20 },
  { bend: 30, load: 29.5 },
  { bend: 41, load: 39.8 },
  { bend: 52, load: 50 },
  { bend: 64.2, load: 60 },
  { bend: 79, load: 70.6 },
  { bend: 96.5, load: 80 },
  { bend: 111.5, load: 90 },
  { bend: 122, load: 100 },
].map((d) => ({ ...d, normalLoad: d.load }));

// Strecs3D specimen data (15 points)
// Raw data: (Load [N], Bend [10⁻²mm])
const strecs3dData = [
  { bend: 6.5, load: 10 },
  { bend: 13.1, load: 20.5 },
  { bend: 19.2, load: 30 },
  { bend: 25.5, load: 40 },
  { bend: 31.6, load: 50.3 },
  { bend: 38, load: 60.3 },
  { bend: 44.8, load: 70.7 },
  { bend: 51, load: 80.5 },
  { bend: 59.2, load: 90.6 },
  { bend: 67.5, load: 100.7 },
  { bend: 77.9, load: 110 },
  { bend: 86.2, load: 120 },
  { bend: 96.7, load: 130.3 },
  { bend: 107.8, load: 140 },
  { bend: 120.2, load: 150.5 },
].map((d) => ({ ...d, strecs3dLoad: d.load }));

// Regression lines: Load [N] = k * Bend [mm] + intercept
// Normal:    k=75.675 N/mm, intercept=8.177
// Strecs3D:  k=125.153 N/mm, intercept=9.774
// X-axis is in 10⁻²mm, so: Load = k * (bend * 0.01) + intercept
//   = (k * 0.01) * bend + intercept
function generateRegressionLine(
  k: number,
  intercept: number,
  maxBend: number,
  key: string
) {
  const points = [];
  for (let b = 0; b <= maxBend; b += 5) {
    points.push({ bend: b, [key]: k * b + intercept });
  }
  return points;
}

const normalRegression = generateRegressionLine(
  75.675 * 0.01,
  8.177,
  130,
  "normalReg"
);
const strecs3dRegression = generateRegressionLine(
  125.153 * 0.01,
  9.774,
  130,
  "strecs3dReg"
);

// Merge all data for ComposedChart
function mergeData() {
  const map = new Map<number, Record<string, number>>();

  const addPoints = (arr: Record<string, number>[]) => {
    for (const p of arr) {
      const existing = map.get(p.bend) || { bend: p.bend };
      Object.assign(existing, p);
      map.set(p.bend, existing);
    }
  };

  addPoints(normalData);
  addPoints(strecs3dData);
  addPoints(normalRegression);
  addPoints(strecs3dRegression);

  return Array.from(map.values()).sort((a, b) => a.bend - b.bend);
}

const chartData = mergeData();

const NORMAL_COLOR = "#6b7280"; // gray-500
const STRECS_COLOR = "#2563eb"; // blue-600

export default function BendingTestChart() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
      {/* Chart */}
      <div className="flex-1 min-w-0">
        <div className="rounded-xl border border-foreground/10 p-4 sm:p-6">
          <h3 className="mb-4 text-lg font-semibold">
            Three-Point Bending Test
          </h3>
          <ResponsiveContainer width="100%" height={360}>
            <ComposedChart
              data={chartData}
              margin={{ top: 10, right: 20, bottom: 20, left: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--foreground)" opacity={0.1} />
              <XAxis
                dataKey="bend"
                type="number"
                domain={[0, 140]}
                label={{
                  value: "Bend [10⁻²mm]",
                  position: "insideBottom",
                  offset: -10,
                  style: { fill: "var(--foreground)", fontSize: 12 },
                }}
                tick={{ fill: "var(--foreground)", fontSize: 11 }}
                stroke="var(--foreground)"
                opacity={0.4}
              />
              <YAxis
                type="number"
                domain={[0, 260]}
                label={{
                  value: "Load [N]",
                  angle: -90,
                  position: "insideLeft",
                  offset: 5,
                  style: { fill: "var(--foreground)", fontSize: 12 },
                }}
                tick={{ fill: "var(--foreground)", fontSize: 11 }}
                stroke="var(--foreground)"
                opacity={0.4}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--foreground)",
                  borderRadius: 8,
                  opacity: 0.9,
                  fontSize: 12,
                }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Legend
                verticalAlign="top"
                wrapperStyle={{ fontSize: 12, paddingBottom: 8 }}
              />

              {/* Regression lines */}
              <Line
                dataKey="normalReg"
                name="Normal (regression)"
                stroke={NORMAL_COLOR}
                strokeWidth={2}
                dot={false}
                strokeDasharray="6 3"
                connectNulls
              />
              <Line
                dataKey="strecs3dReg"
                name="Strecs3D (regression)"
                stroke={STRECS_COLOR}
                strokeWidth={2}
                dot={false}
                strokeDasharray="6 3"
                connectNulls
              />

              {/* Scatter points */}
              <Scatter
                dataKey="normalLoad"
                name="Normal"
                fill={NORMAL_COLOR}
                r={4}
              />
              <Scatter
                dataKey="strecs3dLoad"
                name="Strecs3D"
                fill={STRECS_COLOR}
                r={4}
              />

              {/* Break load reference lines */}
              <ReferenceLine
                y={121.5}
                stroke={NORMAL_COLOR}
                strokeDasharray="3 3"
                label={{
                  value: "121.5 N",
                  position: "right",
                  fill: NORMAL_COLOR,
                  fontSize: 11,
                }}
              />
              <ReferenceLine
                y={239.5}
                stroke={STRECS_COLOR}
                strokeDasharray="3 3"
                label={{
                  value: "239.5 N",
                  position: "right",
                  fill: STRECS_COLOR,
                  fontSize: 11,
                }}
              />
            </ComposedChart>
          </ResponsiveContainer>
          <p className="mt-2 text-xs text-foreground/50 text-center">
            R² = 0.993 (Normal) / R² = 0.985 (Strecs3D)
          </p>
        </div>
      </div>

      {/* Summary cards */}
      <div className="flex flex-row gap-4 lg:flex-col lg:w-56 shrink-0">
        <div className="flex-1 rounded-xl border border-foreground/10 p-6 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-foreground/50">
            Stiffness (EI) Ratio
          </p>
          <p className="mt-2 text-3xl font-bold text-blue-600">1.65x</p>
          <p className="mt-1 text-xs text-foreground/50">
            Strecs3D vs Normal
          </p>
        </div>
        <div className="flex-1 rounded-xl border border-foreground/10 p-6 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-foreground/50">
            Max Load Ratio
          </p>
          <p className="mt-2 text-3xl font-bold text-blue-600">1.97x</p>
          <p className="mt-1 text-xs text-foreground/50">
            239.5 N vs 121.5 N
          </p>
        </div>
      </div>
    </div>
  );
}
