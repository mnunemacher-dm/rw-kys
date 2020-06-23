import ConfidenceLevelsLayout from 'src/layouts/ConfidenceLevelsLayout'
import EditConfidenceLevelCell from 'src/components/EditConfidenceLevelCell'

const EditConfidenceLevelPage = ({ id }) => {
  return (
    <ConfidenceLevelsLayout>
      <EditConfidenceLevelCell id={id} />
    </ConfidenceLevelsLayout>
  )
}

export default EditConfidenceLevelPage
