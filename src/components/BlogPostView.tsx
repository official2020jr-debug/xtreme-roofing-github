import Link from "next/link";
import Container from "./Container";
import CTASection from "./CTASection";
import ProjectPhoto from "./ProjectPhoto";
import JsonLd from "./JsonLd";
import { getBlogPost } from "@/data/blog";
import { getSubService, business } from "@/data/siteConfig";
import { buildBreadcrumbJsonLd, buildBlogPostingJsonLd } from "@/lib/jsonld";
import { notFound } from "next/navigation";

export default function BlogPostView({ slug }: { slug: string }) {
  const post = getBlogPost(slug);
  if (!post) return notFound();

  const related = post.relatedServiceSlugs
    .map((s) => getSubService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={buildBlogPostingJsonLd(post)} />

      <Container className="py-12">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-bold tracking-wide text-rust">{business.name} blog</span>
          <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg text-ink-soft">{post.excerpt}</p>

          <ProjectPhoto
            image={post.image}
            className="mt-8 aspect-video rounded-lg"
            sizes="(min-width: 768px) 768px, 100vw"
            priority
          />

          <div className="mt-10 space-y-8">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-xl font-extrabold text-ink">{section.heading}</h2>
                )}
                <div className="mt-2 space-y-4 text-ink-soft">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-12 border-t border-stone-light pt-8">
              <h3 className="text-sm font-bold tracking-wide text-ink">Related services</h3>
              <ul className="mt-3 flex flex-wrap gap-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/${r.categorySlug}/${r.slug}`}
                      className="inline-block rounded bg-limestone-dark px-4 py-2 text-sm font-semibold text-ink hover:text-rust"
                    >
                      {r.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>

      <CTASection />
    </>
  );
}
