import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stages = [
  {
    name: "Prospect",
    color: "bg-info/10 text-info",
    deals: [
      { company: "TechStart Ltd", value: "£25,000", recruiter: "Sarah J.", days: 3 },
      { company: "DataPulse Inc", value: "£18,000", recruiter: "Mark R.", days: 5 },
    ],
  },
  {
    name: "Outreach",
    color: "bg-primary/10 text-primary",
    deals: [
      { company: "CloudBase Systems", value: "£45,000", recruiter: "Emma W.", days: 7 },
    ],
  },
  {
    name: "Meeting",
    color: "bg-warning/10 text-warning",
    deals: [
      { company: "FinTech Partners", value: "£62,000", recruiter: "Sarah J.", days: 12 },
      { company: "SkyNet Digital", value: "£38,000", recruiter: "John D.", days: 8 },
    ],
  },
  {
    name: "Terms Agreed",
    color: "bg-success/10 text-success",
    deals: [
      { company: "MegaCorp PLC", value: "£95,000", recruiter: "Emma W.", days: 20 },
    ],
  },
  {
    name: "Placement",
    color: "bg-primary/10 text-primary",
    deals: [
      { company: "DataFlow Inc", value: "£52,000", recruiter: "Mark R.", days: 30 },
    ],
  },
];

export default function Pipeline() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Pipeline</h1>
        <p className="text-sm text-muted-foreground">Track deals across your recruitment pipeline.</p>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => (
          <div key={stage.name} className="min-w-[280px] flex-shrink-0">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-sm font-semibold text-foreground">{stage.name}</h3>
              <Badge variant="secondary" className="text-xs">{stage.deals.length}</Badge>
            </div>
            <div className="space-y-3">
              {stage.deals.map((deal, i) => (
                <Card key={i} className="cursor-pointer transition-shadow hover:shadow-md">
                  <CardContent className="p-4">
                    <p className="font-medium text-foreground">{deal.company}</p>
                    <p className="text-lg font-bold text-primary">{deal.value}</p>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{deal.recruiter}</span>
                      <span>{deal.days}d</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
