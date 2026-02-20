import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Phone } from "lucide-react";

const scripts = [
  { name: "Cold Call — New Business", type: "BD", steps: 8 },
  { name: "Client Check-In", type: "Account Mgmt", steps: 5 },
  { name: "Candidate Screening", type: "Recruitment", steps: 12 },
  { name: "Objection Handling", type: "BD", steps: 6 },
  { name: "Reference Check", type: "Compliance", steps: 7 },
];

export default function CallScripts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Call Scripts</h1>
          <p className="text-sm text-muted-foreground">Guided conversation scripts with branching prompts.</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" /> New Script</Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scripts.map((s) => (
          <Card key={s.name} className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{s.name}</h3>
                  <Badge variant="secondary" className="mt-1 text-xs">{s.type}</Badge>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{s.steps} steps</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
