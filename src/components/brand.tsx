import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { socialLinks } from "@/config/catalog";

export function SocialIcons({ className = "" }: { className?: string }) {
  const items = [
    { href: socialLinks.instagram, label: "Instagram", Icon: Instagram },
    { href: socialLinks.facebook, label: "Facebook", Icon: Facebook },
  ];
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href || undefined}
          aria-label={label}
          target={href ? "_blank" : undefined}
          rel={href ? "noreferrer noopener" : undefined}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-card text-brown transition-colors hover:bg-sage/25"
        >
          <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export function TopNav() {
  return (
    <nav
      aria-label="Navegação principal"
      className="flex items-center justify-center gap-6 py-4 text-xs tracking-[0.2em] text-brown/70"
    >
      <Link to="/" className="transition-colors hover:text-brown">
        INÍCIO
      </Link>
      <span aria-hidden="true" className="text-gold">
        •
      </span>
      <a href="/#categorias" className="transition-colors hover:text-brown">
        CATEGORIAS
      </a>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gold/30 px-5 py-10 text-center">
      <p className="font-display text-lg tracking-[0.14em] text-brown">INCANSÁVEIS MÃES</p>
      <p className="mt-1 text-xs tracking-[0.18em] text-brown/60">
        Maternidade • Filhos • Família • Fé
      </p>
      <SocialIcons className="mt-5" />
      <p className="mt-6 text-xs text-brown/50">© Incansáveis Mães</p>
    </footer>
  );
}
