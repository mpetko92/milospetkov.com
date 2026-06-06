/**
 * Renders strings with **double-asterisk** markers as emphasized keywords.
 * Used in experience bullets — wrap key terms in content.ts like **KPIs**.
 */
export function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span
              key={i}
              className="font-medium text-foreground"
            >
              {part.slice(2, -2)}
            </span>
          );
        }
        return part;
      })}
    </>
  );
}
