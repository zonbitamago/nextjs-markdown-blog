import { BLOG_IMAGE_DIR } from "@/app/constants";
import { Post } from "@/pages";
import Image from "next/image";
import Link from "next/link";

const PostCard = (post: Post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="rounded-lg">
        <Image
          src={`${BLOG_IMAGE_DIR}/${post.slug}/${post.frontMatter.hero}`}
          width={250}
          height={150}
          alt={post.frontMatter.title}
        />
      </div>
      <div className="px-2 py-4">
        <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
        <span>{post.frontMatter.date}</span>
      </div>
    </Link>
  );
};

export default PostCard;
