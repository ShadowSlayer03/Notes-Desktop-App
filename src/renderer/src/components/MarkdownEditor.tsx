import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import { useMarkdownEditor } from '@renderer/hooks/useMarkdownEditor'

const MarkdownEditor = () => {
  const { editorRef, handleAutoSaving, handleBlur, selectedNote } = useMarkdownEditor()

  if (!selectedNote)
    return (
      <div className="h-full flex justify-center items-center text-xl">
        Select a note to edit content 📝
      </div>
    )

  return (
    <MDXEditor
      ref={editorRef}
      key={selectedNote?.title + selectedNote?.lastEditTime}
      markdown={selectedNote.content}
      onChange={handleAutoSaving}
      onBlur={handleBlur}
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    />
  )
}

export default MarkdownEditor
