import Navbar from './Components/navbar'
import data from './Components/data'
import Hero from './Components/hero'

const App = () => {
//maps over data in the data.js file and passes it to item
 const dataList = data.map(item => {
  return (
    <Hero 
      key={item.id}
      img={item.img}
      title={item.title}
      location={item.location}
      date={item.date}
      description={item.description}
    />
  )
 })
 console.log(Hero)
  return (
    <div className="app-container">
      <Navbar />
      {dataList}
    </div>
  )
}

export default App;