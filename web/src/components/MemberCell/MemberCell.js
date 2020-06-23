import Member from 'src/components/Member'

export const QUERY = gql`
  query FIND_MEMBER_BY_ID($id: Int!) {
    member: member(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Member not found</div>

export const Success = ({ member }) => {
  return <Member member={member} />
}
