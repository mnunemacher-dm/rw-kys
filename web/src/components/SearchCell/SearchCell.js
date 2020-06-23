export const beforeQuery = ({ term }) => ({ variables: { term: term.term } })

export const QUERY = gql`
  query SearchTools($term: String) {
    tools: searchTools(term: $term) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ tools, variables }) => {
  return (
    <>
      <p>{JSON.stringify(tools)}</p>
      <p>{JSON.stringify(variables)}</p>
    </>
  )
}
