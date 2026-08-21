import BlogPostView from "@/components/BlogPostView";
import { buildMetadata } from "@/lib/seo";
import { getBlogPost } from "@/data/blog";

const slug = "what-determines-roof-replacement-cost-las-vegas";
const post = getBlogPost(slug)!;

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: `/blog/${slug}`,
  ogImage: post.image.kind === "real" ? post.image.src : undefined,
});

export default function Page() {
  return <BlogPostView slug={slug} />;
}
