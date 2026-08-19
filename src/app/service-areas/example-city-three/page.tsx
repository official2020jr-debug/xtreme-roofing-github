import CityView from "@/components/CityView";
import { buildMetadata } from "@/lib/seo";
import { getCity } from "@/data/siteConfig";

const slug = "example-city-three";
const city = getCity(slug)!;

export const metadata = buildMetadata({
  title: `${city.name} services`,
  description: `Services in ${city.name}. Free estimates from a locally owned, owner-involved contractor.`,
  path: `/service-areas/${slug}`,
});

export default function Page() {
  return <CityView slug={slug} />;
}
