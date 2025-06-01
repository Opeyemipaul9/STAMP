import TopNav from './components/TopNav'
import Featured from './components/Featured'
import Delivery from './components/Delivery'
import TopPicks from './components/TopPicks'

import './App.css'

const  App = ()=> {

  return (
    <div className=' mx-auto'>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks/>
    </div>
  )
}

export default App
