DELIMITER //

CREATE TRIGGER Create1
 After INSERT ON Games
  FOR EACH ROW
    BEGIN
  If new.winner = 1 Then
	insert into Winteam select gameId, t1_champ1id, t1_champ2id, t1_champ3id, t1_champ4id, t1_champ5id From Games where gameId = new.gameId;
  Else 
	insert into Winteam select gameId, t2_champ1id, t2_champ2id, t2_champ3id, t2_champ4id, t2_champ5id From Games where gameId = new.gameId;
  End if;
  Insert into ban(gameId, ban_1, ban_2) Values (new.gameId, new.t1_ban1, new.t2_ban1);
  Insert into ban(gameId, ban_1, ban_2) Values (new.gameId, new.t1_ban2, new.t2_ban2);
  Insert into ban(gameId, ban_1, ban_2) Values (new.gameId, new.t1_ban3, new.t2_ban3);
  Insert into ban(gameId, ban_1, ban_2) Values (new.gameId, new.t1_ban4, new.t2_ban4);
  Insert into ban(gameId, ban_1, ban_2) Values (new.gameId, new.t1_ban5, new.t2_ban5);
  if (Select count(*) from games) MOD 50 = 0 Then 
		call Bot1();
        call Bot2();
        call Jungle();
        call Jungle2();
        call Mid1();
        call Mid2();
        call Sup1();
        call Sup2();
        call Top();
        call Top2();
  End if;
 END//
        
DELIMITER ;

            
		