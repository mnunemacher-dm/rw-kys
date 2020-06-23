import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MemberForm from 'src/components/MemberForm'

const CREATE_MEMBER_MUTATION = gql`
  mutation CreateMemberMutation($input: CreateMemberInput!) {
    createMember(input: $input) {
      id
    }
  }
`

const NewMember = () => {
  const { addMessage } = useFlash()
  const [createMember, { loading, error }] = useMutation(
    CREATE_MEMBER_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.members())
        addMessage('Member created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createMember({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Member</h2>
      </header>
      <div className="rw-segment-main">
        <MemberForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMember
