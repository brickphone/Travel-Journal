const Hero = (props) => {
  console.log(props)
  
  return (
    <main className="main-container">
      <img src={props.img} alt="japan image"></img>
    </main>
  )
}

export default Hero