const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// connect to database
const db = mysql.createConnection({
    host: '34.71.5.81',
    user: 'root',
    password:'dogfathers123',
    database:'DOG',
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// addGame  
app.post("/insert", (require, response) => {
    const gameId = require.body.gameId;
    const winner = require.body.winner;
    const t1_champ1id = require.body.t1_champ1id;
    const t1_champ2id = require.body.t1_champ2id;
    const t1_champ3id = require.body.t1_champ3id;
    const t1_champ4id = require.body.t1_champ4id;
    const t1_champ5id = require.body.t1_champ5id;
    const t1_ban1 = require.body.t1_ban1;
    const t1_ban2 = require.body.t1_ban2;
    const t1_ban3 = require.body.t1_ban3;
    const t1_ban4 = require.body.t1_ban4;
    const t1_ban5 = require.body.t1_ban5;
    const t2_champ1id = require.body.t2_champ1id;
    const t2_champ2id = require.body.t2_champ2id;
    const t2_champ3id = require.body.t2_champ3id;
    const t2_champ4id = require.body.t2_champ4id;
    const t2_champ5id = require.body.t2_champ5id;
    const t2_ban1 = require.body.t2_ban1;
    const t2_ban2 = require.body.t2_ban2;
    const t2_ban3 = require.body.t2_ban3;
    const t2_ban4 = require.body.t2_ban4;
    const t2_ban5 = require.body.t2_ban5;
    
    db.query("INSERT INTO Games (gameId, winner, t1_champ1id, t1_champ2id, t1_champ3id, t1_champ4id, t1_champ5id, t1_ban1, t1_ban2, t1_ban3, t1_ban4, t1_ban5,t2_champ1id, t2_champ2id, t2_champ3id, t2_champ4id, t2_champ5id, t2_ban1, t2_ban2, t2_ban3, t2_ban4, t2_ban5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
    [gameId, winner, t1_champ1id, t1_champ2id, t1_champ3id, t1_champ4id, t1_champ5id, t1_ban1, t1_ban2, t1_ban3, t1_ban4, t1_ban5,
            t2_champ1id, t2_champ2id, t2_champ3id, t2_champ4id, t2_champ5id, t2_ban1, t2_ban2, t2_ban3, t2_ban4, t2_ban5], 
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            response.send(result);
        }
    });
});

// getStats
app.get('/games', (require, response) => {
    db.query("SELECT champName, position, win_rate, pick_rate, ban_rate FROM ChampStat", 
    (err, result) => {
    if (err) {
         console.log(err)
    } else {
         response.send(result);
    }
    })
})

/*
app.get('/get', (require, response) => {
    db.query("SELECT gameId, winner, t1_champ1id, t1_champ2id, t1_champ3id, t1_champ4id, t1_champ5id, t1_ban1, t1_ban2, t1_ban3, t1_ban4, t1_ban5, t2_champ1id, t2_champ2id, t2_champ3id, t2_champ4id, t2_champ5id, t2_ban1, t2_ban2, t2_ban3, t2_ban4, t2_ban5",
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            response.send(result);
        }
    })
})
*/

// updateGame
app.put('/update', (require, response) => {
    var gameId = require.body.gameId;
    var winner = require.body.winner;
    var t1_champ1id = require.body.t1_champ1id;
    var t1_champ2id = require.body.t1_champ2id;
    var t1_champ3id = require.body.t1_champ3id;
    var t1_champ4id = require.body.t1_champ4id;
    var t1_champ5id = require.body.t1_champ5id;
    var t1_ban1 = require.body.t1_ban1;
    var t1_ban2 = require.body.t1_ban2;
    var t1_ban3 = require.body.t1_ban3;
    var t1_ban4 = require.body.t1_ban4;
    var t1_ban5 = require.body.t1_ban5;
    var t2_champ1id = require.body.t2_champ1id;
    var t2_champ2id = require.body.t2_champ2id;
    var t2_champ3id = require.body.t2_champ3id;
    var t2_champ4id = require.body.t2_champ4id;
    var t2_champ5id = require.body.t2_champ5id;
    var t2_ban1 = require.body.t2_ban1;
    var t2_ban2 = require.body.t2_ban2;
    var t2_ban3 = require.body.t2_ban3;
    var t2_ban4 = require.body.t2_ban4;
    var t2_ban5 = require.body.t2_ban5;

    db.query("UPDATE Games SET winner = ?, t1_champ1id = ?, t1_champ2id = ?, t1_champ3id = ?, t1_champ4id = ?, t1_champ5id = ?, t1_ban1 = ?, t1_ban2 = ?, t1_ban3 = ?, t1_ban4 = ?, t1_ban5 = ?,t2_champ1id = ?, t2_champ2id = ?, t2_champ3id = ?, t2_champ4id = ?, t2_champ5id = ?, t2_ban1 = ?, t2_ban2 = ?, t2_ban3 = ?, t2_ban4 = ?, t2_ban5 = ? WHERE gameId = ?", 
    [winner, t1_champ1id, t1_champ2id, t1_champ3id, t1_champ4id, t1_champ5id, t1_ban1, t1_ban2, t1_ban3, t1_ban4, t1_ban5,
        t2_champ1id, t2_champ2id, t2_champ3id, t2_champ4id, t2_champ5id, t2_ban1, t2_ban2, t2_ban3, t2_ban4, t2_ban5, gameId],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            response.send(result);
        }
    })
})

// deleteGame
app.put("/api/update/delete_game", (require, response) => {
    const gameId = require.body.gameId;

    var sqlDelete = "DELETE FROM Games WHERE gameId = ?";
    db.query(sqlDelete, [gameId], (err, result) => {
    if (err)
     console.log(error);
    })
});

// read advanced SQLs
app.get('/advanceSQL1', (require, response) => {
    db.query("SELECT C.title, C.name, C.role, S1.win_rate, S1.pick_rate From (Select * From ChampStat where position = 'Mid' and win_rate > 0.5 and pick_rate > 0.01) S1 join Championinfo C on S1.Champ_id = C.id Order by win_rate DESC;", 
    (err, result) => {
    if (err) {
        console.log(err)
    } else {
        response.send(result);
    }
    })
})

app.get('/advanceSQL2', (require, response) => {
    db.query("(Select C.title, C.name, C.role, S1.win_rate, S1.pick_rate, S1.ban_rate From Championinfo C join (Select * From ChampStat where position = 'Top'  and (ban_rate > 0.05 or pick_rate > 0.03)) S1 On C.id = S1.champ_id where C.role = 'Fighter') Union (Select C.title, C.name, C.role, S2.win_rate, S2.pick_rate, S2.ban_rate From Championinfo C join (Select * From ChampStat where position = 'Bot'  and (ban_rate > 0.05 or pick_rate > 0.03)) S2 On C.id = S2.champ_id where C.role = 'Marksmen') Order by name ", 
    (err, result) => {
    if (err) {
        console.log(err)
    } else {
        response.send(result);
    }
    })
})

//Search champ
app.put('/searchinput', (require, response) => {
    searchInput = require.body.searchInput
    console.log(searchInput)
    db.query('SELECT champName, position, win_rate, pick_rate, ban_rate FROM ChampStat Where champName LIKE "%' + searchInput + '%"',
    (err, result) => {
    if (err) {
        console.log("fail");
    } else {
        response.send(result);
    }
    });
});

//Search champ
app.put('/search', (require, response) => {
    searchInput = require.body.searchInput
    console.log(searchInput)
    db.query('SELECT id, name FROM Championinfo Where name LIKE "%' + searchInput + '%"',
    (err, result) => {
    if (err) {
        console.log("fail");
    } else {
        response.send(result);
    }
    });
});
app.get('/opchamp', (require, response) => {
        db.query("Select title, champName, position, role, win_rate, pick_rate, ban_rate from OP_Champ", 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                response.send(result);
            }
            })
    })
app.listen(3003, () => {
    console.log("running on port 3003");
})

//node index.js
