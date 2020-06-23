import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MemberForm from 'src/components/MemberForm'

export const QUERY = gql`
  query FIND_MEMBER_BY_ID($id: Int!) {
    member: member(id: $id) {
      id
      name
    }
  }
`
const UPDATE_MEMBER_MUTATION = gql`
  mutation UpdateMemberMutation($id: Int!, $input: UpdateMemberInput!) {
    updateMember(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ member }) => {
  const { addMessage } = useFlash()
  const [updateMember, { loading, error }] = useMutation(
    UPDATE_MEMBER_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.members())
        addMessage('Member updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateMember({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Member {member.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MemberForm
          member={member}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
