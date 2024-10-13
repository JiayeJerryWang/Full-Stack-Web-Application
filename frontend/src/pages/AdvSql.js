import './pages.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
import { Container, Header, Table } from 'semantic-ui-react'; // header
import { Button } from 'semantic-ui-react'; // button
import { Input, Icon } from 'semantic-ui-react'; // input
import { Label } from 'semantic-ui-react'; // label
function App() {
    const [AdvSQL1, setAdvSQL1] = useState([]);
    const [AdvSQL2, setAdvSQL2] = useState([]);
    const [champ, setChamp] = useState([]);
    // read advanced SQLs
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
    const OPChamp = () => {
      Axios.get("http://localhost:3003/opchamp").then((response) => {
        setChamp(response.data);
      })
    };
    return(
        <div className="App"> 
        <div className="AdvSQL1">
          <Container>
            <h3 class as="ui header"> Find Champions with more than 50% win rate and 1% picking rate in the middle lane</h3>
          </Container>
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
        <Container>
        <h3 class as="ui header"> </h3>
          <h3 class as="ui header"> Find Top Lane Fighters and Bottom Lane Marksmen with more than 5% ban rate or 3% pick rate</h3>
        </Container>
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

        <div className="AdvSQL2">
        <Container>
        <h3 class as="ui header"> </h3>
          <h3 class as="ui header"> Find top tank champions with winrate above top lane tank average or sum of banrate and pickrate greater than 20% </h3>
        </Container>
        <button onClick = {OPChamp} class="ui button">Get Champion</button>
            {champ.map((val, key) => {
              return (
                <div classname = 'Adv'>
                  <Table>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Role</Table.HeaderCell>
                        <Table.HeaderCell>Win Rate</Table.HeaderCell>
                        <Table.HeaderCell>Pick Rate</Table.HeaderCell>
                        <Table.HeaderCell>Ban Rate</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                  <Table.Body>
                    <Table.Row>
                    <Table.Cell>{val.title}</Table.Cell>
                    <Table.Cell>{val.champName}</Table.Cell>
                    <Table.Cell>{val.position}</Table.Cell>
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