
// functions related to Scene

function Scene(value) {
    if (value == 'check_pum') {
        var d10 = Math.floor(Math.random() * 10);
        var result = expectationCheck[d10];

        document.getElementById("answer").innerHTML = result;
        document.getElementById("event").innerHTML = ``;
        
        document.getElementById("scene-selection").style.display = "none";
        document.getElementById('main').style.display = 'block';
    }
    else if (value == 'get_pum') {
        d10_type = Math.floor(Math.random() * 10);
        d10_skill = Math.floor(Math.random() * 10);
        d10_factor = Math.floor(Math.random() * 10);
        d10_pass = Math.floor(Math.random() * 10);
        d10_fail = Math.floor(Math.random() * 10);

        var type = sceneDesigner[d10_type];
        var skill = chellengeDesigner_skill[d10_skill];
        var factor = chellengeDesigner_factor[d10_factor];
        var pass = chellengeDesigner_success[d10_pass];
        var fail = chellengeDesigner_failure[d10_fail];

        document.getElementById("answer").innerHTML = `Scene: ${type}.`;
        document.getElementById("event").innerHTML = `Challenge: ${skill} - ${factor}<br>Stakes on Success: ${pass}<br>Stakes on Failure: ${fail}`;
        document.getElementById("scene-selection").style.display = "none";
        document.getElementById('main').style.display = 'block';
    }
} 


// function for generating things
function generate(value) {
// Complication
    if (value == 'complication_pum') {
        var d10_target = Math.floor(Math.random() * 10);
        var d20_circumstance = Math.floor(Math.random() * 20);

        target = complication_focus[d10_target];
        circumstance = complication_circumstance[d20_circumstance];
        
        document.getElementById("answer").innerHTML = `<b>${target}</b> is <b>${circumstance}</b>.`;
        document.getElementById("event").innerHTML = ``;
        
        document.getElementById('noise').play();
    }
    else if (value == 'complication_myzArk') {
        d36 = Math.floor(Math.random() * 36);
        comp = YZ_event_ark[d36];
        
        switch (comp) {
            case 'Danger Ahead':
                key = Object.keys(YZ_descriptions['events_ark'])[0];
                desc = YZ_descriptions['events_ark'][key];
                break;
            case 'Fight over a Project':
                key = Object.keys(YZ_descriptions['events_ark'])[1];
                desc = YZ_descriptions['events_ark'][key];
                break;
            case 'A Threat Escalates':
                // key = Object.keys(YZ_descriptions['events_ark'])[2];
                // desc = YZ_descriptions['events_ark'][key];
                d25 = Math.floor(Math.random() * 25);
                threat = YZ_threat[d25];
                comp = comp + `: ${threat}`;

                switch (threat) {
                    case 'Boss vs Boss':
                        key = Object.keys(YZ_descriptions['threat'])[0];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'A Child of the People':
                        key = Object.keys(YZ_descriptions['threat'])[1];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Derelict Oil Rig':
                        key = Object.keys(YZ_descriptions['threat'])[2];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Helldrivers':
                        key = Object.keys(YZ_descriptions['threat'])[3];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Hunger':
                        key = Object.keys(YZ_descriptions['threat'])[4];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Killing Machine':
                        key = Object.keys(YZ_descriptions['threat'])[5];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Last Drop':
                        key = Object.keys(YZ_descriptions['threat'])[6];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Lost Treasure':
                        key = Object.keys(YZ_descriptions['threat'])[7];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Man on the Beach':
                        key = Object.keys(YZ_descriptions['threat'])[8];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Missing Person':
                        key = Object.keys(YZ_descriptions['threat'])[9];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Murder in the Ark':
                        key = Object.keys(YZ_descriptions['threat'])[10];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Mutant Messiah':
                        key = Object.keys(YZ_descriptions['threat'])[11];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Mysterious Ruin':
                        key = Object.keys(YZ_descriptions['threat'])[12];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'A New Kind of Beast':
                        key = Object.keys(YZ_descriptions['threat'])[13];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Other People':
                        key = Object.keys(YZ_descriptions['threat'])[14];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Project Sabotaged':
                        key = Object.keys(YZ_descriptions['threat'])[15];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Revolution!':
                        key = Object.keys(YZ_descriptions['threat'])[16];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Sinkhole':
                        key = Object.keys(YZ_descriptions['threat'])[17];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Starfall':
                        key = Object.keys(YZ_descriptions['threat'])[18];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Wanderers':
                        key = Object.keys(YZ_descriptions['threat'])[19];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Zone Cult':
                        key = Object.keys(YZ_descriptions['threat'])[20];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Zone Fever':
                        key = Object.keys(YZ_descriptions['threat'])[21];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Zone-Ghouls Attack':
                        key = Object.keys(YZ_descriptions['threat'])[22];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Zone Monster':
                        key = Object.keys(YZ_descriptions['threat'])[23];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Zone Quakes':
                        key = Object.keys(YZ_descriptions['threat'])[24];
                        desc = YZ_descriptions['threat'][key];
                        break;
                }
                break;
            case 'Fight over Gear':
                key = Object.keys(YZ_descriptions['events_ark'])[3];
                desc = YZ_descriptions['events_ark'][key];
                break;
            case 'An Appealing Offer':
                key = Object.keys(YZ_descriptions['events_ark'])[4];
                desc = YZ_descriptions['events_ark'][key];
                break;
            case 'A PC Gets into Trouble':
                key = Object.keys(YZ_descriptions['events_ark'])[5];
                desc = YZ_descriptions['events_ark'][key];
                break;
            case 'An NPC Gets into Trouble':
                key = Object.keys(YZ_descriptions['events_ark'])[6];
                desc = YZ_descriptions['events_ark'][key];
                break;
            case 'PC vs PC':
                key = Object.keys(YZ_descriptions['events_ark'])[7];
                desc = YZ_descriptions['events_ark'][key];
                break;
            case 'Unwanted Consequences':
                key = Object.keys(YZ_descriptions['events_ark'])[8];
                desc = YZ_descriptions['events_ark'][key];
                break;
            case 'A Glimpse of the Dream':
                key = Object.keys(YZ_descriptions['events_ark'])[9];
                desc = YZ_descriptions['events_ark'][key];
                break;
        }
        document.getElementById("answer").innerHTML = `<b>${comp}</b>`;
        document.getElementById("event").innerHTML = `${desc}`;
    }
    else if (value == 'complication_myzZone') {
        d36 = Math.floor(Math.random() * 36);
        comp = YZ_event_zone[d36];

        switch (comp) {
            case 'Beacon in the Distance':
                key = Object.keys(YZ_descriptions['events_zone'])[0];
                desc = YZ_descriptions['events_zone'][key];
                break;
            case 'Danger Ahead':
                key = Object.keys(YZ_descriptions['events_zone'])[1];
                desc = YZ_descriptions['events_zone'][key];
                break;
            case 'A Hard Choice':
                key = Object.keys(YZ_descriptions['events_zone'])[2];
                desc = YZ_descriptions['events_zone'][key];
                break;
            case 'Gear is Lost':
                key = Object.keys(YZ_descriptions['events_zone'])[3];
                desc = YZ_descriptions['events_zone'][key];
                break;
            case 'Sleepless Night':
                key = Object.keys(YZ_descriptions['events_zone'])[4];
                desc = YZ_descriptions['events_zone'][key];
                break;
            case 'A PC Gets into Trouble':
                key = Object.keys(YZ_descriptions['events_zone'])[5];
                desc = YZ_descriptions['events_zone'][key];
                break;
            case 'An NPC Gets into Trouble':
                key = Object.keys(YZ_descriptions['events_zone'])[6];
                desc = YZ_descriptions['events_zone'][key];
                break;
            case 'PC vs PC':
                key = Object.keys(YZ_descriptions['events_zone'])[7];
                desc = YZ_descriptions['events_zone'][key];
                break;
            case 'The Zone vs Everyone':
                key = Object.keys(YZ_descriptions['events_zone'])[8];
                desc = YZ_descriptions['events_zone'][key];
                break;
            case 'An Unexpected Encounter':
                key = Object.keys(YZ_descriptions['events_zone'])[9];
                desc = YZ_descriptions['events_zone'][key];
                break;
        }
        document.getElementById("answer").innerHTML = `<b>${comp}</b>`;
        document.getElementById("event").innerHTML = `${desc}`;
    }
// Combat
    else if (value == 'combat_pum') {
        d20_mod = Math.floor(Math.random() * 20);
        cbt_modifier = combatModifier[d20_mod];
        document.getElementById("answer").innerHTML = `Here's the current combat situation: <b>${cbt_modifier}</b>.`;
        document.getElementById("event").innerHTML = ``;
    }
// Adventure
    else if (value == 'adv_dr') {
        d18_goal = Math.floor(Math.random() * 18);
        d18_target = Math.floor(Math.random() * 18);
        // Randomly select between goal1 and goal2
        let goalKey = Math.random() < 0.5 ? 'goal1' : 'goal2';
        d6_threat = Math.floor(Math.random() * 6);
        d20_loc = Math.floor(Math.random() * 20);
        d6_loc = Math.floor(Math.random() * 6);

            goal_a = Object.keys(devil_goal[`${goalKey}`])[0];
            target_a = Object.keys(devil_goal[`${goalKey}`])[1];
        goal = devil_goal[`${goalKey}`][goal_a][d18_goal];
        target = devil_goal[`${goalKey}`][target_a][d18_target];

        loc = devil_location[Object.keys(devil_location)[d6_loc]][d20_loc];
        threat = dr_threat[d6_threat];
        var theGoal = `You will be tasked to <b>${goal} ${target}</b>, which is nearby this landmark: <b>${loc}</b>.`; 
        var antagonist = ``;
        var event = ``;


        if (threat == 'Antagonist') {
            d19_behavior = Math.floor(Math.random() * 19);
            d19_type = Math.floor(Math.random() * 18);

            behavior = dr_d19_behaviour[d19_behavior];
            type = dr_d19_type[d19_type];

            antagonist = `But beware of the <b>${behavior} ${type}</b>, which might prove a challenge.`;
        }
        else if (threat = 'Event') {
            d19_event = Math.floor(Math.random() * 18);
            
            situation = dr_d19_situation[d19_event];
            
            event = `But beware of the <b>${situation}</b>, which might prove a challenge.`;
        }
        document.getElementById("answer").innerHTML = '';
        document.getElementById("event").innerHTML = `${theGoal} ${antagonist} ${event}`;
    }
    else if (value == 'adv_myz') {
        d25 = Math.floor(Math.random() * 25);
        threat = YZ_threat[d25];

                switch (threat) {
                    case 'Boss vs Boss':
                        key = Object.keys(YZ_descriptions['threat'])[0];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'A Child of the People':
                        key = Object.keys(YZ_descriptions['threat'])[1];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Derelict Oil Rig':
                        key = Object.keys(YZ_descriptions['threat'])[2];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Helldrivers':
                        key = Object.keys(YZ_descriptions['threat'])[3];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Hunger':
                        key = Object.keys(YZ_descriptions['threat'])[4];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Killing Machine':
                        key = Object.keys(YZ_descriptions['threat'])[5];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Last Drop':
                        key = Object.keys(YZ_descriptions['threat'])[6];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Lost Treasure':
                        key = Object.keys(YZ_descriptions['threat'])[7];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Man on the Beach':
                        key = Object.keys(YZ_descriptions['threat'])[8];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Missing Person':
                        key = Object.keys(YZ_descriptions['threat'])[9];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Murder in the Ark':
                        key = Object.keys(YZ_descriptions['threat'])[10];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Mutant Messiah':
                        key = Object.keys(YZ_descriptions['threat'])[11];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Mysterious Ruin':
                        key = Object.keys(YZ_descriptions['threat'])[12];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'A New Kind of Beast':
                        key = Object.keys(YZ_descriptions['threat'])[13];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Other People':
                        key = Object.keys(YZ_descriptions['threat'])[14];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Project Sabotaged':
                        key = Object.keys(YZ_descriptions['threat'])[15];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Revolution!':
                        key = Object.keys(YZ_descriptions['threat'])[16];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Sinkhole':
                        key = Object.keys(YZ_descriptions['threat'])[17];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Starfall':
                        key = Object.keys(YZ_descriptions['threat'])[18];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Wanderers':
                        key = Object.keys(YZ_descriptions['threat'])[19];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Zone Cult':
                        key = Object.keys(YZ_descriptions['threat'])[20];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Zone Fever':
                        key = Object.keys(YZ_descriptions['threat'])[21];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'Zone-Ghouls Attack':
                        key = Object.keys(YZ_descriptions['threat'])[22];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Zone Monster':
                        key = Object.keys(YZ_descriptions['threat'])[23];
                        desc = YZ_descriptions['threat'][key];
                        break;
                    case 'The Zone Quakes':
                        key = Object.keys(YZ_descriptions['threat'])[24];
                        desc = YZ_descriptions['threat'][key];
                        break;
                }
        document.getElementById("answer").innerHTML = `<b>${threat}</b>`;
        document.getElementById("event").innerHTML = `${desc}`;
    }
// Encounter
    else if (value == 'enc_dr') {
        d6 = Math.floor(Math.random() * 6);
        d20 = Math.floor(Math.random() * 20);

        if (d6 => 0 && d6 <2) {
            enc = 'encounter1';
        }
        else if (d6 => 2 && d6 <4) {
            enc = 'encounter2';
        }
        else {
            enc = 'encounter3';
        }
        encounter = devil_encounter[`${enc}`][d20];
        document.getElementById("answer").innerHTML = `<b><i>${encounter}</i></b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value == 'enc_paeV') {
        d4 = Math.floor(Math.random() * 4);
        d20 = Math.floor(Math.random() * 20);

        bldg = Object.keys(vehicleEncounters)[d4];
        result = vehicleEncounters[bldg][d20];
        document.getElementById("answer").innerHTML = `<b>You ${result}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value == 'enc_paeBandit') {
        d4 = Math.floor(Math.random() * 4);
        d20 = Math.floor(Math.random() * 20);

        ind = Object.keys(banditEncounters)[d4];
        result = banditEncounters[ind][d20];
        document.getElementById("answer").innerHTML = `You stumbled upon the <b>${result}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value == 'enc_paeRad') {
        d2 = Math.floor(Math.random() * 2);
        d20 = Math.floor(Math.random() * 20);

        ind = Object.keys(radiationHazards)[d2];
        result = radiationHazards[ind][d20];
        document.getElementById("answer").innerHTML = `You stumbled upon <b>${result}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value == 'enc_paeAstral') {
        d2 = Math.floor(Math.random() * 2);
        d20 = Math.floor(Math.random() * 20);

        ind = Object.keys(astralPhenomena)[d2];
        result = astralPhenomena[ind][d20];
        document.getElementById("answer").innerHTML = `<b>${result}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value == 'enc_paeArt') {
        d2 = Math.floor(Math.random() * 2);
        d20 = Math.floor(Math.random() * 20);

        ind = Object.keys(artifacts)[d2];
        result = artifacts[ind][d20];
        document.getElementById("answer").innerHTML = `<b>${result}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value == 'enc_paeBarter') {
        d2 = Math.floor(Math.random() * 2);
        d20 = Math.floor(Math.random() * 20);

        ind = Object.keys(tradingEncounters)[d2];
        result = tradingEncounters[ind][d20];
        document.getElementById("answer").innerHTML = `<b>${result}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value == 'enc_paeRadio') {
        if (state == 'on') {
            d4 = Math.floor(Math.random() * 4);
            d20 = Math.floor(Math.random() * 20);
    
            ind = Object.keys(radioTransmissions)[d4];
            result = radioTransmissions[ind][d20];
            document.getElementById("answer").innerHTML = `<b>${result}</b>`;
            document.getElementById("event").innerHTML = ``;
            document.getElementById('noise').play();
        }
        else {
            document.getElementById("answer").innerHTML = '';
            document.getElementById("event").innerHTML = '';}
    }
    else if (value == 'enc_myz') {
        d6_type = Math.floor(Math.random() * 6);
        type = YZ_sector_threatType[d6_type];
        d36_focus = Math.floor(Math.random() * 36);
        var focus = ``;
        var desc = ``;
        switch (type) {
             case 'Humanoid':
                 focus = YZ_sector_threat_humanoid[d36_focus];
                switch (focus) {
                    case 'Amnesiac':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[0];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Beast Mutants':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[1];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Cannibals':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[2];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Doom Cultists':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[3];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Exiled Mutants':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[4];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Expedition from another Ark':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[5];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Helldrivers':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[6];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Morlocks':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[7];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Nova Cultists':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[8];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Patrol from the Ark':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[9];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Scrap Oracle':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[10];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Wanderers':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[11];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Water Trader':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[12];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Wreckers':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[13];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                    case 'Zone-Ghouls':
                        key = Object.keys(YZ_descriptions['threat_humanoid'])[14];
                        desc = YZ_descriptions['threat_humanoid'][key];
                        break;
                }
                break;
             case 'Monster':
                 focus = YZ_sector_threat_monster[d36_focus];
                 switch (focus) {
                    case 'Acid Grass':
                        key = Object.keys(YZ_descriptions['threat_monster'])[0];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Air Jellies':
                        key = Object.keys(YZ_descriptions['threat_monster'])[1];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Automaton':
                        key = Object.keys(YZ_descriptions['threat_monster'])[2];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Bitterbeasts':
                        key = Object.keys(YZ_descriptions['threat_monster'])[3];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Deathworm':
                        key = Object.keys(YZ_descriptions['threat_monster'])[4];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Devourer':
                        key = Object.keys(YZ_descriptions['threat_monster'])[5];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Grazers':
                        key = Object.keys(YZ_descriptions['threat_monster'])[6];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Gutfish (infected water)':
                        key = Object.keys(YZ_descriptions['threat_monster'])[7];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Killer Tree':
                        key = Object.keys(YZ_descriptions['threat_monster'])[8];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Mind Mosquitoes':
                        key = Object.keys(YZ_descriptions['threat_monster'])[9];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Nightmare Flowers':
                        key = Object.keys(YZ_descriptions['threat_monster'])[10];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Parasite Fungus':
                        key = Object.keys(YZ_descriptions['threat_monster'])[11];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Razorback':
                        key = Object.keys(YZ_descriptions['threat_monster'])[12];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Rot Ants':
                        key = Object.keys(YZ_descriptions['threat_monster'])[13];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Rotfish':
                        key = Object.keys(YZ_descriptions['threat_monster'])[14];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Scrap Crows':
                        key = Object.keys(YZ_descriptions['threat_monster'])[15];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Trash Hawk':
                        key = Object.keys(YZ_descriptions['threat_monster'])[16];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Worm Swarm':
                        key = Object.keys(YZ_descriptions['threat_monster'])[17];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Zone Dogs':
                        key = Object.keys(YZ_descriptions['threat_monster'])[18];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Zone Leeches':
                        key = Object.keys(YZ_descriptions['threat_monster'])[19];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Zone Rats':
                        key = Object.keys(YZ_descriptions['threat_monster'])[20];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Zone Spider':
                        key = Object.keys(YZ_descriptions['threat_monster'])[21];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                    case 'Zone Wasps':
                        key = Object.keys(YZ_descriptions['threat_monster'])[22];
                        desc = YZ_descriptions['threat_monster'][key];
                        break;
                }
                break;
            case 'Phenomenon':
                focus = YZ_sector_threat_phenomenon[d36_focus];
                switch (focus) {
                    case 'Acid Rain':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[0];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Ash Storm':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[1];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Dust Tornado':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[2];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Electric Storm':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[3];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Ghost Lights':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[4];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Inertia Field':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[5];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Magnetic Field':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[6];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Mirage':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[7];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Mud Puddles':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[8];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Night Lights':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[9];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Obelisk':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[10];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Pillars of Light':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[11];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Rot Hotspot':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[12];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Rot Wind':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[13];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Sinkhole':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[14];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Temperature Drop / Heat Wave':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[15];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Unexploded Ordnance':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[16];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Vacuum':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[17];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                    case 'Zone Smog':
                        key = Object.keys(YZ_descriptions['threat_phenomenon'])[18];
                        desc = YZ_descriptions['threat_phenomenon'][key];
                        break;
                }
                break;
        }
        document.getElementById("answer").innerHTML = `<b>${type}</b> - <b>${focus}</b>`;
        document.getElementById("event").innerHTML = `<b>${desc}</b>`;
    }
// Group
else if (value == 'pae_surv') {
    d2 = Math.floor(Math.random() * 2);
    d20 = Math.floor(Math.random() * 20);

    bldg = Object.keys(survivorGroups)[d2];
    result = survivorGroups[bldg][d20];
    document.getElementById("answer").innerHTML = `<b>${result}</b>`;
    document.getElementById("event").innerHTML = ``;
}
// Loot
    else if (value == 'loot_dr') {
        d6 = Math.floor(Math.random() * 6);
        d20 = Math.floor(Math.random() * 20);

        loot_a = Object.keys(devil_loot)[d6];
        loot = devil_loot[loot_a][d20];
        document.getElementById("answer").innerHTML = `<b>${loot}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value =='loot_myz'){
        d50_artiact = Math.floor(Math.random() * 50);
        d216_scrap = Math.floor(Math.random() * 216);
        d10 = Math.floor(Math.random() * 10);
        loot = '';
        result = ``;
        result1 = ``;
        
        if (d10 > 7){
            loot = YZ_loot_artifact[d50_artiact];
            result = `<b>${loot}</b>.`
            result1 = `You found an Artifact!`
        }
        else {
            loot = YZ_loot_scrap[d216_scrap];
            result = `<b>${loot}</b>`
            result1 = `You found something..`
        }
        
        document.getElementById("answer").innerHTML = `${result1}`;
        document.getElementById("event").innerHTML = `${result}`;
    }
    else if (value == 'loot_paeB') {
        d4 = Math.floor(Math.random() * 4);
        d20 = Math.floor(Math.random() * 20);

        bldg = Object.keys(scavengeEncounters_building)[d4];
        loot = scavengeEncounters_building[bldg][d20];
        document.getElementById("answer").innerHTML = `<b>${loot}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value == 'loot_paeW') {
        d4 = Math.floor(Math.random() * 4);
        d20 = Math.floor(Math.random() * 20);

        bldg = Object.keys(scavengeEncounters_wasteland)[d4];
        loot = scavengeEncounters_wasteland[bldg][d20];
        document.getElementById("answer").innerHTML = `<b>${loot}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
// Location
    else if (value == 'loc_pae') {
        d2 = Math.floor(Math.random() * 2);
        d20 = Math.floor(Math.random() * 20);

        ind = Object.keys(ruinedLandmarks)[d2];
        result = ruinedLandmarks[ind][d20];
        document.getElementById("answer").innerHTML = `<b>${result}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    // MYZ Sector Generation
    else if (value == 'loc_myz') {
        d10 = Math.floor(Math.random() * 10)+1;
        threatLvl = Math.floor(Math.random() * 12)+1;
        d36_rot = Math.floor(Math.random() * 36);
        rotLevel = YZ_sector_rotLevel[d36_rot];
        // roll D6 up to threatLevel
        ones_counter = 0;
        sixes_counter = 0;
        for (let i = 0; i < threatLvl; i++) {
            d6 = Math.floor(Math.random() * 6)+1;
            if (d6 == 1) {
                ones_counter++;
            }
            else if (d6 == 6) {
                sixes_counter++;
            }
        }        
        barren = ``;
        // Threat Generation
        if (ones_counter > 0) {
          
            threat = `Threat detected! <b>[Tier ${ones_counter}]</b> <i>***Find out what, in the [ENCOUNTER] section***</i>`;

        }
        else {
            threat = `No threat detected..`;
        }
        // environment generation
        if (d10+parseInt(selectedCF) > 10) {
            d36_envi = Math.floor(Math.random() * 36);
            set = ``;
            envi1 = YZ_sectorEnvironment[d36_envi];
            if (envi1 == 'Huge Crater') {
                envi = `You find yourself in a sector with a <b>${envi1}</b>.`;
            }
            else {
                envi = `This sector is mostly <b>${envi1}</b>.`;
            }

            if (envi1 == 'Derelict Industries') {
                d36 = Math.floor(Math.random() * 36);
                ruin = YZ_sector_ruins_industry[d36];
                if (sixes_counter > 0) {
                    artifact = `<b>${sixes_counter} artifact/s</b> rumored to be hidden in the ruins..`;
                }
                else {
                    artifact = `<b>Nothing of interest can be scavenged here..</b>`;
                }
                
                switch (ruin) {
                    case 'Factory':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[0];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                    case 'Military Base':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[1];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                    case 'Oil Cistern':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[2];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                    case 'Pipeline':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[3];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                    case 'Purification Plant':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[4];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                    case 'Power Line':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[5];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                    case 'Radio Mast':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[6];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                    case 'Refinery':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[7];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                    case 'Rubbish Dump':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[8];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                    case 'Shipwreck':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[9];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                    case 'Shooting Range':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[10];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                    case 'Windmill':
                        key = Object.keys(YZ_descriptions['ruins_industry'])[11];
                        ruin_desc = YZ_descriptions['ruins_industry'][key];
                        break;
                }
                ruin = `You see this <b>${ruin}</b> in the distance..`;
            }
            else if (envi1 == 'Settlement') {
                set = `Looking around, you see nothing of importance.. but then you spot, at a distance, of what looks like a <b>Settlement</b>.`;
                envi = ``;
                ruin = ``;
                ruin_desc = ``;
                artifact = ``;
                threat = ``;
            }
            else if (envi1 == 'Overgrown Ruins' || envi1 == 'Crumbling Ruins' || envi1 == 'Decayed Ruins' || envi1 == 'Unscathed Ruins') {
                d36 = Math.floor(Math.random() * 36);
                ruin = YZ_sector_ruins_normal[d36];
                if (sixes_counter > 0) {
                    artifact = `<b>${sixes_counter} artifact/s</b> rumored to be hidden in the ruins..`;
                }
                else {
                    artifact = `<b>Nothing of interest can be scavenged here..</b>`;
                }
                ruin1 = ``;

                switch (ruin) {
                    case 'Airplane Wreck':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[0];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Amusement Park':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[1];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Battlefield':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[2];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Bus Station':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[3];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Car Park':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[4];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Church':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[5];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Cinema':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[6];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Crater':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[7];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Dilapidated Mansion':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[8];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Fast Food Joint':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[9];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Gas Station':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[10];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Highway':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[11];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Hospital':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[12];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Hunting Store':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[13];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Mall':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[14];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Marina':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[15];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Museum':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[16];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Office Building':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[17];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Overgrown Park':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[18];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Playground':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[19];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Police Station':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[20];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Radio Station':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[21];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Residential Blocks':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[22];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Road Tunnel':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[23];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Ruined Bridge':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[24];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'School':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[25];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Shelter':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[26];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Skyscraper':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[27];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Sports Center':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[28];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Suburbia':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[29];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Subway Station':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[30];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Supermarket':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[31];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Swimming Hall':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[32];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Tank':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[33];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Theater':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[34];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                    case 'Train Station':
                        key = Object.keys(YZ_descriptions['ruins_normal'])[35];
                        ruin_desc = YZ_descriptions['ruins_normal'][key];
                        break;
                }
                ruin = `You see this <b>${ruin}</b> in the distance..`;
            }
            else {
                set = ``;
                ruin = `Nothing caught your attention..`;
                ruin_desc = `_______________________________________________________________________________`;
                artifact = `<b>Nothing of interest can be scavenged here..</b>`;
            }
             
        }
        else {
            d36 = Math.floor(Math.random() * 36);
            mood = YZ_moodElements[d36];
            set = ``;
            envi = ``;
            ruin = ``;
            ruin_desc = ``;
            artifact = ``;
            threat = ``;
            barren = `The sector is barren.. but what follows caught your attention..</br>
            <b>${mood}</b>`;
        }

        document.getElementById("answer").innerHTML = `${envi}${set}${barren}`;
        document.getElementById("event").innerHTML = `${ruin} </br> ${ruin_desc} </br> <b>Rot Level ${rotLevel}</b> </br> ${artifact} </br> ${threat}`;
    }
// Event
    else if (value == 'event_paeWeather') {
        d2 = Math.floor(Math.random() * 2);
        d20 = Math.floor(Math.random() * 20);

        ind = Object.keys(weatherConditions)[d2];
        result = weatherConditions[ind][d20];
        document.getElementById("answer").innerHTML = `<b>${result}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value == 'event_paeCond') {
        d2 = Math.floor(Math.random() * 2);
        d20 = Math.floor(Math.random() * 20);

        ind = Object.keys(environmentalConditions)[d2];
        result = environmentalConditions[ind][d20];
        document.getElementById("answer").innerHTML = `<b>${result}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value == 'event_paeSick') {
        d2 = Math.floor(Math.random() * 2);
        d20 = Math.floor(Math.random() * 20);

        ind = Object.keys(diseaseOutbreaks)[d2];
        result = diseaseOutbreaks[ind][d20];
        document.getElementById("answer").innerHTML = `<b>${result}</b>`;
        document.getElementById("event").innerHTML = ``;
    }
    else if (value == 'enc_paeCrt') {
        d2_common = Math.floor(Math.random() * 2);
        d20_common = Math.floor(Math.random() * 20);
        d2_urban = Math.floor(Math.random() * 2);
        d20_urban = Math.floor(Math.random() * 20);
        d2_desert = Math.floor(Math.random() * 2);
        d20_desert = Math.floor(Math.random() * 20);
        d2_volcanic = Math.floor(Math.random() * 2);
        d20_volcanic = Math.floor(Math.random() * 20);
        d2_swamp = Math.floor(Math.random() * 2);
        d20_swamp = Math.floor(Math.random() * 20);
        d2_forest = Math.floor(Math.random() * 2);
        d20_forest = Math.floor(Math.random() * 20);
        d2_tropical = Math.floor(Math.random() * 2);
        d20_tropical = Math.floor(Math.random() * 20);
        d2_polar = Math.floor(Math.random() * 2);
        d20_polar = Math.floor(Math.random() * 20);

        common1 = Object.keys(creatureEncounters_common)[d2_common];
        common = creatureEncounters_common[common1][d20_common];
        urban1 = Object.keys(creatureEncounters_urban)[d2_urban];
        urban = creatureEncounters_urban[urban1][d20_urban];
        desert1 = Object.keys(creatureEncounters_desert)[d2_desert];
        desert = creatureEncounters_desert[desert1][d20_desert];
        volcanic1 = Object.keys(creatureEncounters_volcanic)[d2_volcanic];
        volcanic = creatureEncounters_volcanic[volcanic1][d20_volcanic];
        swamp1 = Object.keys(creatureEncounters_swamp)[d2_swamp];
        swamp = creatureEncounters_swamp[swamp1][d20_swamp];
        forest1 = Object.keys(creatureEncounters_forest)[d2_forest];
        forest = creatureEncounters_forest[forest1][d20_forest];
        tropical1 = Object.keys(creatureEncounters_tropical)[d2_tropical];
        tropical = creatureEncounters_tropical[tropical1][d20_tropical];
        polar1 = Object.keys(creatureEncounters_polar)[d2_polar];
        polar = creatureEncounters_polar[polar1][d20_polar];

        document.getElementById("answer").innerHTML = `***Pick the appropriate Area***`;
        document.getElementById("event").innerHTML = `
        <ul>
            <li>[Common Area] <b>${common}</b></li>
            <li>[Desert Area] <b>${desert}</b></li>
            <li>[Urban Area] <b>${urban}</b></li>
            <li>[Forest Area] <b>${forest}</b></li>
            <li>[Tropical Area] <b>${tropical}</b></li>
            <li>[Volcanic Area] <b>${volcanic}</b></li>
            <li>[Polar Area] <b>${polar}</b></li>
            <li>[Swamp Area] <b>${swamp}</b></li>
        </ul>`;
        
    }
// Exit
    else {
        document.getElementById("answer").innerHTML = '....';
        document.getElementById("event").innerHTML = '';   
        document.getElementById(value).style.display = "none";
        document.getElementById('more-selection').style.display = 'block';
    }
}

// function for opening sections
function openDropdown2(value) {

    if (value == 'location-selection') {
        document.getElementById("location-selection").style.display = "block";
        document.getElementById('loc-selection').style.display = 'none';
    }

    else if (value == 'back2home') {
        document.getElementById("more-selection").style.display = "none";
        document.getElementById('main').style.display = 'block';
    }
    else if (value == 'randomQ-selection') {
        document.getElementById("randomQ-selection").style.display = "block";
        document.getElementById('q-selection').style.display = 'none';
    }

    document.getElementById(value).style.display = "block";
    document.getElementById('more-selection').style.display = 'none';

}

// function for random question
function randomQ(value) {
    if (value == 'loc') {
        d36 = Math.floor(Math.random() * 36);
        result = location_Q[d36];
        document.getElementById("answer").innerHTML = `[<b>${result}</b>]`;
        document.getElementById("event").innerHTML = ``;

        document.getElementById("randomQ-selection").style.display = "none";
        document.getElementById('main').style.display = 'block';
        document.getElementById('selected-q').innerHTML = `(Random Q - Location)`;

    }
    else if (value == 'travel') {
        d36 = Math.floor(Math.random() * 36);
        result = travel_Q[d36];
        document.getElementById("answer").innerHTML = `[<b>${result}</b>]`;
        document.getElementById("event").innerHTML = ``;

        document.getElementById("randomQ-selection").style.display = "none";
        document.getElementById('main').style.display = 'block';
        document.getElementById('selected-q').innerHTML = `(Random Q - Travel)`;
    }
    else if (value == 'social') {
        d36 = Math.floor(Math.random() * 36);
        result = social_Q[d36];
        document.getElementById("answer").innerHTML = `[<b>${result}</b>]`;
        document.getElementById("event").innerHTML = ``;

        document.getElementById("randomQ-selection").style.display = "none";
        document.getElementById('main').style.display = 'block';
        document.getElementById('selected-q').innerHTML = `(Random Q - Social)`;
    }
    else if (value == 'sit') {
        d36 = Math.floor(Math.random() * 36);
        result = situation_Q[d36];
        document.getElementById("answer").innerHTML = `[<b>${result}</b>]`;
        document.getElementById("event").innerHTML = ``;

        document.getElementById("randomQ-selection").style.display = "none";
        document.getElementById('main').style.display = 'block';
        document.getElementById('selected-q').innerHTML = `(Random Q - Situation)`;
    }
}

//Function for randomEvent2
function callOut2() {
    setMeanings();
    if (document.getElementById('selected-q').innerHTML.includes('Random Q')) {
        scn='';
        evnt = `Looks like an event has transpired..(${fcus}). 
        _${action} || _${descriptor} || _${loc} || _${char} || _${obj}`;
        }
    };

    // Function for details
 function getDetails() {
    setMeanings();
    scn='';
    details = `<b>**interpret the details below**</b> </br>
    _${action} || _${descriptor} </br> _${loc} || _${char} </br> _${obj}`;
}
