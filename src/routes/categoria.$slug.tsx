import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getCategory, productsByCategory } from "@/config/catalog";
import { SiteFooter, TopNav } from "@/components/brand";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, products: productsByCategory(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Categoria não encontrada | Incansáveis Mães" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.category.name} | Incansáveis Mães`;
    const description = loaderData.category.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-xl px-5 pb-4">
        <TopNav />

        <Link
          to="/"
          className="mt-2 inline-flex min-h-11 items-center gap-2 text-xs tracking-[0.16em] text-brown/70 transition-colors hover:text-brown"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          VOLTAR
        </Link>

        <main className="mt-4">
          <header className="text-center">
            <h1 className="font-display text-3xl text-brown">
              {toTitle(category.name)} <span aria-hidden="true">{category.icon}</span>
            </h1>
            <div className="mx-auto mt-4 h-px w-16 bg-gold/50" aria-hidden="true" />
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brown/70">
              {category.pageIntro ?? category.description}
            </p>
          </header>

          {products.length === 0 ? (
            <p className="mt-12 rounded-3xl border border-dashed border-gold/40 bg-card p-8 text-center text-sm text-brown/60">
              Em breve novidades nesta categoria. 🌿
            </p>
          ) : (
            <ul className="mt-10 space-y-6">
              {products.map((p) => (
                <li
                  key={p.id}
                  className="overflow-hidden rounded-3xl border border-gold/25 bg-card shadow-[0_2px_12px_rgba(73,63,58,0.05)]"
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-32 items-center justify-center bg-sage/25 font-display text-4xl text-brown/40"
                      aria-hidden="true"
                    >
                      {category.icon}
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="font-display text-lg tracking-wide text-brown">{p.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-brown/70">
                      {p.description}
                    </p>
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-sage px-6 text-xs font-semibold tracking-[0.16em] text-brown transition-colors hover:bg-sage/85"
                      >
                        QUERO CONHECER
                      </a>
                    ) : (
                      <span className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-muted px-6 text-xs font-semibold tracking-[0.16em] text-brown/50">
                        QUERO CONHECER
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}

function toTitle(name: string) {
  return name
    .toLocaleLowerCase("pt-BR")
    .replace(/(^|\s|&\s)([\p{L}])/gu, (_m, pre: string, ch: string) => pre + ch.toLocaleUpperCase("pt-BR"));
}
