import BlogPostView from "@/components/BlogPostView";
import { buildMetadata } from "@/lib/seo";
import { getBlogPost } from "@/data/blog";

const slug = "example-post-two";
const post = getBlogPost(slug)!;

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: `/blog/${slug}`,
});

export default function Page() {
  return <BlogPostView slug={slug} />;
}
