import { useMemo, useState } from "react";
import { startups } from "@/data/startups";
import type { Startup } from "@/data/startups";
import { StartupCard } from "@/components/startup-card";
import { StartupDetail } from "@/components/startup-detail";
import { Badge } from "@/components/ui/badge";

export default function AIStartups() {
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const aiStartups = useMemo(
    () => startups.filter((s) => s.category === "AI"),
    []
  );

  const allTags = useMemo(() => {
    const tagCount = new Map<string, number>();
    aiStartups.forEach((s) =>
      s.tags.forEach((t) => tagCount.set(t, (tagCount.get(t) || 0) + 1))
    );
    return [...tagCount.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, [aiStartups]);

  const filtered = activeTag
    ? aiStartups.filter((s) => s.tags.includes(activeTag))
    : aiStartups;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Startups</h1>
        <p className="text-muted-foreground">
          {aiStartups.length} companies building AI infrastructure and
          applications for India
        </p>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2">
        <Badge
          variant={activeTag === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setActiveTag(null)}
        >
          All ({aiStartups.length})
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
