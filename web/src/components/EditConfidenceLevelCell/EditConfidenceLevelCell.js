import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ConfidenceLevelForm from 'src/components/ConfidenceLevelForm'

export const QUERY = gql`
  query FIND_CONFIDENCE_LEVEL_BY_ID($id: Int!) {
    confidenceLevel: confidenceLevel(id: $id) {
      id
      name
    }
  }
`
const UPDATE_CONFIDENCE_LEVEL_MUTATION = gql`
  mutation UpdateConfidenceLevelMutation(
    $id: Int!
    $input: UpdateConfidenceLevelInput!
  ) {
    updateConfidenceLevel(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ confidenceLevel }) => {
  const { addMessage } = useFlash()
  const [updateConfidenceLevel, { loading, error }] = useMutation(
    UPDATE_CONFIDENCE_LEVEL_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.confidenceLevels())
        addMessage('ConfidenceLevel updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateConfidenceLevel({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ConfidenceLevel {confidenceLevel.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ConfidenceLevelForm
          confidenceLevel={confidenceLevel}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
