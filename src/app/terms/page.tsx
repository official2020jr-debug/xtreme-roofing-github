import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { business } from "@/data/siteConfig";

export const metadata = buildMetadata({
  title: "Terms & conditions",
  description: `Terms and conditions for ${business.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container className="py-14">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms & conditions", path: "/terms" },
        ])}
      />

      <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Terms &amp; conditions</h1>
      <div className="mt-2 h-0.5 w-24 bg-rust" />

      {/* REPLACE WITH REAL TERMS & CONDITIONS — have this reviewed by an attorney before launch */}
      <div className="prose prose-neutral mt-8 max-w-3xl text-ink-soft">
        <p>
          These terms govern your use of the {business.name} website. Requesting a free estimate
          through this site does not create a binding contract for services — a project scope,
          timeline, and price are agreed to separately in writing before any work begins.
        </p>
        <p>
          This is placeholder legal text. Replace this page with real terms and conditions —
          ideally reviewed by an attorney — before launch.
        </p>
      </div>
    </Container>
  );
}
