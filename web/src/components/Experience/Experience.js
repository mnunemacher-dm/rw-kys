import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_EXPERIENCE_MUTATION = gql`
  mutation DeleteExperienceMutation($id: Int!) {
    deleteExperience(id: $id) {
      id
    }
  }
`

const Experience = ({ experience }) => {
  const { addMessage } = useFlash()
  const [deleteExperience] = useMutation(DELETE_EXPERIENCE_MUTATION, {
    onCompleted: () => {
      navigate(routes.experiences())
      addMessage('Experience deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete experience ' + id + '?')) {
      deleteExperience({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Experience {experience.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{experience.id}</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{experience.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editExperience({ id: experience.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(experience.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Experience
