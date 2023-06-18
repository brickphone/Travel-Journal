import earth from '../assets/earth-europe-solid.svg'

export default function Navbar() {
// img is a temporary placeholder before a better one is found that is white
  return (
    <div className="navbar-container">
      <img className="logo" src={earth}></img>
      <h2 className="first-h2">my travel journal.</h2>
    </div>
  )
}