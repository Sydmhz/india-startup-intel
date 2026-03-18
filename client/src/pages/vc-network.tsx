import { useMemo } from "react";
import { startups } from "@/data/startups";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VCEntry {
  name: string;
  companies: { name: string; category: "AI" | "Cyber" }[];
}

export default function VCNetwork() {
  const vcData = useMemo<VCEntry[]>(() => {
    const map = new Map<
      string,
      { name: string; category: "AI" | "Cyber" }[]
    >();
    startups.forEach((s) => {
      s.investors.forEach((inv) => {
        const trimmed = inv.trim();
        if (!trimmed) return;
        if (!map.has(trimmed)) map.set(trimmed, []);
        map.get(trimmed)!.push({ name: s.name, category: s.category });
      });
    });
    return [...map.entries()]
      .map(([name, companies]) => ({ name, companies }))
      .sort((a, b) => b.companies.length - a.companies.length);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">VC Network</h1>
        <p className="text-muted-foreground">
          {vcData.length} investors backing India's AI & Cyber ecosystem
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vcData.map((vc) => (
          <Card key={vc.name}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold">
                  {vc.name}
                </CardTitle>
                <Badge variant="secondary" className="tabular-nums text-xs">
                  {vc.companies.length}{" "}
                  {vc.companies.length === 1 ? "company" : "companies"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {vc.companies.map((c) => (
                  <Badge
                    key={c.name}
                    variant="outline"
                    className={
                      c.category === "AI"
                        ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                        : "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    }
                  >
                    {c.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
