import { useMemo, useState } from "react";
import { startups } from "@/data/startups";
import type { Startup } from "@/data/startups";
import { StartupCard } from "@/components/startup-card";
import { StartupDetail } from "@/components/startup-detail";
import { Badge } from "@/components/ui/badge";

export default function CyberStartups() {
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const cyberStartups = useMemo(
    () => startups.filter((s) => s.category === "Cyber"),
    []
  );

  const allTags = useMemo(() => {
    const tagCount = new Map<string, number>();
    cyberStartups.forEach((s) =>
      s.tags.forEach((t) => tagCount.set(t, (tagCount.get(t) || 0) + 1))
    );
    return [...tagCount.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, [cyberStartups]);

  const filtered = activeTag
    ? cyberStartups.filter((s) => s.tags.includes(activeTag))
    : cyberStartups;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Cybersecurity Startups
        </h1>
        <p className="text-muted-foreground">
          {cyberStartups.length} companies securing India's digital
          infrastructure
        </p>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2">
        <Badge
          variant={activeTag === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setActiveTag(null)}
        >
          All ({cyberStartups.length})
        </Badge>
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={activeTag === tag ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Card grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <StartupCard
            key={s.name}
            startup={s}
            onClick={() => setSelectedStartup(s)}
          />
        ))}
      </div>

      <StartupDetail
        startup={selectedStartup}
        open={!!selectedStartup}
        onOpenChange={(open) => !open && setSelectedStartup(null)}
      />
    </div>
  );
}
