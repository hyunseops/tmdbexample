import MainImage from '../Components/MainImage'
import TrendingList from '../Components/TrendingList'
import './Mainpage.css'
const MainPage = () => {

  return (
    <div className='main-container'>
      <MainImage/>
      <TrendingList/>
    </div>
  )

}

export default MainPage