import MainLayout from 'src/layouts/MainLayout'
import ToolsLayout from 'src/layouts/ToolsLayout'
import ToolsCell from 'src/components/ToolsCell'

const ToolsPage = () => {
  return (
    <MainLayout>
      <ToolsLayout>
        <ToolsCell />
      </ToolsLayout>
    </MainLayout>
  )
}

export default ToolsPage
