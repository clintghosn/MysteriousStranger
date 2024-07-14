var selectedOdd = '';
var selectedCF = '';
var selectedQ = '';

function openDropdown(id) {
    var element = document.getElementById(id);
    element.style.display = 'block';
    document.getElementById('main').style.display = 'none';

    if (id == 'q-selection') {
        document.getElementById('q').focus();
    }
}

function openCheckbox(id) {
    var element = document.getElementById(id);
    element.style.display = 'block';
    document.getElementById('main').style.display = 'none';
    document.getElementById('scene-selection').style.display = 'none';
    document.getElementById('q-selection').style.display = 'none';
    document.getElementById('event').innerHTML = '';
    
    if (id == 'adv-selection') {
        document.getElementById('noise').play();
        document.getElementById("answer").innerHTML = '.... **select all descriptions that apply**';
        selectedQ = document.getElementById('q').value;
        document.getElementById('q').value ='';
        document.getElementById('selected-q').innerHTML = `(${selectedQ})> (Adv.)`;
        unselectAll();
        adv_desc = {};
    }
}

function setOdd(odd) {
    selectedOdd = odd;
    var element = document.getElementById('odd-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('selected-odd').innerHTML = '('+ selectedOdd +')';
}

function setCF(cf) {
    selectedCF = cf;
    var element = document.getElementById('cf-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('selected-cf').innerHTML = '('+ selectedCF +')';
}

function setRadio(radio) {
    selectedRadio = radio;
    var element = document.getElementById('radio-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('selected-radio').innerHTML = '('+ selectedRadio +')';
    playRadio(radio);
}

function setQ_yn() {
    selectedQ = document.getElementById('q').value;
    document.getElementById('q').value ='';
    var element = document.getElementById('q-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('selected-q').innerHTML = `(${selectedQ})> (Yes/No)`;
}

function setQ_desc() {
    selectedQ = document.getElementById('q').value;
    document.getElementById('q').value ='';
    var element = document.getElementById('q-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('selected-q').innerHTML = `(${selectedQ})> (Descr.)`;
}

var scn = '';

function setScene(scene) {
    scn = scene;
    var element = document.getElementById('scene-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    d10= Math.floor(Math.random() * 10)+1;
    console.log(d10);

    if (scene == 'own') {
        if (d10 <= selectedCF) {
            if (d10%2 != 0) {
                document.getElementById('answer').innerHTML = 'The scene is altered.';
                sceneAdj();
            }
            else {
                document.getElementById('answer').innerHTML = 'The scene is interrupted.';
                sceneAdj();
            };
        }

        else {
            document.getElementById('answer').innerHTML = 'The scene is as expected.';
            document.getElementById('event').innerHTML = '';
            };
    }

        else if (scene == 'premade') {
            if (d10 <= selectedCF) {
                document.getElementById('answer').innerHTML = 'A random event has transpired.';
                sceneAdj()
                encounterSound();
            }

            else {
                document.getElementById('answer').innerHTML = 'The scene is as expected.';
                document.getElementById('event').innerHTML = '';
                };
        };
        
}

var adv_desc = {};

function setDesc() {
    var selectedDesc = [];
    var selectedDescIds = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.id);
    selectedDescIds.forEach(function(id) {
        var spanText = document.getElementById(id).nextElementSibling.textContent;
        spanText = spanText.replace(/\|/g, '');
        spanText = spanText.replace(/\s/g, '');
        spanText = spanText.replace(/,/g, ''); // Remove commas
        selectedDesc.push(spanText);
    });
    console.log(selectedDesc); // Changed from spanText to selectedDesc
    var element = document.getElementById('adv-selection');
    element.style.display = 'none';
    document.getElementById('main').style.display = 'block';
    getDesc(selectedDesc);
}

function getDesc(arrayDesc) {
    arrayDesc.forEach(function(desc) {
        switch (desc) {
            case 'ActionsGeneral1':
        word1 = advancedDesc.ActionsGeneral1[(Math.floor(Math.random() * advancedDesc.ActionsGeneral1.length))];
        word2 = advancedDesc.ActionsGeneral1[(Math.floor(Math.random() * advancedDesc.ActionsGeneral1.length))];
        action = `<b>${word1}, ${word2}</b>`;
        console.log(action);
        adv_desc.ActionsGeneral1 = [action];
        break;

    case 'ActionsGeneral2':
        word1 = advancedDesc.ActionsGeneral2[(Math.floor(Math.random() * advancedDesc.ActionsGeneral2.length))];
        word2 = advancedDesc.ActionsGeneral2[(Math.floor(Math.random() * advancedDesc.ActionsGeneral2.length))];
        action2 = `<b>${word1}, ${word2}</b>`;
        console.log(action2);
        adv_desc.ActionsGeneral2 = [action2];
        break;

    case 'CharacterGeneral':
        word1 = advancedDesc.CharacterGeneral[(Math.floor(Math.random() * advancedDesc.CharacterGeneral.length))];
        word2 = advancedDesc.CharacterGeneral[(Math.floor(Math.random() * advancedDesc.CharacterGeneral.length))];
        char = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterGeneral = [char];
        console.log(char);
        break;

    case 'AdventureTone':
        word1 = advancedDesc.AdventureTone[(Math.floor(Math.random() * advancedDesc.AdventureTone.length))];
        word2 = advancedDesc.AdventureTone[(Math.floor(Math.random() * advancedDesc.AdventureTone.length))];
        adv_tone = `<b>${word1}, ${word2}</b>`;
        adv_desc.AdventureTone = [adv_tone];
        console.log(adv_tone);
        break;

    case 'AlienSpeciesDescriptor':
        word1 = advancedDesc.AlienSpeciesDescriptor[(Math.floor(Math.random() * advancedDesc.AlienSpeciesDescriptor.length))];
        word2 = advancedDesc.AlienSpeciesDescriptor[(Math.floor(Math.random() * advancedDesc.AlienSpeciesDescriptor.length))];
        alien_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.AlienSpeciesDescriptor = [alien_desc];
        console.log(alien_desc);
        break;

    case 'AnimalActions':
        word1 = advancedDesc.AnimalActions[(Math.floor(Math.random() * advancedDesc.AnimalActions.length))];
        word2 = advancedDesc.AnimalActions[(Math.floor(Math.random() * advancedDesc.AnimalActions.length))];
        animal_actions = `<b>${word1}, ${word2}</b>`;
        adv_desc.AnimalActions = [animal_actions];
        console.log(animal_actions);
        break;

    case 'ArmyDescriptors':
        word1 = advancedDesc.ArmyDescriptors[(Math.floor(Math.random() * advancedDesc.ArmyDescriptors.length))];
        word2 = advancedDesc.ArmyDescriptors[(Math.floor(Math.random() * advancedDesc.ArmyDescriptors.length))];
        army_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.ArmyDescriptors = [army_desc];
        console.log(army_desc);
        break;

    case 'CavernDescriptors':
        word1 = advancedDesc.CavernDescriptors[(Math.floor(Math.random() * advancedDesc.CavernDescriptors.length))];
        word2 = advancedDesc.CavernDescriptors[(Math.floor(Math.random() * advancedDesc.CavernDescriptors.length))];
        cavern_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.CavernDescriptors = [cavern_desc];
        console.log(cavern_desc);
        break;

    case 'CharacterActionsCombat':
        word1 = advancedDesc.CharacterActionsCombat[(Math.floor(Math.random() * advancedDesc.CharacterActionsCombat.length))];
        word2 = advancedDesc.CharacterActionsCombat[(Math.floor(Math.random() * advancedDesc.CharacterActionsCombat.length))];
        char_combat = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterActionsCombat = [char_combat];
        console.log(char_combat);
        break;

    case 'CharacterActionsGeneral':
        word1 = advancedDesc.CharacterActionsGeneral[(Math.floor(Math.random() * advancedDesc.CharacterActionsGeneral.length))];
        word2 = advancedDesc.CharacterActionsGeneral[(Math.floor(Math.random() * advancedDesc.CharacterActionsGeneral.length))];
        char_general = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterActionsGeneral = [char_general];
        console.log(char_general);
        break;

    case 'CharacterAppearance':
        word1 = advancedDesc.CharacterAppearance[(Math.floor(Math.random() * advancedDesc.CharacterAppearance.length))];
        word2 = advancedDesc.CharacterAppearance[(Math.floor(Math.random() * advancedDesc.CharacterAppearance.length))];
        char_appearance = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterAppearance = [char_appearance];
        console.log(char_appearance);
        break;

    case 'CharacterBackground':
        word1 = advancedDesc.CharacterBackground[(Math.floor(Math.random() * advancedDesc.CharacterBackground.length))];
        word2 = advancedDesc.CharacterBackground[(Math.floor(Math.random() * advancedDesc.CharacterBackground.length))];
        char_background = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterBackground = [char_background];
        console.log(char_background);
        break;

    case 'CharacterConversations':
        word1 = advancedDesc.CharacterConversations[(Math.floor(Math.random() * advancedDesc.CharacterConversations.length))];
        word2 = advancedDesc.CharacterConversations[(Math.floor(Math.random() * advancedDesc.CharacterConversations.length))];
        char_conversations = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterConversations = [char_conversations];
        console.log(char_conversations);
        break;

    case 'CharacterDescriptors':
        word1 = advancedDesc.CharacterDescriptors[(Math.floor(Math.random() * advancedDesc.CharacterDescriptors.length))];
        word2 = advancedDesc.CharacterDescriptors[(Math.floor(Math.random() * advancedDesc.CharacterDescriptors.length))];
        char_descriptors = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterDescriptors = [char_descriptors];
        console.log(char_descriptors);
        break;

    case 'CharacterIdentity':
        word1 = advancedDesc.CharacterIdentity[(Math.floor(Math.random() * advancedDesc.CharacterIdentity.length))];
        word2 = advancedDesc.CharacterIdentity[(Math.floor(Math.random() * advancedDesc.CharacterIdentity.length))];
        char_identity = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterIdentity = [char_identity];
        console.log(char_identity);
        break;

    case 'CharacterMotivations':
        word1 = advancedDesc.CharacterMotivations[(Math.floor(Math.random() * advancedDesc.CharacterMotivations.length))];
        word2 = advancedDesc.CharacterMotivations[(Math.floor(Math.random() * advancedDesc.CharacterMotivations.length))];
        char_motivations = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterMotivations = [char_motivations];
        console.log(char_motivations);
        break;

    case 'CharacterPersonality':
        word1 = advancedDesc.CharacterPersonality[(Math.floor(Math.random() * advancedDesc.CharacterPersonality.length))];
        word2 = advancedDesc.CharacterPersonality[(Math.floor(Math.random() * advancedDesc.CharacterPersonality.length))];
        char_personality = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterPersonality = [char_personality];
        console.log(char_personality);
        break;

    case 'CharacterSkills':
        word1 = advancedDesc.CharacterSkills[(Math.floor(Math.random() * advancedDesc.CharacterSkills.length))];
        word2 = advancedDesc.CharacterSkills[(Math.floor(Math.random() * advancedDesc.CharacterSkills.length))];
        char_skills = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterSkills = [char_skills];
        console.log(char_skills);
        break;

    case 'CharacterTraitsAndFlaws':
        word1 = advancedDesc.CharacterTraitsAndFlaws[(Math.floor(Math.random() * advancedDesc.CharacterTraitsAndFlaws.length))];
        word2 = advancedDesc.CharacterTraitsAndFlaws[(Math.floor(Math.random() * advancedDesc.CharacterTraitsAndFlaws.length))];
        char_traits_flaws = `<b>${word1}, ${word2}</b>`;
        adv_desc.CharacterTraitsFlaws = [char_traits_flaws];
        console.log(char_traits_flaws);
        break;

    case 'CityDescriptors':
        word1 = advancedDesc.CityDescriptors[(Math.floor(Math.random() * advancedDesc.CityDescriptors.length))];
        word2 = advancedDesc.CityDescriptors[(Math.floor(Math.random() * advancedDesc.CityDescriptors.length))];
        city_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.CityDescriptors = [city_desc];
        console.log(city_desc);
        break;

    case 'CivilizationDescriptors':
        word1 = advancedDesc.CivilizationDescriptors[(Math.floor(Math.random() * advancedDesc.CivilizationDescriptors.length))];
        word2 = advancedDesc.CivilizationDescriptors[(Math.floor(Math.random() * advancedDesc.CivilizationDescriptors.length))];
        civ_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.CivilizationDescriptors = [civ_desc];
        console.log(civ_desc);
        break;

    case 'CreatureAbilities':
        word1 = advancedDesc.CreatureAbilities[(Math.floor(Math.random() * advancedDesc.CreatureAbilities.length))];
        word2 = advancedDesc.CreatureAbilities[(Math.floor(Math.random() * advancedDesc.CreatureAbilities.length))];
        creature_abilities = `<b>${word1}, ${word2}</b>`;
        adv_desc.CreatureAbilities = [creature_abilities];
        console.log(creature_abilities);
        break;

    case 'CreatureDescriptors':
        word1 = advancedDesc.CreatureDescriptors[(Math.floor(Math.random() * advancedDesc.CreatureDescriptors.length))];
        word2 = advancedDesc.CreatureDescriptors[(Math.floor(Math.random() * advancedDesc.CreatureDescriptors.length))];
        creature_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.CreatureDescriptors = [creature_desc];
        console.log(creature_desc);
        break;

    case 'CrypticMessage':
        word1 = advancedDesc.CrypticMessage[(Math.floor(Math.random() * advancedDesc.CrypticMessage.length))];
        word2 = advancedDesc.CrypticMessage[(Math.floor(Math.random() * advancedDesc.CrypticMessage.length))];
        cryptic_message = `<b>${word1}, ${word2}</b>`;
        adv_desc.CrypticMessage = [cryptic_message];
        console.log(cryptic_message);
        break;

    case 'Curses':
        word1 = advancedDesc.Curses[(Math.floor(Math.random() * advancedDesc.Curses.length))];
        word2 = advancedDesc.Curses[(Math.floor(Math.random() * advancedDesc.Curses.length))];
        curses = `<b>${word1}, ${word2}</b>`;
        adv_desc.Curses = [curses];
        console.log(curses);
        break;

    case 'DescriptorsGeneral1':
        word1 = advancedDesc.DescriptorsGeneral1[(Math.floor(Math.random() * advancedDesc.DescriptorsGeneral1.length))];
        word2 = advancedDesc.DescriptorsGeneral1[(Math.floor(Math.random() * advancedDesc.DescriptorsGeneral1.length))];
        desc_general1 = `<b>${word1}, ${word2}</b>`;
        adv_desc.DescriptorsGeneral1 = [desc_general1];
        console.log(desc_general1);
        break;

    case 'DescriptorsGeneral2':
        word1 = advancedDesc.DescriptorsGeneral2[(Math.floor(Math.random() * advancedDesc.DescriptorsGeneral2.length))];
        word2 = advancedDesc.DescriptorsGeneral2[(Math.floor(Math.random() * advancedDesc.DescriptorsGeneral2.length))];
        desc_general2 = `<b>${word1}, ${word2}</b>`;
        adv_desc.DescriptorsGeneral2 = [desc_general2];
        console.log(desc_general2);
        break;

    case 'DomicileDescriptors':
        word1 = advancedDesc.DomicileDescriptors[(Math.floor(Math.random() * advancedDesc.DomicileDescriptors.length))];
        word2 = advancedDesc.DomicileDescriptors[(Math.floor(Math.random() * advancedDesc.DomicileDescriptors.length))];
        domicile_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.DomicileDescriptors = [domicile_desc];
        console.log(domicile_desc);
        break;

    case 'DungeonDescriptors':
        word1 = advancedDesc.DungeonDescriptors[(Math.floor(Math.random() * advancedDesc.DungeonDescriptors.length))];
        word2 = advancedDesc.DungeonDescriptors[(Math.floor(Math.random() * advancedDesc.DungeonDescriptors.length))];
        dungeon_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.DungeonDescriptors = [dungeon_desc];
        console.log(dungeon_desc);
        break;

    case 'DungeonTraps':
        word1 = advancedDesc.DungeonTraps[(Math.floor(Math.random() * advancedDesc.DungeonTraps.length))];
        word2 = advancedDesc.DungeonTraps[(Math.floor(Math.random() * advancedDesc.DungeonTraps.length))];
        dungeon_traps = `<b>${word1}, ${word2}</b>`;
        adv_desc.DungeonTraps = [dungeon_traps];
        console.log(dungeon_traps);
        break;

    case 'ForestDescriptors':
        word1 = advancedDesc.ForestDescriptors[(Math.floor(Math.random() * advancedDesc.ForestDescriptors.length))];
        word2 = advancedDesc.ForestDescriptors[(Math.floor(Math.random() * advancedDesc.ForestDescriptors.length))];
        forest_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.ForestDescriptors = [forest_desc];
        console.log(forest_desc);
        break;

    case 'Gods':
        word1 = advancedDesc.Gods[(Math.floor(Math.random() * advancedDesc.Gods.length))];
        word2 = advancedDesc.Gods[(Math.floor(Math.random() * advancedDesc.Gods.length))];
        gods = `<b>${word1}, ${word2}</b>`;
        adv_desc.Gods = [gods];
        console.log(gods);
        break;

    case 'Legends':
        word1 = advancedDesc.Legends[(Math.floor(Math.random() * advancedDesc.Legends.length))];
        word2 = advancedDesc.Legends[(Math.floor(Math.random() * advancedDesc.Legends.length))];
        legends = `<b>${word1}, ${word2}</b>`;
        adv_desc.Legends = [legends];
        console.log(legends);
        break;

    case 'Locations':
        word1 = advancedDesc.Locations[(Math.floor(Math.random() * advancedDesc.Locations.length))];
        word2 = advancedDesc.Locations[(Math.floor(Math.random() * advancedDesc.Locations.length))];
        locations = `<b>${word1}, ${word2}</b>`;
        adv_desc.Locations = [locations];
        console.log(locations);
        break;

    case 'MagicItemDescriptors':
        word1 = advancedDesc.MagicItemDescriptors[(Math.floor(Math.random() * advancedDesc.MagicItemDescriptors.length))];
        word2 = advancedDesc.MagicItemDescriptors[(Math.floor(Math.random() * advancedDesc.MagicItemDescriptors.length))];
        magic_item_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.MagicItemDescriptors = [magic_item_desc];
        console.log(magic_item_desc);
        break;

    case 'MutationDescriptors':
        word1 = advancedDesc.MutationDescriptors[(Math.floor(Math.random() * advancedDesc.MutationDescriptors.length))];
        word2 = advancedDesc.MutationDescriptors[(Math.floor(Math.random() * advancedDesc.MutationDescriptors.length))];
        mutation_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.MutationDescriptors = [mutation_desc];
        console.log(mutation_desc);
        break;

    case 'Names':
        word1 = advancedDesc.Names[(Math.floor(Math.random() * advancedDesc.Names.length))];
        word2 = advancedDesc.Names[(Math.floor(Math.random() * advancedDesc.Names.length))];
        names = `<b>${word1}, ${word2}</b>`;
        adv_desc.Names = [names];
        console.log(names);
        break;

    case 'NobleHouse':
        word1 = advancedDesc.NobleHouse[(Math.floor(Math.random() * advancedDesc.NobleHouse.length))];
        word2 = advancedDesc.NobleHouse[(Math.floor(Math.random() * advancedDesc.NobleHouse.length))];
        noble_house = `<b>${word1}, ${word2}</b>`;
        adv_desc.NobleHouse = [noble_house];
        console.log(noble_house);
        break;

    case 'Objects':
        word1 = advancedDesc.Objects[(Math.floor(Math.random() * advancedDesc.Objects.length))];
        word2 = advancedDesc.Objects[(Math.floor(Math.random() * advancedDesc.Objects.length))];
        objects = `<b>${word1}, ${word2}</b>`;
        adv_desc.Objects = [objects];
        console.log(objects);
        break;

    case 'PlotTwists':
        word1 = advancedDesc.PlotTwists[(Math.floor(Math.random() * advancedDesc.PlotTwists.length))];
        word2 = advancedDesc.PlotTwists[(Math.floor(Math.random() * advancedDesc.PlotTwists.length))];
        plot_twists = `<b>${word1}, ${word2}</b>`;
        adv_desc.PlotTwists = [plot_twists];
        console.log(plot_twists);
        break;

    case 'Powers':
        word1 = advancedDesc.Powers[(Math.floor(Math.random() * advancedDesc.Powers.length))];
        word2 = advancedDesc.Powers[(Math.floor(Math.random() * advancedDesc.Powers.length))];
        powers = `<b>${word1}, ${word2}</b>`;
        adv_desc.Powers = [powers];
        console.log(powers);
        break;

    case 'ScavengingResults':
        word1 = advancedDesc.ScavengingResults[(Math.floor(Math.random() * advancedDesc.ScavengingResults.length))];
        word2 = advancedDesc.ScavengingResults[(Math.floor(Math.random() * advancedDesc.ScavengingResults.length))];
        scavenging_results = `<b>${word1}, ${word2}</b>`;
        adv_desc.ScavengingResults = [scavenging_results];
        console.log(scavenging_results);
        break;

    case 'Smells':
        word1 = advancedDesc.Smells[(Math.floor(Math.random() * advancedDesc.Smells.length))];
        word2 = advancedDesc.Smells[(Math.floor(Math.random() * advancedDesc.Smells.length))];
        smells = `<b>${word1}, ${word2}</b>`;
        adv_desc.Smells = [smells];
        console.log(smells);
        break;

    case 'Sounds':
        word1 = advancedDesc.Sounds[(Math.floor(Math.random() * advancedDesc.Sounds.length))];
        word2 = advancedDesc.Sounds[(Math.floor(Math.random() * advancedDesc.Sounds.length))];
        sounds = `<b>${word1}, ${word2}</b>`;
        adv_desc.Sounds = [sounds];
        console.log(sounds);
        break;

    case 'SpellEffects':
        word1 = advancedDesc.SpellEffects[(Math.floor(Math.random() * advancedDesc.SpellEffects.length))];
        word2 = advancedDesc.SpellEffects[(Math.floor(Math.random() * advancedDesc.SpellEffects.length))];
        spell_effects = `<b>${word1}, ${word2}</b>`;
        adv_desc.SpellEffects = [spell_effects];
        console.log(spell_effects);
        break;

    case 'StarshipDescriptors':
        word1 = advancedDesc.StarshipDescriptors[(Math.floor(Math.random() * advancedDesc.StarshipDescriptors.length))];
        word2 = advancedDesc.StarshipDescriptors[(Math.floor(Math.random() * advancedDesc.StarshipDescriptors.length))];
        starship_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.StarshipDescriptors = [starship_desc];
        console.log(starship_desc);
        break;

    case 'TerrainDescriptors':
        word1 = advancedDesc.TerrainDescriptors[(Math.floor(Math.random() * advancedDesc.TerrainDescriptors.length))];
        word2 = advancedDesc.TerrainDescriptors[(Math.floor(Math.random() * advancedDesc.TerrainDescriptors.length))];
        terrain_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.TerrainDescriptors = [terrain_desc];
        console.log(terrain_desc);
        break;

    case 'UndeadDescriptors':
        word1 = advancedDesc.UndeadDescriptors[(Math.floor(Math.random() * advancedDesc.UndeadDescriptors.length))];
        word2 = advancedDesc.UndeadDescriptors[(Math.floor(Math.random() * advancedDesc.UndeadDescriptors.length))];
        undead_desc = `<b>${word1}, ${word2}</b>`;
        adv_desc.UndeadDescriptors = [undead_desc];
        console.log(undead_desc);
        break;

    case 'VisionsAndDreams':
        word1 = advancedDesc.VisionsAndDreams[(Math.floor(Math.random() * advancedDesc.VisionsAndDreams.length))];
        word2 = advancedDesc.VisionsAndDreams[(Math.floor(Math.random() * advancedDesc.VisionsAndDreams.length))];
        visions_dreams = `<b>${word1}, ${word2}</b>`;
        adv_desc.VisionsDreams = [visions_dreams];
        console.log(visions_dreams);
        break;

    default:
        console.log("No matching case found.");
        break;
}
    })
};

function selectAll(){
   var checkboxes = document.querySelectorAll('input[type="checkbox"]');
   checkboxes.forEach(function(checkbox) {
   checkbox.checked = true;
    });
}

function unselectAll(){
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
     });
}

function tickSpecified(typ) {
    if (typ == 'char') {
        var ids = ['adv6','adv7','adv8','adv9','adv10','adv11','adv12','adv13','adv14','adv15','adv16','adv49'];
        var checkboxes = document.querySelectorAll('#' + ids.join(', #'));
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    }
}

function Exit() {
    // Add animation here before closing the window
    // Add CSS transition for fade-out effect
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '0';
    setTimeout(function() {
        window.close();
    }, 1200); // Adjust the duration of the animation as needed
}