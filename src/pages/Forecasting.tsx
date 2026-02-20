import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const forecastData = [
  { month: "Jan", actual: 142500, forecast: 140000 },
  { month: "Feb", actual: null, forecast: 155000 },
  { month: "Mar", actual: null, forecast: 168000 },
  { month: "Apr", actual: null, forecast: 175000 },
  { month: "May", actual: null, forecast: 190000 },
  { month: "Jun", actual: null, forecast: 210000 },
];

const pipelineProbability = [
  { stage: "Prospect", value: 420000, probability: "10%", expected: "£42,000" },
  { stage: "Outreach", value: 280000, probability: "25%", expected: "£70,000" },
  { stage: "Meeting", value: 180000, probability: "50%", expected: "£90,000" },
  { stage: "Terms Agreed", value: 95000, probability: "75%", expected: "£71,250" },
  { stage: "Placement", value: 52000, probability: "90%", expected: "£46,800" },
];

export default function Forecasting() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Forecasting</h1>
        <p className="text-sm text-muted-foreground">Projected revenue based on pipeline probabilities.</p>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="font-display text-base">Revenue Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `£${v / 1000}k`} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
              <Line type="monotone" dataKey="actual" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} name="Actual" />
              <Line type="monotone" dataKey="forecast" stroke="hsl(var(--primary))" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} name="Forecast" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="font-display text-base">Weighted Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-2 font-medium">Stage</th>
                  <th className="pb-2 font-medium">Value</th>
                  <th className="pb-2 font-medium">Probability</th>
                  <th className="pb-2 font-medium">Expected</th>
                </tr>
              </thead>
              <tbody>
                {pipelineProbability.map((row) => (
                  <tr key={row.stage} className="border-b border-border/50">
                    <td className="py-3 font-medium text-foreground">{row.stage}</td>
                    <td className="py-3 text-muted-foreground">£{row.value.toLocaleString()}</td>
                    <td className="py-3 text-muted-foreground">{row.probability}</td>
                    <td className="py-3 font-medium text-primary">{row.expected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
