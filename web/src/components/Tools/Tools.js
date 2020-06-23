import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_TOOL_MUTATION = gql`
  mutation DeleteToolMutation($id: Int!) {
    deleteTool(id: $id) {
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

const ToolsList = ({ tools }) => {
  const { addMessage } = useFlash()
  const [deleteTool] = useMutation(DELETE_TOOL_MUTATION, {
    onCompleted: () => {
      addMessage('Tool deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tool ' + id + '?')) {
      deleteTool({ variables: { id }, refetchQueries: ['TOOLS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>createdAt</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool.id}>
              <td>{truncate(tool.id)}</td>
              <td>{truncate(tool.name)}</td>
              <td>{timeTag(tool.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tool({ id: tool.id })}
                    title={'Show tool ' + tool.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTool({ id: tool.id })}
                    title={'Edit tool ' + tool.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete tool ' + tool.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tool.id)}
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

export default ToolsList
