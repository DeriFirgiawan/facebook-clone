import StoryBar from '../../../Components/Molecules/StoryBar'
import CardCreatePost from '../../../Components/Molecules/CardCreatePost'
import CreatePostModal from '../../../Components/Molecules/CreatePostModal'
import './_Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="content">
      <StoryBar />
      <CardCreatePost />
      <CreatePostModal />
    </div>
  )
}

export default Dashboard
