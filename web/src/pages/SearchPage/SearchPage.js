import MainLayout from 'src/layouts/MainLayout'
import { useParams } from '@redwoodjs/router'
import SearchCell from 'src/components/SearchCell'

const SearchPage = () => {
  const term = useParams()

  return (
    <MainLayout>
      <section className="p-6">
        <SearchCell term={term} />
      </section>
    </MainLayout>
  )
}

export default SearchPage
