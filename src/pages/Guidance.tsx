import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, TrendingUp, Users, Clock, Award } from "lucide-react";

const guides = [
  { title: "First 90 Days Playbook", desc: "Step-by-step guide for new recruiters to hit quota.", icon: Target },
  { title: "BD Best Practices", desc: "Proven strategies for winning new business.", icon: TrendingUp },
  { title: "Building Client Relationships", desc: "How to become a trusted advisor to your clients.", icon: Users },
  { title: "Time Management for Recruiters", desc: "Optimize your day for maximum placements.", icon: Clock },
  { title: "Achieving Top Biller Status", desc: "What separates top performers from the rest.", icon: Award },
];

export default function Guidance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Guidance for Success</h1>
        <p className="text-sm text-muted-foreground">Tips, playbooks, and best practices for the team.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Card key={g.title} className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex items-start gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <g.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{g.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
