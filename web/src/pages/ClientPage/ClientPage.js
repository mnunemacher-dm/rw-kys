import ClientsLayout from 'src/layouts/ClientsLayout'
import ClientCell from 'src/components/ClientCell'

const ClientPage = ({ id }) => {
  return (
    <ClientsLayout>
      <ClientCell id={id} />
    </ClientsLayout>
  )
}

export default ClientPage
