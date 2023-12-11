import dynamic from "next/dynamic";

const Generator = () => {
  const ArticleEditor = dynamic(
    () => import("@/components/ArticleEditor/ArticleEditor"),
    { ssr: false }
  );
  return (
    <div>
      Generator
      <ArticleEditor />
    </div>
  );
};

export default Generator;
