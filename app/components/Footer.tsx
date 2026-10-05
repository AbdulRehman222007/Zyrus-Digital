import Link from "next/link";
import type { ReactNode } from "react";

const icon = "w-4 h-4 shrink-0";
const svgProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  className: icon,
};

const MailIcon = () => (
  <svg {...svgProps}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const LinkedInIcon = () => (
  <svg {...svgProps}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
  <svg {...svgProps}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const ChatIcon = () => (
  <svg {...svgProps}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);
const ArrowIcon = () => (
  <svg {...svgProps}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

type FooterLink = { label: string; href: string; external?: boolean; icon?: ReactNode };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Shopify development", href: "/services/build" },
      { label: "WooCommerce development", href: "/services/build" },
      { label: "SEO & speed", href: "/services/launch" },
      { label: "Social media", href: "/services/grow" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "Case studies", href: "/portfolio" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/#about" },
      { label: "Process", href: "/#process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Contact & socials",
    links: [
      { label: "WhatsApp", href: "https://wa.me/92XXXXXXXXXX", external: true, icon: <ChatIcon /> },
      { label: "Email us", href: "mailto:zyrusdigital@gmail.com", external: true, icon: <MailIcon /> },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/YOUR-PAGE", external: true, icon: <LinkedInIcon /> },
      { label: "Instagram", href: "https://www.instagram.com/YOUR-HANDLE", external: true, icon: <InstagramIcon /> },
    ],
  },
];

const linkClass =
  "inline-flex items-center gap-2 text-sm text-[#D9B48F] hover:text-[#FFF5E8] transition-colors";

export default function Footer() {
  return (
    <footer className="bg-[#33241F] text-[#EAD8C0] pt-16 pb-8 border-t border-[#D9B48F]/20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-[#FFF5E8] mb-3">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {link.icon}
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        {link.icon}
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-xs text-[#D9B48F]/70 border-t border-[#D9B48F]/20 pt-6">
          © 2026 Zyrus Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}