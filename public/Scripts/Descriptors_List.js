var fcus;
var action;
var action2;
var descriptor;
var loc;
var char;
var obj;
var npcRel;
var npcConvMood;

var focus = [
    "Remote Event","Remote Event","Remote Event","Remote Event","Remote Event",
    "Ambiguous Event","Ambiguous Event","Ambiguous Event","Ambiguous Event","Ambiguous Event",
    "New NPC","New NPC","New NPC","New NPC","New NPC","New NPC","New NPC","New NPC","New NPC","New NPC",
    "NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action",
    "NPC Negative","NPC Negative","NPC Negative","NPC Negative","NPC Negative",
    "NPC Positive","NPC Positive","NPC Positive","NPC Positive","NPC Positive",
    "Move Toward a Thread","Move Toward a Thread","Move Toward a Thread","Move Toward a Thread","Move Toward a Thread",
    "Move Away from a Thread","Move Away from a Thread","Move Away from a Thread","Move Away from a Thread","Move Away from a Thread","Move Away from a Thread","Move Away from a Thread","Move Away from a Thread","Move Away from a Thread","Move Away from a Thread",
    "Close a Thread","Close a Thread","Close a Thread","Close a Thread","Close a Thread",
    "PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative",
    "PC Positive","PC Positive","PC Positive","PC Positive","PC Positive",
    "Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context"
];

var sceneAdjustment = [
    "Remove A Character", "Add A Character", "Reduce/Remove An Activity", "Increase an Activity","Remove An Object", "Add An Object", 
    "Make 2 Adjustments","Make 2 Adjustments","Make 2 Adjustments","Make 2 Adjustments"
];

var adventureFocus = [
    "Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature","Adventure Feature",
    "NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action","NPC Action",
    "NPC Negative","NPC Negative","NPC Negative","NPC Negative","NPC Negative","NPC Negative","NPC Negative","NPC Negative","NPC Negative","NPC Negative",
    "NPC Positive","NPC Positive","NPC Positive","NPC Positive","NPC Positive",
    "PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative","PC Negative",
    "PC Positive","PC Positive","PC Positive","PC Positive","PC Positive","PC Positive","PC Positive","PC Positive","PC Positive","PC Positive",
    "Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context","Current Context"
]

var meanings = {
    "Action1": [
        "Abandon","Accompany","Activate","Agree","Ambush","Arrive","Assist","Attack","Attain","Bargain","Befriend","Bestow","Betray","Block","Break","Carry","Celebrate","Change","Close","Combine",
        "Communicate","Conceal","Continue","Control","Create","Deceive","Decrease","Defend","Delay","Deny","Depart","Deposit","Destroy","Dispute","Disrupt","Distrust","Divide","Drop","Easy","Energize",
        "Escape", "Expose", "Fail", "Fight", "Flee", "Free", "Guide", "Harm", "Heal", "Hinder","Imitate", "Imprison", "Increase", "Indulge", "Inform", "Inquire", "Inspect", "Invade","Leave", "Lure", 
        "Misuse", "Move", "Neglect", "Observe", "Open", "Oppose", "Overthrow","Praise", "Proceed", "Protect", "Punish", "Pursue", "Recruit", "Refuse", "Release","Relinquish", "Repair", "Repulse", "Return", "Reward",
        "Ruin", "Separate","Start", "Stop", "Strange", "Struggle", "Succeed", "Support", "Suppress", "Take","Threaten", "Transform", "Trap", "Travel", "Triumph", "Truce", "Trust", "Use", "Usurp","Waste"
    ],
    
    "Action2": [
        "Advantage", "Adversity", "Agreement", "Animal", "Attention", "Balance", "Battle", "Benefits","Building", "Burden", "Bureaucracy", "Business", "Chaos", "Comfort", "Completion", "Conflict","Cooperation", "Danger", "Defense", "Depletion",
        "Disadvantage", "Distraction", "Elements","Emotion", "Enemy", "Energy", "Environment", "Expectation", "Exterior", "Extravagance", "Failure","Fame", "Fear", "Freedom", "Friend", "Goal", "Group", "Health", "Hindrance", "Home",
        "Hope","Idea", "Illness", "Illusion", "Individual", "Information", "Innocent", "Intellect", "Interior","Investment", "Leadership", "Legal", "Location", "Military", "Misfortune", "Mundane", "Nature","Needs", "News", "Normal",
        "Object", "Obscurity", "Official", "Opposition", "Outside", "Pain","Path", "Peace", "People", "Personal", "Physical", "Plot", "Portal", "Possessions", "Poverty","Power", "Prison", "Project", "Protection", "Reassurance",
        "Representative", "Riches", "Safety","Strength", "Success", "Suffering", "Surprise", "Tactic", "Technology", "Tension", "Time","Trial", "Value", "Vehicle", "Victory", "Vulnerability", "Weapon", "Weather", "Work", "Wound"
    ],

    "Descriptor1": [
        "Adventurously", "Aggressively", "Anxiously", "Awkwardly", "Beautifully", "Bleakly", "Boldly", "Bravely","Busily", "Calmly", "Carefully", "Carelessly", "Cautiously", "Ceaselessly", "Cheerfully", "Combatively","Coolly", "Crazily", "Curiously", "Dangerously",
        "Defiantly", "Deliberately", "Delicately", "Delightfully","Dimly", "Efficiently", "Emotionally", "Energetically", "Enormously", "Enthusiastically", "Excitedly","Fearfully", "Ferociously", "Fiercely", "Foolishly", "Fortunately", "Frantically", "Freely", "Frighteningly","Fully",
        "Generously", "Gently", "Gladly", "Gracefully", "Gratefully", "Happily", "Hastily", "Healthily","Helpfully", "Helplessly", "Hopelessly", "Innocently", "Intensely", "Interestingly", "Irritatingly", "Joyfully","Kindly", "Lazily", "Lightly", "Loosely",
        "Loudly", "Lovingly", "Loyally", "Majestically", "Meaningfully","Mechanically", "Mildly", "Miserably", "Mockingly", "Mysteriously", "Naturally", "Neatly", "Nicely", "Oddly","Offensively", "Officially", "Partially", "Passively", "Peacefully", "Perfectly",
        "Playfully", "Politely","Positively", "Powerfully", "Quaintly", "Quarrelsomely", "Quietly", "Roughly", "Rudely", "Ruthlessly", "Slowly","Softly", "Strangely", "Swiftly", "Threateningly", "Timidly", "Very", "Violently", "Wildly", "Yieldingly"
    ],

    "Descriptor2": [
        "Abnormal","Amusing","Artificial","Average","Beautiful","Bizarre","Boring","Bright","Broken","Clean","Cold","Colorful","Colorless","Comforting","Creepy","Cute","Damaged","Dark","Defeated","Dirty",
        "Disagreeable","Dry","Dull","Empty","Enormous","Extraordinary","Extravagant","Faded","Familiar","Fancy","Feeble","Festive","Flawless","Forlorn","Fragile","Fragrant","Fresh","Full","Glorious","Graceful",
        "Hard","Harsh","Healthy","Heavy","Historical","Horrible","Important","Interesting","Juvenile","Lacking","Large","Lavish","Lean","Less","Lethal","Lively","Lonely","Lovely","Magnificent","Mature",
        "Messy","Mighty","Military","Modern","Mundane","Mysterious","Natural","Normal","Odd","Old","Pale","Peaceful","Petite","Plain","Poor","Powerful","Protective","Quaint","Rare","Reassuring",
        "Remarkable","Rotten","Rough","Ruined","Rustic","Scary","Shocking","Simple","Small","Smooth","Soft","Strong","Stylish","Unpleasant","Valuable","Vibrant","Warm","Watery","Weak","Young"
    ],

    "Locations": [
        "Abandoned", "Active", "Artistic", "Atmosphere", "Beautiful", "Bleak", "Bright", "Business", "Calm", "Charming", "Clean","Cluttered", "Cold", "Colorful", "Colorless", "Confusing", "Cramped", "Creepy", "Crude", "Cute",
        "Damaged", "Dangerous", "Dark", "Delightful", "Dirty", "Domestic", "Empty", "Enclosed", "Enormous", "Entrance","Exclusive", "Exposed", "Extravagant", "Familiar", "Fancy", "Festive", "Foreboding", "Fortunate", "Fragrant", "Frantic",
        "Frightening", "Full", "Harmful", "Helpful", "Horrible", "Important", "Impressive", "Inactive", "Intense","Intriguing", "Lively", "Lonely", "Long", "Loud", "Meaningful", "Messy", "Mobile", "Modern", "Mundane", "Mysterious",
        "Natural", "New", "Occupied", "Odd", "Official","Old", "Open", "Peaceful", "Personal", "Plain","Portal", "Protected", "Protection", "Purposeful", "Quiet", "Reassuring", "Remote", "Resourceful", "Ruined", "Rustic",
        "Safe", "Services", "Simple", "Small", "Spacious", "Storage", "Strange", "Stylish", "Suspicious", "Tall", "Threatening", "Tranquil", "Unexpected", "Unpleasant", "Unusual", "Useful","Warm", "Warning", "Watery","Welcoming"
    ],

    "Characters": [
        "Accompanied", "Active", "Aggressive", "Ambush", "Animal", "Anxious", "Armed", "Beautiful", "Bold", "Busy",
        "Calm", "Careless", "Casual", "Cautious", "Classy", "Colorful", "Combative", "Crazy", "Creepy", "Curious",
        "Dangerous", "Deceitful", "Defeated", "Defiant", "Delightful", "Emotional", "Energetic", "Equipped", "Excited", "Expected",
        "Familiar", "Fast", "Feeble", "Feminine", "Ferocious", "Foe", "Foolish", "Fortunate", "Fragrant", "Frantic",
        "Friend", "Frightened", "Frightening", "Generous", "Glad", "Happy", "Harmful", "Helpful", "Helpless", "Hurt",
        "Important", "Inactive", "Influential", "Innocent", "Intense", "Knowledgeable", "Large", "Lonely", "Loud", "Loyal",
        "Masculine", "Mighty", "Miserable", "Multiple", "Mundane", "Mysterious", "Natural", "Odd", "Official", "Old",
        "Passive", "Peaceful", "Playful", "Powerful", "Professional", "Protected", "Protecting", "Questioning", "Quiet", "Reassuring",
        "Resourceful", "Seeking", "Skilled", "Slow", "Small", "Stealthy", "Strange", "Strong", "Tall", "Thieving",
        "Threatening", "Triumphant", "Unexpected", "Unnatural", "Unusual", "Violent", "Vocal", "Weak", "Wild", "Young"
    ],

    "Objects": [
        "Active", "Artistic", "Average", "Beautiful", "Bizarre", "Bright", "Clothing", "Clue", "Cold", "Colorful",
        "Communication", "Complicated", "Confusing", "Consumable", "Container", "Creepy", "Crude", "Cute", "Damaged", "Dangerous",
        "Deactivated", "Deliberate", "Delightful", "Desired", "Domestic", "Empty", "Energy", "Enormous", "Equipment", "Expected",
        "Expended", "Extravagant", "Faded", "Familiar", "Fancy", "Flora", "Fortunate", "Fragile", "Fragrant", "Frightening",
        "Garbage", "Guidance", "Harm", "Harmful", "Healing", "Heavy", "Helpful", "Horrible", "Important", "Inactive",
        "Information", "Intriguing", "Large", "Lethal", "Light", "Liquid", "Loud", "Majestic", "Meaningful", "Mechanical",
        "Modern", "Moving", "Multiple", "Mundane", "Mysterious", "Natural", "New", "Odd", "Official", "Old",
        "Ornamental", "Ornate", "Personal", "Powerful", "Prized", "Protection", "Rare", "Ready", "Reassuring", "Resource",
        "Ruined", "Small", "Soft", "Solitary", "Stolen", "Strange", "Stylish", "Threatening", "Tool", "Travel",
        "Unexpected", "Unpleasant", "Unusual", "Useful", "Useless", "Valuable", "Warm", "Weapon", "Wet", "Worn"
    ]
};

var advancedDesc = {
        'ActionsGeneral1': [
            "Abandon","Accompany","Activate","Agree","Ambush","Arrive","Assist","Attack","Attain","Bargain","Befriend","Bestow","Betray","Block","Break","Carry","Celebrate","Change","Close","Combine",
            "Communicate","Conceal","Continue","Control","Create","Deceive","Decrease","Defend","Delay","Deny","Depart","Deposit","Destroy","Dispute","Disrupt","Distrust","Divide","Drop","Easy","Energize",
            "Escape", "Expose", "Fail", "Fight", "Flee", "Free", "Guide", "Harm", "Heal", "Hinder","Imitate", "Imprison", "Increase", "Indulge", "Inform", "Inquire", "Inspect", "Invade","Leave", "Lure", 
            "Misuse", "Move", "Neglect", "Observe", "Open", "Oppose", "Overthrow","Praise", "Proceed", "Protect", "Punish", "Pursue", "Recruit", "Refuse", "Release","Relinquish", "Repair", "Repulse", "Return", "Reward",
            "Ruin", "Separate","Start", "Stop", "Strange", "Struggle", "Succeed", "Support", "Suppress", "Take","Threaten", "Transform", "Trap", "Travel", "Triumph", "Truce", "Trust", "Use", "Usurp","Waste"
        ],
        'ActionsGeneral2': [
            "Advantage", "Adversity", "Agreement", "Animal", "Attention", "Balance", "Battle", "Benefits","Building", "Burden", "Bureaucracy", "Business", "Chaos", "Comfort", "Completion", "Conflict","Cooperation", "Danger", "Defense", "Depletion",
        "Disadvantage", "Distraction", "Elements","Emotion", "Enemy", "Energy", "Environment", "Expectation", "Exterior", "Extravagance", "Failure","Fame", "Fear", "Freedom", "Friend", "Goal", "Group", "Health", "Hindrance", "Home",
        "Hope","Idea", "Illness", "Illusion", "Individual", "Information", "Innocent", "Intellect", "Interior","Investment", "Leadership", "Legal", "Location", "Military", "Misfortune", "Mundane", "Nature","Needs", "News", "Normal",
        "Object", "Obscurity", "Official", "Opposition", "Outside", "Pain","Path", "Peace", "People", "Personal", "Physical", "Plot", "Portal", "Possessions", "Poverty","Power", "Prison", "Project", "Protection", "Reassurance",
        "Representative", "Riches", "Safety","Strength", "Success", "Suffering", "Surprise", "Tactic", "Technology", "Tension", "Time","Trial", "Value", "Vehicle", "Victory", "Vulnerability", "Weapon", "Weather", "Work", "Wound"
        ],
        'AdventureTone': [
            "Action", "Active", "Adventurous", "Adversity", "Aggressive", "Amusing", "Anxious", "Attainment", "Average","Bizarre",
            "Bleak", "Bold", "Busy", "Calm", "Cheerful", "Colorful", "Combative", "Competitive", "Conflict", "Crazy",
            "Creepy","Dangerous", "Dark", "Emotional", "Energetic", "Epic", "Evil", "Exterior", "Failure", "Fame",
            "Familiar", "Fearful", "Festive", "Fierce", "Fortunate","Frantic", "Fresh", "Frightening", "Glorious","Goals",
            "Hard", "Harsh", "Heavy", "Historical", "Hopeful", "Horrible", "Horror", "Important","Inquire","Inspect",
            "Intellect", "Intense", "Interesting", "Intrigue", "Lavish", "Legal","Lethal","Light","Macabre", "Magnificent",
            "Majestic", "Mature", "Meaningful", "Mechanical","Messy", "Military", "Misfortnue", "Mistrust", "Modern", "Mundane", 
            "Mystery","Natural", "Normal", "Odd", "Personal", "Physical", "Power","Pursuit","Quaint","Random", 
            "Rare", "Reassuring", "Remarkable","Rough","Rustic","Scary","Simple","Slow","Social","Strange",
            "Strong", "Struggle", "Tension", "Travel","Trials","Vengeance","Very","Violent","Warlike","Wild"
          ],
        'AlienSpeciesDescriptor': [
            "Advanced", "Aggressive", "Agile", "Amphibious", "Ancient", "Anxious", "Aquatic", "Arrogant", 
            "Artistic", "Avian", "Beautiful", "Bizarre", "Carapace", "Clawed", "Colorful", "Combative", 
            "Conquering", "Dangerous", "Declining", "Defensive", "Desperate", "Destructive", "Dominating", 
            "Emotionless", "Enormous", "Exploitive", "Explorers", "Familiar", "Fast", "Feeble", "Feral", 
            "Ferocious", "Friendly", "Frightening", "Fungal", "Furry", "Generous", "Gentle", "Glowing", 
            "Graceful", "Harsh", "Helpful", "Humanoid", "Hungry", "Immortal", "Insectlike", "Insubstantial", 
            "Intelligent", "Intimidating", "Large", "Lethal", "Levitating", "Liquid", "Mammalian", "Many-eyed", 
            "Militaristic", "Mysterious", "Nightmarish", "Odd", "Oppressive", "Passive", "Peaceful", "Perfect", 
            "Plant", "Powered", "Powerful", "Powers", "Primitive", "Prosperous", "Psychic", "Reptilian", "Robotic", "Scary", 
            "Scientific", "Secretive", "Servitor", "Simple", "Skilled", "Slender", "Slow", "Small", "Smelly", 
            "Strange", "Strong", "Suffering", "Tail", "Tall", "Technological", "Tentacled", "Threatening", "Toothy", 
            "Travelers", "Treacherous", "Violent", "Warlike", "Wary", "Watery", "Weak", "Wings", "Wormish"
          ],
        'AnimalActions': [
            "Abandon", "Abnormal", "Aggressive", "Angry", "Anxious", "Assist", "Attack", "Befriend", 
            "Bestow", "Bizarre", "Bold", "Break", "Busy", "Calm", "Careful", "Careless", "Cautious", 
            "Ceaseless", "Change", "Combative", "Curious", "Dangerous", "Deliberate", "Disinterested", 
            "Disrupt", "Distracted", "Dominate", "Energetic", "Excited", "Exotic", "Familiar", "Fearful", 
            "Feeble", "Ferocious", "Fierce", "Fight", "Flee", "Follow", "Food", "Frantic", "Friendship", 
            "Frightening", "Generous", "Gentle", "Graceful", "Harm", "Hasty", "Helpful", "Helpless", 
            "Hungry", "Hunt", "Ignore", "Imitate", "Implore", "Imprison", "Inspect", "Intense", 
            "Irritating", "Juvenile", "Lazy", "Leave", "Lethal", "Loud", "Loyal", "Messy", "Mistrust", 
            "Move", "Mundane", "Mysterious", "Natural", "Neglect", "Normal", "Observe", "Odd", 
            "Oppose", "Playful", "Protect", "Pursue", "Quiet", "Reassuring", "Release", "Return", 
            "Scary", "Simple", "Slow", "Strange", "Struggle", "Swift", "Tactics", "Take", "Threatening", 
            "Transform", "Tranquil", "Trick", "Trust", "Violent", "Warn", "Waste", "Wild", "Yield"
          ],
        'ArmyDescriptors': [
            "Active", "Aggressive", "Allies", "Ambush", "Animals", "Arrive", "Assist", "Average", 
            "Betray", "Bizarre", "Block", "Bold", "Calm", "Careless", "Cautious", "Ceaseless", 
            "Celebrate", "Colorful", "Communicate", "Creepy", "Deceive", "Defensive", "Defiant", 
            "Delay", "Disorganized", "Divide", "Efficient", "Enemies", "Energy", "Failure", "Ferocious", 
            "Fight", "Food", "Foolish", "Fortunate", "Frantic", "Fresh", "Frightening", "Helpful", 
            "Helpless", "Illness", "Lacking", "Large", "Lavish", "Lazy", "Leadership", "Lethal", 
            "Loud", "Loyal", "Mighty", "Mysterious", "Normal", "Path", "Persecute", "Power", 
            "Problems", "Punish", "Pursue", "Quiet", "Ready", "Reassuring", "Recruit", "Release", 
            "Riches", "Rough", "Ruin", "Ruthless", "Simple", "Skilled", "Slow", "Small", "Stalemate", 
            "Start", "Stop", "Strange", "Strong", "Struggle", "Success", "Suffering", "Supplies", 
            "Swift", "Tactics", "Take", "Technology", "Tension", "Testing", "Threatening", "Tired", 
            "Travel", "Triumph", "Truce", "Trust", "Unquipped", "Unexpected", "Untrained", "Victory", 
            "Violate", "Waste", "Weak", "Weapons"
          ],
        'CavernDescriptors': [
            "Activity", "Ancient", "Animals", "Aromatic", "Art", "Beautiful", "Bizarre", "Bleak", 
            "Blocked", "Boulder", "Bright", "Cliff", "Climb", "Closed", "Cold", "Collapsed", 
            "Colorful", "Cracked", "Cramped", "Crawl", "Creature", "Creepy", "Crumbling", 
            "Curious", "Damaged", "Dangerous", "Dark", "Difficult", "Dirty", "Discouraging", 
            "Dripping", "Dry", "Echo", "Elements", "Empty", "Enormous", "Exit", "Exotic", 
            "Fall", "Flora", "Frightening", "Full", "Fungus", "Good", "Hard", "Harm", "Harsh", 
            "Hole", "Huge", "Icy", "Interesting", "Large", "Ledge", "Lethal", "Light", 
            "Loud", "Magnificent", "Message", "Messy", "Minerals", "Misfortune", "Mist", 
            "Mysterious", "Natural", "Nature", "Normal", "Occupied", "Odd", "Open", "Path", 
            "Plants", "Pool", "Quiet", "Reassuring", "Remarkable", "Riches", "River", 
            "Rock", "Rough", "Scary", "Simple", "Slippery", "Slope", "Small", "Smelly", 
            "Smooth", "Sounds", "Stalactites", "Strange", "Threatening", "Tight", "Tranquil", 
            "Treasure", "Unnatural", "Unstable", "Untouched", "Warm", "Water", "Waste", "Windy"
          ],
        'CharacterGeneral': [
            "Accompanied", "Active", "Aggressive", "Ambush", "Animal", "Anxious", "Armed", "Beautiful", 
            "Bold", "Busy", "Calm", "Careless", "Casual", "Cautious", "Classy", "Colorful", "Crazy", 
            "Creepy", "Curious", "Dangerous", "Defiant", "Deceptive", "Delightful", "Destructive", 
            "Determined", "Dignified", "Energetic", "Famous", "Fast", "Fierce", "Friendly", "Generous", 
            "Glamorous", "Happy", "Helpful", "Important", "Indifferent", "Influential", "Innocent", 
            "Intelligent", "Kind", "Lazy", "Lonely", "Loyal", "Mighty", "Mischievous", "Mysterious", 
            "Nervous", "Old", "Optimistic", "Passive", "Patient", "Persistent", "Popular", "Practical", 
            "Powerful", "Proud", "Quiet", "Relaxed", "Resilient", "Resourceful", "Risky", "Scary", 
            "Secretive", "Selfish", "Serious", "Shy", "Silent", "Smart", "Sophisticated", "Strong", 
            "Stubborn", "Supportive", "Talented", "Talkative", "Threatening", "Trusting", "Unusual", 
            "Violent", "Wise", "Witty", "Young", "Zealous"
          ],  
        'CharacterActionsCombat': [
            "Abandon", "Abuse", "Aggressive", "Agree", "Ally", "Ambush", "Amuse", "Anger", "Antagonize", "Anxious",
            "Assist", "Attack", "Betray", "Block", "Bold", "Brave", "Break", "Calm", "Careless", "Carry",
            "Cautious", "Celebrate", "Change", "Charge", "Communicate", "Compete", "Control", "Crazy", "Cruel", "Damage",
            "Deceive", "Defend", "Defiant", "Delay", "Disrupt", "Divide", "Dominate", "Energetic", "Enthusiastic", "Expectation",
            "Fearful", "Ferocious", "Fierce", "Fight", "Flee", "Frantic", "Free", "Frightening", "Harm", "Harsh",
            "Hasty", "Hide", "Imitate", "Imprison", "Kill", "Lead", "Lethal", "Liberty", "Lie", "Loud",
            "Loyal", "Magic", "Mechanical", "Mighty", "Military", "Mock", "Move", "Mysterious", "Normal", "Odd",
            "Open", "Oppose", "Pain", "Path", "Prepare", "Punish", "Pursue", "Rough", "Rude", "Ruin",
            "Ruthless", "Simple", "Slow", "Spy", "Stop", "Strange", "Struggle", "Suppress", "Swift", "Take",
            "Technology", "Threaten", "Trick", "Truce", "Usurp", "Vehicle", "Vengeance", "Waste", "Weapon", "Withdraw"
          ],
        'CharacterActionsGeneral': [
            "Abandon", "Aggressive", "Amusing", "Anger", "Antagonize", "Anxious", "Assist", "Bestow", "Betray", "Bizarre",
            "Block", "Bold", "Break", "Calm", "Care", "Careful", "Careless", "Celebrate", "Change", "Combative",
            "Communicate", "Control", "Crazy", "Creepy", "Dangerous", "Deceive", "Decrease", "Defiant", "Delay", "Disrupt",
            "Dominate", "Efficient", "Energetic", "Excited", "Expose", "Fearful", "Feeble", "Fierce", "Fight", "Foolish",
            "Frantic", "Frightening", "Generous", "Gentle", "Harm", "Harsh", "Hasty", "Helpful", "Imitate", "Important",
            "Imprison", "Increase", "Inspect", "Intense", "Juvenile", "Kind", "Lazy", "Leadership", "Lethal", "Loud", 
            "Loyal", "Mature", "Meaningful", "Messy", "Move", "Mundane", "Mysterious", "Nice", "Normal", "Odd",
            "Official", "Open", "Oppose", "Passion", "Peace", "Playful", "Pleasures", "Possessions", "Punish", "Pursue",
            "Release", "Return", "Simple", "Slow", "Start", "Stop", "Strange", "Struggle", "Swift", "Tactics",
            "Technology", "Threatening", "Trust", "Violent", "Waste", "Weapons", "Wild", "Work", "Yield"
        ],
        'CharacterAppearance': [
            "Abnormal", "Armed", "Aromatic", "Athletic", "Attractive", "Average", "Bald", "Beautiful", "Bizarre", "Brutish",
            "Casual", "Classy", "Clean", "Clothing", "Colorful", "Common", "Cool", "Creepy", "Cute", "Dainty",
            "Delicate", "Desperate", "Different", "Dirty", "Drab", "Elegant", "Equipment", "Exotic", "Expensive", "Extravagant",
            "Eyewear", "Familiar", "Fancy", "Features", "Feminine", "Festive", "Frail", "Hair", "Hairy", "Headwear",
            "Heavy", "Hurt", "Innocent", "Insignia", "Intense", "Interesting", "Intimidating", "Jewelry", "Large", "Lavish",
            "Lean", "Limbs", "Lithe", "Masculine", "Mature", "Messy", "Mighty", "Modern", "Mundane", "Muscular",
            "Mysterious", "Natural", "Neat", "Normal", "Odd", "Official", "Old", "Petite", "Piercing", "Powerful",
            "Professional", "Reassuring", "Regal", "Remarkable", "Rough", "Rustic", "Scar", "Scary", "Scented", "Scholarly",
            "Short", "Simple", "Sinister", "Small", "Smelly", "Stocky", "Strange", "Striking", "Strong", "Stylish",
            "Tall", "Tattoo", "Tools", "Trendy", "Unusual", "Very", "Weak", "Weapon", "Wounded", "Young"
        ],
        'CharacterBackground': [
            "Abandoned", "Abuse", "Academic", "Activity", "Adventurous", "Adversity", "Art", "Assist", "Average", "Bad",
            "Bizarre", "Bleak", "Bold", "Burden", "Business", "Care", "Career", "Chaotic", "Cheat", "Combat",
            "Commitment", "Community", "Competition", "Conflict", "Control", "Crime", "Damaged", "Danger", "Death", "Deceive",
            "Decrease", "Defeated", "Disaster", "Dispute", "Emotion", "Environment", "Escape", "Exile", "Experience", "Failure",
            "Faith", "Fame", "Family", "Fortunate", "Free", "Freedom", "Friend", "Gifts", "Good", "Guided",
            "Hard", "Harm", "Harsh", "Heal", "Helped", "Heroic", "Humble", "Humiliation", "Imprisonment", "Independent",
            "Inherit", "Injury", "Injustice", "Legal", "Loss", "Military", "Mistake", "Mundane", "Nature", "Outsider",
            "Person", "Place", "Poor", "Power", "Prestige", "Privilege", "Pursued", "Recruited", "Religion", "Rural",
            "Saved", "Search", "Seclusion", "Service", "Sheltered", "Skill", "Strange", "Successful", "Survival", "Tradition",
            "Training", "Trauma", "Travel", "Urban", "War", "Wealth", "Wild", "Work", "Wounded", "Youth"
          ],
        'CharacterConversations': [
            "Abuse", "Advice", "Aggressive", "Agree", "Amusing", "Angry", "Anxious", "Assist", "Awkward", "Betray",
            "Bizarre", "Bleak", "Bold", "Business", "Calm", "Careful", "Careless", "Cheerful", "Classy", "Cold",
            "Colorful", "Combative", "Crazy", "Creepy", "Curious", "Defiant", "Delightful", "Disagreeable", "Dispute", "Efficient",
            "Energetic", "Enthusiastic", "Excited", "Fearful", "Fierce", "Foolish", "Frantic", "Frightening", "Generous", "Gentle",
            "Glad", "Grateful", "Haggle", "Happy", "Harsh", "Hasty", "Helpful", "Helpless", "Hopeless", "Ideas",
            "Inform", "Innocent", "Inquire", "Intense", "Interesting", "Intolerance", "Irritating", "Joyful", "Judgmental", "Juvenile",
            "Kind", "Leadership", "Lie", "Loud", "Loving", "Loyal", "Macabre", "Mature", "Meaningful", "Mistrust",
            "Mocking", "Mundane", "Mysterious", "News", "Nice", "Normal", "Odd", "Offensive", "Official", "Oppose",
            "Peace", "Plans", "Playful", "Polite", "Positive", "Praise", "Quarrelsome", "Quiet", "Reassuring", "Refuse",
            "Rude", "Rumor", "Simple", "Threatening", "Truce", "Trust", "Warm", "Wild"
          ],
        'CharacterDescriptors': [
            "Abnormal", "Active", "Adventurous", "Aggressive", "Agreeable", "Ally", "Ancient", "Angry", "Anxious", "Armed",
            "Aromatic", "Arrogant", "Attractive", "Awkward", "Beautiful", "Bizarre", "Bleak", "Bold", "Brave", "Busy",
            "Calm", "Capable", "Careful", "Careless", "Caring", "Cautious", "Cheerful", "Classy", "Clean", "Clumsy",
            "Colorful", "Combative", "Commanding", "Common", "Competitive", "Confident", "Crazy", "Curious", "Dangerous", "Different",
            "Difficult", "Dirty", "Disagreeable", "Disciplined", "Educated", "Elegant", "Erratic", "Exotic", "Fancy", "Fast",
            "Foul", "Frightened", "Gentle", "Harmful", "Helpful", "Heroic", "Humorous", "Hurt", "Ignorant", "Impulsive",
            "Inept", "Informative", "Intelligent", "Interesting", "Intimidating", "Intrusive", "Large", "Loud", "Meek", "Naive",
            "Old", "Passive", "Polite", "Poor", "Powerful", "Powerless", "Primitive", "Principled", "Quiet", "Respectful",
            "Rough", "Rude", "Simple", "Skilled", "Slow", "Small", "Sneaky", "Sophisticated", "Strange", "Strong",
            "Supportive", "Surprising", "Sweet", "Trained", "Uniformed", "Unusual", "Weak", "Wealthy", "Wild", "Young"
          ],
        'CharacterIdentity': [
            "Abandoned", "Administrator", "Adventurous", "Adversary", "Advisor", "Ally", "Art", "Artist", "Assistant", "Athlete",
            "Authority", "Bureaucrat", "Business", "Combatant", "Competitor", "Controller", "Crafter", "Creator", "Criminal", "Deceiver",
            "Deliverer", "Dependent", "Driver/Pilot", "Elite", "Enemy", "Enforcer", "Engineer", "Entertainer", "Executive", "Expert",
            "Explorer", "Family", "Farmer", "Fighter", "Fixer", "Foreigner", "Friend", "Gambler", "Gatherer", "Guardian",
            "Healer", "Helpless", "Hero", "Hunter", "Information", "Innocent", "Inspector", "Intellectual", "Investigator", "Judge",
            "Killer", "Laborer", "Lackey", "Law", "Leader", "Lost", "Mechanical", "Mediator", "Merchant", "Messenger",
            "Military", "Mundane", "Mystery", "Official", "Organizer", "Outsider", "Performer", "Persecutor", "Planner", "Pleaser",
            "Power", "Prisoner", "Professional", "Protector", "Public", "Punish", "Radical", "Religious", "Represent", "Rogue",
            "Ruffian", "Ruler", "Scholar", "Scientist", "Scout", "Servant", "Socialite", "Soldier", "Student", "Subverter",
            "Supporter", "Survivor", "Teacher", "Thief", "Trader", "Victim", "Villain", "Wanderer", "Warrior"
          ],
        'CharacterMotivations': [
            "Adventure", "Adversity", "Ambition", "Anger", "Approval", "Art", "Attain", "Business", "Change", "Character",
            "Conflict", "Control", "Create", "Danger", "Death", "Deceive", "Destroy", "Diminish", "Disrupt", "Emotion",
            "Enemy", "Environment", "Escape", "Failure", "Fame", "Family", "Fear", "Fight", "Find", "Free",
            "Friend", "Goal", "Gratify", "Group", "Guide", "Guilt", "Hate", "Heal", "Help", "Hide",
            "Home", "Hope", "Idea", "Illness", "Important", "Imprison", "Increase", "Information", "Innocent", "Intellect",
            "Intolerance", "Investment", "Jealousy", "Joy", "Justice", "Leader", "Legal", "Loss", "Love", "Loyalty",
            "Malice", "Misfortune", "Mistrust", "Mundane", "Mysterious", "Nature", "Object", "Obligation", "Official", "Oppose",
            "Pain", "Passion", "Path", "Peace", "Physical", "Place", "Plan", "Pleasure", "Power", "Pride",
            "Protect", "Pursue", "Rare", "Recover", "Reveal", "Revenge", "Riches", "Safety", "Search", "Serve",
            "Start", "Stop", "Strange", "Struggle", "Success", "Suffering", "Support", "Take", "Transform", "Travel"
          ],
        'CharacterPersonality': [
            "Active", "Adventurous", "Aggressive", "Agreeable", "Ambitious", "Amusing", "Angry", "Annoying", "Anxious", "Arrogant",
            "Average", "Awkward", "Bad", "Bitter", "Bold", "Brave", "Calm", "Careful", "Careless", "Classy",
            "Cold", "Collector", "Committed", "Competitive", "Confident", "Control", "Crazy", "Creative", "Crude", "Curious",
            "Deceptive", "Determined", "Devoted", "Disagreeable", "Dull", "Emotion", "Empathetic", "Fair", "Fastidious", "Follower",
            "Foolish", "Friendly", "Good", "Gourmet", "Greed", "Haunted", "Helpful", "Honest", "Honor", "Humble",
            "Humorous", "Inconsistent", "Independent", "Interesting", "Intolerant", "Irresponsible", "Knowledgeable", "Larcenous", "Leader", "Likable",
            "Loyal", "Manipulative", "Mercurial", "Naive", "Nervous", "Oblivious", "Obstinate", "Optimistic", "Perceptive", "Perfectionist",
            "Practical", "Prepared", "Principled", "Protect", "Quiet", "Quirky", "Rash", "Rational", "Respectful", "Responsible",
            "Restless", "Risk", "Rude", "Savvy", "Searching", "Selfish", "Selfless", "Shallow", "Social", "Strange",
            "Strong", "Studious", "Superstitious", "Tolerant", "Vindictive", "Vocal", "Wary", "Weak", "Wild", "Wise"
          ],
        'CharacterSkills': [
            "Activity", "Adversity", "Agility", "Animals", "Art", "Assist", "Athletic", "Attack", "Attain", "Average",
            "Balance", "Beginner", "Bestow", "Block", "Business", "Change", "Combat", "Communicate", "Conflict", "Control",
            "Create", "Criminal", "Damage", "Danger", "Deceit", "Decrease", "Defense", "Develop", "Dispute", "Disrupt",
            "Domestic", "Dominate", "Driving", "Elements", "Energy", "Environment", "Experienced", "Expert", "Fight", "Free",
            "Guide", "Harm", "Heal", "Health", "Increase", "Inform", "Information", "Inquire", "Inspect", "Intellect",
            "Invade", "Investigative", "Knowledge", "Leadership", "Legal", "Lethal", "Lie", "Master", "Mechanical", "Medical",
            "Mental", "Military", "Motion", "Move", "Mundane", "Mysterious", "Nature", "Normal", "Obstacles", "Official",
            "Open", "Oppose", "Perception", "Practical", "Professional", "Ranged", "Release", "Rogue", "Ruin", "Simple",
            "Social", "Specialist", "Start", "Stop", "Strange", "Strength", "Struggle", "Suppress", "Take", "Technology",
            "Transform", "Travel", "Trick", "Usurp", "Vehicle", "Violence", "Water", "Weapon", "Weather", "Wounds"
          ],
        'CharacterTraitsAndFlaws': [
            "Academic", "Adversity", "Animal", "Assist", "Attract", "Beautiful", "Benefits", "Bestow", "Bizarre", "Block",
            "Burden", "Combat", "Communicate", "Connection", "Control", "Create", "Criminal", "Damaged", "Dangerous", "Decrease",
            "Defense", "Delicate", "Different", "Dominate", "Driven", "Emotion", "Enemy", "Energy", "Environment", "Failure",
            "Fame", "Familiar", "Fast", "Feeble", "Flawless", "Focused", "Fortunate", "Friends", "Good", "Healthy",
            "Illness", "Impaired", "Increase", "Information", "Inspect", "Intellect", "Intense", "Interesting", "Lacking", "Large",
            "Leadership", "Legal", "Less", "Lethal", "Limited", "Loyal", "Mental", "Military", "Misfortune", "Missing",
            "Move", "Multi", "Nature", "Object", "Odd", "Old", "Partial", "Passion", "Perception", "Physical",
            "Poor", "Possessions", "Power", "Principles", "Public", "Rare", "Remarkable", "Resistant", "Resource", "Rich",
            "Sense", "Skill", "Small", "Social", "Specialized", "Spirit", "Strange", "Strong", "Suffering", "Technical",
            "Technology", "Tough", "Travel", "Trouble", "Trustworthy", "Unusual", "Very", "Weak", "Weapon", "Young"
          ],
        'CityDescriptors': [
            "Activity", "Aggressive", "Aromatic", "Average", "Beautiful", "Bleak", "Block", "Bridge", "Bustling", "Calm",
            "Chaotic", "Clean", "Cold", "Colorful", "Commerce", "Conflict", "Control", "Crime", "Dangerous", "Dense",
            "Developed", "Dirty", "Efficient", "Energy", "Enormous", "Environment", "Extravagant", "Festive", "Flawless", "Frightening",
            "Government", "Happy", "Harsh", "Healthy", "Helpful", "Hills", "History", "Illness", "Important", "Impressive",
            "Industry", "Interesting", "Intrigues", "Isolated", "Lacking", "Lake", "Large", "Lavish", "Leadership", "Liberty",
            "Loud", "Magnificent", "Masses", "Meaningful", "Mechanical", "Messy", "Mighty", "Military", "Miserable", "Misfortune",
            "Modern", "Mountain", "Mundane", "Mysterious", "Nature", "Odd", "Old", "Oppress", "Opulence", "Peace",
            "Poor", "Powerful", "Protected", "Public", "Quiet", "Rare", "Reassuring", "Remarkable", "River", "Rough",
            "Ruined", "Rustic", "Simple", "Small", "Sparse", "Structures", "Struggle", "Success", "Suffering", "Technology",
            "Tension", "Travel", "Troubled", "Valuable", "Warm", "Water", "Weak", "Weather", "Wild", "Work"
          ],
        'CivilizationDescriptors': [
            "Active", "Advanced", "Adventurous", "Aggressive", "Agricultural", "Ancient", "Angry", "Anxious", "Artistic", "Average",
            "Beautiful", "Bizarre", "Bleak", "Bold", "Bureaucratic", "Carefree", "Careful", "Careless", "Cautious", "Classy",
            "Clean", "Colorful", "Combative", "Commercial", "Competitive", "Constructive", "Controlling", "Crazy", "Creative", "Creepy",
            "Cruel", "Curious", "Dangerous", "Declining", "Defiant", "Delightful", "Developed", "Disagreeable", "Distrustful", "Dominant",
            "Dull", "Efficient", "Expanding", "Failed", "Famous", "Fearful", "Festive", "Free", "Generous", "Greedy",
            "Happy", "Healthy", "Helpful", "Helpless", "Historical", "Important", "Industrial", "Influential", "Intolerant", "Large",
            "Lawful", "Lawless", "Magnificent", "Mighty", "Militaristic", "Miserable", "Modern", "Mundane", "Mysterious", "Old",
            "Open", "Oppressive", "Peaceful", "Polite", "Poor", "Powerful", "Primitive", "Punitive", "Quaint", "Religious",
            "Ruined", "Rustic", "Ruthless", "Scary", "Simple", "Small", "Strange", "Strong", "Struggling", "Successful",
            "Suffering", "Suppressed", "Suspicious", "Treacherous", "Warlike", "Weak", "Wealthy", "Welcoming", "Wild", "Young"
          ],
        'CreatureAbilities': [
            "Ambush", "Animate", "Armor", "Arrive", "Assist", "Attach", "Attack", "Attract", "Bite", "Block",
            "Blunt", "Break", "Breath", "Carry", "Change", "Climb", "Cold", "Common", "Communicate", "Conceal",
            "Contact", "Control", "Create", "Damage", "Dark", "Death", "Deceive", "Decrease", "Defense", "Depower",
            "Detect", "Disrupt", "Distract", "Dominate", "Drain", "Element", "Energy", "Enhanced", "Entangle", "Environment",
            "Extra", "Fear", "Fight", "Fire", "Flight", "Harm", "Heal", "Illusion", "Imitate", "Immune",
            "Imprison", "Increase", "Intelligent", "Itself", "Lethal", "Light", "Limited", "Mind", "Move", "Multiple",
            "Natural", "Normal", "Open", "Others", "Paralyze", "Physical", "Pierce", "Poison", "Power", "Protection",
            "Proximity", "Pursue", "Ranged", "Rechargeable", "Resistance", "Self-Sufficient", "Senses", "Skill", "Sleep", "Speed",
            "Spy", "Stealth", "Stop", "Strange", "Stun", "Substance", "Summon", "Suppress", "Swim", "Take",
            "Telepathy", "Touch", "Transform", "Travel", "Trick", "Uncommon", "Vision", "Vulnerable", "Weak", "Weapon"
          ],
        'CreatureDescriptors': [
            "Aggressive", "Agile", "Air", "Alien", "Amorphous", "Animal", "Aquatic", "Armored", "Avian", "Beast",
            "Beautiful", "Body", "Bony", "Carapace", "Clawed", "Clothed", "Cold", "Color", "Composite", "Constructed",
            "Decayed", "Defensive", "Dripping", "Elements", "Exotic", "Extra Limbs", "Fangs", "Feminine", "Feral", "Filthy",
            "Fire", "Fungal", "Furry", "Gaunt", "Glowing", "Group", "Growling", "Healthy", "Horns", "Humanoid",
            "Inscribed", "Insect-like", "Insubstantial", "Intelligent", "Intimidating", "Large", "Levitating", "Limited", "Liquid", "Loud",
            "Mammalian", "Mandibles", "Masculine", "Mechanical", "Metallic", "Movement", "Multiple", "Mutant", "Natural", "Nature",
            "Nightmarish", "Object", "Odorous", "Passive", "Plant", "Reptilian", "Robotic", "Rooted", "Rough", "Shape",
            "Shifting", "Silent", "Simple", "Slender", "Small", "Solitary", "Spider-like", "Spiked", "Steaming", "Sticky",
            "Stinger", "Strange", "Strong", "Supernatural", "Tail", "Tentacled", "Tongue", "Toothy", "Transparent", "Tree-like",
            "Twisted", "Undead", "Unnatural", "Verbal", "Warm", "Weak", "Weapon", "Wings", "Wooden", "Wormish"
          ],
        'CrypticMessage': [
            "Abandoned", "Activity", "Adventure", "Adversity", "Advice", "Allies", "Anger", "Bestow", "Betray", "Bizarre",
            "Bleak", "Business", "Care", "Colorful", "Communicate", "Conflict", "Creepy", "Damaged", "Danger", "Death",
            "Deceive", "Defiant", "Dispute", "Divide", "Emotions", "Enemies", "Environment", "Evil", "Expose", "Failure",
            "Fame", "Fear", "Fight", "Frantic", "Free", "Friendship", "Goals", "Good", "Guide", "Harm",
            "Help", "Helpful", "Hidden", "Hope", "Horrible", "Important", "Information", "Innocent", "Instruction", "Intrigues",
            "Language", "Leadership", "Legal", "Legend", "Liberty", "Lies", "Lost", "Love", "Malice", "Messy",
            "Misfortune", "Mistrust", "Move", "Mundane", "Mysterious", "Neglect", "Normal", "Obscured", "Official", "Old",
            "Oppose", "Partial", "Passion", "Plans", "Possessions", "Power", "Propose", "Punish", "Pursue", "Rare",
            "Reassuring", "Recipient", "Riches", "Riddle", "Rumor", "Secret", "Start", "Stop", "Strange", "Struggle",
            "Success", "Tension", "Threaten", "Truce", "Trust", "Unknown", "Vengeance", "Violence", "Warning"
          ],
        'Curses': [
            "Abandon", "Age", "Attract", "Bad", "Beauty", "Betray", "Bizarre", "Block", "Body", "Break",
            "Burden", "Business", "Change", "Compel", "Condemn", "Conflict", "Create", "Creepy", "Cruel", "Danger",
            "Death", "Decrease", "Delay", "Disrupt", "Divide", "Dominate", "Dreams", "Elements", "Emotions", "Enemies",
            "Energy", "Environment", "Evil", "Failure", "Fame", "Family", "Fate", "Fear", "Feeble", "Fight",
            "Friends", "Frightening", "Goals", "Good", "Gratify", "Guide", "Happiness", "Harm", "Health", "Helpless",
            "Home", "Illness", "Illusions", "Imprison", "Incapacity", "Information", "Intellect", "Ironic", "Jealously", "Joy",
            "Legal", "Lethal", "Liberty", "Limit", "Lonely", "Love", "Luck", "Malice", "Meaningful", "Miserable",
            "Misfortune", "Mistrust", "Mock", "Move", "Mundane", "Mysterious", "Nature", "Neglect", "Old", "Oppress",
            "Pain", "Passion", "Peace", "Permanent", "Possessions", "Punish", "Pursue", "Riches", "Ruin", "Senses",
            "Separate", "Start", "Stop", "Strange", "Struggle", "Success", "Temporary", "Vengeance", "Violence", "Weapon"
          ],
        'DescriptorsGeneral1': [
            "Adventurously", "Aggressively", "Anxiously", "Awkwardly", "Beautifully", "Bleakly", "Boldly", "Bravely","Busily", "Calmly", "Carefully", "Carelessly", "Cautiously", "Ceaselessly", "Cheerfully", "Combatively","Coolly", "Crazily", "Curiously", "Dangerously",
            "Defiantly", "Deliberately", "Delicately", "Delightfully","Dimly", "Efficiently", "Emotionally", "Energetically", "Enormously", "Enthusiastically", "Excitedly","Fearfully", "Ferociously", "Fiercely", "Foolishly", "Fortunately", "Frantically", "Freely", "Frighteningly","Fully",
            "Generously", "Gently", "Gladly", "Gracefully", "Gratefully", "Happily", "Hastily", "Healthily","Helpfully", "Helplessly", "Hopelessly", "Innocently", "Intensely", "Interestingly", "Irritatingly", "Joyfully","Kindly", "Lazily", "Lightly", "Loosely",
            "Loudly", "Lovingly", "Loyally", "Majestically", "Meaningfully","Mechanically", "Mildly", "Miserably", "Mockingly", "Mysteriously", "Naturally", "Neatly", "Nicely", "Oddly","Offensively", "Officially", "Partially", "Passively", "Peacefully", "Perfectly",
            "Playfully", "Politely","Positively", "Powerfully", "Quaintly", "Quarrelsomely", "Quietly", "Roughly", "Rudely", "Ruthlessly", "Slowly","Softly", "Strangely", "Swiftly", "Threateningly", "Timidly", "Very", "Violently", "Wildly", "Yieldingly"
        ],
        'DescriptorsGeneral2': [
            "Abnormal","Amusing","Artificial","Average","Beautiful","Bizarre","Boring","Bright","Broken","Clean","Cold","Colorful","Colorless","Comforting","Creepy","Cute","Damaged","Dark","Defeated","Dirty",
            "Disagreeable","Dry","Dull","Empty","Enormous","Extraordinary","Extravagant","Faded","Familiar","Fancy","Feeble","Festive","Flawless","Forlorn","Fragile","Fragrant","Fresh","Full","Glorious","Graceful",
            "Hard","Harsh","Healthy","Heavy","Historical","Horrible","Important","Interesting","Juvenile","Lacking","Large","Lavish","Lean","Less","Lethal","Lively","Lonely","Lovely","Magnificent","Mature",
            "Messy","Mighty","Military","Modern","Mundane","Mysterious","Natural","Normal","Odd","Old","Pale","Peaceful","Petite","Plain","Poor","Powerful","Protective","Quaint","Rare","Reassuring",
            "Remarkable","Rotten","Rough","Ruined","Rustic","Scary","Shocking","Simple","Small","Smooth","Soft","Strong","Stylish","Unpleasant","Valuable","Vibrant","Warm","Watery","Weak","Young"
        ],
        'DomicileDescriptors': [
            "Abandoned", "Activity", "Animal", "Aromatic", "Art", "Average", "Beautiful", "Bizarre", "Bleak", "Busy",
            "Classy", "Clean", "Cluttered", "Cold", "Colorful", "Comfort", "Common", "Cramped", "Creepy", "Crowded",
            "Customized", "Cute", "Damaged", "Dangerous", "Dark", "Desolate", "Different", "Dirty", "Disagreeable", "Drab",
            "Dull", "Empty", "Enormous", "Expected", "Extravagant", "Faded", "Fancy", "Festive", "Food", "Frightening",
            "Full", "Home", "Investment", "Inviting", "Lacking", "Large", "Lavish", "Less", "Light", "Loud",
            "Magnificent", "Mechanical", "Messy", "Modern", "Mundane", "Mysterious", "Natural", "Neat", "Neglected", "Nondescript",
            "Normal", "Occupied", "Odd", "Open", "Oppressive", "Opulent", "Organized", "Plants", "Poor", "Portal",
            "Possessions", "Private", "Protection", "Quaint", "Reassuring", "Roomy", "Rough", "Ruined", "Rustic", "Scary",
            "Secure", "Security", "Simple", "Sleep", "Small", "Smelly", "Sparse", "Storage", "Strange", "Temporary",
            "Thoughtful", "Tidy", "Tools", "Tranquil", "Upgrade", "Utilitarian", "Valuables", "View", "Warm", "Water"
          ],
        'DungeonDescriptors': [
            "Abandoned", "Activity", "Adversity", "Ambush", "Ancient", "Animal", "Aromatic", "Art", "Beautiful", "Bizarre",
            "Bleak", "Chamber", "Clean", "Closed", "Cold", "Collapsed", "Colorful", "Creature", "Creepy", "Damaged",
            "Danger", "Dark", "Desolate", "Dirty", "Door", "Dry", "Elements", "Empty", "Encounter", "Enemies",
            "Enormous", "Evil", "Exit", "Extravagant", "Faded", "Familiar", "Fancy", "Fears", "Foreboding", "Full",
            "Furnishings", "Gate", "Good", "Harm", "Heavy", "Helpful", "Hole", "Important", "Information", "Interesting",
            "Large", "Lavish", "Lethal", "Light", "Magnificent", "Malice", "Meaningful", "Mechanical", "Messages", "Messy",
            "Mighty", "Military", "Misfortune", "Modern", "Mundane", "Mysterious", "Natural", "Neglect", "Normal", "Object",
            "Occupied", "Odd", "Open", "Passage", "Path", "Portal", "Possessions", "Quiet", "Rare", "Reassuring",
            "Remarkable", "Riches", "Room", "Rough", "Ruined", "Rustic", "Scary", "Simple", "Small", "Smelly",
            "Sound", "Stairs", "Stonework", "Technology", "Trap", "Treasure", "Unnatural", "Valuable", "Warm", "Watery"
          ],
        'DungeonTraps': [
            "Aggressive", "Allies", "Ambush", "Animals", "Animate", "Antagonize", "Aromatic", "Art", "Attention", "Attract",
            "Balance", "Beautiful", "Bestow", "Betray", "Bizarre", "Blades", "Break", "Ceiling", "Change", "Choice",
            "Climb", "Cloud", "Cold", "Colorful", "Combative", "Communicate", "Confuse", "Constrain", "Control", "Create",
            "Creepy", "Crush", "Damaged", "Danger", "Dark", "Deceive", "Delay", "Deprive", "Disrupt", "Divide",
            "Door", "Drop", "Duplicate", "Elaborate", "Enemies", "Energy", "Fall", "Fear", "Fight", "Fire",
            "Floor", "Frightening", "Harm", "Heat", "Heavy", "Helpless", "Horrible", "Illusion", "Imprison", "Lethal",
            "Loud", "Lure", "Magic", "Mechanical", "Mental", "Messy", "Monster", "Natural", "Object", "Odd",
            "Old", "Pain", "Plants", "Portal", "Possessions", "Prison", "Projectile", "Riddle", "Scary", "Simple",
            "Sounds", "Stab", "Stop", "Strange", "Strangle", "Suppress", "Take", "Toxin", "Transform", "Transport",
            "Treasure", "Trials", "Trigger", "Unleash", "Wall", "Warning", "Water", "Weapon", "Wound"
          ],
        'ForestDescriptors': [
            "Adversity", "Aggressive", "Ambush", "Ancient", "Animal", "Aromatic", "Art", "Assist", "Average", "Beautiful",
            "Bizarre", "Bleak", "Block", "Boulder", "Cave", "Chaotic", "Cliff", "Cold", "Colorful", "Combative",
            "Communicate", "Creepy", "Damaged", "Danger", "Dark", "Death", "Delicate", "Dry", "Elements", "Encounter",
            "Enormous", "Environment", "Fearful", "Feeble", "Fierce", "Food", "Fortunate", "Fresh", "Harsh", "Healthy",
            "Helpful", "Important", "Information", "Intense", "Interesting", "Lacking", "Lake", "Large", "Lean", "Ledge",
            "Lethal", "Loud", "Magnificent", "Majestic", "Masses", "Mature", "Message", "Mighty", "Mundane", "Mysterious",
            "Natural", "Nature", "Nondescript", "Normal", "Odd", "Old", "Path", "Peaceful", "Plants", "Pond",
            "Possessions", "Powerful", "Pursue", "Quiet", "Rare", "Reassuring", "Remarkable", "River", "Rocks", "Rough",
            "Ruined", "Scary", "Simple", "Slope", "Small", "Sounds", "Strange", "Strong", "Threatening", "Tranquil",
            "Tree", "Unusual", "Valuable", "Violent", "Warm", "Watery", "Weak", "Weather", "Wild", "Young"
          ],
        'Gods': [
            "Active", "Alien", "Ancient", "Angelic", "Angry", "Animal", "Art", "Assist", "Attract", "Beautiful",
            "Bestow", "Betray", "Bizarre", "Capricious", "Colorful", "Combat", "Communicate", "Conflict", "Control", "Corruption",
            "Cosmic", "Create", "Creepy", "Cruel", "Cult", "Dangerous", "Dark", "Death", "Deceit", "Destroyer",
            "Disgusting", "Dominate", "Dreams", "Elements", "Emotions", "Enemies", "Energy", "Enormous", "Evil", "Fallen",
            "Fear", "Fertility", "Festive", "Fire", "Frightening", "Generous", "Gifts", "Glorious", "Good", "Guide",
            "Harm", "Harsh", "Heal", "Humanoid", "Illness", "Imprison", "Increase", "Jealous", "Justice", "Knowledge",
            "Liberty", "Life", "Light", "Love", "Magic", "Majestic", "Major", "Malice", "Masculine", "Mighty",
            "Military", "Minor", "Monstrous", "Mundane", "Mysterious", "Nature", "Night", "Oppress", "Pleasures", "Power",
            "Protector", "Punish", "Ruler", "Sacrifice", "Strange", "Strong", "Suppress", "Threatening", "Transform", "Underworld",
            "Violent", "War", "Warm", "Water", "Weak", "Weapon", "Weather", "Worshiped"
          ],
        'Legends': [
            "Abandon", "Allies", "Anger", "Assist", "Attainment", "Befriend", "Bestow", "Betray", "Bizarre", "Block",
            "Brave", "Break", "Burden", "Carelessness", "Cataclysm", "Caution", "Change", "Conflict", "Control", "Create",
            "Crisis", "Damage", "Danger", "Deceive", "Defeated", "Defiant", "Delay", "Disrupt", "Divide", "Elements",
            "End", "Enemies", "Energy", "Evil", "Expose", "Failure", "Fame", "Fear", "Fight", "Find",
            "Free", "Friendship", "Frightening", "Good", "Guide", "Harm", "Heal", "Help", "Helpless", "Hero",
            "Hidden", "Historical", "Illness", "Important", "Imprison", "Increase", "Inform", "Intrigue", "Innocent", "Jealousy",
            "Judge", "Leadership", "Legal", "Lethal", "Liberty", "Loss", "Love", "Loyalty", "Masses", "Mighty",
            "Military", "Misfortune", "Monster", "Move", "Mundane", "Mysterious", "Natural", "Old", "Oppose", "Oppress",
            "Peace", "Pilot", "Possessions", "Power", "Punish", "Pursue", "Release", "Return", "Riches", "Ruin",
            "Savior", "Stop", "Strange", "Struggle", "Theft", "Trust", "Usurp", "Vengeance", "Villain"
          ],
        'Locations': [
            "Abandoned", "Active", "Artistic", "Atmosphere", "Beautiful", "Bleak", "Bright", "Business", "Calm", "Charming", "Clean","Cluttered", "Cold", "Colorful", "Colorless", "Confusing", "Cramped", "Creepy", "Crude", "Cute",
            "Damaged", "Dangerous", "Dark", "Delightful", "Dirty", "Domestic", "Empty", "Enclosed", "Enormous", "Entrance","Exclusive", "Exposed", "Extravagant", "Familiar", "Fancy", "Festive", "Foreboding", "Fortunate", "Fragrant", "Frantic",
            "Frightening", "Full", "Harmful", "Helpful", "Horrible", "Important", "Impressive", "Inactive", "Intense","Intriguing", "Lively", "Lonely", "Long", "Loud", "Meaningful", "Messy", "Mobile", "Modern", "Mundane", "Mysterious",
            "Natural", "New", "Occupied", "Odd", "Official","Old", "Open", "Peaceful", "Personal", "Plain","Portal", "Protected", "Protection", "Purposeful", "Quiet", "Reassuring", "Remote", "Resourceful", "Ruined", "Rustic",
            "Safe", "Services", "Simple", "Small", "Spacious", "Storage", "Strange", "Stylish", "Suspicious", "Tall", "Threatening", "Tranquil", "Unexpected", "Unpleasant", "Unusual", "Useful","Warm", "Warning", "Watery","Welcoming"
        ],
        'MagicItemDescriptors': [
            "Animal", "Animate", "Area", "Armor", "Assist", "Attack", "Attract", "Benefit", "Bestow", "Block",
            "Book", "Change", "Clothing", "Cloud", "Cold", "Communication", "Container", "Control", "Create", "Curse",
            "Damage", "Death", "Decrease", "Deceit", "Defense", "Destroy", "Detect", "Dimensions", "Elements", "Emotion",
            "Energy", "Enhance", "Environment", "Escape", "Evil", "Explode", "Fear", "Fire", "Flight", "Food",
            "Gem", "Good", "Group", "Harm", "Heal", "Health", "Helpful", "Illness", "Illusion", "Imbue",
            "Imitate", "Increase", "Information", "Inhibit", "Instant", "Jewelry", "Lethal", "Life", "Light", "Limited",
            "Liquid", "Mental", "Monster", "Multi", "Nature", "Object", "Orb", "Others", "Physical", "Plants",
            "Poison", "Potion", "Power", "Ranged", "Resistance", "Restore", "Ring", "Rope", "Rune", "Safety",
            "Scroll", "Self", "Senses", "Skill", "Special", "Speed", "Spell", "Staff", "Strange", "Summon",
            "Sword", "Tool", "Transform", "Trap", "Travel", "Utility", "Wand", "Water", "Weapon"
          ],
        'MutationDescriptors': [
            "Agility", "Animal", "Appearance", "Armor", "Assist", "Attack", "Benefit", "Bizarre", "Block", "Body",
            "Change", "Claws", "Color", "Combat", "Communicate", "Conceal", "Constrain", "Control", "Create", "Damage",
            "Deceive", "Decrease", "Defect", "Defense", "Deformed", "Detect", "Diminish", "Disrupt", "Dominate", "Elements",
            "Energy", "Enhance", "Environment", "Expose", "Extra", "Eyes", "Fear", "Fight", "Fly", "Free",
            "Harm", "Heal", "Health", "Heat", "Helpful", "Horrible", "Imitate", "Immunity", "Imprison", "Increase",
            "Information", "Inspect", "Large", "Learn", "Lethal", "Limb", "Limit", "Mental", "Messy", "Move",
            "Nature", "Pain", "Partial", "Power", "Projectile", "Protection", "Ranged", "Recharge", "Release", "Replace",
            "Requirement", "Resistance", "Restore", "Reveal", "Scary", "Senses", "Simple", "Skill", "Stop", "Strange",
            "Strength", "Strong", "Struggle", "Suffer", "Suppress", "Surroundings", "Survive", "Swim", "Toxic", "Transform",
            "Travel", "Usurp", "Violence", "Vulnerability", "Warm", "Weak", "Weapon", "Wound"
          ],
        'Names': [
            "A", "Action", "Ah", "Ahg", "An", "Animal", "Ar", "As", "B", "Bah",
            "Be", "Bih", "Brah", "Col", "Color", "Cor", "Dah", "Deeds", "Del", "Drah",
            "Eee", "Eh", "Ei", "Ell", "Elements", "Emotion", "Ess", "Est", "Et", "Fah",
            "Fer", "Fi", "Floral", "Gah", "Go", "Grah", "Hee", "Ia", "Ick", "In",
            "Iss", "Je", "Ke", "Jen", "Kha", "Kr", "Lah", "Lee", "Len", "Lin",
            "Location", "Ly", "Mah", "Military", "Misdeed", "N", "Nah", "Nature", "Nee", "Nn",
            "Number", "Occupation", "Oh", "On", "Or", "Orn", "Oth", "Ow", "Ph", "R",
            "Rah", "Ren", "Sah", "Se", "Sh", "Sha", "T", "Ta", "Tal", "Tar",
            "Th", "Thah", "Thoh", "Ti", "Time", "Tor", "Uh", "Vah", "Ve", "Vice",
            "Virtue", "Wah", "Wr", "X", "Y", "Yah", "Yuh", "Z"
          ],
        'NobleHouse': [
            "Aggressive", "Allies", "Anger", "Bestow", "Betray", "Bizarre", "Block", "Break", "Bureaucracy", "Cautious",
            "Change", "Commerce", "Compromise", "Conflict", "Connections", "Control", "Create", "Crisis", "Cruel", "Dangerous",
            "Death", "Defiant", "Defeat", "Deceit", "Disrupt", "Enemies", "Extravagant", "Faded", "Fame", "Family",
            "Headquarters", "Heirloom", "Hero", "History", "Home", "Important", "Imprison", "Increase", "Information", "Intrigue",
            "Investment", "Land", "Large", "Leadership", "Legal", "Leverage", "Liberty", "Love", "Loyal", "Magnificent",
            "Malice", "Mighty", "Military", "Misfortune", "Move", "Mysterious", "Neglect", "Old", "Oppose", "Oppress",
            "Overthrow", "Passion", "Peace", "Persecute", "Plans", "Politics", "Possessions", "Powerful", "Public", "Refuse",
            "Release", "Remarkable", "Return", "Riches", "Royalty", "Ruthless", "Secret", "Security", "Servant", "Spy",
            "Strange", "Strong", "Struggle", "Succession", "Suffering", "Suppress", "Tactics", "Tension", "Trust", "Usurp",
            "Valuable", "Vengeance", "Victory", "Violence", "War", "Weak", "Wealth", "Weapon", "Young"
          ],
        'Objects': [
            "Active", "Artistic", "Average", "Beautiful", "Bizarre", "Bright", "Clothing", "Clue", "Cold", "Colorful",
            "Communication", "Complicated", "Confusing", "Consumable", "Container", "Creepy", "Crude", "Cute", "Damaged", "Dangerous",
            "Deactivated", "Deliberate", "Delightful", "Desired", "Domestic", "Empty", "Energy", "Enormous", "Equipment", "Expected",
            "Expended", "Extravagant", "Faded", "Familiar", "Fancy", "Flora", "Fortunate", "Fragile", "Fragrant", "Frightening",
            "Garbage", "Guidance", "Harm", "Harmful", "Healing", "Heavy", "Helpful", "Horrible", "Important", "Inactive",
            "Information", "Intriguing", "Large", "Lethal", "Light", "Liquid", "Loud", "Majestic", "Meaningful", "Mechanical",
            "Modern", "Moving", "Multiple", "Mundane", "Mysterious", "Natural", "New", "Odd", "Official", "Old",
            "Ornamental", "Ornate", "Personal", "Powerful", "Prized", "Protection", "Rare", "Ready", "Reassuring", "Resource",
            "Ruined", "Small", "Soft", "Solitary", "Stolen", "Strange", "Stylish", "Threatening", "Tool", "Travel",
            "Unexpected", "Unpleasant", "Unusual", "Useful", "Useless", "Valuable", "Warm", "Weapon", "Wet", "Worn"
        ],
        'PlotTwists': [
            "Action", "Attack", "Bad", "Barrier", "Betray", "Business", "Change", "Character", "Conclude", "Conditional",
            "Conflict", "Connection", "Consequence", "Control", "Danger", "Death", "Delay", "Destroy", "Diminish", "Disaster",
            "Discover", "Emotion", "Enemy", "Enhance", "Enter", "Escape", "Evidence", "Failure", "Family", "Free",
            "Friend", "Good", "Group", "Harm", "Headquarters", "Help", "Helpless", "Hidden", "Idea", "Immediate",
            "Impending", "Important", "Incapacitate", "Information", "Injustice", "Leader", "Legal", "Lethal", "Lie", "Limit",
            "Location", "Lucky", "Mental", "Missing", "Mundane", "Mystery", "Necessary", "News", "Object", "Oppose",
            "Outcast", "Overcome", "Past", "Peace", "Personal", "Persuade", "Physical", "Plan", "Power", "Prepare",
            "Problem", "Promise", "Protect", "Public", "Pursue", "Rare", "Remote", "Repair", "Repeat", "Require",
            "Rescue", "Resource", "Response", "Reveal", "Revenge", "Reversal", "Reward", "Risk", "Skill", "Social",
            "Solution", "Strange", "Success", "Tension", "Trap", "Travel", "Unknown", "Unlikely", "Unusual", "Urgent", "Useful"
          ],
        'Powers': [
            "Absorb", "Adversity", "Alter", "Animate", "Assist", "Attack", "Block", "Body", "Change", "Chemical",
            "Cold", "Colorful", "Combat", "Combine", "Communicate", "Control", "Cosmetic", "Create", "Creature", "Damage",
            "Dark", "Death", "Deceive", "Defense", "Delay", "Destroy", "Detect", "Dimensions", "Diminish", "Disrupt",
            "Distance", "Dominate", "Duplicate", "Electricity", "Elements", "Emission", "Emotion", "Enemies", "Energy", "Enhance",
            "Environment", "Explosion", "Extra", "Fire", "Flight", "Free", "Friend", "Harm", "Heal", "Heat",
            "Help", "Hide", "Illusion", "Imbue", "Immunity", "Increase", "Information", "Life", "Limb", "Limited",
            "Location", "Magic", "Major", "Manipulate", "Matter", "Mental", "Minor", "Nature", "Object", "Others",
            "Physical", "Plants", "Poison", "Power", "Protect", "Radius", "Ranged", "Reflect", "Repel", "Resistance",
            "Reveal", "Self", "Sense", "Skill", "Spirit", "Stealth", "Strange", "Summon", "Switch", "Take",
            "Technology", "Time", "Transform", "Trap", "Travel", "Weapon", "Weather"
          ],
        'ScavengingResults': [
            "Abundance", "Activity", "Adversity", "Allies", "Animal", "Art", "Barrier", "Beauty", "Bizarre", "Bleak",
            "Broken", "Clean", "Clothes", "Comfort", "Communicate", "Competition", "Concealment", "Conflict", "Container", "Control",
            "Crisis", "Damaged", "Danger", "Death", "Dirty", "Disagreeable", "Disgusting", "Dispute", "Drink", "Elements",
            "Empty", "Enemies", "Energy", "Extravagance", "Failure", "Fear", "Fight", "Food", "Fresh", "Friendship",
            "Fuel", "Good", "Health", "Helpful", "Hope", "Important", "Information", "Joy", "Large", "Lavish",
            "Lean", "Less", "Lethal", "Mechanical", "Medicinal", "Messy", "Misfortune", "Mundane", "Mysterious", "Nature",
            "New", "Normal", "Odd", "Official", "Old", "Open", "Opposition", "Pain", "Peace", "Pleasures",
            "Portal", "Possessions", "Protection", "Reassuring", "Repairable", "Rotten", "Rough", "Ruined", "Scary", "Shelter",
            "Simple", "Small", "Smelly", "Strange", "Struggle", "Success", "Supply", "Technology", "Tool", "Travel",
            "Triumph", "Trouble", "Useless", "Valuable", "Vehicle", "Victory", "Violence", "Warm", "Waste", "Weapon"
          ],
        'Smells': [
            "Acrid", "Animal", "Antiseptic", "Aromatic", "Artificial", "Attractive", "Bad", "Bizarre", "Burnt", "Chemical",
            "Clean", "Comforting", "Cooking", "Decrepit", "Delicious", "Delightful", "Dirty", "Disagreeable", "Disgusting", "Dry",
            "Dull", "Earthy", "Electrical", "Evocative", "Faded", "Faint", "Familiar", "Fetid", "Fishy", "Floral",
            "Food", "Foul", "Fragrant", "Fresh", "Fruity", "Funky", "Gory", "Grassy", "Gratifying", "Heady",
            "Heavy", "Herbal", "Horrible", "Humid", "Industrial", "Interesting", "Intoxicating", "Irritating", "Lacking", "Laden",
            "Malodorous", "Meaningful", "Medicinal", "Metallic", "Mildew", "Moist", "Mossy", "Musky", "Musty", "Mysterious",
            "Natural", "Nature", "Nauseating", "Normal", "Odd", "Odorless", "Offensive", "Overpowering", "Perfumed", "Pleasurable",
            "Powerful", "Pungent", "Punishing", "Putrid", "Rancid", "Reassuring", "Reek", "Rich", "Ripe", "Rot",
            "Rotten", "Savory", "Smelly", "Smokey", "Sour", "Stagnant", "Stale", "Stench", "Stinging", "Strange",
            "Strong", "Stuffy", "Sulphuric", "Sweet", "Warm", "Waste", "Watery", "Weak", "Weather", "Woody"
          ],
        'Sounds': [
            "Activity", "Alarm", "Animal", "Approach", "Banging", "Battle", "Beep", "Bell", "Beseeching", "Bizarre",
            "Burning", "Busy", "Calm", "Ceaseless", "Celebrate", "Chaotic", "Cheerful", "Clang", "Combative", "Communicate",
            "Construction", "Conversation", "Crash", "Creaking", "Creepy", "Cries", "Damage", "Danger", "Disagreeable", "Distant",
            "Drip", "Echo", "Emotion", "Energetic", "Explosion", "Familiar", "Ferocious", "Footsteps", "Frantic", "Frightening",
            "Grinding", "Growl", "Hammering", "Helpful", "Imitate", "Important", "Indistinct", "Industry", "Information", "Innocent",
            "Intense", "Interesting", "Irritating", "Loud", "Machinery", "Meaningful", "Metallic", "Muffled", "Multiple", "Music",
            "Mysterious", "Natural", "Near", "Noisy", "Normal", "Odd", "Productivity", "Pursuit", "Quiet", "Reassuring",
            "Remarkable", "Rip", "Roar", "Rumbling", "Rustling", "Scary", "Scraping", "Scratching", "Simple", "Sizzle",
            "Slam", "Slow", "Soft", "Start", "Stop", "Strange", "Tapping", "Technology", "Threatening", "Thud",
            "Traffic", "Tranquil", "Uncertain", "Warning", "Water", "Weather", "Whirring", "Whistle", "Wild", "Wind"
          ],
        'SpellEffects': [
            "Animal", "Animate", "Assist", "Attack", "Attract", "Bestow", "Bizarre", "Block", "Break", "Bright",
            "Burn", "Change", "Cloud", "Cold", "Communicate", "Conceal", "Conjure", "Control", "Counteract", "Create",
            "Creature", "Curse", "Damage", "Dark", "Death", "Decrease", "Deceive", "Defense", "Detect", "Destroy",
            "Diminish", "Disease", "Dominate", "Duplicate", "Earth", "Elements", "Emotion", "Enemies", "Energy", "Enhance",
            "Environment", "Expose", "Fire", "Fix", "Food", "Free", "Group", "Guide", "Hamper", "Harm",
            "Heal", "Helpful", "Ice", "Illusion", "Imbue", "Immunity", "Imprison", "Information", "Inspect", "Life",
            "Limitation", "Liquid", "Loud", "Manipulation", "Mind", "Nature", "Object", "Others", "Pain", "Physical",
            "Plant", "Poison", "Portal", "Powerful", "Protect", "Radius", "Ranged", "Resistance", "Restore", "Self",
            "Senses", "Shield", "Soul", "Strange", "Strength", "Stun", "Summon", "Time", "Transform", "Trap",
            "Travel", "Trigger", "Uncertain", "Undead", "Wall", "Water", "Weak", "Weapon", "Weather"
          ],
        'StarshipDescriptors': [
            "Activity", "Adversity", "Assist", "Automated", "Battle", "Beautiful", "Bleak", "Block", "Bright", "Business",
            "Clean", "Cold", "Colorful", "Combative", "Communicate", "Computer", "Contain", "Control", "Creepy", "Crew",
            "Damaged", "Danger", "Dark", "Death", "Defense", "Elaborate", "Empty", "Energy", "Engine", "Enormous",
            "Environment", "Escape", "Exit", "Exterior", "Fear", "Food", "Full", "Hall", "Health", "Helpful",
            "Important", "Information", "Inquire", "Interesting", "Lacking", "Large", "Lavish", "Lethal", "Loud", "Magnificent",
            "Maintenance", "Meaningful", "Mechanical", "Message", "Messy", "Mighty", "Military", "Modern", "Multiple", "Mundane",
            "Mysterious", "Natural", "Normal", "Odd", "Portal", "Possessions", "Power", "Powerful", "Prison", "Protection",
            "Quiet", "Rare", "Reassuring", "Remarkable", "Resources", "Room", "Rough", "Ruined", "Scary", "Security",
            "Simple", "Small", "Sounds", "Start", "Stop", "Storage", "Strange", "Supplies", "Survival", "System",
            "Tactics", "Technology", "Travel", "Unusual", "Valuable", "Vehicle", "Warm", "Weapon", "Work"
          ],
        'TerrainDescriptors': [
            "Abandoned", "Abundant", "Activity", "Advanced", "Allies", "Ancient", "Animals", "Atmosphere", "Barren", "Beautiful",
            "Bizarre", "Catastrophe", "Chaotic", "City", "Civilization", "Cliffs", "Clouds", "Cold", "Colorful", "Combative",
            "Communicate", "Conflict", "Damaged", "Danger", "Defense", "Desert", "Dry", "Dull", "Elements", "Empty",
            "Energy", "Enormous", "Environment", "Fertile", "Frightening", "Habitable", "Harsh", "Hazy", "Healthy", "Helpful",
            "Hostile", "Hot", "Intense", "Interesting", "Large", "Lethal", "Life", "Lovely", "Magnificent", "Masses",
            "Mechanical", "Message", "Mighty", "Misfortune", "Mountainous", "Multiple", "Mundane", "Mysterious", "Natural", "Nature",
            "Nondescript", "Ocean", "Odd", "Peaceful", "People", "Plants", "Populated", "Powerful", "Primitive", "Rain",
            "Rare", "Remarkable", "Resourceful", "Riches", "River", "Rocky", "Rough", "Ruined", "Ruins", "Sandy",
            "Scary", "Simple", "Small", "Strange", "Strong", "Technology", "Threatening", "Toxic", "Tranquil", "Trees",
            "Unusual", "Valuable", "Violent", "Warm", "Water", "Weak", "Weather", "Wild", "Windy", "Wonders"
          ],
        'UndeadDescriptors': [
            "Active", "Aggressive", "Angry", "Animal", "Anxious", "Attract", "Beautiful", "Bestow", "Bizarre", "Bleak",
            "Bold", "Bound", "Cold", "Combative", "Communicate", "Control", "Create", "Creepy", "Dangerous", "Dark",
            "Deceive", "Dirty", "Disgusting", "Elements", "Enemies", "Energy", "Environment", "Evil", "Fast", "Fear",
            "Fight", "Floating", "Friendly", "Frightening", "Glad", "Glow", "Goals", "Good", "Guide", "Harm",
            "Helpful", "Helpless", "Historical", "Horrible", "Hungry", "Imitate", "Information", "Insubstantial", "Intelligent", "Large",
            "Leadership", "Lethal", "Light", "Limited", "Lonely", "Love", "Macabre", "Malice", "Message", "Messy",
            "Mighty", "Mindless", "Miserable", "Misfortune", "Monstrous", "Mundane", "Odd", "Old", "Pain", "Pale",
            "Passive", "Possessions", "Possessive", "Powerful", "Powers", "Purposeful", "Pursue", "Quiet", "Resistant", "Rotting",
            "Scary", "Seeking", "Shambling", "Slow", "Small", "Smelly", "Strange", "Strong", "Threatening", "Tough",
            "Transform", "Travel", "Trick", "Vengeful", "Violent", "Weak", "Weakness", "Weapons", "Wounds", "Young"
          ],
        'VisionsAndDreams': [
            "Activity", "Adversity", "Allies", "Assist", "Attainment", "Bizarre", "Bleak", "Catastrophe", "Celebrate", "Change",
            "Colorful", "Conflict", "Contact", "Control", "Creepy", "Crisis", "Cruelty", "Danger", "Dark", "Death",
            "Defeat", "Disruption", "Elements", "Enemies", "Energy", "Environment", "Event", "Evil", "Failure", "Fears",
            "Festive", "Fight", "Friendship", "Frightening", "Future", "Goals", "Good", "Guidance", "Harm", "Helpful",
            "Ideas", "Implore", "Important", "Incomplete", "Information", "Instruction", "Liberty", "Lies", "Love", "Malice",
            "Masses", "Mechanical", "Message", "Messy", "Military", "Misfortune", "Mundane", "Mysterious", "Natural", "Obscure",
            "Odd", "Oppose", "Path", "Peace", "People", "Place", "Plans", "Plot", "Positive", "Possessions",
            "Power", "Preventable", "Reassuring", "Riches", "Riddle", "Ruin", "Scary", "Simple", "Strange", "Struggle",
            "Success", "Suffering", "Suppress", "Tension", "Threat", "Time", "Travel", "Trouble", "Trust", "Uncertain",
            "Unsettling", "Violence", "Warning", "Weapon"
          ],
///////UNE
          "npcModifier": [
            "a superfluous", "an inept", "a pleasant", "a lethargic", "a jovial",
            "an addicted", "a banal", "an insensitive", "a defiant", "a shrewd",
            "a conformist", "a logical", "a titled", "an obnoxious", "a liberal",
            "a nefarious", "a subtle", "an inexperienced", "an insightful", "a compliant",
            "a sensible", "a reputable", "a prying", "a tactless", "a destitute",
            "an untrained", "a wicked", "an oblivious", "a fanatic", "a conniving",
            "a romantic", "a lazy", "a refined", "a plebeian", "a careful",
            "an unreasonable", "a pessimistic", "an indispensable", "a childish", "an alluring",
            "a skilled", "a solemn", "a scholarly", "a pious", "a defective",
            "a neglectful", "a habitual", "a conservative", "an uneducated", "an optimistic",
            "a lively", "a meek", "an uncouth", "an inconsiderate", "an affluent",
            "a forthright", "a helpful", "a willful", "a cultured", "a despondent",
            "an idealistic", "an unconcerned", "an indifferent", "a revolting", "a mindless",
            "an unsupportive", "a generous", "a fickle", "a curious", "a passionate",
            "a rational", "a docile", "an elderly", "a touchy", "a devoted",
            "a coarse", "a cheery", "a sinful", "a needy", "an established",
            "a foolish", "a pragmatic", "a naive", "a dignified", "an unseemly",
            "a cunning", "a serene", "a privileged", "a pushy", "a dependable",
            "a delightful", "a thoughtful", "a glum", "a kind", "a righteous",
            "a miserly", "a hopeless", "a likable", "a corrupt", "a confident"
          ],
          
          "npcNoun": [
            "gypsy", "missionary", "villager", "mediator", "performer",
            "witch", "outcast", "magus", "crook", "magister",
            "merchant", "mercenary", "conscript", "civilian", "serf",
            "expert", "caretaker", "worker", "activist", "brute",
            "commoner", "hermit", "actor", "hero", "inquisitor",
            "judge", "orator", "herald", "champion", "lord",
            "ranger", "chieftain", "highwayman", "cleric", "villain",
            "occultist", "pioneer", "fortune-hunter", "slave", "professor",
            "reverend", "burglar", "governor", "gunman", "servant",
            "thug", "vicar", "scrapper", "clairvoyant", "charmer",
            "drifter", "officer", "monk", "patriarch", "globetrotter",
            "journeyman", "explorer", "homemaker", "shopkeeper", "sniper",
            "statesman", "warden", "recluse", "crone", "courtier",
            "astrologer", "outlaw", "steward", "adventurer", "priest",
            "duelist", "adept", "polymath", "soldier", "tradesman",
            "jack-of-all-trades", "bum", "magician", "entertainer", "hitman",
            "aristocrat", "sorcerer", "traveler", "craftsman", "wizard",
            "preacher", "laborer", "vagrant", "scientist", "beggar",
            "artisan", "master", "apprentice", "ascetic", "tradesman",
            "rogue", "ascendant", "politician", "superior", "warrior"
          ],
          
          "npcMotivation_Verb": [
            "advise", "shepherd", "take", "work", "manage",
            "obtain", "abuse", "discover", "accompany", "suppress",
            "attempt", "indulge in", "deter", "offend", "proclaim",
            "spoil", "chronicle", "acquire", "guide", "operate",
            "oppress", "fulfill", "damage", "learn", "access",
            "interact", "drive", "publicize", "persecute", "refine",
            "create", "review", "burden", "communicate", "compose",
            "abduct", "aid", "advocate", "process", "undermine",
            "promote", "follow", "implement", "report", "explain",
            "conceive", "advance", "understand", "develop", "discourage",
            "blight", "guard", "collaborate", "steal", "attend",
            "progress", "conquer", "strive", "suggest", "detect",
            "distress", "hinder", "complete", "weaken", "execute",
            "possess", "plunder", "compel", "achieve", "maintain",
            "record", "construct", "join", "secure", "realize",
            "embrace", "encourage", "assist", "inform", "convey",
            "contact", "agonize", "defile", "patronize", "rob",
            "pursue", "comprehend", "produce", "depress", "establish",
            "associate", "administer", "institute", "determine", "overthrow",
            "prepare", "relate", "account", "seek", "support"
          ],
          
          "npcMotivation_Noun": [
            "wealth", "the wealthy", "dreams", "gluttony", "advice",
            "hardship", "the populous", "discretion", "lust", "propaganda",
            "affluence", "enemies", "love", "envy", "science",
            "resources", "the public", "freedom", "greed", "knowledge",
            "prosperity", "religion", "pain", "laziness", "communications",
            "poverty", "the poor", "faith", "wrath", "lies",
            "opulence", "family", "slavery", "pride", "myths",
            "deprivation", "the elite", "enlightenment", "purity", "riddles",
            "success", "academia", "racism", "moderation", "stories",
            "distress", "the forsaken", "sensuality", "vigilance", "legends",
            "contraband", "the law", "dissonance", "zeal", "industry",
            "music", "the government", "peace", "composure", "new religions",
            "literature", "the oppressed", "discrimination", "charity", "progress",
            "technology", "friends", "disbelief", "modesty", "animals",
            "alcohol", "criminals", "pleasure", "atrocities", "ghosts",
            "medicines", "allies", "hate", "cowardice", "magic",
            "beauty", "secret societies", "happiness", "narcissism", "nature",
            "strength", "the world", "servitude", "compassion", "old religions",
            "intelligence", "military", "harmony", "valor", "expertise",
            "force", "the church", "justice", "patience", "spirits"
          ]
};
