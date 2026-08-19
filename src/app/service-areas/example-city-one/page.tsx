import CityView from "@/components/CityView";
import { buildMetadata } from "@/lib/seo";
import { getCity } from "@/data/siteConfig";

const slug = "example-city-one";
const city = getCity(slug)!;

// "services" is a generic placeholder keyword — swap for the client's real
// primary service (e.g. "hardscaping", "plumbing", "roofing").
export const metadata = buildMetadata({
  title: `${city.name} services`,
  description: `Services in ${city.name}. Free estimates from a locally owned, owner-involved contractor.`,
  path: `/service-areas/${slug}`,
});

export default function Page() {
  return <CityView slug={slug} />;
}
