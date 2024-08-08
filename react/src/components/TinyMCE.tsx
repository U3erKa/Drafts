import { Editor, IAllProps } from '@tinymce/tinymce-react';
import { forwardRef, type ForwardedRef } from 'react';

const TinyMCE = forwardRef(function TinyMCE(props: IAllProps, ref: ForwardedRef<Editor>) {
  return (
    <Editor
      ref={ref}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'anchor',
          'searchreplace',
          'visualblocks',
          'code',
          'fullscreen',
          'insertdatetime',
          'media',
          'table',
          'preview',
          'help',
          'wordcount',
        ],
        toolbar:
          'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        ...props.init,
      }}
      {...props}
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      licenseKey="gpl"
    />
  );
});

export default TinyMCE;
