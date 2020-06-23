import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_EXPERIENCE_MUTATION = gql`
  mutation DeleteExperienceMutation($id: Int!) {
    deleteExperience(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const ExperiencesList = ({ experiences }) => {
  const { addMessage } = useFlash()
  const [deleteExperience] = useMutation(DELETE_EXPERIENCE_MUTATION, {
    onCompleted: () => {
      addMessage('Experience deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete experience ' + id + '?')) {
      deleteExperience({ variables: { id }, refetchQueries: ['EXPERIENCES'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((experience) => (
            <tr key={experience.id}>
              <td>{truncate(experience.id)}</td>
              <td>{truncate(experience.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.experience({ id: experience.id })}
                    title={'Show experience ' + experience.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editExperience({ id: experience.id })}
                    title={'Edit experience ' + experience.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete experience ' + experience.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(experience.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExperiencesList
