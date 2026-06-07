import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import { AccentIconBox } from "@/components/accent-icon-box";
import { contact } from "@/data/content";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function Contact() {
  const links = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "/in/petko92",
      href: contact.linkedin,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "/mpetko92",
      href: contact.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: contact.location,
    },
  ];

  return (
    <Section id="contact" className="bg-muted/30">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk."
            description="Open to Product Manager and Delivery Manager roles. The fastest way to reach me is email or LinkedIn."
          />
          <Reveal>
            <Button asChild size="lg">
              <a href={`mailto:${contact.email}`}>
                <Mail className="size-4" /> Send me an email
              </a>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-border rounded-xl border border-border bg-card">
            {links.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted"
                  >
                    <AccentIconBox>
                      <Icon className="size-5" />
                    </AccentIconBox>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        {label}
                      </span>
                      <span className="block truncate font-medium">{value}</span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 px-5 py-4">
                    <AccentIconBox>
                      <Icon className="size-5" />
                    </AccentIconBox>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        {label}
                      </span>
                      <span className="block truncate font-medium">{value}</span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
