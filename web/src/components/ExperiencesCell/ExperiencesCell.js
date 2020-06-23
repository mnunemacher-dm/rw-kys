import { Link, routes } from '@redwoodjs/router'

import Experiences from 'src/components/Experiences'

export const QUERY = gql`
  query EXPERIENCES {
    experiences {
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
      {'No experiences yet. '}
      <Link to={routes.newExperience()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ experiences }) => {
  return <Experiences experiences={experiences} />
}
