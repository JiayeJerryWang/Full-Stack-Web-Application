import {Link} from "react-router-dom"
function App() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/YourGame">Add/Update/DeleteYourGame</Link>
        <Link to="/FindChampionStats">FindChampionStats</Link>
        <Link to="/AdvSql">AdvSql</Link>
      </ul>
    </nav>
  )
}
export default App;