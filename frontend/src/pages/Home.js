import './pages.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
import { Header, Table } from 'semantic-ui-react'; // header
import { Button } from 'semantic-ui-react'; // button
import { Input, Icon } from 'semantic-ui-react'; // input
import { Label } from 'semantic-ui-react'; // label
function App() {
  // search database
  const [searchInput, setSearchInput] = useState();
  const [search, setSearch] = useState([]);
  const searchChamp = () => {
    console.log(searchInput)
    Axios.put('http://localhost:3003/search', {
      searchInput: searchInput,
    }).then ((response) => {
      setSearch(response.data);
    }).then (() => {
      console.log("get champion success");
    })
  }
  console.log(search);
  return(
    <div className="App"> 
    <Header as='h0'>Find Your Champion's ID !</Header>
    <div className="form">
      <Input type="text" placehoder="Search" onChange = {(event) => {
        setSearchInput(event.target.value);
      }}/>
      <button onClick = {searchChamp}> Search </button>
      {search.map((val, key) => {
        return (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ChampionId</Table.HeaderCell>
                <Table.HeaderCell>ChampionName</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{val.id}</Table.Cell>
                <Table.Cell>{val.name}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        )
      })}
      <img class = "center"
      src="https://asset.vg247.com/star_guardian_header.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/star_guardian_header.jpg"
      alt="new" 
      />
    </div>
  </div>
);
}
export default App;