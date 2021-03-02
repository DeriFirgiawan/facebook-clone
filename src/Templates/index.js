import Navbar from '../Components/Molecules/Navbar'
import Sidebar from '../Components/Layout/Sidebar'

import './_Templates.scss'

const Templates = ({sidebar, content}) => {
  return (
    <>
      <Navbar />
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
