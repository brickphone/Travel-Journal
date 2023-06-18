const Hero = (props) => {
  console.log(props)
  
  return (
    <main className="main-container">
        <img src={props.img} alt="japan image"></img>
      <div className="right-container">
        <p className="location">{props.location.country}</p>
        <a href={props.location.link} className="link">View on google maps</a>
        <h1 className="title">{props.title}</h1>
        <p className="date">{props.date}</p>
        <p className="description">{props.description}</p>
      </div>
    </main>
  )
}

export default Hero