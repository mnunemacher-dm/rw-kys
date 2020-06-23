import ToolsLayout from 'src/layouts/ToolsLayout'
import EditToolCell from 'src/components/EditToolCell'

const EditToolPage = ({ id }) => {
  return (
    <ToolsLayout>
      <EditToolCell id={id} />
    </ToolsLayout>
  )
}

export default EditToolPage
