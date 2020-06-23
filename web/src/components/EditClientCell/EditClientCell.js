import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ClientForm from 'src/components/ClientForm'

export const QUERY = gql`
  query FIND_CLIENT_BY_ID($id: Int!) {
    client: client(id: $id) {
      id
      name
    }
  }
`
const UPDATE_CLIENT_MUTATION = gql`
  mutation UpdateClientMutation($id: Int!, $input: UpdateClientInput!) {
    updateClient(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ client }) => {
  const { addMessage } = useFlash()
  const [updateClient, { loading, error }] = useMutation(
    UPDATE_CLIENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.clients())
        addMessage('Client updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateClient({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Client {client.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ClientForm
          client={client}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
