
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { teamPerformance } from "@/lib/data";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp } from "lucide-react";

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="neo-blur rounded-lg p-3 border border-white/10 shadow-lg">
        <p className="font-medium text-sm mb-1">{label}</p>
        {payload.map((entry, index) => (
          <div key={`tooltip-${index}`} className="flex items-center gap-2 text-sm">
            <div 
              className="h-3 w-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="font-medium">{entry.name}:</span>
            <span>{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function PerformanceChart() {
  return (
    <Card className="col-span-3 animated-card glass-card" style={{ animationDelay: "150ms" }}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <CardTitle>Team Performance</CardTitle>
            <Badge className="bg-primary/20 text-primary text-xs">Q1 2025</Badge>
          </div>
          <CardDescription>Monthly performance metrics by department</CardDescription>
        </div>
        <div className="h-8 w-8 rounded-full bg-primary/10 grid place-items-center text-primary">
          <TrendingUp className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent className="pb-6">
        <Tabs defaultValue="area" className="mb-4">
          <TabsList className="w-auto grid grid-cols-2 max-w-[200px]">
            <TabsTrigger value="area">Area View</TabsTrigger>
            <TabsTrigger value="line">Line View</TabsTrigger>
          </TabsList>

          <TabsContent value="area" className="pt-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={teamPerformance}
                  margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 10,
                  }}
                >
                  <defs>
                    <linearGradient id="colorDevelopment" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00AF99" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#00AF99" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorDesign" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorMarketing" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorOperations" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
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
                    domain={[40, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    iconType="circle" 
                    wrapperStyle={{
                      paddingTop: 10,
                      paddingBottom: 0
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="development"
                    name="Development"
                    stroke="#00AF99"
                    fillOpacity={1}
                    fill="url(#colorDevelopment)"
                  />
                  <Area
                    type="monotone"
                    dataKey="design"
                    name="Design"
                    stroke="#7c3aed"
                    fillOpacity={1}
                    fill="url(#colorDesign)"
                  />
                  <Area
                    type="monotone"
                    dataKey="marketing"
                    name="Marketing"
                    stroke="#f59e0b"
                    fillOpacity={1}
                    fill="url(#colorMarketing)"
                  />
                  <Area
                    type="monotone"
                    dataKey="operations"
                    name="Operations"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorOperations)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="line" className="pt-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={teamPerformance}
                  margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
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
                    domain={[40, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    iconType="circle" 
                    wrapperStyle={{
                      paddingTop: 10,
                      paddingBottom: 0
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="development"
                    name="Development"
                    stroke="#00AF99"
                    fill="transparent"
                    strokeWidth={3}
                  />
                  <Area
                    type="monotone"
                    dataKey="design"
                    name="Design"
                    stroke="#7c3aed"
                    fill="transparent"
                    strokeWidth={3}
                  />
                  <Area
                    type="monotone"
                    dataKey="marketing"
                    name="Marketing"
                    stroke="#f59e0b"
                    fill="transparent"
                    strokeWidth={3}
                  />
                  <Area
                    type="monotone"
                    dataKey="operations"
                    name="Operations"
                    stroke="#3b82f6"
                    fill="transparent"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
          <div className="p-2 rounded-lg border border-border/50 bg-background/50">
            <p className="text-xs text-muted-foreground">Development</p>
            <p className="text-lg font-medium text-primary">87.4%</p>
          </div>
          <div className="p-2 rounded-lg border border-border/50 bg-background/50">
            <p className="text-xs text-muted-foreground">Design</p>
            <p className="text-lg font-medium text-purple-600">82.9%</p>
          </div>
          <div className="p-2 rounded-lg border border-border/50 bg-background/50">
            <p className="text-xs text-muted-foreground">Marketing</p>
            <p className="text-lg font-medium text-amber-600">78.6%</p>
          </div>
          <div className="p-2 rounded-lg border border-border/50 bg-background/50">
            <p className="text-xs text-muted-foreground">Operations</p>
            <p className="text-lg font-medium text-blue-600">85.1%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
