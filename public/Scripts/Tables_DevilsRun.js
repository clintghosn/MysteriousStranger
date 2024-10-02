// npc names table for Devil's Run
var devil_npc_name_male = [
        "Nameless", "Ryker", "Walker", "Adam", "Xander", "Elijah", "Washington", "Malachi", "Joseph", "Arc", "Magnus", "Chad", "Cole", "Jacob", "Isaiah", "Kane", "Logan", "Raiden", "Lucas", "Gabriel",
        "River", "Bruce", "Lincoln", "Ace", "Wyatt", "Mercury", "Chip", "Flynn", "Seb", "Jax", "Noah", "Mateo", "Flint", "Benjamin", "Hawk", "Troy", "Blade", "Isaac", "Mason", "Cassian",
        "Elis", "Parker", "Stevie", "Sage", "Charlie", "Jan", "Lee", "Adison", "Phoenix", "Nick", "Quinn", "Dawson", "Rayne", "Les", "Tate", "Hunter", "Vic", "Sandie", "Meritt", "Gareth"
    ]
var devil_npc_name_female = [
        "Nameless", "Journey", "Justice", "Niko", "Ashley", "Striker", "Toni", "Skylar", "Harper", "Blair", "Rylar", "Madison", "Indigo", "Chriss", "Lane", "Andie", "Nevada", "Piper", "Drew", "Alexa",
        "Pandora", "Emma", "Heather", "Eve", "Emerald", "Autumn", "Chastity", "Rune", "Ara", "Sofia", "Nova", "Onyx", "Liberty", "Elizabeth", "Moe", "Lullaby", "Faith", "Yara", "Valkyrie", "Terra",
        "Luna", "Kat", "Pearl", "Hope", "Jade", "Margret", "Sky", "Lucy", "Star", "Maeve", "Lilith", "Avery", "Blayze", "Olympia", "Agnes", "Ivory", "Charity", "Morgan", "Cassie", ""
    ]

// npc appearance table for Devil's Run
var devil_npc_appearance = {
    gender: [
        "Androgynous", "Androgynous", "Androgynous", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female","Unknown","Unknown","Unknown"
    ],
    age: [
        "Newborn", "Newborn", "Feral Child", "Feral Child", "Adolescent", "Adolescent", "Adolescent", "Young Adult", "Young Adult", "Young Adult", "Young Adult", "Young Adult", "Middle Age", "Middle Age", "Middle Age", "Middle Age", "Middle Age", "Elderly", "Elderly", "Elderly", "Dying"
    ],
    height: [
        "Very Short/Skinny", "Very Short/Athletic", "Very Short/Stocky", "Very Short/Fat", "Short/Skinny", "Short/Athletic", "Short/Stocky", "Short/Fat", "Average/Skinny", "Average/Athletic", "Average/Stocky", "Average/Fat", "Tall/Skinny", "Tall/Athletic", "Tall/Stocky", "Tall/Fat", "Very tall/Skinny", "Very Tall/Athletic", "Very Tall/Stocky", "Very Tall/Fat"
    ],
    appearance: [
        "Cross-eyed", "Hairless", "Bald", "Sharpened Teeth", "Scarred Neck", "Tattooed Face", "Tattooed Neck", "Pierced Cheeks", "Torn Hair", "Shaggy Haired", "Toothless", "Long Braided Hair", "Stained Overalls", "Disfigured", "Bright White Hair", "Nose-less", "Oil Slick Hair", "Earless", "Burnt Face", "Beautiful"
    ],
    apparel: [
        "Faded Tuxedo", "Plastic Bottles", "Layers of Netting", "Ripped Flag", "Old Body armour", "Stitched Rags", "Furs/Pelts", "Ripped Shirt", "Cracked Leather", "Old Underwear", "Hesian Sack", "Military Uniform", "Stained Overalls", "Worn Skins", "Helmet Goggles", "Shirt of Gloves", "Bits of Motorbike", "Large Cloak", "nothing but Covered in Mud", "Pots and Pans"
    ],
    role: [
        "Bandit", "Drifter", "Zealot", "Warrior", "Driver", "Farmer", "Scavenger", "Healer", "Trader", "Worker", "Herder", "Settler", "Tinkerer", "Mechanic", "Weaver", "The Vykers Territory", "Storyteller", "Scribe", "Blacksmith", "Elder"
    ]
};

// npc disposition table for Devil's Run
var devil_npc_disposition = {
    disposition1: [
        "Threatening", "Deceptive", "Foolish", "Insulting", "Partially Blind", "Feral", "Weak Willed", "Careless", "Resistant", "Charitable", "Fearful of insects", "Clumsy", "Narcissistic", "Missing an eye", "Dignified", "Creepy", "Reserved", "Indulgent", "Adaptable", "Determined"
    ],
    disposition2: [
        "Disagreeable", "Distracted", "Cowardly", "Emotional", "Blind", "Sadistic", "Envious", "a Smooth talker", "a Compulsive liar", "a Fast talker", "Fearful of Authority", "Moody", "Persuasive", "Missing a leg", "Curious", "a Danger Addict", "Authoritative", "Elegant", "Faithful", "Excited"
    ],
    disposition3: [
        "Dying of illness", "Illiterate", "Impatient", "Greedy", "Partially Deaf", "Injured externally", "Injured Internally", "Impersonal", "Irrational", "Insecure", "Fearful of solitude", "Misguided", "Sarcastic", "Missing a foot", "Quiet", "a Substance Addict", "Polite", "Humorous", "Confident", "Naïve"
    ],
    disposition4: [
        "Morbid", "with a Nervous tick", "Nihilistic", "Sensual", "Deaf", "Organized", "In love", "Outspoken", "Paranoid", "an Unlikely Thief", "Fearful of the dark", "Possessive", "Psychotic", "Missing a hand", "Quick witted", "Rancid", "Relaxed", "Cheerful", "Rowdy", "Beautiful"
    ],
    disposition5: [
        "Secretive", "Seductive", "Sensual", "Frightened", "Mute", "Stinky", "Superstitious", "Soulless", "Threatening", "having Twitches", "Acrophobic", "Reckless", "Vicious", "Missing some fingers", "Shy", "a Substance Addict", "Thoughtful", "Strong willed", "Stern", "Stubborn"
    ],
    disposition6: [
        "Callous", "having a Terrible Memory", "having a Terrible timing", "Owing a debt", "Thoughtless", "Sorrowful", "having Travel sickness", "Fearful of other sex", "Unreliable", "Unlucky", "Claustrophobic", "Tasteless", "having a Terrible Memory", "Missing an arm", "Private", "a Gambling Addict", "Honest", "Casual", "Fearless"
    ]
};
// settlement toolbox table for Devil's Run
var devil_settlementToolbox = {
    material: [
        "Giant Crater and Pits", "Cave Mouth", "Canyon with Huts", "Large Piled Stones", "Scaffolding and Canvas", "Stacked Chard Trees", "Concrete Domes", "Transport Containers", "Welded Old Vehicles", "Ruined Buildings", "Mud and Stick Huts", "Towers of Burnt Cars", "Petrol Station", "Faded Military Tents", "Farm Building", "Circus Tents", "Roadside Dinner", "Scorched Bunker", "Jumbo Jet Wreck", "Roll Twice"
    ],
    firstImpression: [
        "Smell of petrol all around", "Burning Torches", "Stone Patterns", "Drawn Symbols", "Skulls & Bones", "Bullet Casings", "Defensive Pikes", "Pile of Rubbish", "Old Road Signs", "place is Buried in Sand", "Graffiti & Tags", "Fresh Grave", "Mud & Dirt Prints", "Handprints", "place is Overgrown", "place is Steaming Hot", "place is Misty", "Blood Splattered all over", "Bullet Casings", "Roll Twice"
    ],
    no_of_dwelling: [
        "1", "1", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "4", "6", "6", "8", "8", "10", "10"
    ],
    dwelling_type: [
        "Dwelling (Small)", "Dwelling (Medium)", "Dwelling (Large)", "Storage", "Workshop", "Shop", "Garage", "Fire Circle", "Elders Space", "School", "Vault", "Jail", "Infirmary", "Armory", "Forge", "Generator", "Mess", "Shrine", "Graveyard", "Temple"
    ],
    occupants: [
        "Deserted", "Deserted", "Occupied by someone with Hidden Secrets", "Occupied by someone with Hidden Traps", "Occupied by someone Barbaric", "Occupied by someone Angry", "Occupied by someone Paranoid", "Occupied by someone Volatile", "Occupied by someone Cold & Simple", "Occupied by a Welcoming Party", "Occupied by someone Levelheaded", "Occupied by someone Thoughtful", "Occupied by someone Desperate", "Occupied by someone Secretive", "Occupied by someone Delusional", "Occupied by someone Childlike", "Occupied by someone Hiding in Fear", "Occupied by someone Hiding", "Deserted", "Deserted"
    ]
};

// settlement name table for Devil's Run
var devil_settlement_name = {
    name1: [
        "Forbidden", "Old", "Rock", "North", "Dust", "Heaven", "Silent", "Forgotten", "Oil", "Lost", "The", "Scorched", "Grease", "Dead", "Fort", "Broken", "Peace", "New", "East", "Roll Twice"
    ],
    name2: [
        "Brook", "Falls", "Haven", "Hill", "Hope", "Hollow", "Heights", "Crater", "End", "Bowl", "River", "Canyon", "Plains", "Crag", "Point", "Pile", "Town", "Desert", "Gulf", "Roll Twice"
    ]

};
// Gang Generator for Devil's Run
var devil_gang = {
    icon: [
        "a Skull", "a Snake", "Fire", "a Lightning Bolt", "a Cog", "a Fist", "an Eagle", "a Hand", "Sun", "a Goat's Head", "a Pentacle", "a Black Cross", "a Smiley Face", "a Falling Bomb", "an Oil Stain", "a Head On a Pike", "Teeth", "an Eye", "a Fast Food Logo", "the Devil"
    ],
    uniform: [
        "Leather", "Denim", "Oil Stained", "Blood Stained", "being Tattooed", "having Body Paint", "being Naked", "Branding", "Furs/ Pelts", "Chains", "Bondage", "Straps/Belts", "Mohawks", "Piercings", "Skin Head", "Mutilation", "Fine Clothes", "Human Skins", "Bones/Teeth", "Mud/Dirt"
    ],
    battleRitual: [
        "Lighting Fires", "Bathing in Blood", "Drinking Blood", "Licking Frogs/Toads", "Scarification", "Throwing Nails", "Tribal Dancing", "Playing Loud Music", "Shooting in the Air", "Sacrificing Animals", "Inducing Hallucinations", "Wailing/Howling", "Home-made Whistles", "Hysterical Laughter", "Rapid Tongue Clicks", "Sacrificing Humans", "Whistling in Union", "Snorting Powders", "Throwing Bones & Teeth", "Substance Abuse"
    ],
    state: [
        "Asleep", "Drunk", "Eating", "Relaxed", "Worshipping", "Sacrificing", "Urinating", "Chanting", "Mending", "Scavenging", "Distraught", "Raging", "Hunting", "Raiding", "Returning", "Partying", "Stalking", "Fighting", "Attacking", "Buzzing"
    ],
    armament: [
        "nothing (Unarmed)", "Sticks", "Bones", "Chains", "Nets", "Hammers", "Knives", "Cleavers", "Hooks", "Slings", "Arrows", "Swords", "Spears", "Pistols", "Spear Guns", "Shotguns", "Rifles", "Machineguns", "Grenades", "Roll Twice"
    ],
    size: [
        "0", "1", "1", "2", "0", "1", "2", "3", "0", "2", "3", "4", "3", "4", "5", "3", "6", "4", "5", "10"
    ]
};

// Gang Member Name Generator for Devil's Run
var devil_gang_member = {
    name1: [
        "BBQ", "Buzz", "Ripper", "Gear", "Tool", "Fracture", "Skull", "Infectus", "Wrench", "Bubbah", "Jonny", "Bruce", "Grill", "Saw", "Coma", "Kid", "Commander", "Imperitor", "Blaster", "Axel"
    ],
    name2: [
        "Grab", "Clunk", "Dag", "Lug", "Errectus", "Uncle", "Nix", "Docter", "Bullet", "Proton", "Doof", "Skinner", "Black", "Chug", "Bleed", "Toadie", "King", "Led", "Guts", "The Keeper"
    ],
    name3: [
        "Runner", "Eater", "Psycho", "Bomber", "Krunk", "Warrior", "Brutus", "Kit", "Gunner", "Pig", "Deal gud", "Snake", "Colossus", "Slit", "Rig", "Vicious", "Tank", "Knuckles", "Boss", "Ravage"
    ],
    name4: [
        "Aunty", "Rolla", "Salt", "Lock", "Boy", "Shaft", "Jaw", "Fender", "Youngun", "Wolf", "Smash", "Colt", "Iron bar", "Bilz", "Joe", "Sprog", "Fist", "Crash", "Man", "Death"
    ],
    name5: [
        "Pretty", "MR TV", "Burner", "Ugg", "Nitro", "Lipps", "Punch", "Pest", "Mud", "Plug", "Chrome", "Stick", "Killa", "Gimp", "Lord", "Spider", "Rock", "Disco", "Smash", "Stunner"
    ],
    name6: [
        "Compressor", "Cutter", "T Bone", "Slush", "Claw", "Daddy", "Buckle", "Junior", "Ace", "Big Earl", "Grub", "Rider", "Entity", "Spanner", "Fillet", "Dirt", "Dog", "Pet", "Dragger", "Bite"
    ]
};
// Gang Battle Tactics Generator for Devil's Run
var devil_gang_battle_tactics = [
    "Armadillo Tactic: A  solid defensive impenetrable parameter, which cannot be flanked, protected on all sides. Strength in numbers, attack as one. Approach in full defence, a synchronised tactical strike then retreat into defence. Conserving strength, and a continuous game of endurance",
    "Scorpion Tactic: A three-pronged attack, two pincers take turns to strike on each flank, drawing attention of target, one holds for the other to strike. The powerful tail moves in to strike from above from a distance (Artillery or Mortar) allowing the pincers to reload then repeat",
    "Coyote Tactic: A chaotic ambush! Always moving and mobile. Full force attacks to weaken a resource as they pass, then quickly escape. Burst tires, set fires, blind with oil or paint, damage weaponry and supplies, steal equipment",
    "Eagle Tactic: A maximum damage attack in a tight formation at full speed from nowhere. The eagle assesses the target and swoops in with concentrated range attacks. Then it switches to devastating melee to snatch away its target. Focused full force attacks on the same target until it is destroyed",
    "Rattle Snake Tactic: A tactically defensive formation; a wide, winding line, watching each other’s back. Feeding to the head, while the body can hide and move unseen. The snake’s wide formation and positioning gives perspective and awareness, using terrain to distract and disadvantage its target",
    "Wolf Tactic: A pack of aggressive hunters, wolves work together to exploit tired targets. The pack spreads out, keeping its distance. The wolf creates fear and deception, giving the impression of being a larger continuous threat. Waiting to take the weakest target",
    "Spider Tactic: An intelligent and patient predator. Using slow, methodical tactics and techniques. Setting traps and being prepared. The spider understands the strength of its target, only striking when the time is perfect. Using any means necessary to disable and disadvantage its target",
    "Vulture Tactic: Opportunistic and cunning. Steals from the dead. It uses stealth tactics to attack at the most vulnerable moment. Waits for the target to be already engaged and struggling. Scavenges from the weakest target. Hit and run when players are vulnerable",
    "Bear Tactic: A fearless and deadly attack fuelled by brute strength and aggression. Uses a highly intelligent, planned assault that exploits its targets’ weaknesses. Divides and conquers. Takes no prisoners. Continuous aggression and might",
    "Chameleon Tactic: The deadliest. Mirrors and matches the tactics and style of its opponents. Versatile and fluid. Constantly evolving. Optimizes everything available to crush its target"
];
// Chop Shop Generator for Devil's Run
var devil_chop_shop = {
    type: [
        "Digger", "Hearse", "Limo", "Tractor", "Estate", "Hatchback", "Motortrike", "Dirt Bike", "Buggy", "Coupe", "Cruiser Bike", "Chopper", "Sports Bike", "MPV", "Truck", "Van", "SUV", "Convertible", "Rig", "Tank"
    ],
    condition: [
        "Smouldering", "Burning", "Smashed", "Battered", "Dented", "Sprayed in Tags", "Ratting", "Smoking", "Bouncing", "Backfiring", "having No Doors", "Roofless", "Filthy", "Blood Smeared", "Oil Stained", "Tribal Painted", "Stripped", "Pristine", "Welded & Fixed", "Conjoined"
    ],
    customMod1: [
        "Monster Tires", "Flame Thrower", "Plough", "Gatling Gun", "Extended Storage", "Spikes!!", "Extra Seat", "Cannon", "Turret", "Machine Gun", "Tipper Ramp", "Swinging Blade", "Caterpillar Track", "Harpoon", "Bladed Wheels", "Morning Star", "Toxic Spray", "Lances", "Chain Whips", "Circular Saw"
    ],
    customMod2: [
        "Cannon", "Heavy Roller", "Paint Cannon", "Nitrous Tank", "Electric Net", "Net Thrower", "Chain Tires", "Machine Gun", "Trailing Traps", "Crane", "Crossbows", "Flame Thrower", "Grenade Spear", "Plate Shielded", "Arrows", "Industrial Drill", "Seat Launcher", "Oil Gun", "Winch", "Cherry Picker"
    ],
    miscellaneous: [
        "are Multiple Headlights", "are Flags", "are Old Mobile Phones", "are Dolls Heads", "are Bullet Cases", "are Wires and Old Cables", "are Tusks and Bones", "is Human Hair", "are Furs and Pelts", "is it's Covered in Mirrors", "are Strips of Cloth", "are Eyeballs on Sticks", "is a pair of Fury Dice", "is a Rotting Body", "is a Musical Horn", "is A Mascot", "are Human Skulls", "are Broken TVs", "are Old Tablets & Cds", "are Water Carriers"
    ]
};
// Goal Generator for Devil's Run
var devil_goal = {
    goal1 : {
        d18_do_1: [
            "Destroy", "Destroy", "Capture/Rescue", "Capture/Rescue", "Damage/Hurt", "Damage/Hurt", "Deceive/Distort", "Deceive/Distort", "Discover/Uncover", "Discover/Uncover", "Support/Assist", "Support/Assist", "Defend/Protect", "Defend/Protect", "Mend/Heal", "Mend/Heal", "Find/Locate", "Find/Locate", "Find/Locate", "Find/Locate"
        ],
        d18_target_1: [
            "an Ally", "a Criminal", "a Friend", "a Child/baby", "a Revolutionist", "an Enemy", "a Ritual", "a Gang", "an Elder/Wiseperson", "a Secret", "a Language", "a Myth/Legend", "a Stranger", "a Genius", "a Pregnant Woman", "a Gang Member", "an Organisation", "a Faith/Religion"
        ]
    },
    goal2 : {
        d18_do_2: [
            "Destroy", "Destroy", "Capture/Steal", "Capture/Steal", "Hide", "Hide", "Break/Damage", "Break/Damage", "Deliver", "Deliver", "Defend/Protect", "Defend/Protect", "Fix/Mend", "Fix/Mend", "Uncover", "Uncover", "Find/Locate", "Find/Locate", "Find/Locate"
        ],
        d18_target_2: [
            "a Relic", "Weapons", "Medicines", "Water", "Valuables", "Soil", "Information", "an Equipment", "a Technology", "a Clothing/Uniform", "Fuel", "a Location", "Vehicles", "Food", "an Object", "a Text/Written Word", "Seeds", "a Map"
        ]
        }
    };
// Threat Generator for Devil's Run
var dr_threat = ["Antagonist","Antagonist","Antagonist","Event","Event","Event"]
var dr_d19_behaviour = ["Furious", "Resentful", "Ruthless", "Devious", "Volatile", "Fanatical", "Wrathful", "Tormented", "Merciless", "Frenzied", "Reckless", "Rogue", "Mocking", "Deceitful", "Scheming", "Obsessive", "Cruel", "Masochistic", "Depraved"]
var dr_d19_type = ["Crime Lord", "Gang Leader", "Political Head", "Religious Leader", "Cult Leader", "Warrior", "Mutants", "Organisation", "Genius", "Family Member", "Old Friend", "Scientist", "Scavengers", "Beast", "Social Leader", "Tribal Chief", "Undead", "Inventor", "Roll Again & Combine"]
var dr_d19_situation = ["Mega-Tornado/s", "Mega Tornado/s", "Super-Earthquake/s", "Super Earthquake/s", "Volcanic Eruption/s", "Volcanic Eruption/s", "Civil War", "Civil War", "2nd Nuclear Threat", "2nd Nuclear Threat", "Endangered Resource/s", "Endangered Resource/s", "Epidemic Virus", "Epidemic Virus", "Growing Doomsday Cult", "Growing Doomsday Cult", "Narcotic Abuse Crisis", "Narcotic Abuse Crisis", "Roll Again & Combine"]

// Location Generator for Devil's Run
var devil_location = {
    location1: [
        "Underground Cult Temple", "Hand-Crafted Monolith", "A Secret Vault", "Vandalised Memorial", "Giant Old Bridge", "Frozen Oil Pits", "Tar Lake or Swampland", "Steam Vents", "Abandoned Rebel Camp", "Black Water", "Radioactive Rubble", "Chemical Lake", "Mic's Shack of Light & Wonder", "Derelict Prison", "Red Moss Rocks", "Chained to a Car", "A Single Grave", "Ambushed Van in Ditch", "Acid Lake Formed Gorge", "Deep Dry Lakebed"
    ],
    location2: [
        "Abandoned Brewery", "Maze of Scrap Metal", "Flowers Near Quicksand", "Footfall Dirt Track", "Petrol Rig Graveyard", "Frontier Shack", "Tomb of Dead Gang Lord", "Mushroom Cloud Statue", "Massacred Vehicle Scene", "An Over-Grown Toll Station", "Derelict Stadium", "High Rise Ruins", "Hot Springs from Warhead", "Subway Cave System", "Unfinished Bunker System", "Raided Mansion", "An Acid Rain-Soaked Diner", "The Bullet Orchard", "The Mad Oracle's Shack", "Ancient Tree"
    ],
    location3: [
        "Bus Station or Gang HQ", "Overgrown Bank Branch", "Experimental Army Base", "Route 666", "Hidden Laboratory", "Smashed Up Airport", "Scavenged Hospital", "Stadium", "Haul's Angels Fraternity", "Derelict Mega-Mall", "Guarded Mega-Market", "A Place Of Worship", "Abandoned Police Station", "Guarded Garden Centre", "Chaotic Overgrown Zoo", "Derelict Sports Centre", "Rival Gang HQ", "MultiPlex Gang HQ", "Converted Factory", "A Travelling Village"
    ],
    location4: [
        "The Feral Kid Hills", "Skeleton Pits", "The Coast", "The Great Crash Pile", "The Remains Of 'X-Town'", "The Bathing Blood Pools", "The Iron Wall", "The Bottom of a Well", "Dirt Dunes", "Dooms Day Sundial", "Statue Garden", "Scorched Redwoods", "Crystallised Lake", "Melted Wind Turbines", "Weather Station", "Ancient Iron Bridge", "The Black Geyser", "Abandoned Farmhouse", "The Salt Plains", "Scorched Forest"
    ],
    location5: [
        "Satan's Ravine", "A Deadly Gang HQ", "Heavens Kiss Oasis", "The Tombstone Highway", "Mega - Quarry", "The Village of Cats", "The Altar of the 'Road Queen'", "The Stairway to Heaven", "The Resting Grounds Of 'Y'", "Dried Reservoir", "Town Split in Half by Valley", "A Battlefield Of The Final Push", "Town Flooded in Oil", "Giant Sink Hole", "Calcified Electric Pylons", "A Military Tech Graveyard", "Infection Zone Nightclub", "Demolition Derby Jets Territory", "Amusement Town", "Mamma Q's House of Sin"
    ],
    location6: [
        "Occupied Theme Park", "'Glamazon' Warehouse", "Burning Campus", "Fire Station Fuel Station", "Convention Centre", "Fast-Food Gun Store", "'Welcome to Bodies4Fuel'", "A Bartering Cage", "A Betting Drag Strip", "A Glasy Field", "A Mountain Camp", "The Border Wall", "Vally of Los Nigromantes", "Skinner Territory", "Avant Guard Territory", "The Vykers Territory", "Justice Territory", "Jets Territory", "Britattack Territory", "The Land Glowing Below"
    ]
};
// Encounter Generator for Devil's Run
var devil_encounter = {
    encounter1: [
        "A fire engine crashed on its side down the edge of the highway.", "A young family is travelling on foot.", "A trader van broken down on the road.", "A young man bleeding has been robbed.", "The sky erupts beyond the red clouds.", "A woman wrapped in a flag uses a sword to hitchhike.", "A girl asks if you have seen her uncle.", "A you man is frantically calling out for his lost dog 'Dog'.", "An unmarked deserted roadside diner appears before the PCs.", "A deserted farm stinks of rotten flesh and filled with flies.", "Black smoke leads to a petrol station on fire.", "The remains of a raided convoy is filled with bodies and wreckage.", "A drunk gang member is laying in the middle of the road.", "A family is being chased by a gang.", "A single mum and children are fending off a natural predator.", "A friendly NPC offers assistance.", "A hurt settler with a heavy case needs a lift home.", "A settlement is being fought over by packs of rival gangs.", "You find a car full of old televisions and hair spray.", "The PCs find a bush with poison berries."
    ],
    encounter2: [
        "Weeping can be heard from off road.", "You stumble across a figure dressed in white.", "The floor is covered in a strange powder", "Car wrecks are completely covered in salt.", "A gang is fighting over a map.", "A starving child rocks back and forth on a car bonnet.", "A mad man knows a secret, and he has seen a PC in his dreams.", "Three abandoned trucks in the middle of road sit, lights blinking.", "Strange lights and smoke off road catch your eye.", "Strange lights and smoke off road catch your eye.", "A pool of collected rainwater attracts wildlife and predators.", "A delicious smell is in the air.", "A shack's rusty sign reads, 'Palms read 4 blood'.", "A loud wail startles you from behind, RAIDERS!", "A cry for help comes from down a hole.", "A gang member cries out for help, trapped in a flipped car.", "Machine gun fire grows louder.", "The PCs are being followed", "You spot a beautiful view across the landscape.", "The PCs are being watched and tested from a distance.", "A man on a motorbike is singing and rocking a baby to sleep."
    ],
    encounter3: [
        "The sound of roaring engines is growing closer.", "A gang lorry carries slaves away from a burning camp.", "A gang member wants to leave their gang.", "You are ambushed by angry locals, tired of raiders.", "Flash floods and heavy downpours assail you.", "A raiding party is loading loot from a crashed truck.", "A three-legged dog is curious about you.", "A young arrogant woman wants to join the PCs.", "A young man wants to buy a PC's vehicle.", "A war rig is being attacked by bandits on the horizon.", "An old woman with a machine gun wants revenge.", "A feral child ambushes the PCs stealing a valuable.", "A crowd is betting on road races.", "A young couple in love have ran away together.", "An oasis has a very helpful and seductive travellers.", "A gang displays its power and skill from a distance.", "A large spider crawls across a PC's shoulder.", "The road suddenly stops at a scorched crater.", "You see children playing war with sticks as guns.", "An irresistible NPC is offering you a slice of adventure."
    ]
};
// Loot Generator for Devil's Run
var devil_loot = {
    loot1: ["[Broken] Candles", "[Broken] Cloth", "[Broken] Animal Skins", "[Broken] Tinned Fruit", "[Broken] Plastic Jug", "[Broken] Dog Food", "[Broken] Flip Flops", "[Broken] Tinned Veg", "[Broken] Mug", "[Broken] Tinned Meat", "[Broken] Scalpel", "[Broken] Rope", "[Broken] Cable Ties", "[Broken] Jar of Coffee", "[Broken] Snow Globe", "[Broken] Kindling", "[Broken] Gold Ring", "[Broken] Oil Can", "[Broken] Bag for Life", "[Broken] Bottle of Beer"
    ],
    loot2: ["[Filthy] Full Needle", "[Filthy] Petrol Can", "[Filthy] Empty Toolbox", "[Filthy] Rusty Knife", "[Filthy] Old Coins", "[Filthy] Chalk", "[Filthy] Shotgun", "[Filthy] Pencil Case", "[Filthy] Chess Piece", "[Filthy] Mobile Phone", "[Filthy] Doll", "[Filthy] Hand Mirror", "[Filthy] Bottle of Vodka", "[Filthy] Fishing Hooks", "[Filthy] Flint Stone", "[Filthy] Jerky]", "[Filthy] Salt & Pepper", "[Filthy] Nightgown", "[Filthy] Winter Gloves", "[Filthy] Lighter Fluid"
    ],
    loot3: ["[Dirty] Grenade", "[Dirty] Gaming Dice", "[Dirty] Yo-Yo", "[Dirty] Nails & Screws", "[Dirty] Dead Bird", "[Dirty] Half A Rat", "[Dirty] Ammo", "[Dirty] Pack of Cards", "[Dirty] Flask", "[Dirty] Comb", "[Dirty] Wig", "[Dirty] Mask", "[Dirty] Pretty Broach", "[Dirty] Spanner", "[Dirty] Bottled Water", "[Dirty] Handcuffs", "[Dirty] Chili Powder", "[Dirty] Spectacles", "[Dirty] Medal", "[Dirty] Bar of Soap"
    ],
    loot4: ["[Worn] Lunch Box", "[Worn] Dried Peas", "[Worn] Wooden Flute", "[Worn] Saucepan", "[Worn] Bangles", "[Worn] Length of Chain", "[Worn] Harmonica", "[Worn] Dead Mouse", "[Worn] Book", "[Worn] Breadknife", "[Worn] Screwdriver", "[Worn] Boots", "[Worn] Mouldy Flour", "[Worn] Toy Soldier", "[Worn] Seashells", "[Worn] Rosary Beads", "[Worn] Leather Apron", "[Worn] Wind-Up Torch", "[Worn] Kaleidoscope", "[Worn] Old Toaster"
    ],
    loot5: ["[Good] Dumbbell", "[Good] Earing", "[Good] Glass Jar", "[Good] Thread", "[Good] Band Aids", "[Good] Powdered Milk", "[Good] Pocket Knife", "[Good] Hatchet", "[Good] Kettle", "[Good] Teeth", "[Good] Burlap Sack", "[Good] Needle", "[Good] WD 40", "[Good] Wristswatch", "[Good] Hand Saw", "[Good] Photograph", "[Good] Body Armor", "[Good] Box of Matches", "[Good] Smart Shoes", "[Good] Plastic Sheet"
    ],
    loot6: ["[Like New] Netting", "[Like New] MP3 Player", "[Like New] Torn Bible", "[Like New] Baseball Bat", "[Like New] Rubber Glove", "[Like New] Gas Mask", "[Like New] Bag of Seeds", "[Like New] Hammer", "[Like New] Aspirin", "[Like New] Bottle of Rum", "[Like New] Rubber Tire", "[Like New] Sunglasses", "[Like New] A Map", "[Like New] Baseball Cap", "[Like New] Twinkie", "[Like New] Bucket of Soil", "[Like New] Car Battery", "[Like New] Postcard", "[Like New] BBQ Fork", "[Like New] Belt"
    ]
};