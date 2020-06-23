import Experience from 'src/components/Experience'

export const QUERY = gql`
  query FIND_EXPERIENCE_BY_ID($id: Int!) {
    experience: experience(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Experience not found</div>

export const Success = ({ experience }) => {
  return <Experience experience={experience} />
}
