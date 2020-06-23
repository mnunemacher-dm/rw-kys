import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ExperienceForm from 'src/components/ExperienceForm'

const CREATE_EXPERIENCE_MUTATION = gql`
  mutation CreateExperienceMutation($input: CreateExperienceInput!) {
    createExperience(input: $input) {
      id
    }
  }
`

const NewExperience = () => {
  const { addMessage } = useFlash()
  const [createExperience, { loading, error }] = useMutation(
    CREATE_EXPERIENCE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.experiences())
        addMessage('Experience created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createExperience({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Experience</h2>
      </header>
      <div className="rw-segment-main">
        <ExperienceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewExperience
