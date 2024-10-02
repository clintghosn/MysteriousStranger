function defineNPC(value) {
    // var element = document.getElementById('more-selection');
    // element.style.display = 'none';
    // document.getElementById('main').style.display = 'block';
    document.getElementById('noise').play();
    
    if (value == 'UNE') {
         if (selectedCF >0) {
         //Who is the NPC?
         word1 = advancedDesc.npcModifier[(Math.floor(Math.random() * advancedDesc.npcModifier.length))];
         word2 = advancedDesc.npcNoun[(Math.floor(Math.random() * advancedDesc.npcNoun.length))];
         npc_modifier = `<b>${word1}</b>`;
         npc_noun = `<b>${word2}</b>`;
         
         //What are their motivations?
         d100_verb1 = Math.floor(Math.random() * 100);
         d100_noun1 = Math.floor(Math.random() * 100);
         d100_verb2 = Math.floor(Math.random() * 100);
         d100_noun2 = Math.floor(Math.random() * 100);
         d100_verb3 = Math.floor(Math.random() * 100);
         d100_noun3 = Math.floor(Math.random() * 100);
 
         if (d100_noun1 >= 0 && d100_noun1 <= 19) {
             column_noun1 = 1
         }
         else if (d100_noun1 >= 20 && d100_noun1 <= 39) {
             column_noun1 = 2
         }
         else if (d100_noun1 >= 40 && d100_noun1 <= 59) {
             column_noun1 = 3
         }
         else if (d100_noun1 >= 60 && d100_noun1 <= 79) {
             column_noun1 = 4
         }
         else if (d100_noun1 >= 80 && d100_noun1 <= 99) {
             column_noun1 = 5
         }
 
         if (d100_noun2 >= 0 && d100_noun2 <= 19) {
             column_noun2 = 1
         }
         else if (d100_noun2 >= 20 && d100_noun2 <= 39) {
             column_noun2 = 2
         }
         else if (d100_noun2 >= 40 && d100_noun2 <= 59) {
             column_noun2 = 3
         }
         else if (d100_noun2 >= 60 && d100_noun2 <= 79) {
             column_noun2 = 4
         }
         else if (d100_noun2 >= 80 && d100_noun2 <= 99) {
             column_noun2 = 5
         }
         
         if (d100_noun3 >= 0 && d100_noun3 <= 19) {
             column_noun3 = 1
         }
         else if (d100_noun3 >= 20 && d100_noun3 <= 39) {
             column_noun3 = 2
         }
         else if (d100_noun3 >= 40 && d100_noun3 <= 59) {
             column_noun3 = 3
         }
         else if (d100_noun3 >= 60 && d100_noun3 <= 79) {
             column_noun3 = 4
         }
         else if (d100_noun3 >= 80 && d100_noun3 <= 99) {
             column_noun3 = 5
         }
         
         while (column_noun2 == column_noun1) {
             d100_noun2 = Math.floor(Math.random() * 100);
             if (d100_noun2 >= 0 && d100_noun2 <= 19) {
                 column_noun2 = 1
             }
             else if (d100_noun2 >= 20 && d100_noun2 <= 39) {
                 column_noun2 = 2
             }
             else if (d100_noun2 >= 40 && d100_noun2 <= 59) {
                 column_noun2 = 3
             }
             else if (d100_noun2 >= 60 && d100_noun2 <= 79) {
                 column_noun2 = 4
             }
             else if (d100_noun2 >= 80 && d100_noun2 <= 99) {
                 column_noun2 = 5
             }
         }
 
         while (column_noun3 == column_noun1 || column_noun3 == column_noun2) {
             d100_noun3 = Math.floor(Math.random() * 100);
             if (d100_noun3 >= 0 && d100_noun3 <= 19) {
                 column_noun3 = 1
             }
             else if (d100_noun3 >= 20 && d100_noun3 <= 39) {
                 column_noun3 = 2
             }
             else if (d100_noun3 >= 40 && d100_noun3 <= 59) {
                 column_noun3 = 3
             }
             else if (d100_noun3 >= 60 && d100_noun3 <= 79) {
                 column_noun3 = 4
             }
             else if (d100_noun3 >= 80 && d100_noun3 <= 99) {
                 column_noun3 = 5
             }
         }
 
         verb1 = advancedDesc.npcMotivation_Verb[(d100_verb1)];
         noun1 = advancedDesc.npcMotivation_Noun[(d100_noun1)];
         verb2 = advancedDesc.npcMotivation_Verb[(d100_verb2)];
         noun2 = advancedDesc.npcMotivation_Noun[(d100_noun2)];
         verb3 = advancedDesc.npcMotivation_Verb[(d100_verb3)];
         noun3 = advancedDesc.npcMotivation_Noun[(d100_noun3)];
         
         
         npcMotv1 = `<b>${verb1} ${noun1}</b>`;
         npcMotv2 = `<b>${verb2} ${noun2}</b>`;
         npcMotv3 = `<b>${verb3} ${noun3}</b>`;
         
         //Power Level
         d100_power = Math.floor(Math.random() * 100);
         var npc_power;
         if (selectedCF == 1 || selectedCF == 2) {
             if (d100_power >= 0 && d100_power <= 1) {
                 npc_power = 'Much Weaker than';
             }
             else if (d100_power >= 2 && d100_power <= 9) {
                 npc_power = 'Slightly Weaker than';
             }
             else if (d100_power >= 10 && d100_power <= 89) {
                 npc_power = 'Comparable to';
             }
             else if (d100_power >= 90 && d100_power <= 97) {
                 npc_power = 'Slightly Stronger than';
             }
             else if (d100_power >= 98 && d100_power <= 99) {
                 npc_power = 'Much Stronger than';
             }
         }
         else if (selectedCF == 3 || selectedCF == 4) {
             if (d100_power >= 0 && d100_power <= 3) {
                 npc_power = 'Much Weaker than';
             }
             else if (d100_power >= 4 && d100_power <= 14) {
                 npc_power = 'Slightly Weaker than';
             }
             else if (d100_power >= 15 && d100_power <= 84) {
                 npc_power = 'Comparable to';
             }
             else if (d100_power >= 85 && d100_power <= 95) {
                 npc_power = 'Slightly Stronger than';
             }
             else if (d100_power >= 96 && d100_power <= 99) {
                 npc_power = 'Much Stronger than';
             }
         }
         else if (selectedCF == 5) {
             if (d100_power >= 0 && d100_power <= 4) {
                 npc_power = 'Much Weaker than';
             }
             else if (d100_power >= 5 && d100_power <= 19) {
                 npc_power = 'Slightly Weaker than';
             }
             else if (d100_power >= 20 && d100_power <= 79) {
                 npc_power = 'Comparable to';
             }
             else if (d100_power >= 80 && d100_power <= 94) {
                 npc_power = 'Slightly Stronger than';
             }
             else if (d100_power >= 95 && d100_power <= 99) {
                 npc_power = 'Much Stronger than';
             }
         }
         else if (selectedCF == 6 || selectedCF == 7) {
             if (d100_power >= 0 && d100_power <= 7) {
                 npc_power = 'Much Weaker than';
             }
             else if (d100_power >= 8 && d100_power <= 24) {
                 npc_power = 'Slightly Weaker than';
             }
             else if (d100_power >= 25 && d100_power <= 74) {
                 npc_power = 'Comparable to';
             }
             else if (d100_power >= 75 && d100_power <= 91) {
                 npc_power = 'Slightly Stronger than';
             }
             else if (d100_power >= 92 && d100_power <= 99) {
                 npc_power = 'Much Stronger than';
             }
         }
         else if (selectedCF == 8 || selectedCF == 9) {
             if (d100_power >= 0 && d100_power <= 11) {
                 npc_power = 'Much Weaker than';
             }
             else if (d100_power >= 12 && d100_power <= 29) {
                 npc_power = 'Slightly Weaker than';
             }
             else if (d100_power >= 30 && d100_power <= 69) {
                 npc_power = 'Comparable to';
             }
             else if (d100_power >= 70 && d100_power <= 87) {
                 npc_power = 'Slightly Stronger than';
             }
             else if (d100_power >= 88 && d100_power <= 99) {
                 npc_power = 'Much Stronger than';
             }
         };
         
         //Result
         npcDesc = [`The NPC is ${npc_modifier} ${npc_noun}.<br/>
             Their motivations are to ${npcMotv1}, ${npcMotv2}, and ${npcMotv3}.<br/>
             They are ${npc_power} you.`];
             document.getElementById('answer').innerHTML = npcDesc;
             document.getElementById('event').innerHTML = ' ';
         }
     else {
 
         document.getElementById('answer').innerHTML = `.... **set Chaos Factor first**`;
         document.getElementById('event').innerHTML = ` `;
         
     };
     
 }
     else if (value == 'dust') {
         var D8 = Math.floor(Math.random() * 8);
         var D10_1 = Math.floor(Math.random() * 10);
         var D10_2 = Math.floor(Math.random() * 10);
         var D10_3 = Math.floor(Math.random() * 10);
         var D12 = Math.floor(Math.random() * 12);
         var D20_1 = Math.floor(Math.random() * 20);
         var D20_2 = Math.floor(Math.random() * 20);
         var D20_3 = Math.floor(Math.random() * 20);
         var D20_4 = Math.floor(Math.random() * 20);
         var D20_5 = Math.floor(Math.random() * 20);
         var D20_6 = Math.floor(Math.random() * 20);
         var D20_7 = Math.floor(Math.random() * 20);
         var d_names = Math.floor(Math.random() * 2);
         var d20_female = Math.floor(Math.random() * 20);
         var d20_male = Math.floor(Math.random() * 20);
         var d20_sur = Math.floor(Math.random() * 20);
         
         var ethnicity = ancestralEthnicity[D8];
         var bld = build[D10_1];
         var lifeStg = lifeStage[D10_2];
         var mmrblTraits = memorableTraits[D20_1];
         var bigPrblms = bigProblems[D12];
         var crntGrtstDsr = currentGreatestDesire[D10_3];
         var fvrClthngStyl = favoredClothingStyle[D20_2];
         var bstTrt = bestTrait[D20_3];
         var wrstTrt = worstTrait[D20_4];
         var rltshpWthSprsOrFmly = relationshipWithSpouseOrFamily[D20_5];
         var intrstngRlsInEnclave = interestingRolesInTheEnclave[D20_6];
         var mstSgnfcntSrcOfInflnc = mostSignificantSourceOfInfluence[D20_7];
 
         var key = Object.keys(names)[d_names];
         var randomFemaleName = names[key].name_female[d20_female];
         var randomMaleName = names[key].name_male[d20_male];
         var randomSurname = names[key].surname[d20_sur];
         

         var npcName = `Suggested Name: <b>${randomFemaleName} ${randomSurname} (F)</b> or <b>${randomMaleName} ${randomSurname} (M)</b>`;

         var npcNarrative = `This NPC is of <b>${ethnicity}</b> ethnicity with <b>${bld}</b> build, currently in the <b>${lifeStg}</b> stage of life.
         </br> They are known for <b>${mmrblTraits}</b>.
         </br> They face significant challenges such as <b>${bigPrblms}</b>, but their greatest desire currently is <b>${crntGrtstDsr}</b>.
         </br> They prefer to dress in <b>${fvrClthngStyl}</b>.
         </br> Their best trait is being <b>${bstTrt}</b>, while their worst trait is being <b>${wrstTrt}</b>.
         </br> Their relationship with their spouse or family is <b>${rltshpWthSprsOrFmly}</b>.
         </br> Within the enclave, they hold interesting roles such as <b>${intrstngRlsInEnclave}</b>, and their most significant source of influence is by <b>${mstSgnfcntSrcOfInflnc}</b>.`;
 
         document.getElementById('answer').innerHTML = npcName;
         document.getElementById('event').innerHTML = npcNarrative;
     }
     else if (value == 'papoc') {
        var d4a = Math.floor(Math.random() * 4);
        var d4b = Math.floor(Math.random() * 4);
        var d20a = Math.floor(Math.random() * 20);
        var d20b = Math.floor(Math.random() * 20);

        var key = Object.keys(npcPersonalities)[d4a];
        var npc = npcPersonalities[key][d20a];
        // debugger;
        // alert(npc);
        var key2 = Object.keys(npcGoals)[d4b];
        var npcGoal = npcGoals[key2][d20b];

        document.getElementById('answer').innerHTML = `The NPC is ${npc}.`;
        document.getElementById('event').innerHTML = `</br>Their goal is to ${npcGoal}.`;

     }
     else if (value == 'devilsrun') {
        var d60name = Math.floor(Math.random() * 60);
        var d20gender = Math.floor(Math.random() * 20);
        var d20age = Math.floor(Math.random() * 20);
        // debugging for newly born
        // var d20age = Math.floor(Math.random() * 2);
        var d20height = Math.floor(Math.random() * 20);
        var d20appearance = Math.floor(Math.random() * 20);
        var d20apparel = Math.floor(Math.random() * 20);
        var d20role = Math.floor(Math.random() * 20);
        var d6disposition = Math.floor(Math.random() * 6);
        var d20disposition1 = Math.floor(Math.random() * 20);
        var d20disposition2 = Math.floor(Math.random() * 20);
        
        var npcGender = devil_npc_appearance[Object.keys(devil_npc_appearance)[0]][d20gender];
        var npcAge = devil_npc_appearance[Object.keys(devil_npc_appearance)[1]][d20age];
        var npcHeight = devil_npc_appearance[Object.keys(devil_npc_appearance)[2]][d20height];
        var npcAppearance = devil_npc_appearance[Object.keys(devil_npc_appearance)[3]][d20appearance];
        var npcApparel = devil_npc_appearance[Object.keys(devil_npc_appearance)[4]][d20apparel];
        var npcRole = devil_npc_appearance[Object.keys(devil_npc_appearance)[5]][d20role];
        var npcDisposition1 = devil_npc_disposition[Object.keys(devil_npc_disposition)[d6disposition]][d20disposition1];
        var npcDisposition2 = devil_npc_disposition[Object.keys(devil_npc_disposition)[d6disposition]][d20disposition2];
        var npcDisposition = `${npcDisposition1} and ${npcDisposition2}`;
        var guardian = ``;
        
        if (npcGender == 'Female') {
            var npcName = devil_npc_name_female[d60name];
        }
        else if (npcGender == 'Male') {
            var npcName = devil_npc_name_male[d60name];
        }
        else {
            var npcName = `??? *you decide on the name*`;
        }
        
        if (npcAge == 'Newborn') {

            var npcRole = `unknown`;
            npcDisposition = `of unknown disposition`;
            var d20guardiangender = Math.floor(Math.random() * 20);
            var d20guardianage = Math.floor(Math.random() * 18)+2;
            var d20guardianheight = Math.floor(Math.random() * 20);
            var d20guardianappearance = Math.floor(Math.random() * 20);
            var d20guardianapparel = Math.floor(Math.random() * 20);
            var d20guardianrole = Math.floor(Math.random() * 20);

            var guardianGender = devil_npc_appearance[Object.keys(devil_npc_appearance)[0]][d20guardiangender];
            var guardianAge = devil_npc_appearance[Object.keys(devil_npc_appearance)[1]][d20guardianage];
            var guardianHeight = devil_npc_appearance[Object.keys(devil_npc_appearance)[2]][d20guardianheight];
            var guardianAppearance = devil_npc_appearance[Object.keys(devil_npc_appearance)[3]][d20guardianappearance];
            var guardianApparel = devil_npc_appearance[Object.keys(devil_npc_appearance)[4]][d20guardianapparel];
            var guardianRole = devil_npc_appearance[Object.keys(devil_npc_appearance)[5]][d20guardianrole];
            var guardianDisposition1 = devil_npc_disposition[Object.keys(devil_npc_disposition)[d6disposition]][d20disposition1];
            var guardianDisposition2 = devil_npc_disposition[Object.keys(devil_npc_disposition)[d6disposition]][d20disposition2];
            var guardianDisposition = `${guardianDisposition1} and ${guardianDisposition2}`;

            if (guardianGender == 'Female') {
                var guardianName = devil_npc_name_female[Math.floor(Math.random() * 60)];
            }
            else if (guardianGender == 'Male') {
                var guardianName = devil_npc_name_male[Math.floor(Math.random() * 60)];
            }
            else {
                var guardianName = `??? *you decide on the name*`;
            }

            guardian = `</br></br>The Guardian is <b>${guardianAge} ${guardianGender}</b> named <b>${guardianName}</b>, who is <b>${guardianHeight}, ${guardianAppearance}, and wears ${guardianApparel}</b>, and has a role of <b>${guardianRole}</b>. They are <b>${guardianDisposition}</b>.`;
            }
            var npc = `The NPC is <b>${npcGender} ${npcAge}</b> named <b>${npcName}</b>, who is <b>${npcHeight}, ${npcAppearance}, and wears ${npcApparel}</b>, and has a role of <b>${npcRole}</b>. They are <b>${npcDisposition}</b>.`;
    
            document.getElementById('answer').innerHTML = npc;
            document.getElementById('event').innerHTML = guardian;
        }
        else if (value == 'myz') {
            d8 = Math.floor(Math.random() * 8);
            d6 = Math.floor(Math.random() * 6);

            type = Object.keys(YZ_npc)[d8];
            npc = YZ_npc[type][d6];
            document.getElementById('answer').innerHTML = `The NPC is <b>${npc}</b>`;
            document.getElementById('event').innerHTML = ` `;
        }
        else if (value == 'devilsrun_gang') {
            d20_icon = Math.floor(Math.random() * 20);
            d20_uniform = Math.floor(Math.random() * 20);
            d20_battleRitual = Math.floor(Math.random() * 20);
            d20_state = Math.floor(Math.random() * 20);
            d20_armament = Math.floor(Math.random() * 20);
            d20_size = Math.floor(Math.random() * 20);
// Gang Details
            var icon = devil_gang[Object.keys(devil_gang)[0]][d20_icon];
            var uniform = devil_gang[Object.keys(devil_gang)[1]][d20_uniform];
            var battleRitual = devil_gang[Object.keys(devil_gang)[2]][d20_battleRitual];
            var state = devil_gang[Object.keys(devil_gang)[3]][d20_state];
            var armament = devil_gang[Object.keys(devil_gang)[4]][d20_armament];
            var size = devil_gang[Object.keys(devil_gang)[5]][d20_size];

            if (armament == 'Roll Twice') {
                d20_armament = Math.floor(Math.random() * 19);
                var d20_armament2 = Math.floor(Math.random() * 19);

                armament = devil_gang[Object.keys(devil_gang)[4]][d20_armament];
                armament2 = devil_gang[Object.keys(devil_gang)[4]][d20_armament2];
                armament = `${armament} and ${armament2}`;
            }
// Gang Attactics   
            if (parseInt(size) > 2) {
                d10_tactics = Math.floor(Math.random() * 10);
                var attactics = `</br></br><b>${devil_gang_battle_tactics[d10_tactics]}</b>.`;
            }
            else {
                var attactics = ``;
            }
// Notable Members
            d4 = Math.floor(Math.random() * 4);
            if (d4 > 0){
                var name1 =``;
                var names = [];
                for (i=1; i<=d4; i++) {
                    d3 = Math.floor(Math.random() * 3)+1;
                    for (j=1; j<=d3; j++) {
                        d6 = Math.floor(Math.random() * 6);
                        d20 = Math.floor(Math.random() * 20);
                        nm = devil_gang_member[Object.keys(devil_gang_member)[d6]][d20]
                        name1 = name1 + ` ${nm}`;
                    }
                    names.push(name1.trim());
                    name1 = ``;
                }
                var notableMemb;
                if (names.length == 1) {
                    notableMemb = `<u>Notable Member</u>: <b>${names[0]}</b>`;
                } else if (names.length > 1) {
                    lastMemb = names.pop();
                    notableMemb = `<u>Notable Members</u>: <b>${names.join(', ')}, and ${lastMemb}</b>`;
                }
            }
            else {
                var notableMemb = `<u>Notable Member</u>: <b>None</b> (yet or ever? you decide)`;
            }
// Gang Vehicle Design
            d20_type = Math.floor(Math.random() * 20);
            d20_condition = Math.floor(Math.random() * 20);
            d20_mod1 = Math.floor(Math.random() * 20);
            d20_mod2 = Math.floor(Math.random() * 20);
            d20_misc = Math.floor(Math.random() * 20);

            type = devil_chop_shop[Object.keys(devil_chop_shop)[0]][d20_type];
            condition = devil_chop_shop[Object.keys(devil_chop_shop)[1]][d20_condition];
            mod1 = devil_chop_shop[Object.keys(devil_chop_shop)[2]][d20_mod1];
            mod2 = devil_chop_shop[Object.keys(devil_chop_shop)[3]][d20_mod2];
            misc = devil_chop_shop[Object.keys(devil_chop_shop)[4]][d20_misc];

            if (condition == 'Conjoined') {
                d20_type2 = Math.floor(Math.random() * 20);
                type2  = devil_chop_shop[Object.keys(devil_chop_shop)[0]][d20_type2];
                condition = `${condition} with ${type2}`;
            }


            document.getElementById('answer').innerHTML = ``;
            document.getElementById('event').innerHTML = `The gang is known for their symbol of <b>${icon}</b>, and their uniform is <b>${uniform}</b>. Their current state is: <b>${state}</b>.</br>This gang is infamous for <b>${battleRitual}</b> as their battle ritual! They are armed with <b>${armament}</b>, and they own <b>${size}</b> vehicle/s.
            </br>${notableMemb}.
            </br><u>Vehicle Design</u>: <b>${type}</b> that is <b>${condition}</b>, modded with <b>${mod1}</b> and <b>${mod2}</b>. Also noticeable <b>${misc}</b>. 
            ${attactics}`;
        }
        else {
            document.getElementById('answer').innerHTML = `.....`;
            document.getElementById('event').innerHTML = ``;
            document.getElementById('more-selection').style.display = 'block';
            document.getElementById('npc-selection').style.display = 'none';
        }

    }
    