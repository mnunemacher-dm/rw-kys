import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TOOL_MUTATION = gql`
  mutation DeleteToolMutation($id: Int!) {
    deleteTool(id: $id) {
      id
    }
  }
`

const Tool = ({ tool }) => {
  const { addMessage } = useFlash()
  const [deleteTool] = useMutation(DELETE_TOOL_MUTATION, {
    onCompleted: () => {
      navigate(routes.tools())
      addMessage('Tool deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tool ' + id + '?')) {
      deleteTool({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tool {tool.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{tool.id}</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{tool.name}</td>
            </tr>
            <tr>
              <th>createdAt</th>
              <td>{tool.createdAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTool({ id: tool.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tool.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Tool
