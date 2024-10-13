Delimiter //
Create Procedure OP()

Begin
  Declare curgameId bigInt;
		Declare cur_id INT;
        Declare cur_title VARCHAR(30);
        Declare cur_name VARCHAR(20);
        Declare cur_role VARCHAR(20);
        Declare cur_win Real;
        Declare cur_pick Real;
        Declare cur_ban Real;
        Declare avg_win Real;
        Declare exit_loop BOOLEAN DEFAULT FALSE;
        
        Declare cur Cursor FOR (SELECT C.id, C.title, C.name, C.role, S1.win_rate, S1.pick_rate, S1.ban_rate
			From (Select * From ChampStat where position = 'Top') S1 
            join Championinfo C on S1.Champ_id = C.id 
            Where C.role = 'Tank' 
            Order by C.name);
        Declare CONTINUE HANDLER FOR NOT found SET exit_loop = TRUE;
        
  OPEN cur;
        loop1: LOOP
              FETCH cur INTO cur_id, cur_title, cur_name, cur_role, cur_win, cur_pick, cur_ban;
              IF cur_id = NULL THEN
                LEAVE loop1;
              END IF;
              
              IF exit_loop THEN
                LEAVE loop1;
              END IF;
              Set avg_win = (Select avg(win_rate) from (Select * From ChampStat where position = 'Top') S1 
				join Championinfo C on S1.Champ_id = C.id 
				Where C.role = 'Tank' 
				Group by role);
			  If (cur_win > avg_win or cur_pick + cur_ban > 0.2) then
				Insert into OP_Champ values (cur_id, cur_title, cur_name, cur_role, cur_win, cur_pick, cur_ban);

			  End if;

        END LOOP loop1;
        
        CLOSE cur;
        End//
Delimiter ;