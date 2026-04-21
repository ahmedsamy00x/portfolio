import Link from "next/link";
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { ArrowUpRight } from "lucide-react";

const channels: Array<{ label: string; value: string; href: string; external?: boolean }> = [
  {
    label: "Email",
    value: "ahmedsamy446x@gmail.com",
    href: "mailto:ahmedsamy446x@gmail.com",
  },
  {
    label: "Résumé",
    value: "drive.google.com",
    href: "https://drive.google.com/file/d/1nxVSIBePS6dN19abMMIrAT-SJYKOtJvI/view",
    external: true,
  },
  {
    label: "GitHub",
    value: "@ahmedsamy00x",
    href: "https://github.com/ahmedsamy00x",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "ahmedsamyy1",
    href: "https://www.linkedin.com/in/ahmedsamyy1",
    external: true,
  },
  {
    label: "X",
    value: "@lowkeylu__",
    href: "https://x.com/lowkeylu__",
    external: true,
  },
];

const Contact = () => {
  return (
    <section aria-labelledby="contact-heading" className="py-12 md:py-16">
      <SectionHeader index="05" title="Correspondence" meta="Available 2026" />

      <div className="grid gap-10 md:gap-12 md:grid-cols-[1fr_minmax(0,1fr)] md:items-start">
        <div>
          <h2
            id="contact-heading"
            className="text-title font-serif leading-[1.05]"
          >
            Let&rsquo;s make
            <br />
            <span className="italic text-accent">something</span> together.
          </h2>
          <p className="mt-6 text-small text-muted-foreground max-w-[48ch] leading-relaxed">
            Available for selective frontend engineering work — product,
            landing, dashboards, interface systems. Reply time is usually within
            a day.
          </p>
        </div>

        <dl className="md:pt-2">
          {channels.map((channel, i) => (
            <div
              key={channel.label}
              className={`grid grid-cols-[80px_1fr] items-baseline gap-4 py-3 ${
                i !== channels.length - 1
                  ? "border-b border-[color:var(--border)]"
                  : ""
              }`}
            >
              <dt className="label-eyebrow">{channel.label}</dt>
              <dd className="text-small">
                <Link
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="link-underline inline-flex items-baseline gap-1"
                >
                  <span>{channel.value}</span>
                  {channel.external && (
                    <ArrowUpRight
                      size={12}
                      className="translate-y-[2px] opacity-60"
                      aria-hidden
                    />
                  )}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Contact;
