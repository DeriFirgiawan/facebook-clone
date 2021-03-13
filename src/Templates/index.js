import Navbar from '../Components/Molecules/Navbar'
import Sidebar from '../Components/Layout/Sidebar'

const Templates = ({sidebar, content, shortName, fullName}) => {
  return (
    <>
      <Navbar shortName={shortName} fullName={fullName} />
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
