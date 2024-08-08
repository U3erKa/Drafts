import { Editor } from '@tinymce/tinymce-react';
import TinyMCE from 'components/TinyMCE';
import { useRef } from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';

function TinyMCEExample() {
  const forwardedRef = useRef<Editor>(undefined!);
  const editorRef = useRef<TinyMCEEditor>(undefined!);

  function log() {
    console.log(editorRef.current?.getContent());
    console.log(forwardedRef.current?.editor?.getContent());
  }

  return (
    <>
      <TinyMCE
        ref={forwardedRef}
        initialValue="<p>This is the initial content of the editor.</p>"
        onInit={(event, editor) => (editorRef.current = editor)}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}

export default TinyMCEExample;
