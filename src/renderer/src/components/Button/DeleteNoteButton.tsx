import { deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { MdDelete } from 'react-icons/md'
import ActionButton, { ActionButtonProps } from './ActionButton'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDeleteNote = async () => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleDeleteNote} {...props}>
      <MdDelete className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
