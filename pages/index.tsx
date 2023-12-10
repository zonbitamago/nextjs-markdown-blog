import { CONTENT_DIR } from "@/app/constants";
import PostCard from "@/components/PostCard/PostCard";
import fs from "fs";
import matter from "gray-matter";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export type Post = {
  frontMatter: {
    [key: string]: string;
  };
  slug: string;
};

export const getServerSideProps = (async () => {
  const directories = fs.readdirSync(CONTENT_DIR);

  let posts = directories.map((directory) => {
    const slug = directory.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(
      `${CONTENT_DIR}/${directory}/index.md`,
      "utf-8"
    );
    const { data, content } = matter(fileContent);

    return {
      frontMatter: data,
      slug: slug,
    };
  });

  posts = posts.sort((a, b) => {
    return a.frontMatter.date > b.frontMatter.date ? -1 : 1;
  });

  return {
    props: {
      posts: posts,
    },
  };
}) satisfies GetServerSideProps<{
  posts: Post[];
}>;

export default function Home({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="my-8 mx-10 flex justify-center">
      <div className="grid grid-cols-3 gap-x-10">
        {posts.map((post, idx) => {
          return <PostCard key={idx} {...post} />;
        })}
      </div>
    </div>
  );
}
