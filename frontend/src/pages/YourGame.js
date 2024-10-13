import './pages.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
import { Header, Table } from 'semantic-ui-react'; // header
import { Button } from 'semantic-ui-react'; // button
import { Input, Icon } from 'semantic-ui-react'; // input
import { Label } from 'semantic-ui-react'; // label
function App (){
    const [gameId, setGameId] = useState();
    const [winner, setWinner] = useState();
    const [t1_champ1id, setT1_champ1id] = useState();
    const [t1_champ2id, setT1_champ2id] = useState();
    const [t1_champ3id, setT1_champ3id] = useState();
    const [t1_champ4id, setT1_champ4id] = useState();
    const [t1_champ5id, setT1_champ5id] = useState();
    const [t1_ban1, setT1_ban1] = useState();
    const [t1_ban2, setT1_ban2] = useState();
    const [t1_ban3, setT1_ban3] = useState();
    const [t1_ban4, setT1_ban4] = useState();
    const [t1_ban5, setT1_ban5] = useState();
    const [t2_champ1id, setT2_champ1id] = useState();
    const [t2_champ2id, setT2_champ2id] = useState();
    const [t2_champ3id, setT2_champ3id] = useState();
    const [t2_champ4id, setT2_champ4id] = useState();
    const [t2_champ5id, setT2_champ5id] = useState();
    const [t2_ban1, setT2_ban1] = useState();
    const [t2_ban2, setT2_ban2] = useState();
    const [t2_ban3, setT2_ban3] = useState();
    const [t2_ban4, setT2_ban4] = useState();
    const [t2_ban5, setT2_ban5] = useState();
// post to database
    const addGame = () => {
      Axios.post('http://localhost:3003/insert', {
        gameId: gameId,
        winner: winner,
        t1_champ1id: t1_champ1id,
        t1_champ2id: t1_champ2id,
        t1_champ3id: t1_champ3id,
        t1_champ4id: t1_champ4id,
        t1_champ5id: t1_champ5id,
        t1_ban1: t1_ban1,
        t1_ban2: t1_ban2,
        t1_ban3: t1_ban3,
        t1_ban4: t1_ban4,
        t1_ban5: t1_ban5,
        t2_champ1id: t2_champ1id,
        t2_champ2id: t2_champ2id,
        t2_champ3id: t2_champ3id,
        t2_champ4id: t2_champ4id,
        t2_champ5id: t2_champ5id,
        t2_ban1: t2_ban1,
        t2_ban2: t2_ban2,
        t2_ban3: t2_ban3,
        t2_ban4: t2_ban4,
        t2_ban5: t2_ban5
  
      }).then (() => {
        console.log("create success");
      })
    }
    const [new_winner, setNew_winner] = useState();
    const [newT1_champ1id, setNewT1_champ1id] = useState();
    const [newT1_champ2id, setNewT1_champ2id] = useState();
    const [newT1_champ3id, setNewT1_champ3id] = useState();
    const [newT1_champ4id, setNewT1_champ4id] = useState();
    const [newT1_champ5id, setNewT1_champ5id] = useState();
    const [newT1_ban1, setNewT1_ban1] = useState();
    const [newT1_ban2, setNewT1_ban2] = useState();
    const [newT1_ban3, setNewT1_ban3] = useState();
    const [newT1_ban4, setNewT1_ban4] = useState();
    const [newT1_ban5, setNewT1_ban5] = useState();
    const [newT2_champ1id, setNewT2_champ1id] = useState();
    const [newT2_champ2id, setNewT2_champ2id] = useState();
    const [newT2_champ3id, setNewT2_champ3id] = useState();
    const [newT2_champ4id, setNewT2_champ4id] = useState();
    const [newT2_champ5id, setNewT2_champ5id] = useState();
    const [newT2_ban1, setNewT2_ban1] = useState();
    const [newT2_ban2, setNewT2_ban2] = useState();
    const [newT2_ban3, setNewT2_ban3] = useState();
    const [newT2_ban4, setNewT2_ban4] = useState();
    const [newT2_ban5, setNewT2_ban5] = useState();
    // update database
    const updateGame = (gameId) => {
      Axios.put('http://localhost:3003/update', {
        winner: new_winner,
        t1_champ1id: newT1_champ1id,
        t1_champ2id: newT1_champ2id,
        t1_champ3id: newT1_champ3id,
        t1_champ4id: newT1_champ4id,
        t1_champ5id: newT1_champ5id,
        t1_ban1: newT1_ban1,
        t1_ban2: newT1_ban2,
        t1_ban3: newT1_ban3,
        t1_ban4: newT1_ban4,
        t1_ban5: newT1_ban5,
        t2_champ1id: newT2_champ1id,
        t2_champ2id: newT2_champ2id,
        t2_champ3id: newT2_champ3id,
        t2_champ4id: newT2_champ4id,
        t2_champ5id: newT2_champ5id,
        t2_ban1: newT2_ban1,
        t2_ban2: newT2_ban2,
        t2_ban3: newT2_ban3,
        t2_ban4: newT2_ban4,
        t2_ban5: newT2_ban5,
        gameId: gameId
      }).then (() => {
        console.log("update success");
      })
    }
    // delete database
    const deleteGame = (gameId) => {
      Axios.put("http://localhost:3003/api/update/delete_game", {gameId:gameId,});
    };
    return (
      <div className="App">
      <Header as='h0'>Add/Update/Delete Your Game Here!</Header>
      <div className="form">
        <div className="side-by-side">
          <Label>Game Id:</Label>
          <Input type="number" name="gameId" onChange = {(event) => {
            setGameId(event.target.value)
          }}/>
          <Label>Winner:</Label>
          <Input type="number" name="winner" onChange = {(event) => {
            setWinner(event.target.value)
            setNew_winner(event.target.value)
          }}/>
        </div>
        
        <Header as='h1'>Champion Pick</Header>

        
        <div className="side-by-side">
          <div className= "title">
            <Label>Team 1</Label>
          </div>
          <div className= "title">
            <Label>Team 2</Label>
          </div>  
        </div>

        <div className="side-by-side">
          <Label>Champion 1:</Label>
          <Input type="number" name="t1_champ1id" onChange = {(event) => {
            setT1_champ1id(event.target.value)
            setNewT1_champ1id(event.target.value)
          }}/>

          <Label>Champion 1:</Label>
          <Input type="number" name="t2_champ1id" onChange = {(event) => {
            setT2_champ1id(event.target.value)
            setNewT2_champ1id(event.target.value)
          }}/>
        </div>

        <div className="side-by-side">
          <Label>Champion 2:</Label>
          <Input type="number" name="t1_champ2id" onChange = {(event) => {
            setT1_champ2id(event.target.value)
            setNewT1_champ2id(event.target.value)
          }}/>

          <Label>Champion 2:</Label>
          <Input type="number" name="t2_champ2id" onChange = {(event) => {
            setT2_champ2id(event.target.value)
            setNewT2_champ2id(event.target.value)
          }}/>
        </div>

        <div className="side-by-side">
          <Label>Champion 3:</Label>
          <Input type="number" name="t1_champ3id" onChange = {(event) => {
            setT1_champ3id(event.target.value)
            setNewT1_champ3id(event.target.value)
          }}/>

          <Label>Champion 3:</Label>
          <Input type="number" name="t2_champ3id" onChange = {(event) => {
            setT2_champ3id(event.target.value)
            setNewT2_champ3id(event.target.value)
          }}/>
        </div>

        <div className="side-by-side">
          <Label>Champion 4:</Label>
          <Input type="number" name="t1_champ4id" onChange = {(event) => {
            setT1_champ4id(event.target.value)
            setNewT1_champ4id(event.target.value)
          }}/>
          <Label>Champion 4:</Label>
          <Input type="number" name="t2_champ4id" onChange = {(event) => {
            setT2_champ4id(event.target.value)
            setNewT2_champ4id(event.target.value)
          }}/>
        </div>
        
        <div className="side-by-side">
          <Label>Champion 5:</Label>
          <Input type="number" name="t1_champ5id" onChange = {(event) => {
            setT1_champ5id(event.target.value)
            setNewT1_champ5id(event.target.value)
          }}/>

          <Label>Champion 5:</Label>
          <Input type="number" name="t2_champ5id" onChange = {(event) => {
          setT2_champ5id(event.target.value)
          setNewT2_champ5id(event.target.value)
          }}/>
        </div>
        

        
        <Header as='h1'>Champion Ban</Header>

        <div className="side-by-side">
          <div className= "title">
            <Label>Team 1</Label>
          </div>
          <div className= "title">
            <Label>Team 2</Label>
          </div>  
        </div>

        <div className="side-by-side">
          <Label>Ban 1:</Label>
          <Input type="number" name="t1_ban1" onChange = {(event) => {
            setT1_ban1(event.target.value)
            setNewT1_ban1(event.target.value)
          }}/>

          <Label>Ban 1:</Label>
          <Input type="number" name="t2_ban1" onChange = {(event) => {
          setT2_ban1(event.target.value)
          setNewT2_ban1(event.target.value)
          }}/>
        </div>
          
        <div className="side-by-side">
          <Label>Ban 2:</Label>
          <Input type="number" name="t1_ban2" onChange = {(event) => {
            setT1_ban2(event.target.value)
            setNewT1_ban2(event.target.value)
          }}/>

          <Label>Ban 2:</Label>
          <Input type="number" name="t2_ban2" onChange = {(event) => {
            setT2_ban2(event.target.value)
            setNewT2_ban2(event.target.value)
          }}/>
        </div>

        <div className="side-by-side">
          <Label>Ban 3:</Label>
          <Input type="number" name="t1_ban3" onChange = {(event) => {
            setT1_ban3(event.target.value)
            setNewT1_ban3(event.target.value)
          }}/>

          <Label>Ban 3:</Label>
          <Input type="number" name="t2_ban4" onChange = {(event) => {
            setT2_ban3(event.target.value);
            setNewT2_ban3(event.target.value)
          }}/>
        </div>

        <div className="side-by-side">
          <Label>Ban 4:</Label>
          <Input type="number" name="t1_ban4" onChange = {(event) => {
            setT1_ban4(event.target.value)
            setNewT1_ban4(event.target.value)
          }}/>

          <Label>Ban 4:</Label>
          <Input type="number" name="t2_ban4" onChange = {(event) => {
            setT2_ban4(event.target.value)
            setNewT2_ban4(event.target.value)
          }}/>
        </div>

        <div className="side-by-side">
          <Label>Ban 5:</Label>
          <Input type="number" name="t1_ban5" onChange = {(event) => {
            setT1_ban5(event.target.value)
            setNewT1_ban5(event.target.value)
          }}/>  

          <Label>Ban 5:</Label>
          <Input type="number" name="t2_ban5" onChange = {(event) => {
            setT2_ban5(event.target.value)
            setNewT2_ban5(event.target.value)
          }}/>
        </div>
        <Button onClick = {addGame}> Add Game </Button>
        <Button onClick = {() => updateGame(gameId)}> Update Game </Button>
        <Button onClick={() => deleteGame(gameId)}> Delete Game </Button>     
      </div>
    </div>
  );
}
export default App;