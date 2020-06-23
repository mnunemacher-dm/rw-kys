import MainLayout from 'src/layouts/MainLayout'

import SearchBar from 'src/components/SearchBar/SearchBar'

const HomePage = () => {
  return (
    <MainLayout>
      <section className="flex flex-col items-center p-12 lg:p-48">
        <SearchBar />
      </section>
    </MainLayout>
  )
}

export default HomePage
