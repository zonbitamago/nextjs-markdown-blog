import dynamic from "next/dynamic";

const Generator = () => {
  const MarkdownEditor = dynamic(() => import("@/components/MarkdownEditor/MarkdownEditor"),{ssr:false})
  return (
    <div>
      Generator
      <hr />
      <MarkdownEditor
        initialValue="hello react editor world!"
      />
      <hr />
    </div>
  );
};

export default Generator;
