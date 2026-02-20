import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

const activities = [
  { user: "Sarah J.", action: "Added new client", detail: "TechCorp Ltd", time: "2 min ago" },
  { user: "Mark R.", action: "Confirmed placement", detail: "Sarah J. → DataFlow Inc", time: "15 min ago" },
  { user: "Emma W.", action: "Scheduled meeting", detail: "CloudBase Systems", time: "1 hr ago" },
  { user: "John D.", action: "Sent invoice", detail: "£12,500 — FinTech Partners", time: "2 hrs ago" },
  { user: "Sarah J.", action: "Submitted candidate", detail: "Mark R. → SkyNet Digital", time: "3 hrs ago" },
  { user: "Emma W.", action: "Updated deal stage", detail: "MegaCorp → Terms Agreed", time: "4 hrs ago" },
  { user: "Mark R.", action: "Added note", detail: "CloudBase Systems follow-up", time: "5 hrs ago" },
  { user: "John D.", action: "Completed training", detail: "Advanced BD Techniques", time: "Yesterday" },
];

export default function ActivityFeed() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Team Activity</h1>
        <p className="text-sm text-muted-foreground">See what your colleagues are working on.</p>
      </div>
      <Card>
        <CardContent className="p-5">
          <div className="space-y-6">
            {activities.map((a, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Activity className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium text-foreground">{a.user}</span>{" "}
                    <span className="text-muted-foreground">{a.action}</span>
                  </p>
                  <p className="text-sm text-foreground">{a.detail}</p>
                  <p className="text-xs text-muted-foreground/60">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
