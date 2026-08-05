import UserProfileCard from './UserProfileCard'
import PremiumCard from './PremiumCard'
import AnalyticsCard from './AnalyticsCard'
import NavigationCard from './NavigationCard'

function Sidebar() {
  return (
    <div>
        <UserProfileCard/>
        <PremiumCard/>
        <AnalyticsCard/>
        <NavigationCard/>
    </div>
  )
}

export default Sidebar