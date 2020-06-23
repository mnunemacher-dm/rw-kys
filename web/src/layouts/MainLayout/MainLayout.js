import { Link, NavLink, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="flex items-center justify-between bg-blue-500 p-6">
        <Link to={routes.home()}>
          <h1 className="text-white text-xl font-bold">Know Your Staff</h1>
        </Link>
        <nav>
          <ul className="flex items-center text-white uppercase text-sm">
            <li className="mr-4">
              <NavLink
                to={routes.tools()}
                className="hover:text-gray-300"
                activeClassName="bg-white text-blue-600 px-2 py-1 rounded"
              >
                Tools
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink
                to={routes.experiences()}
                className="hover:text-gray-300"
                activeClassName="bg-white text-blue-600 px-2 py-1 rounded"
              >
                Experiences
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink
                to={routes.clients()}
                className="hover:text-gray-300"
                activeClassName="bg-white text-blue-600 px-2 py-1 rounded"
              >
                Clients
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink
                to={routes.confidenceLevels()}
                className="hover:text-gray-300"
                activeClassName="bg-white text-blue-600 px-2 py-1 rounded"
              >
                Confidence Levels
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.members()}
                className="hover:text-gray-300"
                activeClassName="bg-white text-blue-600 px-2 py-1 rounded"
              >
                Members
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
