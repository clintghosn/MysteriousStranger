var region_wilderness = [
    "Dry and arid","Dry and arid","Dry and arid","Dry and arid","Dry and arid",
    "Wet","Wet","Wet","Wet","Wet",
    "having dense vegetation","having dense vegetation","having dense vegetation","having dense vegetation","having dense vegetation",
    "Rocky","Rocky","Rocky","Rocky","Rocky",
    "having Lots of open space","having Lots of open space","having Lots of open space","having Lots of open space","having Lots of open space",
    "Sandy","Sandy","Sandy","Sandy","Sandy",
    "Barren","Barren","Barren","Barren","Barren",
    "having Active natural elements, such as a volcano, waterfall, river, winds, rain, etc.","having Active natural elements, such as a volcano, waterfall, river, winds, rain, etc.","having Active natural elements, such as a volcano, waterfall, river, winds, rain, etc.","having Active natural elements, such as a volcano, waterfall, river, winds, rain, etc.","having Active natural elements, such as a volcano, waterfall, river, winds, rain, etc.",
    "Hot","Hot","Hot","Hot","Hot",
    "Cold","Cold","Cold","Cold","Cold",
    "Hilly or sloping","Hilly or sloping","Hilly or sloping","Hilly or sloping","Hilly or sloping",
    "Difficult to travel through","Difficult to travel through","Difficult to travel through","Difficult to travel through","Difficult to travel through",
    "having Plant life","having Plant life","having Plant life","having Plant life","having Plant life",
    "having Active animals","having Active animals","having Active animals","having Active animals","having Active animals",
    "Mountainous","Mountainous","Mountainous","Mountainous","Mountainous",
    "having Cliffs","having Cliffs","having Cliffs","having Cliffs","having Cliffs",
    "Dangerous","Dangerous","Dangerous","Dangerous","Dangerous",
    "having Body of water","having Body of water","having Body of water","having Body of water","having Body of water",
    "Exotic","Exotic","Exotic","Exotic","Exotic",
    "description","description","description","description","description"
];

var region_city = [
    "Sprawling and large","Sprawling and large","Sprawling and large","Sprawling and large","Sprawling and large",
    "Simple and sparse","Simple and sparse","Simple and sparse","Simple and sparse","Simple and sparse",
    "Modern","Modern","Modern","Modern","Modern",
    "Old","Old","Old","Old","Old",
    "Thriving or bustling","Thriving or bustling","Thriving or bustling","Thriving or bustling","Thriving or bustling",
    "Inactive or abandoned","Inactive or abandoned","Inactive or abandoned","Inactive or abandoned","Inactive or abandoned",
    "Quiet, sleepy","Quiet, sleepy","Quiet, sleepy","Quiet, sleepy","Quiet, sleepy",
    "wilderness","wilderness","wilderness","wilderness","wilderness",
    "Dangerous","Dangerous","Dangerous","Dangerous","Dangerous",
    "Well ordered and organized","Well ordered and organized","Well ordered and organized","Well ordered and organized","Well ordered and organized",
    "In crisis","In crisis","In crisis","In crisis","In crisis",
    "Crumbling or run down","Crumbling or run down","Crumbling or run down","Crumbling or run down","Crumbling or run down",
    "Densely populated","Densely populated","Densely populated","Densely populated","Densely populated",
    "Clean","Clean","Clean","Clean","Clean",
    "Friendly","Friendly","Friendly","Friendly","Friendly",
    "Hostile","Hostile","Hostile","Hostile","Hostile",
    "having Specific purpose","having Specific purpose","having Specific purpose","having Specific purpose","having Specific purpose",
    "Exotic","Exotic","Exotic","Exotic","Exotic",
    "description","description","description","description","description"
];

var region_structure = [
    "Well made and tended","Well made and tended","Well made and tended","Well made and tended","Well made and tended",
    "Run down","Run down","Run down","Run down","Run down",
    "Busy","Busy","Busy","Busy","Busy",
    "Inactive or abandoned","Inactive or abandoned","Inactive or abandoned","Inactive or abandoned","Inactive or abandoned",
    "Ancient, of a bygone era","Ancient, of a bygone era","Ancient, of a bygone era","Ancient, of a bygone era","Ancient, of a bygone era",
    "Old","Old","Old","Old","Old",
    "Modern","Modern","Modern","Modern","Modern",
    "wilderness","wilderness","wilderness","wilderness","wilderness",
    "Simple or small","Simple or small","Simple or small","Simple or small","Simple or small",
    "Tall or large","Tall or large","Tall or large","Tall or large","Tall or large",
    "Imposing","Imposing","Imposing","Imposing","Imposing",
    "Welcoming","Welcoming","Welcoming","Welcoming","Welcoming",
    "Functional","Functional","Functional","Functional","Functional",
    "Quiet","Quiet","Quiet","Quiet","Quiet",
    "Sturdy","Sturdy","Sturdy","Sturdy","Sturdy",
    "Dangerous","Dangerous","Dangerous","Dangerous","Dangerous",
    "Occupied","Occupied","Occupied","Occupied","Occupied",
    "having Specific purpose","having Specific purpose","having Specific purpose","having Specific purpose","having Specific purpose",
    "Exotic","Exotic","Exotic","Exotic","Exotic",
    "description","description","description","description","description"
];

var area_location_large = [
    "Expected","Expected","Expected","Expected","Expected","Expected","Expected","Expected",
    "Random","Random",
    "Known, or Random",
    "Known, or Expected",
    "Special",
    "Complete","Complete",
    "Expected, PP-6","Expected, PP-6","Expected, PP-6","Expected, PP-6"
];

var area_location_small = [
    "Expected","Expected","Expected","Expected","Expected","Expected","Expected","Expected",
    "Random","Random",
    "Known, or Random",
    "Complete",
    "Known, or Random",
    "Complete","Complete",
    "Expected, PP-6","Expected, PP-6","Expected, PP-6","Expected, PP-6"
];

var area_encounters_objects = [
    "None","None","None","None","None",
    "Expected","Expected","Expected",
    "Random","Random",
    "Known, or Random",
    "None",
    "Known, or None",
    "Expected","Expected",
    "Expected, PP-6","Expected, PP-6","Expected, PP-6","Expected, PP-6"
];

var random_locations = ["Abandoned", "Amusing", "Animated", "Anxious", "Athletic", "Average", "Bawdy", "Beautiful", "Beastly", "Bold", "Busy", "Calm", "Clear", "Clever", "Classy", "Cold", "Common", "Cute", "Dark", "Damaged", "Delightful", "Dingy", "Disgusting", "Dirty", "Dry", "Dull", "Eerie", "Elegant", "Energetic", "Excited", "Familiar", "Famous", "Filthy", "Frantic", "Friendly", "Full", "Gleeful", "Gracious", "Graceful", "Gritty", "Hard", "Hardy", "Hectic", "Hollow", "Huge", "Humid", "Lively", "Lonely", "Loud", "Luminous", "Meager", "Mediocre", "Modern", "Moist", "Mysterious", "Natural", "New", "Ordinary", "Peaceful", "Pleasant", "Positive", "Powerful", "Private", "Public", "Quiet", "Quirky", "Remote", "Rustic", "Rural", "Safe", "Scenic", "Shady", "Silent", "Simple", "Small", "Smelly", "Smoky", "Soft", "Spacious", "Steamy", "Strong", "Sunny", "Tall", "Thorny", "Tiny", "Towering", "Uncertain", "Unusual", "Vast", "Vibrant", "Warm", "Weak", "Weird", "Windy", "Wooden", "Worn", "Young", "Zealous", "Zesty"]

var random_encounters = ["Aggressive", "Animated", "Anxious", "Aromatic", "Average", "Beautiful", "Beastly", "Bold", "Breezy", "Canny", "Careful", "Cautious", "Clever", "Creepy", "Cruel", "Curious", "Damaged", "Daring", "Dazed", "Dead", "Dignified", "Disfigured", "Drained", "Drowsy", "Drunk", "Dull", "Elegant", "Empty", "Enormous", "Enticing", "Excited", "Exhausted", "Famous", "Feeble", "Firm", "Flat", "Foolish", "Forthright", "Friendly", "Frightened", "Frosty", "Generous", "Gleeful", "Graceful", "Greedy", "Happy", "Hardy", "Helpless", "Heroic", "Huge", "Humble", "Humorous", "Innocent", "Insistent", "Joyful", "Loyal", "Loud", "Lucky", "Mad", "Magnificent", "Massive", "Melancholic", "Military", "Misty", "Mundane", "Mysterious", "Nervous", "Odd", "Old", "Ordinary", "Peaceful", "Persistent", "Polite", "Positive", "Powerful", "Proud", "Reassuring", "Resourceful", "Restless", "Scary", "Serious", "Shrill", "Simple", "Singing", "Skillful", "Sneaky", "Strong", "Surprised", "Suspicious", "Thirsty", "Tough", "Unusual", "Vacant", "Weak", "Weird", "Wise", "Witty", "Wounded", "Young", "Zealous", "Zesty"]

var random_objects = ["Abstract", "Aesthetic", "Antique", "Ancient", "Average", "Beautiful", "Beaten", "Bizarre", "Bold", "Bright", "Broken", "Busy", "Clean", "Classy", "Colorful", "Cool", "Creepy", "Cracked", "Cursed", "Cute", "Damaged", "Dark", "Deadly", "Decorated", "Delightful", "Dingy", "Disgusting", "Dreary", "Dull", "Elegant", "Empty", "Enormous", "Eerie", "Exciting", "Exotic", "Extraordinary", "Fancy", "Filthy", "Flat", "Flimsy", "Fragile", "Frantic", "Frightening", "Full", "Fun", "Funny", "Generous", "Giant", "Glamorous", "Gleaming", "Glistening", "Gloomy", "Glorious", "Golden", "Graceful", "Grimy", "Handmade", "Harmonious", "Hardy", "Helpful", "Huge", "Important", "Impressive", "Intricate", "Interesting", "Jovial", "Jubilant", "Large", "Lively", "Lovely", "Magnificent", "Mechanical", "Metallic", "Modern", "Musical", "Mysterious", "Natural", "Neat", "Old", "Ordinary", "Ornate", "Personal", "Plain", "Polished", "Powerful", "Practical", "Primitive", "Protected", "Rare", "Resilient", "Rough", "Rusty", "Safe", "Shiny", "Simple", "Small", "Solid", "Spiritual", "Strange", "Strong", "Tall", "Tiny", "Torn", "Traditional", "Unique", "Unusual", "Vibrant", "Warm", "Worn"]

var area_specialElements = [
    "Supersize","Supersize","Supersize","Supersize","Supersize","Supersize","Supersize","Supersize","Supersize","Supersize",
    "Barely There","Barely There","Barely There","Barely There","Barely There","Barely There","Barely There","Barely There","Barely There","Barely There",
    "This is Bad","This is Bad","This is Bad","This is Bad","This is Bad","This is Bad","This is Bad","This is Bad","This is Bad","This is Bad",
    "This is Good","This is Good","This is Good","This is Good","This is Good","This is Good","This is Good","This is Good","This is Good","This is Good",
    "Multi-Element","Multi-Element","Multi-Element","Multi-Element","Multi-Element","Multi-Element","Multi-Element","Multi-Element","Multi-Element","Multi-Element",
    "Exit Here","Exit Here","Exit Here","Exit Here","Exit Here","Exit Here","Exit Here","Exit Here","Exit Here","Exit Here","Exit Here","Exit Here","Exit Here","Exit Here","Exit Here",
    "Return","Return","Return","Return","Return","Return","Return","Return","Return","Return","Return","Return","Return","Return","Return",
    "Going Deeper","Going Deeper","Going Deeper","Going Deeper","Going Deeper","Going Deeper","Going Deeper","Going Deeper","Going Deeper","Going Deeper",
    "Common Ground","Common Ground","Common Ground","Common Ground","Common Ground","Common Ground","Common Ground","Common Ground","Common Ground","Common Ground"
];

var location_descriptors_1 = [
    "Abnormally","Adventurously","Aggressively","Angrily","Anxiously","Awkwardly","Beautifully","Bleakly","Boldly","Bravely","Busily","Calmly","Carefully","Carelessly","Cautiously","Ceaselessly","Cheerfully","Combatively","Coolly","Crazily","Curiously","Daintily","Dangerously","Defiantly","Deliberately","Delightfully","Dimly","Efficiently","Energetically","Enormously","Enthusiastically","Excitedly","Fearfully","Ferociously","Fiercely","Foolishly","Fortunately","Frantically","Freely","Frighteningly","Fully","Generously","Gently","Gladly","Gracefully","Gratefully","Happily","Hastily","Healthily","Helpfully","Helplessly","Hopelessly","Innocently","Intensely","Interestingly","Irritatingly","Jovially","Joyfully","Judgementally","Kindly","Kookily","Lazily","Lightly","Loosely","Loudly","Lovingly","Loyally","Majestically","Meaningfully","Mechanically","Miserably","Mockingly","Mysteriously","Naturally","Neatly","Nicely","Oddly","Offensively","Officially","Partially","Peacefully","Perfectly","Playfully","Politely","Positively","Powerfully","Quaintly","Quarrelsomely","Quietly","Roughly","Rudely","Ruthlessly","Slowly","Softly","Swiftly","Threateningly","Very","Violently","Wildly","Yieldingly"
];

var location_descriptors_2 = [
    "Abandoned", "Abnormal", "Amusing", "Ancient", "Aromatic", "Average", "Beautiful", "Bizarre", "Classy", "Clean", "Cold", "Colorful", "Creepy", "Cute", "Damaged", "Dark", "Defeated", "Delicate", "Delightful", "Dirty", "Disagreeable", "Disgusting", "Drab", "Dry", "Dull", "Empty", "Enormous", "Exotic", "Faded", "Familiar", "Fancy", "Fat", "Feeble", "Feminine", "Festive", "Flawless", "Fresh", "Full", "Glorious", "Good", "Graceful", "Hard", "Harsh", "Healthy", "Heavy", "Historical", "Horrible", "Important", "Interesting", "Juvenile", "Lacking", "Lame", "Large", "Lean", "Less", "Lethal", "Lonely", "Lovely", "Macabre", "Magnificent", "Masculine", "Mature", "Messy", "Mighty", "Military", "Modern", "Extravagant", "Mundane", "Mysterious", "Natural", "Nondescript", "Odd", "Pale", "Petite", "Poor", "Powerful", "Quaint", "Rare", "Reassuring", "Remarkable", "Rotten", "Rough", "Ruined", "Rustic", "Scary", "Simple", "Small", "Smelly", "Smooth", "Soft", "Strong", "Tranquil", "Ugly", "Valuable", "Warlike", "Warm", "Watery", "Weak", "Young"
];

var location_actions_1 = [
    "Attainment","Starting","Neglect","Fight","Recruit","Triumph","Violate","Oppose","Malice","Communicate","Persecute","Increase","Decrease","Abandon","Gratify","Inquire","Antagonize","Move","Waste","Truce","Release","Befriend","Judge","Desert","Dominate","Procrastinate","Praise","Separate","Take","Break","Heal","Delay","Stop","Lie","Return","Imitate","Struggle","Inform","Bestow","Postpone","Expose","Haggle","Imprison","Release","Celebrate","Develop","Travel","Block","Harm","Debase","Overindulge","Adjourn","Adversity","Kill","Disrupt","Usurp","Create","Betray","Agree","Abuse","Oppress","Inspect","Ambush","Spy","Attach","Carry","Open","Carelessness","Ruin","Extravagance","Trick","Arrive","Propose","Divide","Refuse","Mistrust","Deceive","Cruelty","Intolerance","Trust","Excitement","Activity","Assist","Care","Negligence","Passion","Work","Control","Attract","Failure","Pursue","Vengeance","Proceedings","Dispute","Punish","Guide","Transform","Overthrow","Oppress","Change"
];

var location_actions_2 = [
    "Goals","Dreams","Environment","Outside","Inside","Reality","Allies","Enemies","Evil","Good","Emotions","Opposition","War","Peace","Innocent","Love","Spirit","Intellect","Ideas","Joy","Messages","Energy","Balance","Tension","Friendship","Physical","Project","Pleasures","Pain","Possessions","Benefits","Plans","Lies","Expectations","Legal","Bureaucracy","Business","Path","News","Exterior","Advice","Plot","Competition","Prison","Illness","Food","Attention","Success","Failure","Travel","Jealousy","Dispute","Home","Investment","Suffering","Wishes","Tactics","Stalemate","Randomness","Misfortune","Death","Disruption","Power","Burden","Intrigues","Fears","Ambush","Rumor","Wounds","Extravagance","Representative","Adversities","Opulence","Liberty","Military","Mundane","Trials","Masses","Vehicle","Art","Victory","Dispute","Riches","Normal","Technology","Hope","Magic","Illusions","Portals","Danger","Weapons","Animals","Weather","Elements","Nature","Masses","Leadership","Fame","Anger","Information"
];