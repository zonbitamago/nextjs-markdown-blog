import dynamic from "next/dynamic";

const Generator = () => {
  const ArticleEditor = dynamic(
    () => import("@/components/ArticleEditor/ArticleEditor"),
    { ssr: false }
  );
  return (
    <div>
      Generator
      <hr />
      <ArticleEditor />
      <hr />
    </div>
  );
};

export default Generator;
