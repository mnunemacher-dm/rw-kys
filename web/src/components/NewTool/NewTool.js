import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ToolForm from 'src/components/ToolForm'

const CREATE_TOOL_MUTATION = gql`
  mutation CreateToolMutation($input: CreateToolInput!) {
    createTool(input: $input) {
      id
    }
  }
`

const NewTool = () => {
  const { addMessage } = useFlash()
  const [createTool, { loading, error }] = useMutation(CREATE_TOOL_MUTATION, {
    onCompleted: () => {
      navigate(routes.tools())
      addMessage('Tool created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createTool({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Tool</h2>
      </header>
      <div className="rw-segment-main">
        <ToolForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTool
