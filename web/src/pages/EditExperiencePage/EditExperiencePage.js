import ExperiencesLayout from 'src/layouts/ExperiencesLayout'
import EditExperienceCell from 'src/components/EditExperienceCell'

const EditExperiencePage = ({ id }) => {
  return (
    <ExperiencesLayout>
      <EditExperienceCell id={id} />
    </ExperiencesLayout>
  )
}

export default EditExperiencePage
