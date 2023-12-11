import EditorJS from "@editorjs/editorjs";

const ArticleEditor = () => {
  const editor = new EditorJS({
    holder: "editor",
  });
  return <div id="editor" />;
};

export default ArticleEditor;
