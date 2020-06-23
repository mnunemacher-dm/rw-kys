import { Link, routes } from '@redwoodjs/router'

import ConfidenceLevels from 'src/components/ConfidenceLevels'

export const QUERY = gql`
  query CONFIDENCE_LEVELS {
    confidenceLevels {
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
      {'No confidenceLevels yet. '}
      <Link to={routes.newConfidenceLevel()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ confidenceLevels }) => {
  return <ConfidenceLevels confidenceLevels={confidenceLevels} />
}
