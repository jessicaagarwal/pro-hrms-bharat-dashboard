
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { teamPerformance } from "@/lib/data";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function PerformanceChart() {
  return (
    <Card className="col-span-3 animated-card" style={{ animationDelay: "150ms" }}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Team Performance</CardTitle>
          <CardDescription>Monthly performance metrics by department</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={teamPerformance}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  borderRadius: "var(--radius)",
                  boxShadow: "var(--shadow)",
                }}
                formatter={(value) => [`${value}%`, ""]}
              />
              <Legend iconType="circle" />
              <Line
                type="monotone"
                dataKey="development"
                name="Development"
                stroke="#00AF99"
                activeDot={{ r: 6 }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="design"
                name="Design"
                stroke="#7c3aed"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="marketing"
                name="Marketing"
                stroke="#f59e0b"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="operations"
                name="Operations"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
