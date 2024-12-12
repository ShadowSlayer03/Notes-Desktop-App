import { ComponentProps } from 'react'
import { DeleteNoteButton, NewNoteButton } from './Button'

const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}

export default ActionButtonsRow
