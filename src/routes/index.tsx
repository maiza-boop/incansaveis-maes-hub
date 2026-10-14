import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Heart, Leaf } from "lucide-react";
import { activeCategories, featuredProducts } from "@/config/catalog";
import { SocialIcons, TopNav, SiteFooter } from "@/components/brand";

const TITLE = "Incansáveis Mães | Maternidade, Filhos, Família e Fé";
const DESCRIPTION =
  "Conteúdos, atividades e soluções para mães, crianças e famílias. Encontre ideias para maternidade, filhos, família e fé.";

// Fotos ilustrativas das categorias. Podem ser substituídas por fotos próprias depois.
const categoryImages: Record<string, string> = {
  "para-mamaes":
    "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=240&h=300&q=80",
  "para-criancas":
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=240&h=300&q=80",
  cristao:
    "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=240&h=300&q=80",
  "gestacao-e-bebes":
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=240&h=300&q=80",
  "maternidade-e-rotina":
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=240&h=300&q=80",
};

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
    <div className="min-h-screen bg-[#fffdf9] text-brown">
      <div className="mx-auto w-full max-w-xl px-5 pb-4 sm:px-8">
        <TopNav />

        <header className="pt-5 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-cream">
            <Leaf className="h-8 w-8 text-sage" strokeWidth={1.4} aria-hidden="true" />
          </div>
          <h1 className="mt-5 font-display text-3xl leading-tight tracking-[0.09em] text-brown sm:text-4xl">
            INCANSÁVEIS MÃES
          </h1>
          <p className="mt-2 text-[0.68rem] tracking-[0.16em] text-brown/65 sm:text-xs">
            MATERNIDADE · FILHOS · FAMÍLIA · FÉ
          </p>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-brown/75">
            Um espaço de acolhimento, ideias e soluções para a jornada de mães e famílias.
          </p>
          <SocialIcons className="mt-4" />
        </header>

        <main id="categorias" className="mt-10 scroll-mt-6">
          <section aria-labelledby="titulo-categorias">
            <h2
              id="titulo-categorias"
              className="text-center font-display text-xl leading-snug text-brown sm:text-2xl"
            >
              Encontre o que você procura
            </h2>
            <p className="mx-auto mt-2 max-w-md text-center text-sm leading-relaxed text-brown/65">
              Explore nossas categorias e descubra conteúdos feitos para você.
            </p>

            <ul className="mt-6 divide-y divide-gold/30 border-y border-gold/30">
              {cats.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to="/categoria/$slug"
                    params={{ slug: cat.slug }}
                    className="group flex items-center gap-4 py-4 transition-colors hover:bg-cream/50 sm:gap-5 sm:px-2"
                  >
                    <img
                      src={categoryImages[cat.slug] || categoryImages["para-mamaes"]}
                      alt=""
                      loading="lazy"
                      className="h-[84px] w-[70px] shrink-0 rounded-md object-cover sm:h-24 sm:w-20"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-base leading-snug tracking-wide text-brown sm:text-lg">
                        {cat.name}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-brown/70 sm:text-sm">
                        {cat.description}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1 text-[0.65rem] font-semibold tracking-[0.13em] text-sage group-hover:text-brown">
                        EXPLORAR <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {featured.length > 0 && (
            <section aria-labelledby="mais-acessados" className="mt-10">
              <h2 id="mais-acessados" className="text-center font-display text-xl text-brown">
                Mais acessados
              </h2>
              <ul className="mt-4 divide-y divide-gold/30 border-y border-gold/30">
                {featured.map((p) => (
                  <li key={p.id} className="py-4">
                    <h3 className="font-display text-base text-brown">{p.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brown/70">{p.description}</p>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold tracking-[0.12em] text-brown underline decoration-gold underline-offset-4 hover:text-sage"
                      >
                        QUERO CONHECER <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-10 flex items-center justify-center gap-2 text-gold" aria-hidden="true">
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
