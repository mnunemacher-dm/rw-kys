import ExperiencesLayout from 'src/layouts/ExperiencesLayout'
import ExperienceCell from 'src/components/ExperienceCell'

const ExperiencePage = ({ id }) => {
  return (
    <ExperiencesLayout>
      <ExperienceCell id={id} />
    </ExperiencesLayout>
  )
}

export default ExperiencePage
