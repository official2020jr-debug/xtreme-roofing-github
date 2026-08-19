import SubServiceView from "@/components/SubServiceView";
import { buildMetadata } from "@/lib/seo";
import { getSubService } from "@/data/siteConfig";

const slug = "irrigation-system-installation";
const service = getSubService(slug)!;

export const metadata = buildMetadata({
  title: service.name,
  description: service.metaDescription,
  path: `/landscape-designer/${slug}`,
  ogImage: service.hero.kind === "real" ? service.hero.src : undefined,
});

export default function Page() {
  return <SubServiceView slug={slug} />;
}
