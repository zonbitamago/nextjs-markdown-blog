import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import LinkTool from "@editorjs/link";
// @ts-ignore
import CheckList from "@editorjs/checklist";
// @ts-ignore
import Quote from "@editorjs/quote";
// @ts-ignore
import Delimiter from "@editorjs/delimiter";
// @ts-ignore
import Table from "@editorjs/table";
// @ts-ignore
import Marker from "@editorjs/marker";

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
      checklist: {
        class: CheckList,
        inlineToolbar: true,
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+O",
        config: {
          quotePlaceholder: "テキストを入力",
          captionPlaceholder: "キャプションを入力",
        },
      },
      delimiter: Delimiter,
      table: {
        class: Table,
        inlineToolbar: true,
        config: {
          rows: 2,
          cols: 3,
        },
      },
      marker: {
        class: Marker,
        shortcut: "CMD+SHIFT+M",
      },
    },
  });
  return <div id="editor" />;
};

export default ArticleEditor;
