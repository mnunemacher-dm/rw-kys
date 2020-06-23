import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_CONFIDENCE_LEVEL_MUTATION = gql`
  mutation DeleteConfidenceLevelMutation($id: Int!) {
    deleteConfidenceLevel(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const ConfidenceLevelsList = ({ confidenceLevels }) => {
  const { addMessage } = useFlash()
  const [deleteConfidenceLevel] = useMutation(
    DELETE_CONFIDENCE_LEVEL_MUTATION,
    {
      onCompleted: () => {
        addMessage('ConfidenceLevel deleted.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete confidenceLevel ' + id + '?')
    ) {
      deleteConfidenceLevel({
        variables: { id },
        refetchQueries: ['CONFIDENCE_LEVELS'],
      })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {confidenceLevels.map((confidenceLevel) => (
            <tr key={confidenceLevel.id}>
              <td>{truncate(confidenceLevel.id)}</td>
              <td>{truncate(confidenceLevel.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.confidenceLevel({ id: confidenceLevel.id })}
                    title={
                      'Show confidenceLevel ' + confidenceLevel.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editConfidenceLevel({ id: confidenceLevel.id })}
                    title={'Edit confidenceLevel ' + confidenceLevel.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete confidenceLevel ' + confidenceLevel.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(confidenceLevel.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ConfidenceLevelsList
