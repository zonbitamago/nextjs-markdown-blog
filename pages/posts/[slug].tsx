import { BLOG_IMAGE_DIR, CONTENT_DIR } from "@/app/constants";
import Tag from "@/components/Tag/Tag";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";

type FrontMatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  hero: string;
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
  return {
    props: {
      frontMatter: {
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags,
        hero: data.hero,
      },
      content: content,
      slug: params.slug,
    },
  };
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
      <span>{frontMatter.date}</span>
      <br />
      {frontMatter.tags.map((tag) => {
        return <Tag tag={tag} />;
      })}
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
};

export default Post;
