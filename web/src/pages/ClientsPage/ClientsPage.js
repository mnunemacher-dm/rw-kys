import MainLayout from 'src/layouts/MainLayout'
import ClientsLayout from 'src/layouts/ClientsLayout'
import ClientsCell from 'src/components/ClientsCell'

const ClientsPage = () => {
  return (
    <MainLayout>
      <ClientsLayout>
        <ClientsCell />
      </ClientsLayout>
    </MainLayout>
  )
}

export default ClientsPage
