import { BLOG_IMAGE_DIR, CONTENT_DIR } from "@/app/constants";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";

type FrontMatter = {
  [key: string]: string;
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const fileContent = fs.readFileSync(
    `${CONTENT_DIR}/${params.slug}/index.md`,
    "utf-8"
  );
  const { data, content } = matter(fileContent);
  return { props: { frontMatter: data, content: content, slug: params.slug } };
}

export async function getStaticPaths() {
  const directories = fs.readdirSync(CONTENT_DIR);
  console.log("directories:", directories);

  const paths = directories.map((directory) => {
    const slug = directory.replace(/\.md$/, "");

    return {
      params: {
        slug: slug.replace(/\.md$/, ""),
      },
    };
  });
  console.log("paths:", paths);
  return {
    paths,
    fallback: false,
  };
}
const Post = ({
  frontMatter,
  content,
  slug,
}: {
  frontMatter: FrontMatter;
  content: string;
  slug: string;
}) => {
  return (
    <div className="prose prose-lg mx-auto">
      <div>
        <Image
          src={`${BLOG_IMAGE_DIR}/${slug}/${frontMatter.hero}`}
          width={500}
          height={300}
          alt={frontMatter.title}
          className="mx-auto"
        />
      </div>
      <h1 className="mt-12">{frontMatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
};

export default Post;
