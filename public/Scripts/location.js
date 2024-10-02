function defineLoc(value) {
    document.getElementById('noise').play();

//Other Dust
    if (value == 'dust') {
        // var element = document.getElementById('more-selection');
        // element.style.display = 'none';
        // document.getElementById('main').style.display = 'block';
    
        d20 = Math.floor(Math.random() * 20);
        d20_2 = Math.floor(Math.random() * 20);

        var bldgStyle = basicBuildingStyle[d20];
        var decor = commonDecorativeElements[d20_2];

        var locDesc = `What's common in this place is <b>${bldgStyle}</b> Then you also noticed the
        </br> <b>${decor}</b>.`;

        document.getElementById('answer').innerHTML = locDesc;
        document.getElementById('event').innerHTML = ``;
    }
//Mythic Location Crafter
    //Region: Wilderness
    else if (value == 'lc1') {
        var D100_1 = Math.floor(Math.random() * 100);
        var D100_2 = Math.floor(Math.random() * 100);

        var desc1 = region_wilderness[D100_1];
        var desc2 = region_wilderness[D100_2];

        if (desc1 == 'description') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);

            var desc1_a = location_descriptors_1[d100_1];
            var desc1_b = location_descriptors_1[d100_2];
            desc1 = `${desc1_a} and ${desc1_b}`;
        }
        if (desc2 == 'description') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);

            var desc2_a = location_descriptors_1[d100_1];
            var desc2_b = location_descriptors_1[d100_2];
            desc2 = `${desc2_a} and ${desc2_b}`;
        }

        var desc = `You find yourself in a place where it is <b>${desc1}</b> and <b>${desc2}</b>.`;

        document.getElementById('answer').innerHTML = ``;
        document.getElementById('event').innerHTML = desc;
        }
    //Region: City
    else if (value == 'lc2') {
        var D100_1 = Math.floor(Math.random() * 100);
        var D100_2 = Math.floor(Math.random() * 100);

        var desc1 = region_city[D100_1];
        var desc2 = region_city[D100_2];

        if (desc1 == 'description') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);

            var desc1_a = location_descriptors_1[d100_1];
            var desc1_b = location_descriptors_1[d100_2];
            desc1 = `${desc1_a} and ${desc1_b}`;
        }
        else if (desc1 == 'wilderness') {
            var d95_1 = Math.floor(Math.random() * 95);

            var desc1_a = region_wilderness[d95_1];
            desc1 = `${desc1_a}`;
        };

        if (desc2 == 'description') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);

            var desc2_a = location_descriptors_1[d100_1];
            var desc2_b = location_descriptors_1[d100_2];
            desc2 = `${desc2_a} and ${desc2_b}`;
        }
        else if (desc2 == 'wilderness') {
            var d95_1 = Math.floor(Math.random() * 95);

            var desc2_a = region_wilderness[d95_1];
            desc2 = `${desc2_a}`;
        };

        var desc = `You find yourself in a place where it is <b>${desc1}</b> and <b>${desc2}</b>.`;

        document.getElementById('answer').innerHTML = ``;
        document.getElementById('event').innerHTML = desc;
        }
    //Region: Structure
    else if (value == 'lc3') {
        var D100_1 = Math.floor(Math.random() * 100);
        var D100_2 = Math.floor(Math.random() * 100);

        var desc1 = region_structure[D100_1];
        var desc2 = region_structure[D100_2];

        if (desc1 == 'description') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);

            var desc1_a = location_descriptors_1[d100_1];
            var desc1_b = location_descriptors_1[d100_2];
            var desc1 = `${desc1_a} and ${desc1_b}`;
        }
        else if (desc1 == 'wilderness') {
            var d95_1 = Math.floor(Math.random() * 95);

            var desc1_a = region_wilderness[d95_1];
            desc1 = `${desc1_a}`;
        };

        if (desc2 == 'description') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);

            var desc2_a = location_descriptors_1[d100_1];
            var desc2_b = location_descriptors_1[d100_2];
            var desc2 = `${desc2_a} and ${desc2_b}`;
        }
        else if (desc2 == 'wilderness') {
            var d95_1 = Math.floor(Math.random() * 95);

            var desc2_a = region_wilderness[d95_1];
            desc2 = `${desc2_a}`;
        };

        var desc = `You find yourself in a place where it is <b>${desc1}</b> and <b>${desc2}</b>.`;

        document.getElementById('answer').innerHTML = ``;
        document.getElementById('event').innerHTML = desc;
        }

    //Area: Large Region
    else if (value == 'lc4') {
        var d10_1 = Math.floor(Math.random() * 10);
        var d10_2 = Math.floor(Math.random() * 10);
        var d10_3 = Math.floor(Math.random() * 10);
        var total1 = d10_1 + parseInt(selectedCF);
        var total2 = d10_2 + parseInt(selectedCF);
        var total3 = d10_3 + parseInt(selectedCF);

        var loc = area_location_large[total1];
        var enc = area_encounters_objects[total2];
        var obj = area_encounters_objects[total3];
// debugging
        // loc = 'Special'
// Special
        if (loc == 'Special') {
            var D100_1 = Math.floor(Math.random() * 100);
            var special = area_specialElements[D100_1];
           
            switch (special) {
// Supersize
                case 'Supersize':
                    var d10pp = Math.floor(Math.random() * 10)+parseInt(selectedCF);
                    loc  = area_location_large[d10pp];
                    if (loc == 'Special') {
                        loc = 'Expected';
                    }
                    else if (loc == 'Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc  = `[${desc1} and ${desc2}]`;
                    }
                    else if (loc == 'Known, or Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc  = `Known, or [${desc1} and ${desc2}]`;
                    }
                    loc = `Exceptionally ${loc}`;
                    break;
// Barely There
                case 'Barely There': 
                    var d10pp = Math.floor(Math.random() * 10)+parseInt(selectedCF);
                    loc  = area_location_large[d10pp];
                    if (loc == 'Special') {
                        loc = 'Expected';
                    }
                    else if (loc == 'Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc  = `[${desc1} and ${desc2}]`;
                    }
                    else if (loc == 'Known, or Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc  = `Known, or [${desc1} and ${desc2}]`;
                    }
                    loc = `Minimally ${loc}`;
                    break;
// This is Bad
                case 'This is Bad':
                    var d10pp = Math.floor(Math.random() * 10)+parseInt(selectedCF);
                    loc  = area_location_large[d10pp];
                    if (loc == 'Special') {
                        loc = 'Expected';
                    }
                    else if (loc == 'Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc  = `[${desc1} and ${desc2}]`;
                    }
                    else if (loc == 'Known, or Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc  = `Known, or [${desc1} and ${desc2}]`;
                    }
                    loc = `Negatively ${loc}`;
                    break;
// This is Good
                case 'This is Good':
                    var d10pp = Math.floor(Math.random() * 10)+parseInt(selectedCF);
                    loc  = area_location_large[d10pp];
                    if (loc == 'Special') {
                        loc = 'Expected';
                    }
                    else if (loc == 'Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc  = `[${desc1} and ${desc2}]`;
                    }
                    else if (loc == 'Known, or Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc  = `Known, or [${desc1} and ${desc2}]`;
                    }
                    loc = `Positively ${loc}`;
                    break;
                                   case 'This is Good':
                    var d10pp = Math.floor(Math.random() * 10)+parseInt(selectedCF);
                    loc  = area_location_large[d10pp];
                    if (loc == 'Special') {
                        loc = 'Expected';
                    }
                    else if (loc == 'Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc  = `[${desc1} and ${desc2}]`;
                    }
                    else if (loc == 'Known, or Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc  = `Known, or [${desc1} and ${desc2}]`;
                    }
                    loc = `Positively ${loc}`;
                    break;
// Multi-Element
                case 'Multi-Element':
                    var d10pp = Math.floor(Math.random() * 10)+parseInt(selectedCF);
                    var d10pp2 = Math.floor(Math.random() * 10)+parseInt(selectedCF);
                    var loc1 = area_location_large[d10pp];
                    var loc2 = area_location_large[d10pp2];

                    if (loc1 == 'Special') {
                        loc1  = 'Expected';
                    }
                    else if (loc1 == 'Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc1  = `[${desc1} and ${desc2}]`;
                    }
                    else if (loc1 == 'Known, or Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc1  = `Known, or [${desc1} and ${desc2}]`;
                    }

                    if (loc2 == 'Special') {
                        loc2  = 'Expected';
                    }
                    else if (loc2 == 'Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_loca1tions[d100_1];
                        var desc2 = random_loca1tions[d100_2];
                        loc2  = `[${desc1} and ${desc2}]`;
                    }
                    else if (loc2 == 'Known, or Random') {
                        var d100_1 = Math.floor(Math.random() * 100);
                        var d100_2 = Math.floor(Math.random() * 100);
                        
                        var desc1 = random_locations[d100_1];
                        var desc2 = random_locations[d100_2];
                        loc2  = `Known, or [${desc1} and ${desc2}]`;
                    }

                    loc = `Both ${loc1} and ${loc2}`;
                    break;
// Exit
                case 'Exit':
                    loc = `, in addition to whatever else it contains, also holding an exit from the Region (if possible)`;
                    break;
// Return
                case 'Return':
                    loc = `, in addition to whatever else it contains, also having access to a previously encountered Area in this Region (if possible)`;
                    break;
// Going Deeper
                case 'Going Deeper':
                    loc = `Expected, and seemingly going deeper into the Region (+3PP instead of +1PP)`;
                    break;
// Common Ground
                case 'Common Ground':
                    loc = `Expected, and seemingly common <i>(Eliminate three Progress Points for this Category (don't record the Progress Point for this Element and eliminate two more))</i>`;
                    break;
            }
         
        }
//Random
            else if (loc == 'Random') {
                var d100_1 = Math.floor(Math.random() * 100);
                var d100_2 = Math.floor(Math.random() * 100);
                
                var desc1 = random_locations[d100_1];
                var desc2 = random_locations[d100_2];
                loc  = `[${desc1} and ${desc2}]`;
            }
//Known, or Random
            else if (loc == 'Known, or Random') {
                var d100_1 = Math.floor(Math.random() * 100);
                var d100_2 = Math.floor(Math.random() * 100);
                
                var desc1 = random_locations[d100_1];
                var desc2 = random_locations[d100_2];
                loc  = `Known, or [${desc1} and ${desc2}]`;
            }

// Encounters
        if (enc == 'Random') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);
            
            var desc1 = random_encounters[d100_1];
            var desc2 = random_encounters[d100_2];
            enc  = `[${desc1} and ${desc2}]`;
        }
        else if (enc == 'Known, or Random') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);
            
            var desc1 = random_encounters[d100_1];
            var desc2 = random_encounters[d100_2];
            enc  = `Known, or [${desc1} and ${desc2}]`;
        }
// Objects
        if (obj == 'Random') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);
            
            var desc1 = random_objects[d100_1];
            var desc2 = random_objects[d100_2];
            obj  = `[${desc1} and ${desc2}]`;
        }
        else if (obj == 'Known, or Random') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);
            
            var desc1 = random_objects[d100_1];
            var desc2 = random_objects[d100_2];
            obj  = `Known, or [${desc1} and ${desc2}]`;
        }

        var desc = `You find yourself in an area where it is <b>${loc}</b>, and you have Encountered something <b>${enc}</b>, and have found an Object which is <b>${obj}</b>.`;

        document.getElementById('answer').innerHTML = ``;
        document.getElementById('event').innerHTML = desc;
    }

// Small Region
    else if (value == 'lc5') {
        var d10_1 = Math.floor(Math.random() * 10);
        var d10_2 = Math.floor(Math.random() * 10);
        var d10_3 = Math.floor(Math.random() * 10);
        var total1 = d10_1 + parseInt(selectedCF);
        var total2 = d10_2 + parseInt(selectedCF);
        var total3 = d10_3 + parseInt(selectedCF);

        var loc = area_location_small[total1];
        var enc = area_encounters_objects[total2];
        var obj = area_encounters_objects[total3];

//Random
            if (loc == 'Random') {
                var d100_1 = Math.floor(Math.random() * 100);
                var d100_2 = Math.floor(Math.random() * 100);
                
                var desc1 = random_locations[d100_1];
                var desc2 = random_locations[d100_2];
                loc  = `[${desc1} and ${desc2}]`;
            }
//Known, or Random
            else if (loc == 'Known, or Random') {
                var d100_1 = Math.floor(Math.random() * 100);
                var d100_2 = Math.floor(Math.random() * 100);
                
                var desc1 = random_locations[d100_1];
                var desc2 = random_locations[d100_2];
                loc  = `Known, or [${desc1} and ${desc2}]`;
            }

// Encounters
        if (enc == 'Random') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);
            
            var desc1 = random_encounters[d100_1];
            var desc2 = random_encounters[d100_2];
            enc  = `[${desc1} and ${desc2}]`;
        }
        else if (enc == 'Known, or Random') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);
            
            var desc1 = random_encounters[d100_1];
            var desc2 = random_encounters[d100_2];
            enc  = `Known, or [${desc1} and ${desc2}]`;
        }
// Objects
        if (obj == 'Random') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);
            
            var desc1 = random_objects[d100_1];
            var desc2 = random_objects[d100_2];
            obj  = `[${desc1} and ${desc2}]`;
        }
        else if (obj == 'Known, or Random') {
            var d100_1 = Math.floor(Math.random() * 100);
            var d100_2 = Math.floor(Math.random() * 100);
            
            var desc1 = random_objects[d100_1];
            var desc2 = random_objects[d100_2];
            obj  = `Known, or [${desc1} and ${desc2}]`;
        }

        var desc = `You find yourself in an area where it is <b>${loc}</b>, and you have Encountered something <b>${enc}</b>, and have found an Object which is <b>${obj}</b>.`;

        document.getElementById('answer').innerHTML = ``;
        document.getElementById('event').innerHTML = desc;
    }
// exitLC
    else if (value == 'exitLC') {
        document.getElementById('answer').innerHTML = `....`;
        document.getElementById('event').innerHTML = ``;

        var element = document.getElementById('location-selection');
        element.style.display = 'none';
        document.getElementById('loc-selection').style.display = 'block';
    }
    else if (value == 'devilsRun_set') {
        d20_material = Math.floor(Math.random() * 20);
        d20_firstImpression = Math.floor(Math.random() * 20);
        d20_noOfDwellings = Math.floor(Math.random() * 20);
        
        var dwell = [];
        var occupants = [];
        
        material = devil_settlementToolbox[Object.keys(devil_settlementToolbox)[0]][d20_material];
        firstImpression = devil_settlementToolbox[Object.keys(devil_settlementToolbox)[1]][d20_firstImpression];
        noOfDwellings = devil_settlementToolbox[Object.keys(devil_settlementToolbox)[2]][d20_noOfDwellings];
        
        for (i=1; i<=noOfDwellings; i++) {
            d20_dwellingType = Math.floor(Math.random() * 20);
            d20_occupants = Math.floor(Math.random() * 20);
            dwellingType = devil_settlementToolbox[Object.keys(devil_settlementToolbox)[3]][d20_dwellingType];
            occupant = devil_settlementToolbox[Object.keys(devil_settlementToolbox)[4]][d20_occupants];
            dwell.push(dwellingType);
            occupants.push(occupant);
        }
        var dwellingsArray = dwell.splice(','); // Assuming dwellings are comma-separated
        var dwellingsList = dwellingsArray.map((d, index) => `<li>${d.trim()} - ${occupants[index]}</li>`).join('');

        if (material == 'Roll Twice') {
            d19_1 = Math.floor(Math.random() * 19);
            d19_2 = Math.floor(Math.random() * 19);
            material1 = devil_settlementToolbox[Object.keys(devil_settlementToolbox)[0]][d19_1];
            material2 = devil_settlementToolbox[Object.keys(devil_settlementToolbox)[0]][d19_2];
            material = `${material1} and ${material2}`;
        }
        if (firstImpression == 'Roll Twice') {
            d19_1 = Math.floor(Math.random() * 19);
            d19_2 = Math.floor(Math.random() * 19);
            firstImpression1 = devil_settlementToolbox[Object.keys(devil_settlementToolbox)[1]][d19_1];
            firstImpression2 = devil_settlementToolbox[Object.keys(devil_settlementToolbox)[1]][d19_2];
            firstImpression = `${firstImpression1} and the ${firstImpression2}`;
        }

        d20_name_1 = Math.floor(Math.random() * 20);
        d20_name_2 = Math.floor(Math.random() * 20);
        d2 = Math.floor(Math.random() * 2);

        name1 = devil_settlement_name[Object.keys(devil_settlement_name)[d2]][d20_name_1];
        name2 = devil_settlement_name[Object.keys(devil_settlement_name)[d2]][d20_name_2];
        if (name1 == 'Roll Twice') {
            d2 = Math.floor(Math.random() * 2);
            d19_1 = Math.floor(Math.random() * 19);
            d19_2 = Math.floor(Math.random() * 19);
            n1 = devil_settlement_name[Object.keys(devil_settlement_name)[d2]][d19_1];
            n2 = devil_settlementname[Object.keys(devil_settlement_name)[d2]][d19_2];
            name1 = `${n1} ${n2}`;
        }
        if (name2 == 'Roll Twice') {
            d19_1 = Math.floor(Math.random() * 19);
            d19_2 = Math.floor(Math.random() * 19);
            d2 = Math.floor(Math.random() * 2);
            n1 = devil_settlement_name[Object.keys(devil_settlement_name)[0]][d19_1];
            n2 = devil_settlement_name[Object.keys(devil_settlement_name)[0]][d19_2];
            name2 = `${n1} ${n2}`;
        }

        nameName = `${name1} ${name2}`;

        settlement = `The settlement is comprised of <b>${material}</b>, then you immediately noticed the ${firstImpression}. The settlement has <b>${noOfDwellings}</b> dwelling/s, as listed below:</br>
        <b>${dwellingsList}</b>`;
        document.getElementById('answer').innerHTML = `Etched on a weathered signpost: "<b>${nameName}</b>".`;
        document.getElementById('event').innerHTML = settlement;
    }
    else if (value == 'devilsRun'){
        d20 = Math.floor(Math.random() * 20);
        d6 = Math.floor(Math.random() * 6);

        loc = devil_location[Object.keys(devil_location)[d6]][d20];
        document.getElementById('answer').innerHTML = `Location: ${loc}`;
        document.getElementById('event').innerHTML = ``;
    }
// exit
    else {
        document.getElementById('answer').innerHTML = `....`;
        document.getElementById('event').innerHTML = ``;

        var element = document.getElementById('loc-selection');
        element.style.display = 'none';
        document.getElementById('more-selection').style.display = 'block';

    }
}