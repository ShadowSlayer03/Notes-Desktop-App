import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { FaPlus } from 'react-icons/fa'
import ActionButton, { ActionButtonProps } from './ActionButton'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleNoteCreation = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleNoteCreation} {...props}>
      <FaPlus className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
