import './pages.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
import { Header, Table } from 'semantic-ui-react'; // header
import { Button } from 'semantic-ui-react'; // button
import { Input, Icon } from 'semantic-ui-react'; // input
import { Label } from 'semantic-ui-react'; // label
function App (){
    const [Stats, setStats] = useState([]);
    // read database
    const getStats = () => {
      Axios.get('http://localhost:3003/games').then ((response) => {
        setStats(response.data);
        console.log("read champ stats success");
      })
    };
  // search database
  const [searchInput, setSearchInput] = useState();
  const [search, setSearch] = useState([]);

  const searchChamp = () => {
    console.log(searchInput)
    Axios.put('http://localhost:3003/searchinput', {
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
    <Header as='h0'>Find Your Champion's Stats Here!</Header>
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
                <Table.HeaderCell>Champion</Table.HeaderCell>
                <Table.HeaderCell>Position</Table.HeaderCell>
                <Table.HeaderCell>Win Rate</Table.HeaderCell>
                <Table.HeaderCell>Pick Rate</Table.HeaderCell>
                <Table.HeaderCell>Ban Rate</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{val.champName}</Table.Cell>
                <Table.Cell>{val.position}</Table.Cell>
                <Table.Cell>{val.win_rate}</Table.Cell>
                <Table.Cell>{val.pick_rate}</Table.Cell>
                <Table.Cell>{val.ban_rate}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

        )
      })}
    </div>
    <div className="form">
      <Button onClick = {getStats}>ALL STATS</Button>
        { Stats.map((val, key) => {
          return (
            <div className = 'Stats'>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Champion</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Win Rate</Table.HeaderCell>
                    <Table.HeaderCell>Pick Rate</Table.HeaderCell>
                    <Table.HeaderCell>Ban Rate</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
              <Table.Body>
                <Table.Row>
                <Table.Cell>{val.champName}</Table.Cell>
                <Table.Cell>{val.position}</Table.Cell>
                <Table.Cell>{val.win_rate}</Table.Cell>
                <Table.Cell>{val.pick_rate}</Table.Cell>
                <Table.Cell>{val.ban_rate}</Table.Cell>
              </Table.Row>
              </Table.Body>
            </Table>
          </div>
          )
      })}
    </div>
  </div>
);
}
export default App;