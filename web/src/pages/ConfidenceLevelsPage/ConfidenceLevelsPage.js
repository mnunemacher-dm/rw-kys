import MainLayout from 'src/layouts/MainLayout'
import ConfidenceLevelsLayout from 'src/layouts/ConfidenceLevelsLayout'
import ConfidenceLevelsCell from 'src/components/ConfidenceLevelsCell'

const ConfidenceLevelsPage = () => {
  return (
    <MainLayout>
      <ConfidenceLevelsLayout>
        <ConfidenceLevelsCell />
      </ConfidenceLevelsLayout>
    </MainLayout>
  )
}

export default ConfidenceLevelsPage
