import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, User } from "lucide-react";

const candidates = [
  { name: "Sarah Johnson", role: "Senior Developer", status: "Placed", location: "London" },
  { name: "Mark Robinson", role: "Product Manager", status: "Interviewing", location: "Manchester" },
  { name: "Emma Williams", role: "Data Scientist", status: "Available", location: "Remote" },
  { name: "John Davies", role: "DevOps Engineer", status: "Interviewing", location: "Birmingham" },
  { name: "Lisa Chen", role: "UX Designer", status: "Available", location: "London" },
  { name: "Tom Baker", role: "CTO", status: "Placed", location: "Bristol" },
];

const statusColor: Record<string, string> = {
  Placed: "default",
  Interviewing: "secondary",
  Available: "outline",
};

export default function Candidates() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Candidates</h1>
          <p className="text-sm text-muted-foreground">Manage your candidate database.</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" /> Add Candidate</Button>
      </div>
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search candidates..." className="pl-9" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {candidates.map((c) => (
          <Card key={c.name} className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{c.name}</h3>
                  <p className="text-xs text-muted-foreground">{c.role}</p>
                </div>
                <Badge variant={statusColor[c.status] as any} className="text-xs">{c.status}</Badge>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{c.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
