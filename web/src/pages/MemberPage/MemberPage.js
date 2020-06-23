import MembersLayout from 'src/layouts/MembersLayout'
import MemberCell from 'src/components/MemberCell'

const MemberPage = ({ id }) => {
  return (
    <MembersLayout>
      <MemberCell id={id} />
    </MembersLayout>
  )
}

export default MemberPage
