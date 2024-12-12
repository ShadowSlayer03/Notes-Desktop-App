import { NoteInfo } from '@shared/models'

export const sampleNotes: NoteInfo[] = [
  {
    title: 'Meeting Notes',
    lastEditTime: new Date().getTime() - 3600000
  },
  {
    title: 'Project Plan',
    lastEditTime: new Date().getTime() - 86400000
  },
  {
    title: 'Shopping List',
    lastEditTime: new Date().getTime() - 1800000
  },
  {
    title: 'Workout Routine',
    lastEditTime: new Date().getTime() - 43200000
  },
  {
    title: 'Recipe Ideas',
    lastEditTime: new Date().getTime() - 604800000
  }
]
