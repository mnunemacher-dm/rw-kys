import ToolsLayout from 'src/layouts/ToolsLayout'
import ToolCell from 'src/components/ToolCell'

const ToolPage = ({ id }) => {
  return (
    <ToolsLayout>
      <ToolCell id={id} />
    </ToolsLayout>
  )
}

export default ToolPage
