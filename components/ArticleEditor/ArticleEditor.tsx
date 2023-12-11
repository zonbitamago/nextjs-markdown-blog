import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import LinkTool from "@editorjs/link";

const ArticleEditor = () => {
  new EditorJS({
    holder: "editor",
    tools: {
      header: {
        // @ts-ignore
        class: Header,
        shortcut: "CMD+SHIFT+H",
        config: {
          placeholder: "へッダー",
          levels: [1, 2, 3, 4],
          defaultLevel: 3,
        },
        inlineToolbar: ["link"],
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      linkTool: {
        class: LinkTool,
      },
    },
  });
  return <div id="editor" />;
};

export default ArticleEditor;
