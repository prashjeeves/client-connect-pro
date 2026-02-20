import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Building2 } from "lucide-react";

const clients = [
  { name: "TechCorp Ltd", industry: "Technology", contacts: 5, deals: 3, status: "Active" },
  { name: "FinTech Partners", industry: "Finance", contacts: 3, deals: 2, status: "Active" },
  { name: "DataFlow Inc", industry: "Data & AI", contacts: 4, deals: 1, status: "Active" },
  { name: "CloudBase Systems", industry: "Cloud Services", contacts: 2, deals: 1, status: "Prospect" },
  { name: "SkyNet Digital", industry: "Software", contacts: 6, deals: 4, status: "Active" },
  { name: "MegaCorp PLC", industry: "Enterprise", contacts: 8, deals: 2, status: "Active" },
];

export default function Clients() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Clients</h1>
          <p className="text-sm text-muted-foreground">Manage your client accounts and contacts.</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" /> Add Client</Button>
      </div>
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search clients..." className="pl-9" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <Card key={client.name} className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{client.name}</h3>
                  <p className="text-xs text-muted-foreground">{client.industry}</p>
                </div>
                <Badge variant={client.status === "Active" ? "default" : "secondary"} className="text-xs">
                  {client.status}
                </Badge>
              </div>
              <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                <span>{client.contacts} contacts</span>
                <span>{client.deals} deals</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
