import ConfidenceLevelsLayout from 'src/layouts/ConfidenceLevelsLayout'
import ConfidenceLevelCell from 'src/components/ConfidenceLevelCell'

const ConfidenceLevelPage = ({ id }) => {
  return (
    <ConfidenceLevelsLayout>
      <ConfidenceLevelCell id={id} />
    </ConfidenceLevelsLayout>
  )
}

export default ConfidenceLevelPage
