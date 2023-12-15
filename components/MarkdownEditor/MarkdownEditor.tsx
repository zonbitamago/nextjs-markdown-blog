import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
const MarkdownEditor = ({ initialValue }: { initialValue: string }) => {
  const editorRef = useRef<Editor>(null);

  function handleChange() {
    const md = editorRef?.current
      ? editorRef?.current.getInstance().getMarkdown()
      : "";
  }

  return (
    <Editor
      initialValue={initialValue}
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
};

export default MarkdownEditor;
