import FormCreatePost from '../../Feature/FormCreatePost'
import StoryBar from '../../../Components/Molecules/StoryBar'
import CardContent from '../../../Components/Molecules/CardContent'
import './_Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="content">
      <StoryBar />
      <FormCreatePost />
      <CardContent />
    </div>
  )
}

export default Dashboard
