import type { Startup } from "@/data/startups";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, IndianRupee, Users } from "lucide-react";

interface StartupCardProps {
  startup: Startup;
  onClick: () => void;
}

export function StartupCard({ startup, onClick }: StartupCardProps) {
  return (
    <Card
      className="cursor-pointer transition-colors hover:border-primary/50"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight">{startup.name}</h3>
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
        <p className="text-sm text-muted-foreground line-clamp-2">
          {startup.oneLiner}
        </p>
      </CardHeader>
      <CardContent className="grid gap-2 text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-muted-foreground">
            <IndianRupee className="h-3.5 w-3.5" />
            <span className="font-medium tabular-nums text-foreground">
              {startup.totalFunding}
            </span>
          </span>
          {startup.valuation && startup.valuation !== "N/A" && (
            <span className="flex items-center gap-1 text-muted-foreground">
              <Building2 className="h-3.5 w-3.5" />
              <span className="tabular-nums text-foreground">
                {startup.valuation}
              </span>
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {startup.founded}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {startup.hq}
          </span>
          {startup.employees && (
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {startup.employees}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-1 pt-1">
          {startup.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0">
              {tag}
            </Badge>
          ))}
          {startup.tags.length > 4 && (
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
              +{startup.tags.length - 4}
            </Badge>
          )}
        </div>
        {startup.founders.length > 0 && (
          <p className="text-xs text-muted-foreground pt-1">
            <span className="font-medium text-foreground">
              {startup.founders[0].name}
            </span>{" "}
            — {startup.founders[0].title}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
