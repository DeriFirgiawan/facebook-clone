import Navbar from '../Components/Molecules/Navbar'
import Sidebar from '../Components/Layout/Sidebar'

const Templates = ({sidebar, content, shortName, fullName, clickToLogout}) => {
  return (
    <>
      <Navbar shortName={shortName} fullName={fullName} clickToLogout={clickToLogout} />
      <main className="wrapper">
        <Sidebar>
          {sidebar}
        </Sidebar>
        {content}
      </main>
    </>
  )
}

export default Templates
