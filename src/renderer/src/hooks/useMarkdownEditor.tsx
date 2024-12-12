import { MDXEditorMethods } from '@mdxeditor/editor'
import { saveNoteAtom, selectedNoteAtom } from '@renderer/store'
import { autoSavingTime } from '@shared/constants'
import { NoteContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import { debounce } from 'lodash'
import { useRef } from 'react'

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = debounce(
    async (content: NoteContent) => {
      if (!selectedNote) return
      console.info('Auto Saving...', selectedNote.title)
      await saveNote(content)
    },
    autoSavingTime,
    { leading: false, trailing: true }
  )

  const handleBlur = async () => {
    if (!selectedNote) return

    handleAutoSaving.cancel()

    const content = editorRef.current?.getMarkdown()

    if (content != null) {
      console.info('Saving file when focused away from it..')
      await saveNote(content)
    }
  }

  return {
    editorRef,
    handleAutoSaving,
    handleBlur,
    selectedNote
  }
}
