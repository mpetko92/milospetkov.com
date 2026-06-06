import { recommendations } from "@/data/content";
import { Section, SectionHeader } from "@/components/section";
import { RecommendationsSlider } from "@/components/sections/recommendations-slider";

export function Recommendations() {
  const items = recommendations.filter(
    (item) =>
      !item.quote.includes("[PLACEHOLDER]") &&
      !item.author.includes("[PLACEHOLDER]")
  );

  if (items.length === 0) return null;

  return (
    <Section id="recommendations" className="bg-muted/30">
      <SectionHeader
        eyebrow="Recommendations"
        title="What others say about working with me."
        description="Excerpts from recommendation letters and professional references — the kind of feedback that shows up in how I lead, deliver, and collaborate."
      />

      <RecommendationsSlider items={items} />
    </Section>
  );
}
