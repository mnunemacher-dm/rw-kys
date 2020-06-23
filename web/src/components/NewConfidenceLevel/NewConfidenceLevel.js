import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ConfidenceLevelForm from 'src/components/ConfidenceLevelForm'

const CREATE_CONFIDENCE_LEVEL_MUTATION = gql`
  mutation CreateConfidenceLevelMutation($input: CreateConfidenceLevelInput!) {
    createConfidenceLevel(input: $input) {
      id
    }
  }
`

const NewConfidenceLevel = () => {
  const { addMessage } = useFlash()
  const [createConfidenceLevel, { loading, error }] = useMutation(
    CREATE_CONFIDENCE_LEVEL_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.confidenceLevels())
        addMessage('ConfidenceLevel created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createConfidenceLevel({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ConfidenceLevel</h2>
      </header>
      <div className="rw-segment-main">
        <ConfidenceLevelForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewConfidenceLevel
