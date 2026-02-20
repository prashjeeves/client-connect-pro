import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const courses = [
  { name: "New Starter Onboarding", modules: 8, completed: 8, category: "Onboarding" },
  { name: "Advanced BD Techniques", modules: 12, completed: 7, category: "Sales" },
  { name: "Compliance & GDPR", modules: 5, completed: 5, category: "Compliance" },
  { name: "Client Relationship Mastery", modules: 10, completed: 3, category: "Account Mgmt" },
  { name: "Tech Sector Recruitment", modules: 6, completed: 0, category: "Specialist" },
];

export default function Training() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Training Courses</h1>
        <p className="text-sm text-muted-foreground">Onboarding and best practice training for the team.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <Card key={c.name} className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{c.name}</h3>
                  <Badge variant="secondary" className="mt-1 text-xs">{c.category}</Badge>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>{c.completed}/{c.modules} modules</span>
                  <span>{Math.round((c.completed / c.modules) * 100)}%</span>
                </div>
                <Progress value={(c.completed / c.modules) * 100} className="h-1.5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
