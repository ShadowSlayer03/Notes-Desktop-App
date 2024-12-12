import { useRef } from 'react'
import { Content, DraggableTopBar, NotePreviewList, RootLayout, Sidebar } from './components'
import ActionButtonsRow from './components/ActionButtonsRow'
import FloatingNoteTitle from './components/FloatingNoteTitle'
import MarkdownEditor from './components/MarkdownEditor'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-4" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
