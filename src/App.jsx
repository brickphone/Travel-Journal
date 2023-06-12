import Navbar from './Components/navbar'
import data from './Components/data'
import Hero from './Components/hero'

const App = () => {
 const dataList = data.map(item => {
  return (
    <Hero 
      key={item.id}
      
    />
  )
 })
  return (
    <div className="app-container">
      <Navbar />
      {dataList}
    </div>
  )
}

export default App;