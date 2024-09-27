var ancestralEthnicity = [
    "Caucasian","Southern African", "Northern African", "South Asian", "East Asian", "Arab", "Lunar", "Tailored Phenotypic Mix"
];

var build = [
    "Tiny", "Short", "Short but broad or obese", "Average", "Average but broad or obese", "Average height but thin", "Average height but thin", "Tall and broad or obese", "Extremely tall and thin", "Huge"
];

var lifeStage = [
    "Barely adult", "Unwed Youth", "Married Youth", "Widowed Youth", "Unwed Adult", "Married Adult", "Married Adult", "Widowed Adult", "Married Elderly", "Unwed/Widowed Elderly"
];

var memorableTraits = [
    "being Loudly bigoted against another enclave", "being Near-sighted or hard of hearing", "having Scars over a missing hand, eye, or foot", "their Trace of Shape mutation table stigmata", "being Mute or possessing a speech debility", "having Elaborate tattoos or piercings", "being Limb crippled from old wound or accident", "having Extensive scarring over some visible skin", "being Fastidiously clean and neat", "Using a particular phrase over and over", "being Always accompanied by another NPC", "Always predicting the worst possible outcome", "being Icy scorn for a particular gender or ethnicity", "Talking loudly and slowly to outsiders", "Answering questions with another question", "being Bald or with a fanciful hair style", "Always toying with their weapons", "Quoting religious scripture constantly", "being an Indiscriminate flatterer", "having No sense of humor whatsoever"
];

var bigProblems = [
    "Having a chronic and eventually fatal disease", "their Wife or child is gravely ill or has been crippled", "a Powerful local has a grudge against them", "Having committed a crime and fearing discovery", "Owing a powerful person a favor they can't afford", "Unable to presently feed themselves or their family", "being Suspected of being a psychic- and possibly is", "Following a faith unpopular with the locals", "that Their true love wants nothing to do with them", "being Recently disgraced for a serious failure of duty", "They've recently broken a valuable enclave relic", "They've been betrayed by a once-friend"
];

var currentGreatestDesire = [
    "The romantic attentions of a particular neighbor", "having Enough food to ensure family's safety for a while", "Revenge against a hated enemy", "Justice for a crime committed against them", "the Truth about a spouse or lover's faithfulness", "having Better equipment for their role in the enclave", "Leadership in the enclave's government", "The strengthening of the enclave as a whole", "Safety for themselves or an imperiled friend", "Cure for a sick or crippled friend"
];

var favoredClothingStyle = [
    "Crude rags and tatters", "Patched Old Terran clothing", "Loincloth and little more", "Robes of homespun or Old Terran cloth", "Fragments of Old Terran plastics", "Leathers studded with credit chips", "Brightly-colored dresses or kilts", "Tunic and trousers of available cloth", "Brightly-brocaded clothing", "Suit studded with beads and charms", "Armor even at inappropriate times", "Feathers and leather and dyes", "Bright-woven homespun clothes", "Saris or sarongs of bright cloth", "clothing with A few well-placed armor plates", "Shaggy camo clothing that blends well", "Leathers decorated with their kills", "Fashionable Old Terran business suits", "Leather straps and light cloth", "Paint alone when climate permits"
];

var bestTrait = [
    "Compassionate", "Cooperative", "Courageous", "Determined", "Fair-minded", "Forbearing", "Forgiving", "Generous", "Honest", "Honorable", "Hospitable", "Humble", "Loyal", "Merciful", "Peaceful", "Perceptive", "Prudent", "Responsible", "Self-sacrificing", "Unbigoted"
];

var worstTrait = [
    "Arrogant", "Bigoted", "Deceitful", "Entitled", "Foolish", "Greedy", "Indolent", "Insulting", "Irresponsible", "Malicious", "Mistrustful", "Reckless", "Selfish", "Spiteful", "Treacherous", "Ungenerous", "Untrustworthy", "Vengeful", "Violent", "Wrathful"
];

var relationshipWithSpouseOrFamily = [
    "Warm, loving, and uncomplicated", "that the Spouse recently committed adultery", "that the Parents disapprove of their role in group", "that A new faith brings tension between them", "that they recently committed adultery", "that the Spouse is pushing them to greater glory", "that the Spouse or parent nags incessantly", "that the Spouse or parent overshadows them", "that the Spouse committed a crime; and must hide it", "that an Unforgivably terrible mistake was made", "that there is an Unjust suspicion between them", "that there is a Justified suspicion between them", "that they are Pondering a divorce/disowned by parents", "that they are Impatient for inheritance", "They are the only support for their parents or spouse", "being Pressured to divorce for infertility", "that the Family deplores their spouse or lover", "that the Family burdens them with many orders", "that they are their family's pride and joy", "that They mutually hate each other"
];

var interestingRolesInTheEnclave = [
    "being The finest and most respected farmer in the enclave", "being The enclave's best hunter", "being the Cruelly oppressed house servant for the elite", "being the Enclave's caretaker for the sick and crippled", "being the Favorite concubine to an important leader", "being A scout roving the nearby lands for signs of trouble", "being a Tech maintaining arcane and balky relics", "being a Clergy of the enclave's dominant faith", "being a Beggar, if the enclave's big enough for such", "being a Sage versed in Old Terran lore", "being a Harried official of the enclave's government", "being a Scrapsmith forging necessities from spare parts", "being a Stranger who wandered in recently from afar", "being a Missionary of another faith- openly or otherwise", "being a Wandering historian or sage", "being a Judge or magistrate of the enclave", "being the Owner of the biggest farm or house in the enclave", "being the Head or eldest heir of a large and powerful family", "being a Former wanderer made mentally ill by experiences", "being an Heir of the enclave's ruler"
];

var mostSignificantSourceOfInfluence = [
    "Having a blackmail evidence on the enclave's leader", "having an Amazing knack for finding food", "Having done favors for everyone in the enclave", "having Remarkable powers of seduction", "being Believed to be specially blessed by God", "the Hereditary authority resting in their bloodline", "Owning a powerful relic used for the good of the enclave", "having Performed a mighty deed of arms that saved the enclave", "being Married into a powerful local family", "being Respected for presciently wise advice and good judgment", "having Years of friendship with important enclave figures", "being the Best trader in the enclave, having many foreign friends", "Accidentally being crippled by enclave leader; guilt brings influence", "having Found a cache of precious tech and sharing it with enclave", ", in their youth, has been a great adventurer- by local standards", "being Respected for rigorously upright spiritual life", "having Children or siblings married into half the enclave's families", "having Secret psychic powers", "having Hidden ties with an outside raider or cult group", "being Irresistibly charming and well-loved by the enclave"
];

var basicBuildingStyle = [
    "Thatched huts made of posts bent together and tied above.",
    "Dried mud bricks in a dry climate, or fired, glazed bricks in wet places.",
    "Repurposed intact ancient buildings.",
    "Wicker walls woven around posts.",
    "Homes dug into the hillsides.",
    "Soddies made of stacked peat “bricks”.",
    "Cinderblock and scrap huts.",
    "Sheets of hard ceraplast crudely fastened together.",
    "Transparent armorglass salvaged from buildings.",
    "Tents and yurts of mutant animal leather.",
    "Stone blocks quarried from nearby.",
    "Unfinished stacked-log construction.",
    "Buildings of finished wooden planks and timbers.",
    "Tents of tough, bright-colored Old Terran cloth.",
    "Hollowed boles of giant mutant plants.",
    "Fired clay bricks and mortar.",
    "Poured concrete shapes.",
    "Stacked fieldstone construction.",
    "Bundled reed walls and thatching.",
    "Wattle-and-daub structures of mud and sticks."
];

var commonDecorativeElements = [
    "Intricate decorations in ochre and other earth dyes.",
    "Bright plastic fragments embedded in structures.",
    "Mirror-bright metal surfaces adorning important places.",
    "Intricate woodcarving on structures.",
    "Countless prayer flags of cut and brocaded Old Terran cloth.",
    "Religious symbols worked in elaborate fashion on buildings.",
    "Mosaics made of credit chips and plastic fragments.",
    "Chimes or shaped pipes that keen in the wind.",
    "Bright paints on every available surface.",
    "Careful carving worked into building walls.",
    "Stone statues of the honored dead or religious figures.",
    "Gongs of thin-pounded metal sheets.",
    "Tough armorglass fragments worked into the decor.",
    "Small, brightly-worked shrines to local religious figures.",
    "Memorials to the dead carved into walls and structures.",
    "Beautifully-carved columns of wood or stone.",
    "Skulls and body parts of slain enemies and beasts.",
    "Fountains from some functional water system.",
    "Gruesome protector-gods painted to ward off evil.",
    "Geometric patterns picked out in fragments of bright debris."
];

var names = {
    arab: {
name_female : [
    "Amani", "Atiya", "Bashira", "Daniyah", "Faizah", "Habiba", "Jalilah", "Jamila", "Jilan", "Khadija", "Leila", "Maliha", "Munira", "Nathifa", "Rasha", "Shimah", "Suha", "Yusriya", "Zuleika"
],
name_male : [
    "Ali", "Aziz", "Baraka", "Farid", "Gabir", "Hamid", "Harun", "Ishaq", "Ismail", "Jafar", "Kafil", "Khalid", "Muhammad", "Rafik", "Rashid", "Saleh", "Tariq", "Yazid", "Yusuf", "Zahur"
],
surname : [
    "Akwal", "Amari", "Antar", "Atef", "Basara", "Dalharni", "Dosari", "Ganim", "Habash", "Issa", "Jahani", "Khoury", "Madari", "Naifeh", "Said", "Sarraf", "Shamun", "Tahan", "Yazbek", "Zaydan"
]
},

chinese: {

    name_female : [
        "Ai", "Biyu", "Daiyu", "Fei", "Fen", "Jia", "Jun", "Lan", "Lian", "Liling", "Luli", "Mai", "Mei", "Meilin", "Shan", "Tai", "Xiao", "Xue", "Yao", "Zi"
    ],
    name_male : [
        "An", "Bohai", "Chao", "Dai", "Fa", "Gui", "Hong", "Hui", "Jin", "Liang", "Ming", "Peng", "Quan", "Ru", "Shen", "Tao", "Tung", "Wei", "Xin", "Yu"
    ],
    surname : [
        "Cai", "Chang", "Chen", "Feng", "Guo", "Han", "Huang", "Li", "Lin", "Qian", "Ren", "Su", "Sun", "Wang", "Wu", "Xiao", "Yang", "Zhao", "Zheng", "Zhou"
    ]
},

indian: {
    name_female : [
    "Anala", "Basanti", "Candra", "Devani", "Eshana", "Himadri", "Hiranya", "Indira", "Jaya", "Kanti", "Lalita", "Manisha", "Nalini", "Padma", "Priya", "Rukhmani", "Shakti", "Sita", "Tanushri", "Vimala"
],
    name_male : [
    "Amrit", "Bodhan", "Chakor", "Devak", "Ekaksh", "Gopal", "Ganak", "Harit", "Indra", "Jagatha", "Kumar", "Lal", "Manoj", "Nimit", "Prasad", "Rajan", "Rudra", "Suresh", "Tarun", "Vijay"
],
    surname : [
    "Achari", "Banerjee", "Bhat", "Chaturvedi", "Desai", "Devar", "Dhawan", "Gupta", "Iyengar", "Johar", "Khan", "Khatri", "Marar", "Mehra", "Patel", "Rana", "Sethi", "Singh", "Trivedi", "Varma"
]
},

lunar: {
    name_female : [
       "Barbara", "Catherine", "Christina", "Eileen", "Kalpana", "Kathryn", "Laurel", "Linda", "Liu", "Mae", "Mary", "Nancy", "Nicole", "Pamela", "Samantha", "Sandra", "Susan", "Tamara", "Valentina", "Sandra"
    ],
    name_male: [
       "Alan", "Aleksandr", "Anatoly", "Charles", "Edwin", "Fred", "Georgi", "Ivan", "Jack", "James", "John", "Michael", "Neil", "Owen", "Satoshi", "Sergei", "Vasili", "Vladimir", "Yevgeny", "Yuri"  
    ],
    surname: [
        "Aldrin", "Armstrong", "Chaffee", "Collins", "Dobrovolski", "Duke", "Furukawa", "Gagarin", "Garriott", "Glenn", "Grissom", "Haise", "Junlong", "Lovell", "McAuliffe", "Ochoa", "Shepard", "So-yeon", "Swigert", "Yang"
    ]
},

egyptian: {
    name_female : [
        "Ahset", "Aneksi", "Betresh", "Dedyet", "Herit", "Imi", "Isis", "Kemsiyet", "Kiya", "Mereneith", "Merti", "Nebettawy", "Nefertari", "Nithotep", "Raia", "Sitamun", "Tarset", "Tia", "Tuya"
    ],
    name_male : [
        "Amenkan", "Bek", "Djedefhor", "Harkhaf", "Imhotep", "Kawab", "Kha", "Khusebek", "Mahu", "Mereruka", "Nakht", "Nebwenef", "Neferu", "Nekure", "Padiaset", "Rahotep", "Setau", "Theshen", "Wajmose", "Weshptah"
    ],
    surname : [
        "Amun", "Anubis", "Aten", "Bastet", "Bes", "Geb", "Hathor", "Horus", "Isis", "Khepri", "Ma’at", "Nepthys", "Osiris", "Ptah", "Ra", "Sekhmet", "Set", "Shu", "Sobek", "Thoth"
    ]
},

swahli: {
    name_female : [
    "Afya", "Bahatu", "Chaniya", "Dhakiya", "Eshe", "Fahari", "Ghanima", "Halili", "Ishara", "Johari", "Karama", "Makini", "Mwasa", "Neema", "Raziya", "Sikudhani", "Tatu", "Waseme", "Zawadi", "Zuwena"
    ],
    name_male : [
    "Akida", "Badru", "Darweshi", "Dogo", "Elimu", "Enzi", "Faraji", "Fumo", "Ghubari", "Haki", "Hamisi", "Imara", "Juma", "Kifimbo", "Lumbwi", "Musa", "Salehe", "Sefu", "Simba", "Zuberi"
    ],
    surname : [
    "Chenge", "Chiku", "Genzabuke", "Jaku", "Jumane", "Kafumu", "Kagasheki", "Kheri", "Kilango", "Kisyeri", "Lekule", "Madabida", "Makinda", "Mgimwa", "Rukia", "Salum", "Selemani", "Sindato", "Sinkamba", "Waride"
    ]
},

zulu: {
    name_female : [
        "Cebile", "Deliwe", "Fikile", "Gabisile", "Hlengiwe", "Hleziphi", "Jezile", "Khanyisile", "Khethiwe", "Lindiwe", "Mabomvini", "Mabuza", "Mabena", "Machunwini", "Maqadini", "Mathebula", "Mazibuko", "Mhaule", "Ndebele", "Ndwandwe"
    ],
    name_male : [
        "Bafana", "Cothoza", "Dumisane", "Guduza", "Jama", "Khulekani", "Lungelo", "Malusi", "Ndonsa", "Nkanyiso", "Phakama", "Qhude", "Sandile", "Senzo", "Sibusiso", "Sipho", "Thulani", "Xhegu", "Yengwayo", "Zama"
    ],
    surname : [
        "Dlamini", "Hlanganani", "Kaleni", "Mabena", "Mabomvini", "Mabuza", "Machunwini", "Maqadini", "Mathebula", "Mazibuko", "Mhaule", "Ndebele", "Ndwandwe", "Nkosi", "Ntuli", "Shabangu", "Sibanyoni", "Sibiya", "Silongo", "Thwala"
    ]
}
};