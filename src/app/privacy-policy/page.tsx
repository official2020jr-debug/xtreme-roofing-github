import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { business } from "@/data/siteConfig";

export const metadata = buildMetadata({
  title: "Privacy policy",
  description: `Privacy policy for ${business.name}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-14">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy-policy" },
        ])}
      />

      <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Privacy policy</h1>
      <div className="mt-2 h-0.5 w-24 bg-rust" />

      {/* REPLACE WITH REAL PRIVACY POLICY — have this reviewed by an attorney before launch */}
      <div className="prose prose-neutral mt-8 max-w-3xl text-ink-soft">
        <p>
          {business.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
          privacy. This page describes, in general terms, how we handle information submitted
          through our website — for example when you request a free quote by phone number,
          full name, or project details.
        </p>
        <p>
          Information you submit through our contact and quote request forms is used solely to
          follow up about your project and is not sold to third parties. By providing your phone
          number, you agree to be contacted about your project, including by text message.
        </p>
        <p>
          This is placeholder legal text. Replace this page with a real privacy policy — ideally
          reviewed by an attorney — before launch, particularly to cover your CRM (GoHighLevel),
          analytics (Google Analytics), and advertising (Meta Pixel) data handling in detail.
        </p>
      </div>
    </Container>
  );
}
