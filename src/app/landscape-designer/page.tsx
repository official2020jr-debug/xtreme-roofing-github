import CategoryView from "@/components/CategoryView";
import { buildMetadata } from "@/lib/seo";
import { getCategory } from "@/data/siteConfig";

const slug = "landscape-designer";
const category = getCategory(slug)!;

export const metadata = buildMetadata({
  title: category.name,
  description: category.metaDescription,
  path: `/${slug}`,
  ogImage: category.hero.kind === "real" ? category.hero.src : undefined,
});

export default function Page() {
  return <CategoryView slug={slug} />;
}
