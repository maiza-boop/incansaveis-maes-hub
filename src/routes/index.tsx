import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf } from "lucide-react";
import { activeCategories, featuredProducts } from "@/config/catalog";
import { SocialIcons, TopNav, SiteFooter } from "@/components/brand";

const TITLE = "Incansáveis Mães | Maternidade, Filhos, Família e Fé";
const DESCRIPTION =
  "Conteúdos, atividades e soluções para mães, crianças e famílias. Encontre ideias para maternidade, filhos, família e fé.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const cats = activeCategories();
  const featured = featuredProducts();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-xl px-5 pb-4">
        <TopNav />

        <header className="pt-4 text-center">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-gold/50 bg-card shadow-sm">
            <Leaf className="h-9 w-9 text-sage" strokeWidth={1.4} aria-hidden="true" />
          </div>
          <h1 className="mt-6 font-display text-3xl leading-tight tracking-[0.12em] text-brown sm:text-4xl">
            INCANSÁVEIS MÃES
          </h1>
          <p className="mt-2 text-[0.72rem] tracking-[0.22em] text-brown/60">
            Maternidade • Filhos • Família • Fé
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-gold/50" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-sm text-[0.95rem] leading-relaxed text-brown/80">
            Conteúdos, ideias e soluções para deixar a maternidade mais leve. 💚
          </p>
          <SocialIcons className="mt-6" />
        </header>

        <main id="categorias" className="mt-14 scroll-mt-6">
          <section aria-labelledby="titulo-categorias">
            <h2
              id="titulo-categorias"
              className="text-center font-display text-2xl leading-snug text-sage"
            >
              ENCONTRE O QUE VOCÊ PROCURA 💚
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-brown/70">
              Escolha uma categoria e encontre conteúdos e soluções pensados para você e sua
              família.
            </p>

            <ul className="mt-8 space-y-4">
              {cats.map((cat) => (
                <li key={cat.slug}>
                  <article className="rounded-3xl border border-gold/25 bg-card p-6 shadow-[0_2px_12px_rgba(73,63,58,0.05)] transition-colors hover:border-sage/50">
                    <div className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose/25 text-2xl"
                      >
                        {cat.icon}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg tracking-wide text-brown">
                          {cat.name}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-brown/70">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    <Link
                      to="/categoria/$slug"
                      params={{ slug: cat.slug }}
                      className="mt-5 flex min-h-12 w-full items-center justify-center rounded-full bg-sage px-6 text-xs font-semibold tracking-[0.16em] text-brown transition-colors hover:bg-sage/85"
                    >
                      VER OPÇÕES
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          {featured.length > 0 && (
            <section aria-labelledby="mais-acessados" className="mt-14">
              <h2
                id="mais-acessados"
                className="text-center font-display text-2xl text-sage"
              >
                ✨ MAIS ACESSADOS
              </h2>
              <ul className="mt-6 space-y-4">
                {featured.map((p) => (
                  <li
                    key={p.id}
                    className="rounded-3xl border border-gold/25 bg-card p-5 text-center"
                  >
                    <h3 className="font-display text-lg text-brown">{p.name}</h3>
                    <p className="mt-1 text-sm text-brown/70">{p.description}</p>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-rose px-6 text-xs font-semibold tracking-[0.16em] text-brown transition-colors hover:bg-rose/85"
                      >
                        QUERO CONHECER
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div
            className="mt-14 flex items-center justify-center gap-2 text-gold"
            aria-hidden="true"
          >
            <Leaf className="h-4 w-4" strokeWidth={1.4} />
            <Heart className="h-3.5 w-3.5" strokeWidth={1.4} />
            <Leaf className="h-4 w-4 -scale-x-100" strokeWidth={1.4} />
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
