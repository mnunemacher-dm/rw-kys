import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ExperienceForm from 'src/components/ExperienceForm'

export const QUERY = gql`
  query FIND_EXPERIENCE_BY_ID($id: Int!) {
    experience: experience(id: $id) {
      id
      name
    }
  }
`
const UPDATE_EXPERIENCE_MUTATION = gql`
  mutation UpdateExperienceMutation($id: Int!, $input: UpdateExperienceInput!) {
    updateExperience(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ experience }) => {
  const { addMessage } = useFlash()
  const [updateExperience, { loading, error }] = useMutation(
    UPDATE_EXPERIENCE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.experiences())
        addMessage('Experience updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateExperience({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Experience {experience.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ExperienceForm
          experience={experience}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
