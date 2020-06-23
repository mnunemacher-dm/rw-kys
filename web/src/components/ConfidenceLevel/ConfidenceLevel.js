import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CONFIDENCE_LEVEL_MUTATION = gql`
  mutation DeleteConfidenceLevelMutation($id: Int!) {
    deleteConfidenceLevel(id: $id) {
      id
    }
  }
`

const ConfidenceLevel = ({ confidenceLevel }) => {
  const { addMessage } = useFlash()
  const [deleteConfidenceLevel] = useMutation(
    DELETE_CONFIDENCE_LEVEL_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.confidenceLevels())
        addMessage('ConfidenceLevel deleted.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete confidenceLevel ' + id + '?')
    ) {
      deleteConfidenceLevel({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ConfidenceLevel {confidenceLevel.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{confidenceLevel.id}</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{confidenceLevel.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editConfidenceLevel({ id: confidenceLevel.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(confidenceLevel.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default ConfidenceLevel
