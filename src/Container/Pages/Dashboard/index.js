import StoryBar from '../../../Components/Molecules/StoryBar'
import CardCreatePost from '../../../Components/Molecules/CardCreatePost'
import './_Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="content">
      <StoryBar />
      <CardCreatePost />
    </div>
  )
}

export default Dashboard
