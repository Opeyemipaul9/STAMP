import TopNav from './components/TopNav'
import Featured from './components/Featured'
import Delivery from './components/Delivery'
import TopPicks from './components/TopPicks'
import Meal from './components/Meals'
import Categories from './components/Categories'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

const App = () => {

  return (
    <div className=' mx-auto'>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <Newsletter />
      <Footer/>
    </div>
  )
}

export default App
