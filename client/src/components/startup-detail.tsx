import type { Startup } from "@/data/startups";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  Building2,
  TrendingUp,
  Shield,
} from "lucide-react";

interface StartupDetailProps {
  startup: Startup | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        {title}
      </h4>
      {children}
    </div>
  );
}

export function StartupDetail({
  startup,
  open,
  onOpenChange,
}: StartupDetailProps) {
  if (!startup) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-xl p-0">
        <SheetHeader className="p-6 pb-0">
          <div className="flex items-center gap-2">
            <SheetTitle className="text-xl">{startup.name}</SheetTitle>
            <Badge
              variant="outline"
              className={
                startup.category === "AI"
                  ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                  : "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400"
              }
            >
              {startup.category}
            </Badge>
          </div>
          <SheetDescription>{startup.oneLiner}</SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] px-6 pt-4 pb-6">
          <div className="space-y-6">
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              <Stat
                icon={<Calendar className="h-4 w-4" />}
                label="Founded"
                value={String(startup.founded)}
              />
              <Stat
                icon={<MapPin className="h-4 w-4" />}
                label="HQ"
                value={startup.hq}
              />
              <Stat
                icon={<TrendingUp className="h-4 w-4" />}
                label="Funding"
                value={startup.totalFunding}
              />
              <Stat
                icon={<Building2 className="h-4 w-4" />}
                label="Valuation"
                value={startup.valuation || "N/A"}
              />
              <Stat
                icon={<Users className="h-4 w-4" />}
                label="Employees"
                value={startup.employees || "N/A"}
              />
              <Stat
                icon={<Shield className="h-4 w-4" />}
                label="Latest Round"
                value={startup.latestRound || "N/A"}
              />
            </div>

            <Separator />

            {/* Description */}
            <Section title="About">
              <p className="text-sm leading-relaxed">{startup.description}</p>
            </Section>

            {/* Website */}
            {startup.website && (
              <a
                href={startup.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {startup.website.replace(/^https?:\/\//, "")}
              </a>
            )}

            <Separator />

            {/* Problem */}
            {startup.problem && (
              <Section title="Problem">
                <p className="text-sm leading-relaxed">{startup.problem}</p>
              </Section>
            )}

            {/* Tech */}
            {startup.tech && (
              <Section title="Tech Stack">
                <p className="text-sm leading-relaxed">{startup.tech}</p>
              </Section>
            )}

            {/* Products */}
            {startup.products.length > 0 && (
              <Section title="Products">
                <ul className="space-y-1">
                  {startup.products.map((p) => (
                    <li key={p} className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            <Separator />

            {/* Founders */}
            {startup.founders.length > 0 && (
              <Section title="Founders">
                <div className="space-y-3">
                  {startup.founders.map((f) => (
                    <div key={f.name} className="space-y-0.5">
                      <p className="text-sm font-medium">{f.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {f.title}
                      </p>
                      {f.background && (
                        <p className="text-xs text-muted-foreground">
                          {f.background}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <Separator />

            {/* Investors */}
            {startup.investors.length > 0 && (
              <Section title="Investors">
                <div className="flex flex-wrap gap-1.5">
                  {startup.investors.map((inv) => (
                    <Badge
                      key={inv}
                      variant={
                        inv === startup.leadInvestor ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {inv}
                      {inv === startup.leadInvestor && " (Lead)"}
                    </Badge>
                  ))}
                </div>
              </Section>
            )}

            {/* Revenue */}
            {startup.revenue && startup.revenue !== "N/A" && (
              <Section title="Revenue">
                <p className="text-sm tabular-nums">{startup.revenue}</p>
              </Section>
            )}

            {/* Customers */}
            {startup.customers.length > 0 && (
              <Section title="Customers">
                <div className="flex flex-wrap gap-1.5">
                  {startup.customers.map((c) => (
                    <Badge key={c} variant="outline" className="text-xs">
                      {c}
                    </Badge>
                  ))}
                </div>
              </Section>
            )}

            {/* Moat */}
            {startup.moat && (
              <Section title="Competitive Moat">
                <p className="text-sm leading-relaxed">{startup.moat}</p>
              </Section>
            )}

            {/* Tags */}
            <Section title="Tags">
              <div className="flex flex-wrap gap-1.5">
                {startup.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Section>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border p-3">
      <span className="text-muted-foreground">{icon}</span>
      <div>
        <p className="text-[11px] text-muted-foreground">{label}</p>
        <p className="text-sm font-medium tabular-nums">{value}</p>
      </div>
    </div>
  );
}
