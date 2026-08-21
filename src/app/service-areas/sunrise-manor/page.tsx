import CityView from "@/components/CityView";
import { buildMetadata } from "@/lib/seo";
import { getCity } from "@/data/siteConfig";

const slug = "sunrise-manor";
const city = getCity(slug)!;

export const metadata = buildMetadata({
  title: `Roofing in ${city.name}`,
  description: `Residential and commercial roofing in ${city.name}. Free estimates from a locally based contractor.`,
  path: `/service-areas/${slug}`,
});

export default function Page() {
  return <CityView slug={slug} />;
}
