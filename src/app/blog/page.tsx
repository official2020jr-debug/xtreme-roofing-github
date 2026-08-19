import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { blogPosts } from "@/data/blog";
import { business } from "@/data/siteConfig";

export const metadata = buildMetadata({
  title: "Blog",
  description: `[REPLACE] Answers to real questions homeowners ask before starting a project with ${business.name}.`,
  path: "/blog",
});

const heroImage = { kind: "placeholder" as const, label: "Blog page hero photo" };

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <PageHero
        eyebrow={business.serviceRegion}
        title="[REPLACE] Questions, answered honestly"
        subtitle="[REPLACE] The real questions homeowners/customers ask before starting a project."
        image={heroImage}
      />

      <Container className="py-12">
        <div className="mx-auto grid max-w-3xl gap-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delayMs={i * 60}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-lg bg-limestone-dark p-6 transition-colors hover:bg-limestone"
              >
                <h2 className="text-xl font-extrabold text-ink group-hover:text-rust">{post.title}</h2>
                <p className="mt-2 text-ink-soft">{post.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-bold text-rust">Read more →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
