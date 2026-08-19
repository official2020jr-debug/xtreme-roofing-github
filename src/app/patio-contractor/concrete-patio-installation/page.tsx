import SubServiceView from "@/components/SubServiceView";
import { buildMetadata } from "@/lib/seo";
import { getSubService } from "@/data/siteConfig";

const slug = "concrete-patio-installation";
const service = getSubService(slug)!;

export const metadata = buildMetadata({
  title: service.name,
  description: service.metaDescription,
  path: `/patio-contractor/${slug}`,
  ogImage: service.hero.kind === "real" ? service.hero.src : undefined,
});

export default function Page() {
  return <SubServiceView slug={slug} />;
}
