import pointer from '../assets/location.svg'

/* eslint-disable react/prop-types */
const Hero = (props) => {
  console.log(props)
  
  return (
    <main className="main-container">
        <img className="img" src={props.img} alt="japan image"></img>
      <div className="right-container">
        <div className='upper'>
          <img className="pointer" src={pointer} alt="location pointer"></img>
          <p className="location">{props.location.country}</p>
          <a href={props.location.link} className="link">View on google maps</a>
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="date">{props.date}</p>
        <p className="description">{props.description}</p>
        <div className='line'></div>
        </div>
    </main>
  )
}

export default Hero