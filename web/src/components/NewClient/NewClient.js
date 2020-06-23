import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ClientForm from 'src/components/ClientForm'

const CREATE_CLIENT_MUTATION = gql`
  mutation CreateClientMutation($input: CreateClientInput!) {
    createClient(input: $input) {
      id
    }
  }
`

const NewClient = () => {
  const { addMessage } = useFlash()
  const [createClient, { loading, error }] = useMutation(
    CREATE_CLIENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.clients())
        addMessage('Client created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createClient({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Client</h2>
      </header>
      <div className="rw-segment-main">
        <ClientForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewClient
