import Client from 'src/components/Client'

export const QUERY = gql`
  query FIND_CLIENT_BY_ID($id: Int!) {
    client: client(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Client not found</div>

export const Success = ({ client }) => {
  return <Client client={client} />
}
