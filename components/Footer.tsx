import Link from "next/link";
import React from "react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ahmedsamy00x" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmedsamyy1" },
  { label: "X", href: "https://x.com/lowkeylu__" },
  { label: "Email", href: "mailto:ahmedsamy446x@gmail.com" },
];

const colophon = [
  "Set in Bodoni Moda & Geist",
  "Built with Next.js",
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 md:mt-32 border-t border-[color:var(--border)]">
      <div className="container-page py-10 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-title font-serif leading-[1.02]">
              Ahmed Samy<span className="text-accent">.</span>
            </p>
            <p className="mt-3 label-eyebrow">
              Made in Egypt · © {year}
            </p>
          </div>

          <nav aria-label="Social" className="flex flex-col gap-2 md:items-end">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-small"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-x-3 label-eyebrow text-subtle-foreground md:justify-end">
              {colophon.map((item, i) => (
                <li key={item} className="inline-flex items-center">
                  {item}
                  {i < colophon.length - 1 && (
                    <span aria-hidden className="ml-3 opacity-60">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
