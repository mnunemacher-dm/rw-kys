import ConfidenceLevel from 'src/components/ConfidenceLevel'

export const QUERY = gql`
  query FIND_CONFIDENCE_LEVEL_BY_ID($id: Int!) {
    confidenceLevel: confidenceLevel(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ConfidenceLevel not found</div>

export const Success = ({ confidenceLevel }) => {
  return <ConfidenceLevel confidenceLevel={confidenceLevel} />
}
