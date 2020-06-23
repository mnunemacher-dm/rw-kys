import MainLayout from 'src/layouts/MainLayout'
import ExperiencesLayout from 'src/layouts/ExperiencesLayout'
import ExperiencesCell from 'src/components/ExperiencesCell'

const ExperiencesPage = () => {
  return (
    <MainLayout>
      <ExperiencesLayout>
        <ExperiencesCell />
      </ExperiencesLayout>
    </MainLayout>
  )
}

export default ExperiencesPage
