import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Mail } from "lucide-react";

const templates = [
  { name: "Initial Outreach", category: "BD", uses: 142 },
  { name: "Follow Up — No Reply", category: "BD", uses: 89 },
  { name: "Meeting Confirmation", category: "Scheduling", uses: 234 },
  { name: "Candidate Introduction", category: "Placement", uses: 67 },
  { name: "Terms Agreement", category: "Commercial", uses: 45 },
  { name: "Invoice Reminder", category: "Finance", uses: 31 },
];

export default function EmailTemplates() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Email Templates</h1>
          <p className="text-sm text-muted-foreground">Reusable email templates for outreach and communication.</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" /> New Template</Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <Card key={t.name} className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{t.name}</h3>
                  <Badge variant="secondary" className="mt-1 text-xs">{t.category}</Badge>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Used {t.uses} times</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
