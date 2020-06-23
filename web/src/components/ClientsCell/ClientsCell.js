import { Link, routes } from '@redwoodjs/router'

import Clients from 'src/components/Clients'

export const QUERY = gql`
  query CLIENTS {
    clients {
      id
      name
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No clients yet. '}
      <Link to={routes.newClient()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ clients }) => {
  return <Clients clients={clients} />
}
