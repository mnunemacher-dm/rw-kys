import MembersLayout from 'src/layouts/MembersLayout'
import EditMemberCell from 'src/components/EditMemberCell'

const EditMemberPage = ({ id }) => {
  return (
    <MembersLayout>
      <EditMemberCell id={id} />
    </MembersLayout>
  )
}

export default EditMemberPage
