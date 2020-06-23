// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/members/new" page={NewMemberPage} name="newMember" />
      <Route
        path="/members/{id:Int}/edit"
        page={EditMemberPage}
        name="editMember"
      />
      <Route path="/members/{id:Int}" page={MemberPage} name="member" />
      <Route path="/members" page={MembersPage} name="members" />
      <Route
        path="/confidence-levels/new"
        page={NewConfidenceLevelPage}
        name="newConfidenceLevel"
      />
      <Route
        path="/confidence-levels/{id:Int}/edit"
        page={EditConfidenceLevelPage}
        name="editConfidenceLevel"
      />
      <Route
        path="/confidence-levels/{id:Int}"
        page={ConfidenceLevelPage}
        name="confidenceLevel"
      />
      <Route
        path="/confidence-levels"
        page={ConfidenceLevelsPage}
        name="confidenceLevels"
      />
      <Route path="/clients/new" page={NewClientPage} name="newClient" />
      <Route
        path="/clients/{id:Int}/edit"
        page={EditClientPage}
        name="editClient"
      />
      <Route path="/clients/{id:Int}" page={ClientPage} name="client" />
      <Route path="/clients" page={ClientsPage} name="clients" />
      <Route
        path="/experiences/new"
        page={NewExperiencePage}
        name="newExperience"
      />
      <Route
        path="/experiences/{id:Int}/edit"
        page={EditExperiencePage}
        name="editExperience"
      />
      <Route
        path="/experiences/{id:Int}"
        page={ExperiencePage}
        name="experience"
      />
      <Route path="/experiences" page={ExperiencesPage} name="experiences" />
      <Route path="/tools/new" page={NewToolPage} name="newTool" />
      <Route path="/tools/{id:Int}/edit" page={EditToolPage} name="editTool" />
      <Route path="/tools/{id:Int}" page={ToolPage} name="tool" />
      <Route path="/tools" page={ToolsPage} name="tools" />
      <Route path="/search/{term}" page={SearchPage} name="search" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
