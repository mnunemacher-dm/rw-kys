import MainLayout from 'src/layouts/MainLayout'
import MembersLayout from 'src/layouts/MembersLayout'
import MembersCell from 'src/components/MembersCell'

const MembersPage = () => {
  return (
    <MainLayout>
      <MembersLayout>
        <MembersCell />
      </MembersLayout>
    </MainLayout>
  )
}

export default MembersPage
