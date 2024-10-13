import './App.css';
import React, {useState} from "react";
import Axios from 'axios';
import { Header, Table} from 'semantic-ui-react'; // header
import { Button } from 'semantic-ui-react'; // button
import { Input } from 'semantic-ui-react'; // input
import { Label } from 'semantic-ui-react'; // label
//import { response } from 'express';

function App() {
  
  const [Stats, setStats] = useState([]);
  const [AdvSQL1, setAdvSQL1] = useState([]);
  const [AdvSQL2, setAdvSQL2] = useState([]);
  const [champion, setChampion] = useState("");
  const [search, setsearch] = useState([]);

  const search_name = () => {
    Axios.post('http://localhost:3003/search', {
      champion : champion 
    }).then (() => {
      console.log("success");
    })
    Axios.get('http://localhost:3003/search').then ((response) => {
      setsearch(response.data);
    }).then (() => {
      console.log("success get");
    })
  }

  // read database
  const getStats = () => {
    Axios.get('http://localhost:3003/games').then ((response) => {
      setStats(response.data);
    })
  };
  const getAdvSQL1 = () => {
    Axios.get('http://localhost:3003/advanceSQL1').then ((response) => {
      setAdvSQL1(response.data);
    })
  };

  const getAdvSQL2 = () => {
    Axios.get('http://localhost:3003/advanceSQL2').then ((response) => {
      setAdvSQL2(response.data);
    })
  };

  return (
    <div className="App">
      <Header as='h1'>Champion Stats</Header>

      <div class="ui basic center aligned segment">
        <div class="ui buttons">
          <button onClick = {getStats} class="ui button">ALL STATS</button>
          { Stats.map((val, key) => {
            return (
              <div classname = 'Stats'>
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
          })
        }
        </div>
      </div>
      <div class="ui action left icon input">
        <input type="text" placeholder="Champion Name" onChange = {(event) => {
          champion(event.target.value)
        }}/>
        <i aria-hidden="true" class="search icon"></i>
        <button class="ui blue button" onClick = {search_name}>search</button>
        {search.map((val, key) => {
            return (
              <div classname = 'Adv'>
                <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Title</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Role</Table.HeaderCell>
                      <Table.HeaderCell>Win Rate</Table.HeaderCell>
                      <Table.HeaderCell>Pick Rate</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                <Table.Body>
                  <Table.Row>
                  <Table.Cell>{val.title}</Table.Cell>
                  <Table.Cell>{val.name}</Table.Cell>
                  <Table.Cell>{val.role}</Table.Cell>
                  <Table.Cell>{val.win_rate}</Table.Cell>
                  <Table.Cell>{val.pick_rate}</Table.Cell>
                </Table.Row>
                </Table.Body>
              </Table>
              </div>
            )
          })
        }
      </div>
      <div class="ui action left icon input">
        <input type="text" placeholder="Position"/>
        <i aria-hidden="true" class="search icon"></i>
        <button class="ui blue button">search</button>
      </div>
      <div className="AdvSQL1">
      <button onClick = {getAdvSQL1} class="ui button">AdvSQL1</button>
          {AdvSQL1.map((val, key) => {
            return (
              <div classname = 'Adv'>
                <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Title</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Role</Table.HeaderCell>
                      <Table.HeaderCell>Win Rate</Table.HeaderCell>
                      <Table.HeaderCell>Pick Rate</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                <Table.Body>
                  <Table.Row>
                  <Table.Cell>{val.title}</Table.Cell>
                  <Table.Cell>{val.name}</Table.Cell>
                  <Table.Cell>{val.role}</Table.Cell>
                  <Table.Cell>{val.win_rate}</Table.Cell>
                  <Table.Cell>{val.pick_rate}</Table.Cell>
                </Table.Row>
                </Table.Body>
              </Table>
              </div>
            )
          })
        }
      </div>
      <div className="AdvSQL2">
      <button onClick = {getAdvSQL2} class="ui button">AdvSQL2</button>
          {AdvSQL2.map((val, key) => {
            return (
              <div classname = 'Adv'>
                <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Title</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Role</Table.HeaderCell>
                      <Table.HeaderCell>Win Rate</Table.HeaderCell>
                      <Table.HeaderCell>Pick Rate</Table.HeaderCell>
                      <Table.HeaderCell>Ban Rate</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                <Table.Body>
                  <Table.Row>
                  <Table.Cell>{val.title}</Table.Cell>
                  <Table.Cell>{val.name}</Table.Cell>
                  <Table.Cell>{val.role}</Table.Cell>
                  <Table.Cell>{val.win_rate}</Table.Cell>
                  <Table.Cell>{val.pick_rate}</Table.Cell>
                  <Table.Cell>{val.ban_rate}</Table.Cell>
                </Table.Row>
                </Table.Body>
              </Table>
              </div>
            )
          })
        }
      </div>
    </div>
    
  );
}

export default App;

//npm start

