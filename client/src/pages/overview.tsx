import { useMemo, useState } from "react";
import { startups } from "@/data/startups";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Building2,
  TrendingUp,
  Users,
  Brain,
  ShieldCheck,
  DollarSign,
} from "lucide-react";
import { StartupDetail } from "@/components/startup-detail";
import type { Startup } from "@/data/startups";

export default function Overview() {
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);

  const stats = useMemo(() => {
    const totalFundingM = startups.reduce((s, c) => s + c.fundingNum, 0);
    const unicorns = startups.filter(
      (s) =>
        s.valuation &&
        (s.valuation.toLowerCase().includes("billion") ||
          s.valuation.includes("$1B") ||
          s.valuation.includes("$2B") ||
          s.valuation.includes("$3B") ||
          s.valuation.includes("$4B") ||
          s.valuation.includes("$5B"))
    );
    const uniqueVCs = new Set(startups.flatMap((s) => s.investors));
    return {
      total: startups.length,
      totalFunding:
        totalFundingM >= 1000
          ? `$${(totalFundingM / 1000).toFixed(1)}B+`
          : `$${Math.round(totalFundingM)}M+`,
      unicorns: unicorns.length,
      vcs: uniqueVCs.size,
    };
  }, []);

  const chartData = useMemo(
    () =>
      [...startups]
        .sort((a, b) => b.fundingNum - a.fundingNum)
        .slice(0, 15)
        .map((s) => ({
          name: s.name,
          funding: Math.round(s.fundingNum),
          category: s.category,
        })),
    []
  );

  const aiStartups = startups.filter((s) => s.category === "AI");
  const cyberStartups = startups.filter((s) => s.category === "Cyber");

  const sorted = useMemo(
    () => [...startups].sort((a, b) => b.fundingNum - a.fundingNum),
    []
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground">
          India AI & Cybersecurity startup landscape at a glance
        </p>
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Startups Tracked"
          value={stats.total}
          icon={<Building2 className="h-4 w-4" />}
        />
        <KpiCard
          title="Total Funding"
          value={stats.totalFunding}
          icon={<DollarSign className="h-4 w-4" />}
        />
        <KpiCard
          title="Unicorns"
          value={stats.unicorns}
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <KpiCard
          title="Unique VCs"
          value={`${stats.vcs}+`}
          icon={<Users className="h-4 w-4" />}
        />
      </div>

      {/* Funding bar chart */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Top 15 Companies by Funding
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 0, right: 20, bottom: 0, left: 0 }}
              >
                <XAxis
                  type="number"
                  tickFormatter={(v: number) => `$${v}M`}
                  fontSize={12}
                  stroke="hsl(var(--muted-foreground))"
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={120}
                  fontSize={12}
                  stroke="hsl(var(--muted-foreground))"
                  tickLine={false}
                />
                <Tooltip
                  formatter={(value: number) => [`$${value}M`, "Funding"]}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: 13,
                  }}
                />
                <Bar dataKey="funding" radius={[0, 4, 4, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.category === "AI"
                          ? "hsl(var(--chart-1))"
                          : "hsl(var(--chart-3))"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-[hsl(var(--chart-1))]" />
              AI
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-[hsl(var(--chart-3))]" />
              Cyber
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Sector summaries */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-indigo-500" />
              <CardTitle className="text-base">AI Sector</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="font-semibold tabular-nums">
                {aiStartups.length}
              </span>{" "}
              companies
            </p>
            <p>
              Total funding:{" "}
              <span className="font-semibold tabular-nums">
                $
                {(
                  aiStartups.reduce((s, c) => s + c.fundingNum, 0) /
                  1000
                ).toFixed(1)}
                B
              </span>
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {aiStartups.slice(0, 6).map((s) => (
                <Badge key={s.name} variant="secondary" className="text-xs">
                  {s.name}
                </Badge>
              ))}
              {aiStartups.length > 6 && (
                <Badge variant="secondary" className="text-xs">
                  +{aiStartups.length - 6}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-amber-500" />
              <CardTitle className="text-base">Cybersecurity Sector</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="font-semibold tabular-nums">
                {cyberStartups.length}
              </span>{" "}
              companies
            </p>
            <p>
              Total funding:{" "}
              <span className="font-semibold tabular-nums">
                $
                {Math.round(
                  cyberStartups.reduce((s, c) => s + c.fundingNum, 0)
                )}
                M
              </span>
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {cyberStartups.slice(0, 6).map((s) => (
                <Badge key={s.name} variant="secondary" className="text-xs">
                  {s.name}
                </Badge>
              ))}
              {cyberStartups.length > 6 && (
                <Badge variant="secondary" className="text-xs">
                  +{cyberStartups.length - 6}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Full table */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">All Startups</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Founded</TableHead>
                <TableHead>HQ</TableHead>
                <TableHead className="text-right">Funding</TableHead>
                <TableHead className="text-right">Valuation</TableHead>
                <TableHead className="text-right">Employees</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sorted.map((s) => (
                <TableRow
                  key={s.name}
                  className="cursor-pointer"
                  onClick={() => setSelectedStartup(s)}
                >
                  <TableCell className="font-medium">{s.name}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        s.category === "AI"
                          ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                          : "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      }
                    >
                      {s.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="tabular-nums">{s.founded}</TableCell>
                  <TableCell>{s.hq}</TableCell>
                  <TableCell className="text-right tabular-nums">
                    {s.totalFunding}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {s.valuation || "—"}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {s.employees || "—"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <StartupDetail
        startup={selectedStartup}
        open={!!selectedStartup}
        onOpenChange={(open) => !open && setSelectedStartup(null)}
      />
    </div>
  );
}

function KpiCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold tabular-nums">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
