// ============================================================
// CONFIGURAÇÃO DA PÁGINA — edite apenas este arquivo para
// adicionar categorias, produtos e links das redes sociais.
// ============================================================

export const socialLinks = {
  // Cole aqui os links reais quando tiver:
  instagram: "", // ex: "https://instagram.com/seuperfil"
  facebook: "", // ex: "https://facebook.com/suapagina"
};

export type Category = {
  slug: string;
  name: string; // nome exibido
  icon: string; // emoji
  description: string;
  pageIntro?: string; // texto da página da categoria
  active: boolean;
  order: number;
};

export type Product = {
  id: string;
  name: string;
  categorySlug: string;
  image?: string; // URL da imagem (opcional)
  description: string;
  link: string; // link externo do produto
  featured: boolean; // aparece em "Mais acessados"
  active: boolean;
  order: number;
};

export const categories: Category[] = [
  {
    slug: "para-mamaes",
    name: "PARA MAMÃES",
    icon: "🤱",
    description: "Conteúdos e soluções para diferentes momentos da jornada da mãe.",
    pageIntro:
      "Encontre conteúdos e soluções pensados para diferentes momentos da jornada da mãe.",
    active: true,
    order: 1,
  },
  {
    slug: "para-criancas",
    name: "PARA CRIANÇAS",
    icon: "👶",
    description: "Atividades, aprendizado, diversão e ideias para os pequenos.",
    pageIntro: "Atividades, aprendizado, diversão e ideias para os pequenos.",
    active: true,
    order: 2,
  },
  {
    slug: "cristao",
    name: "CRISTÃO",
    icon: "📖",
    description: "Materiais e experiências para aproximar crianças e famílias da fé.",
    pageIntro:
      "Encontre materiais para tornar momentos de aprendizado e fé mais leves e especiais.",
    active: true,
    order: 3,
  },
  {
    slug: "gestacao-e-bebes",
    name: "GESTAÇÃO & BEBÊS",
    icon: "🤰",
    description:
      "Conteúdos e soluções para a gestação, chegada do bebê e primeiros momentos.",
    pageIntro:
      "Conteúdos e soluções para a gestação, chegada do bebê e primeiros momentos.",
    active: true,
    order: 4,
  },
  {
    slug: "maternidade-e-rotina",
    name: "MATERNIDADE & ROTINA",
    icon: "🌿",
    description: "Ideias e soluções para tornar o dia a dia da família mais leve.",
    pageIntro: "Ideias e soluções para tornar o dia a dia da família mais leve.",
    active: true,
    order: 5,
  },
];

export const products: Product[] = [
  {
    id: "game-biblico-cristao",
    name: "GAME BÍBLICO CRISTÃO",
    categorySlug: "cristao",
    description:
      "Uma experiência para aproximar as crianças de histórias bíblicas de forma leve e divertida.",
    link: "", // cole aqui o link real
    featured: false,
    active: true,
    order: 1,
  },
  {
    id: "atividades-cristas",
    name: "ATIVIDADES CRISTÃS",
    categorySlug: "cristao",
    description:
      "Atividades e desafios bíblicos para tornar o aprendizado da Palavra de Deus mais leve e envolvente.",
    link: "",
    featured: false,
    active: true,
    order: 2,
  },
  {
    id: "amamente-mais",
    name: "AMAMENTE MAIS",
    categorySlug: "para-mamaes",
    description:
      "Conteúdo pensado para acolher e orientar mães durante a jornada da amamentação.",
    link: "",
    featured: false,
    active: true,
    order: 1,
  },
];

// ---------- Helpers ----------
const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;

export const activeCategories = () => categories.filter((c) => c.active).sort(byOrder);

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug && c.active);

export const productsByCategory = (slug: string) =>
  products.filter((p) => p.active && p.categorySlug === slug).sort(byOrder);

export const featuredProducts = () =>
  products.filter((p) => p.active && p.featured).sort(byOrder);
