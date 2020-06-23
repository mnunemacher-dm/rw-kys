import { Link, routes } from '@redwoodjs/router'

import Tools from 'src/components/Tools'

export const QUERY = gql`
  query TOOLS {
    tools {
      id
      name
      createdAt
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
      {'No tools yet. '}
      <Link to={routes.newTool()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ tools }) => {
  return <Tools tools={tools} />
}
