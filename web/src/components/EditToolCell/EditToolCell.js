import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ToolForm from 'src/components/ToolForm'

export const QUERY = gql`
  query FIND_TOOL_BY_ID($id: Int!) {
    tool: tool(id: $id) {
      id
      name
      createdAt
    }
  }
`
const UPDATE_TOOL_MUTATION = gql`
  mutation UpdateToolMutation($id: Int!, $input: UpdateToolInput!) {
    updateTool(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ tool }) => {
  const { addMessage } = useFlash()
  const [updateTool, { loading, error }] = useMutation(UPDATE_TOOL_MUTATION, {
    onCompleted: () => {
      navigate(routes.tools())
      addMessage('Tool updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateTool({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Tool {tool.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ToolForm tool={tool} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
