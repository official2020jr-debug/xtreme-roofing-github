import BlogPostView from "@/components/BlogPostView";
import { buildMetadata } from "@/lib/seo";
import { getBlogPost } from "@/data/blog";

const slug = "how-long-does-a-roof-last-in-las-vegas-heat";
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
