import { Book } from "../interfaces/books";

let books = [{
    date: new Date('2015-03-21'),
    title: "Charlotte's Web",
    rating: 5,
    author: 'E.B. White',
    isbn: '9780064410939',
    tags: [
        'classics',
        'young-adult-fiction'
    ]
},
{
    date: new Date('2023-03-24'),
    title: "Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character",
    rating: 5,
    author: 'Richard P. Feynman',
    isbn: '9780393355628',
    tags: [
        'science',
        'biography'
    ]
},
{
    date: new Date('2023-03-12'),
    title: "The Old Man and the Sea",
    rating: 4,
    author: 'Ernest Hemingway',
    isbn: '9780684830490',
    tags: [
        'classics'
    ]
},
{
    date: new Date('2023-01-19'),
    title: "East of Eden",
    rating: 5,
    author: 'John Steinbeck',
    isbn: '9780142000656',
    tags: [
        'favorites',
        'classics'
    ]
},
{
    date: new Date('2023-03-04'),
    title: "The God Delusion",
    rating: 5,
    author: 'Richard Dawkins',
    isbn: '9780618680009',
    tags: [
        'science'
    ]
},
{
    date: new Date('2022-12-27'),
    title: "The Republic",
    rating: 5,
    author: ' Plato',
    isbn: '9780140449143',
    tags: [
        'classics',
        'literature',
        'philosophy'
    ]
},
{
    date: new Date(''),
    title: "Contemporary Linguistic Analysis: An Introduction",
    rating: 0,
    author: 'William D. O Grady',
    isbn: '9780201478129',
    tags: [
        'currently-reading',
    ]
},
{
    date: new Date(''),
    title: "Applied Combinatorics",
    rating: 0,
    author: 'Mitchel T. Keller',
    isbn: 'None',
    tags: [
        'mathematics'
    ]
},
{
    date: new Date('2022-12-21'),
    title: "Essentials of Linguistics",
    rating: 3,
    author: 'Catherine       Anderson',
    isbn: 'None',
    tags: [
        'linguistics'
    ]
},
{
    date: new Date('2022-12-15'),
    title: "Vowels and Consonants",
    rating: 4,
    author: 'Peter Ladefoged',
    isbn: '9781405124591',
    tags: [
        'linguistics'
    ]
},
{
    date: new Date('2022-12-11'),
    title: "Linear Algebra Done Right",
    rating: 5,
    author: 'Sheldon Axler',
    isbn: '9780387982588',
    tags: [
        'mathematics'
    ]
},
{
    date: new Date('2022-12-08'),
    title: "The Sounds of Language: An Introduction to Phonetics",
    rating: 4,
    author: 'Henry Rogers',
    isbn: '9780582381827',
    tags: [
        'linguistics',
    ]
},
{
    date: new Date('2022-03-04'),
    title: "Harry Potter et le Prisonnier d'Azkaban (La série de livres Harry Potter t. 3)",
    rating: 5,
    author: 'J.K. Rowling',
    isbn: 'None',
    tags: [
        'french'
    ]
},
{
    date: new Date('2022-11-10'),
    title: "The Emperor of All Maladies: A Biography of Cancer",
    rating: 5,
    author: 'Siddhartha Mukherjee',
    isbn: 'None',
    tags: [
        "science"
    ]
},
{
    date: new Date('2022-10-22'),
    title: "A History of Modern Europe: From the Renaissance to the Present",
    rating: 4,
    author: 'John M. Merriman',
    isbn: '9780393979107',
    tags: [
        'history'
    ]
},
{
    date: new Date(''),
    title: "Greek Sanctuaries and Temple Architecture: An Introduction",
    rating: 4,
    author: 'Mary Emerson',
    isbn: '9781472575289',
    tags: [
        'history',
        'art'
    ]
},
{
    date: new Date(''),
    title: "Student Activities Manual for Golosa: A Basic Course in Russian, Book 1 (5th Edition)",
    rating: 0,
    author: 'Richard M. Robin',
    isbn: '9780205748761',
    tags: [
        'language-learning',
        'currently-reading'
    ]
},
{
    date: new Date(''),
    title: "Golosa: A Basic Course in Russian, Book 1",
    rating: 0,
    author: 'Richard M. Robin',
    isbn: '9780130494566',
    tags: [
        'currently-reading',
        'language-learning'
    ]
},
{
    date: new Date('2022-10-18'),
    title: "CHINESE ODYSSEY (SIMPLIFIED AND TRADITIONAL): Innovative Language Courseware - Vol. 1 Textbook",
    rating: 5,
    author: 'Xueying Wang',
    isbn: '9780887275388',
    tags: [
        'language-learning'
    ]
},
{
    date: new Date(''),
    title: "Flâneuse: Women Walk the City in Paris, New York, Tokyo, Venice and London",
    rating: 4,
    author: 'Lauren Elkin',
    isbn: 'None',
    tags: [
        'history',
    ]
},
{
    date: new Date('2023-04-10'),
    title: "Calculus",
    rating: 0,
    author: 'Michael Spivak',
    isbn: '9780914098898',
    tags: [
        'mathematics'
    ]
},
{
    date: new Date(''),
    title: "Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)",
    rating: 5,
    author: 'J.K. Rowling',
    isbn: '9780439655484',
    tags: [
    ]
},
{
    date: new Date('2022-09-05'),
    title: "The Grapes of Wrath",
    rating: 5,
    author: 'John Steinbeck',
    isbn: 'None',
    tags: [
        'classics',
        'literature'
    ]
},
{
    date: new Date('2022-08-28'),
    title: "The Feynman Lectures on Physics",
    rating: 5,
    author: 'Richard P. Feynman',
    isbn: '9780805390452',
    tags: [
        'physics'
    ]
},
{
    date: new Date(''),
    title: "Sabotaged (The Missing, #3)",
    rating: 3,
    author: 'Margaret Peterson Haddix',
    isbn: '9781416954248',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Sent (The Missing, #2)",
    rating: 3,
    author: 'Margaret Peterson Haddix',
    isbn: '9781416954224',
    tags: [
    ]
},
{
    date: new Date('2021-01-12'),
    title: "Sophie's World: A Novel About the History of Philosophy",
    rating: 2,
    author: 'Jostein Gaarder',
    isbn: '9780374530716',
    tags: [
        'young-adult-fiction',
    ]
},
{
    date: new Date('2021-05-06'),
    title: "Carlisle 1.Tasunka Witko",
    rating: 1,
    author: 'Édouard Chevais-Deighton',
    isbn: 'None',
    tags: [
        'french'
    ]
},
{
    date: new Date(''),
    title: "Jurassic Park",
    rating: 5,
    author: 'Michael Crichton',
    isbn: '9780307348135',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date(''),
    title: "Harry Potter and the Order of the Phoenix (Harry Potter, #5)",
    rating: 5,
    author: 'J.K. Rowling',
    isbn: 'None',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Harry Potter and the Deathly Hallows (Harry Potter, #7)",
    rating: 5,
    author: 'J.K. Rowling',
    isbn: 'None',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "The Lost World",
    rating: 5,
    author: 'Michael Crichton',
    isbn: '9780752224411',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date('2022-08-21'),
    title: "How Not to Be Wrong: The Power of Mathematical Thinking",
    rating: 4,
    author: 'Jordan Ellenberg',
    isbn: '9780143127536',
    tags: [
        'mathematics'
    ]
},
{
    date: new Date(''),
    title: "Peterson First Guide To Reptiles And Amphibians",
    rating: 5,
    author: 'Roger Conant',
    isbn: '9780395971956',
    tags: [
        'biology'
    ]
},
{
    date: new Date(''),
    title: "The Lion, the Witch and the Wardrobe",
    rating: 5,
    author: 'C.S. Lewis',
    isbn: 'None',
    tags: [
        'fiction',
        'young-adult-fiction'
    ]
},
{
    date: new Date('2022-08-12'),
    title: "How to Reassess Your Chess: The Complete Chess Mastery Course",
    rating: 4,
    author: 'Jeremy Silman',
    isbn: '9781890085001',
    tags: [
        'chess'
    ]
},
{
    date: new Date('2022-08-09'),
    title: "Heart of Darkness",
    rating: 5,
    author: 'Joseph Conrad',
    isbn: '9781892295491',
    tags: [
        'classics',
        'literature',
    ]
},
{
    date: new Date('2022-07-24'),
    title: "Four Colors Suffice: How the Map Problem Was Solved",
    rating: 4,
    author: 'Robin J. Wilson',
    isbn: '9780691120232',
    tags: [
        'mathematics'
    ]
},
{
    date: new Date('2022-07-17'),
    title: "Einstein: His Life and Universe",
    rating: 5,
    author: 'Walter Isaacson',
    isbn: '9780743264730',
    tags: [
        'science',
        'biography',
        'history'
    ]
},
{
    date: new Date('2022-07-15'),
    title: "A Computational Perspective on Visual Attention",
    rating: 4,
    author: 'John K. Tsotsos',
    isbn: '9780262015417',
    tags: [
        'psychology',
        'computer-science'
    ]
},
{
    date: new Date('2022-06-23'),
    title: "A Christmas Carol",
    rating: 5,
    author: 'Charles Dickens',
    isbn: '9781561797462',
    tags: [
        'classics',
        'literature'
    ]
},
{
    date: new Date('2021-10-28'),
    title: "Cottagers and Indians",
    rating: 2,
    author: 'Drew Hayden Taylor',
    isbn: '9781772012309',
    tags: [
    ]
},
{
    date: new Date('2018-05-18'),
    title: "Cryptonomicon",
    rating: 5,
    author: 'Neal Stephenson',
    isbn: 'None',
    tags: [
        'favorites',
        'science-fiction'
    ]
},
{
    date: new Date(''),
    title: "A Brief History of Time",
    rating: 5,
    author: 'Stephen Hawking',
    isbn: '9780553380163',
    tags: [
        'science'
    ]
},
{
    date: new Date('2018-11-09'),
    title: "Hyperion (Hyperion Cantos, #1)",
    rating: 5,
    author: 'Dan Simmons',
    isbn: '9780553283686',
    tags: [
        'science-fiction',
        'favorites'
    ]
},
{
    date: new Date('2020-03-20'),
    title: "The Lord of the Rings",
    rating: 5,
    author: 'J.R.R. Tolkien',
    isbn: '9780007488315',
    tags: [
        'classics',
        'fantasy',
        'favorites'
    ]
},
{
    date: new Date('2021-01-06'),
    title: "Introduction to Algorithms",
    rating: 5,
    author: 'Thomas H. Cormen',
    isbn: '9780262032933',
    tags: [
        'computer-science',
        'favorites'
    ]
},
{
    date: new Date('2021-04-06'),
    title: "Physics of the Future: How Science Will Shape Human Destiny and Our Daily Lives by the Year 2100",
    rating: 5,
    author: 'Michio Kaku',
    isbn: '9780385530804',
    tags: [
        'science'
    ]
},
{
    date: new Date('2021-08-15'),
    title: "Crime and Punishment",
    rating: 5,
    author: 'Fyodor Dostoevsky',
    isbn: '9780143058144',
    tags: [
        'classics',
        'literature',
        'favorites'
    ]
},
{
    date: new Date('2022-03-22'),
    title: "The Rise and Fall of the Dinosaurs: A New History of a Lost World",
    rating: 5,
    author: 'Stephen Brusatte',
    isbn: '9780062490421',
    tags: [
        'science',
        'favorites'
    ]
},
{
    date: new Date('2022-05-28'),
    title: "The Selfish Gene",
    rating: 5,
    author: 'Richard Dawkins',
    isbn: '9780199291151',
    tags: [
        'science',
        'classics',
        'favorites'
    ]
},
{
    date: new Date('2019-10-09'),
    title: "Seveneves",
    rating: 4,
    author: 'Neal Stephenson',
    isbn: '9780062190376',
    tags: [
        'science-fiction',
        'favorites'
    ]
},
{
    date: new Date('2019-12-15'),
    title: "How To: Absurd Scientific Advice for Common Real-World Problems",
    rating: 5,
    author: 'Randall Munroe',
    isbn: '9781473680333',
    tags: [
        'science',
        'favorites'
    ]
},
{
    date: new Date('2020-10-04'),
    title: "Steve Jobs",
    rating: 5,
    author: 'Walter Isaacson',
    isbn: '9781451648539',
    tags: [
        'biography',
        'favorites'
    ]
},
{
    date: new Date('2021-06-10'),
    title: "1984",
    rating: 5,
    author: 'George Orwell',
    isbn: 'None',
    tags: [
        'classics',
        'science-fiction',
        'favorites'
    ]
},
{
    date: new Date('2021-08-17'),
    title: "Animal Farm",
    rating: 5,
    author: 'George Orwell',
    isbn: '9780451526342',
    tags: [
        'classics',
        'favorites'
    ]
},
{
    date: new Date('2021-09-04'),
    title: "Sapiens: A Brief History of Humankind",
    rating: 5,
    author: 'Yuval Noah Harari',
    isbn: 'None',
    tags: [
        'science',
        'history',
        'favorites'
    ]
},
{
    date: new Date('2022-05-07'),
    title: "Cosmos",
    rating: 5,
    author: 'Carl Sagan',
    isbn: '9780375508325',
    tags: [
        'science',
        'favorites'
    ]
},
{
    date: new Date('2022-06-20'),
    title: "A Tale of Two Cities",
    rating: 5,
    author: 'Charles Dickens',
    isbn: '9780141439600',
    tags: [
        'classics',
        'literature',
        'favorites'
    ]
},
{
    date: new Date('2019-02-17'),
    title: "Prey",
    rating: 3,
    author: 'Michael Crichton',
    isbn: '9780061015724',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date(''),
    title: "Armada",
    rating: 3,
    author: 'Ernest Cline',
    isbn: '9780804137256',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date(''),
    title: "Tarzan of the Apes",
    rating: 3,
    author: 'Edgar Rice Burroughs',
    isbn: '9780809599813',
    tags: [
        "classics"
    ]
},
{
    date: new Date('2016-08-15'),
    title: "The 5th Wave (The 5th Wave, #1)",
    rating: 3,
    author: 'Rick Yancey',
    isbn: '9780399162411',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Second to None: The Roberto Alomar Story",
    rating: 2,
    author: 'Stephen Brunt',
    isbn: '9780670847952',
    tags: [
        "biography"
    ]
},
{
    date: new Date(''),
    title: "I, Robot",
    rating: 3,
    author: 'Isaac Asimov',
    isbn: '9780553803709',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date(''),
    title: "Bobby Fischer Teaches Chess",
    rating: 5,
    author: 'Bobby Fischer',
    isbn: '9780553263152',
    tags: [
        'chess'
    ]
},
{
    date: new Date('2022-06-11'),
    title: "The Handbook of Medical Image Perception and Techniques",
    rating: 5,
    author: 'Ehsan Samei',
    isbn: '9780521513920',
    tags: [
        'psychology'
    ]
},
{
    date: new Date(''),
    title: "Twister on Tuesday (Magic Treehouse, #23)",
    rating: 4,
    author: 'Mary Pope Osborne',
    isbn: '9780439316484',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Bad Beginning (A Series of Unfortunate Events, #1)",
    rating: 4,
    author: 'Lemony Snicket',
    isbn: '9780439206471',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2018-07-24'),
    title: "The Lightning Thief (Percy Jackson and the Olympians, #1)",
    rating: 5,
    author: 'Rick Riordan',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Harry Potter and the Chamber of Secrets (Harry Potter, #2)",
    rating: 5,
    author: 'J.K. Rowling',
    isbn: 'None',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Harry Potter and the Goblet of Fire (Harry Potter, #4)",
    rating: 5,
    author: 'J.K. Rowling',
    isbn: 'None',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "The Battle for Skandia (Ranger's Apprentice, #4)",
    rating: 4,
    author: 'John Flanagan',
    isbn: '9780399244575',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Icebound Land (Ranger's Apprentice, #3)",
    rating: 4,
    author: 'John Flanagan',
    isbn: '9780399244568',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Burning Bridge (Ranger's Apprentice, #2)",
    rating: 4,
    author: 'John Flanagan',
    isbn: '9780399244551',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Gone (Gone, #1)",
    rating: 5,
    author: 'Michael  Grant',
    isbn: '9780061448768',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Ruins of Gorlan (Ranger's Apprentice, #1)",
    rating: 5,
    author: 'John Flanagan',
    isbn: '9780142406632',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Escape (Island, #3)",
    rating: 3,
    author: 'Gordon Korman',
    isbn: '9780439164528',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Survival (Island, #2)",
    rating: 3,
    author: 'Gordon Korman',
    isbn: '9780439164573',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Shipwreck (Island, #1)",
    rating: 4,
    author: 'Gordon Korman',
    isbn: '9780439164566',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "The Golem's Eye (Bartimaeus, #2)",
    rating: 4,
    author: 'Jonathan Stroud',
    isbn: '9780786836543',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-02-23'),
    title: "The Island of Fire (The Unwanteds #3)",
    rating: 4,
    author: 'Lisa McMann',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-03-05'),
    title: "Island of Legends (Unwanteds, #4)",
    rating: 4,
    author: 'Lisa McMann',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-03-14'),
    title: "Island of Shipwrecks (Unwanteds, #5)",
    rating: 4,
    author: 'Lisa McMann',
    isbn: '9781442493315',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-03-22'),
    title: "Fablehaven (Fablehaven, #1)",
    rating: 5,
    author: 'Brandon Mull',
    isbn: '9788499188737',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-03-26'),
    title: "Rise of the Evening Star (Fablehaven, #2)",
    rating: 5,
    author: 'Brandon Mull',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Wrath of the Storm (Mark of the Thief, #3)",
    rating: 4,
    author: 'Jennifer A. Nielsen',
    isbn: '9780545562072',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Harry Potter and the Cursed Child, Parts 1 & 2 (Harry Potter #8)",
    rating: 3,
    author: 'John Tiffany',
    isbn: '9781338099133',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "The Haunter (Goosebumps Most Wanted Special Edition, #4)",
    rating: 4,
    author: 'R.L. Stine',
    isbn: '9780545825450',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Ghostfaces (Brotherband Chronicles, #6)",
    rating: 4,
    author: 'John Flanagan',
    isbn: '9780399163579',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Rise of the Wolf (Mark of the Thief, #2)",
    rating: 4,
    author: 'Jennifer A. Nielsen',
    isbn: '9780545562041',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Library of Souls (Miss Peregrine's Peculiar Children, #3)",
    rating: 3,
    author: 'Ransom Riggs',
    isbn: '9781594747588',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Island of Graves (Unwanteds, #6)",
    rating: 4,
    author: 'Lisa McMann',
    isbn: '9781442493360',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Fate of Ten (I am Number Four #6)",
    rating: 5,
    author: 'Pittacus Lore',
    isbn: '9780062194770',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Harry Potter and the Half-Blood Prince (Harry Potter, #6)",
    rating: 5,
    author: 'J.K. Rowling',
    isbn: 'None',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "The Haunted Mask (Goosebumps Wanted)",
    rating: 4,
    author: 'R.L. Stine',
    isbn: '9780545417938',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Mark of the Thief (Mark of the Thief, #1)",
    rating: 4,
    author: 'Jennifer A. Nielsen',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Firefight (The Reckoners, #2)",
    rating: 3,
    author: 'Brandon Sanderson',
    isbn: '9780385743587',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Forged (Taken, #3)",
    rating: 3,
    author: 'Erin Bowman',
    isbn: '9780062117328',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Frozen (Taken, #2)",
    rating: 3,
    author: 'Erin Bowman',
    isbn: '9780062117298',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Hollow City (Miss Peregrine's Peculiar Children, #2)",
    rating: 3,
    author: 'Ransom Riggs',
    isbn: '9781594747359',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Seeds of Rebellion (Beyonders, #2)",
    rating: 4,
    author: 'Brandon Mull',
    isbn: '9781416997948',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Taken (Taken, #1)",
    rating: 3,
    author: 'Erin Bowman',
    isbn: '9780062117267',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Allegiant (Divergent, #3)",
    rating: 4,
    author: 'Veronica Roth',
    isbn: '9780007524273',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Insurgent (Divergent, #2)",
    rating: 4,
    author: 'Veronica Roth',
    isbn: '9780007442911',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Miss Peregrine's Home for Peculiar Children (Miss Peregrine's Peculiar Children, #1)",
    rating: 4,
    author: 'Ransom Riggs',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Light (Gone, #6)",
    rating: 4,
    author: 'Michael  Grant',
    isbn: '9780061449185',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Fear (Gone, #5)",
    rating: 4,
    author: 'Michael  Grant',
    isbn: '9780061449154',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Divergent (Divergent, #1)",
    rating: 5,
    author: 'Veronica Roth',
    isbn: '9780062024039',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "A World Without Heroes (Beyonders, #1)",
    rating: 3,
    author: 'Brandon Mull',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Mockingjay",
    rating: 4,
    author: 'Suzanne Collins',
    isbn: '9780439023511',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Plague (Gone, #4)",
    rating: 4,
    author: 'Michael  Grant',
    isbn: '9780061449123',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Lies (Gone, #3)",
    rating: 4,
    author: 'Michael  Grant',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Keys to the Demon Prison (Fablehaven, #5)",
    rating: 4,
    author: 'Brandon Mull',
    isbn: '9781606412381',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Catching Fire",
    rating: 4,
    author: 'Suzanne Collins',
    isbn: '9780439023498',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Hunger (Gone, #2)",
    rating: 4,
    author: 'Michael  Grant',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Secrets of the Dragon Sanctuary (Fablehaven, #4)",
    rating: 4,
    author: 'Brandon Mull',
    isbn: '9781606410424',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Maze of Bones  (The 39 Clues, #1)",
    rating: 3,
    author: 'Rick Riordan',
    isbn: '9780545060394',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Hobbit",
    rating: 4,
    author: 'J.R.R. Tolkien',
    isbn: 'None',
    tags: ["fantasy",
    "classics"
    ]
},
{
    date: new Date(''),
    title: "The Opal Deception (Artemis Fowl, #4)",
    rating: 4,
    author: 'Eoin Colfer',
    isbn: '9781423103998',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Life of Pi",
    rating: 5,
    author: 'Yann Martel',
    isbn: '9780770430078',
    tags: [
        "classics"
    ]
},
{
    date: new Date(''),
    title: "Artemis Fowl (Artemis Fowl, #1)",
    rating: 4,
    author: 'Eoin Colfer',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Eternity Code (Artemis Fowl, #3)",
    rating: 4,
    author: 'Eoin Colfer',
    isbn: '9780141321318',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Congo",
    rating: 4,
    author: 'Michael Crichton',
    isbn: '9780060541835',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Arctic Incident  (Artemis Fowl, #2)",
    rating: 3,
    author: 'Eoin Colfer',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Of Mice and Men",
    rating: 5,
    author: 'John Steinbeck',
    isbn: '9780142000670',
    tags: ["classics"
    ]
},
{
    date: new Date(''),
    title: "Wonder",
    rating: 4,
    author: 'R.J. Palacio',
    isbn: 'None',
    tags: [
        "fiction"
    ]
},
{
    date: new Date('2016-08-22'),
    title: "United as One (Lorien Legacies, #7)",
    rating: 5,
    author: 'Pittacus Lore',
    isbn: '9780062387653',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Fever Code (The Maze Runner, #0.5)",
    rating: 3,
    author: 'James Dashner',
    isbn: '9780553513097',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Scorpion Mountain (Brotherband Chronicles, #5)",
    rating: 4,
    author: 'John Flanagan',
    isbn: '9780440870814',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Slaves of Socorro (Brotherband Chronicles, #4)",
    rating: 4,
    author: 'John Flanagan',
    isbn: '9780399163555',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Hunters (Brotherband Chronicles, #3)",
    rating: 4,
    author: 'John Flanagan',
    isbn: '9780399256219',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Invaders (Brotherband Chronicles, #2)",
    rating: 4,
    author: 'John Flanagan',
    isbn: '9780399256202',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Outcasts (Brotherband Chronicles, #1)",
    rating: 5,
    author: 'John Flanagan',
    isbn: '9780399256196',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Siege of Macindaw (Ranger's Apprentice, #6)",
    rating: 4,
    author: 'John Flanagan',
    isbn: '9781741661347',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Sorcerer of the North (Ranger's Apprentice, #5)",
    rating: 4,
    author: 'John Flanagan',
    isbn: '9781741661286',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Last Olympian (Percy Jackson and the Olympians, #5)",
    rating: 5,
    author: 'Rick Riordan',
    isbn: '9781423101475',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Titan's Curse (Percy Jackson and the Olympians, #3)",
    rating: 5,
    author: 'Rick Riordan',
    isbn: '9780141382890',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Dead Zone",
    rating: 3,
    author: 'Stephen King',
    isbn: '9780451155757',
    tags: [
        'horror'
    ]
},
{
    date: new Date(''),
    title: "The Battle of the Labyrinth (Percy Jackson and the Olympians, #4)",
    rating: 5,
    author: 'Rick Riordan',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Timeline",
    rating: 4,
    author: 'Michael Crichton',
    isbn: '9780099244721',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Shining",
    rating: 5,
    author: 'Stephen King',
    isbn: '9780450040184',
    tags: [
        'horror',
        'classics'
    ]
},
{
    date: new Date(''),
    title: "It",
    rating: 4,
    author: 'Stephen King',
    isbn: '9780450411434',
    tags: [
        "horror"
    ]
},
{
    date: new Date(''),
    title: "Pet Sematary",
    rating: 4,
    author: 'Stephen King',
    isbn: 'None',
    tags: [
        'horror'
    ]
},
{
    date: new Date(''),
    title: "The Sea of Monsters (Percy Jackson and the Olympians, #2)",
    rating: 4,
    author: 'Rick Riordan',
    isbn: '9780786856862',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "Generation One (Lorien Legacies Reborn, #1)",
    rating: 4,
    author: 'Pittacus Lore',
    isbn: '9780062493729',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Blackthorn Key (The Blackthorn Key, #1)",
    rating: 3,
    author: 'Kevin Sands',
    isbn: 'None',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "David and Goliath: Underdogs, Misfits, and the Art of Battling Giants",
    rating: 4,
    author: 'Malcolm Gladwell',
    isbn: '9780316204361',
    tags: [
        "business"
    ]
},
{
    date: new Date(''),
    title: "'Salem's Lot",
    rating: 4,
    author: 'Stephen King',
    isbn: '9780450031069',
    tags: [
        "horror"
    ]
},
{
    date: new Date(''),
    title: "The Da Vinci Code",
    rating: 3,
    author: 'Dan Brown',
    isbn: 'None',
    tags: [
        "fiction"
    ]
},
{
    date: new Date(''),
    title: "Snow Crash",
    rating: 5,
    author: 'Neal Stephenson',
    isbn: '9780553380958',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date('2017-05-06'),
    title: "The Hunger Games Trilogy",
    rating: 5,
    author: 'Suzanne Collins',
    isbn: '9780439023481',
    tags: [
        "fiction"
    ]
},
{
    date: new Date(''),
    title: "Grip of the Shadow Plague",
    rating: 5,
    author: 'Brandon Mull',
    isbn: '9780606106849',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2018-10-07'),
    title: "Nexus",
    rating: 4,
    author: 'Ramez Naam',
    isbn: '9780857662934',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date('2018-08-27'),
    title: "Doctor Sleep",
    rating: 4,
    author: 'Stephen King',
    isbn: '9781476727653',
    tags: [
        'horror',
    ]
},
{
    date: new Date('2018-08-13'),
    title: "Different Seasons",
    rating: 5,
    author: 'Stephen King',
    isbn: '9780751514629',
    tags: ["horror"
    ]
},
{
    date: new Date('2018-07-19'),
    title: "Fugitive Six (Lorien Legacies Reborn, #2)",
    rating: 4,
    author: 'Pittacus Lore',
    isbn: '9780062493781',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2018-07-12'),
    title: "The Outsider",
    rating: 4,
    author: 'Stephen King',
    isbn: '9781501180989',
    tags: [
        "horror"
    ]
},
{
    date: new Date(''),
    title: "The Gunslinger (The Dark Tower, #1)",
    rating: 4,
    author: 'Stephen King',
    isbn: 'None',
    tags: [
        "fiction"
    ]
},
{
    date: new Date(''),
    title: "A Suitable Vengeance (Inspector Lynley, #4)",
    rating: 4,
    author: 'Elizabeth George',
    isbn: '9780553384826',
    tags: [
        "fiction"
    ]
},
{
    date: new Date('2021-01-25'),
    title: "Game Theory: A Very Short Introduction",
    rating: 4,
    author: 'Ken Binmore',
    isbn: '9780199218462',
    tags: [
        'economics'
    ]
},
{
    date: new Date(''),
    title: "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
    rating: 5,
    author: 'J.K. Rowling',
    isbn: 'None',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Campbell Biology (9th Edition)",
    rating: 5,
    author: 'Jane B. Reece',
    isbn: '9780321558237',
    tags: [
        'biology'
    ]
},
{
    date: new Date(''),
    title: "The Witches",
    rating: 5,
    author: 'Roald Dahl',
    isbn: '9780590032490',
    tags: [
        'fiction'
    ]
},
{
    date: new Date(''),
    title: "Charlie and the Chocolate Factory",
    rating: 5,
    author: 'Roald Dahl',
    isbn: '9780142403884',
    tags: [
        'fiction',
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The God of Carnage",
    rating: 3,
    author: 'Christopher Hampton',
    isbn: '9780571242580',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Economics for the IB Diploma Coursebook with Digital Access (2 Years)",
    rating: 4,
    author: 'Ellie Tragakes',
    isbn: '9781108847063',
    tags: [

    ]
},
{
    date: new Date(''),
    title: "Brief Answers to the Big Questions",
    rating: 5,
    author: 'Stephen Hawking',
    isbn: '9781984819192',
    tags: [
        'science'
    ]
},
{
    date: new Date(''),
    title: "For the Love of Physics: From the End of the Rainbow to the Edge of Time - A Journey Through the Wonders of Physics",
    rating: 5,
    author: 'Walter Lewin',
    isbn: '9781439108277',
    tags: [
        'science'
    ]
},
{
    date: new Date('2020-02-07'),
    title: "The Making of the Atomic Bomb",
    rating: 4,
    author: 'Richard Rhodes',
    isbn: '9781451677614',
    tags: [
        'history',
        'science'
    ]
},
{
    date: new Date('2020-07-09'),
    title: "Introduction to Computation and Programming Using Python: With Application to Understanding Data (MIT Press)",
    rating: 5,
    author: 'John V. Guttag',
    isbn: 'None',
    tags: [
        'computer-science'
    ]
},
{
    date: new Date('2022-03-15'),
    title: "Buddhism: A Very Short Introduction",
    rating: 5,
    author: 'Damien Keown',
    isbn: '9780192853868',
    tags: [
        "philosophy"
    ]
},
{
    date: new Date('2022-01-15'),
    title: "Nickel and Dimed: On (Not) Getting by in America",
    rating: 4,
    author: 'Barbara Ehrenreich',
    isbn: '9780805063899',
    tags: [
        'business'
    ]
},
{
    date: new Date('2021-10-31'),
    title: "The War of the Worlds",
    rating: 5,
    author: 'H.G. Wells',
    isbn: '9780375759239',
    tags: [
        'classics',
        'science-fiction'
    ]
},
{
    date: new Date('2021-10-16'),
    title: "The Glass Castle",
    rating: 5,
    author: 'Jeannette Walls',
    isbn: '9780743247542',
    tags: [
    ]
},
{
    date: new Date('2017-04-05'),
    title: "Where the Red Fern Grows",
    rating: 4,
    author: 'Wilson Rawls',
    isbn: '9780375806810',
    tags: [
        'classics'
    ]
},
{
    date: new Date('2021-05-31'),
    title: "The Plague",
    rating: 5,
    author: 'Albert Camus',
    isbn: 'None',
    tags: [
        'classics',
    ]
},
{
    date: new Date('2021-05-09'),
    title: "Moby-Dick or, the Whale",
    rating: 5,
    author: 'Herman Melville',
    isbn: '9780142437247',
    tags: [
        'classics'
    ]
},
{
    date: new Date('2021-04-15'),
    title: "The Great Gatsby",
    rating: 4,
    author: 'F. Scott Fitzgerald',
    isbn: 'None',
    tags: [
        'classics'
    ]
},
{
    date: new Date('2021-04-11'),
    title: "Persepolis: The Story of a Childhood",
    rating: 5,
    author: 'Marjane Satrapi',
    isbn: '9780375714573',
    tags: [
        'biography'
    ]
},
{
    date: new Date('2021-03-12'),
    title: "Dune",
    rating: 5,
    author: 'Frank Herbert',
    isbn: '9780441013593',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date('2021-02-10'),
    title: "Knowledge: A Very Short Introduction",
    rating: 4,
    author: 'Jennifer Nagel',
    isbn: '9780199661268',
    tags: [
        "philosophy"
    ]
},
{
    date: new Date('2020-11-13'),
    title: "The Memory Police",
    rating: 4,
    author: 'Yōko Ogawa',
    isbn: '9781101870600',
    tags: [
        'science-fiction',
        'historical-fiction'
    ]
},
{
    date: new Date('2020-11-01'),
    title: "Vingt mille lieues sous les mers",
    rating: 4,
    author: 'Jules Verne',
    isbn: '9782253006329',
    tags: [
        'classics',
        'science-fiction',
        'french'
    ]
},
{
    date: new Date('2020-10-02'),
    title: "Applied Mathematics: A Very Short Introduction",
    rating: 5,
    author: 'Alain Goriely',
    isbn: '9780198754046',
    tags: [
        'mathematics'
    ]
},
{
    date: new Date('2020-10-04'),
    title: "The Art of Problem Solving, Volume 1: The Basics",
    rating: 5,
    author: 'Sandor Lehoczky',
    isbn: '9780977304561',
    tags: [
        'mathematics'
    ]
},
{
    date: new Date('2020-06-01'),
    title: "Accelerated C++: Practical Programming by Example",
    rating: 4,
    author: 'Mike Hendrickson',
    isbn: '9780201703535',
    tags: [
        'computer-science',
    ]
},
{
    date: new Date('2020-05-12'),
    title: "Code: The Hidden Language of Computer Hardware and Software (Developer Best Practices)",
    rating: 5,
    author: 'Charles Petzold',
    isbn: 'None',
    tags: [
        'science',
        'computer-science'
    ]
},
{
    date: new Date('2020-04-20'),
    title: "The Return of the King",
    rating: 4,
    author: 'J.R.R. Tolkien',
    isbn: '9780007488353',
    tags: [
    ]
},
{
    date: new Date('2020-04-06'),
    title: "The Two Towers",
    rating: 5,
    author: 'J.R.R. Tolkien',
    isbn: 'None',
    tags: [
    ]
},
{
    date: new Date('2019-08-30'),
    title: "First Man: The Life of Neil A. Armstrong",
    rating: 4,
    author: 'James R. Hansen',
    isbn: '9781982103163',
    tags: [
        'science',
        "biography"
    ]
},
{
    date: new Date('2019-12-12'),
    title: "Fall; or, Dodge in Hell",
    rating: 4,
    author: 'Neal Stephenson',
    isbn: '9780062458735',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date('2019-03-16'),
    title: "The Martian",
    rating: 5,
    author: 'Andy Weir',
    isbn: '9780804139021',
    tags: [
        'science-fiction',
    ]
},
{
    date: new Date('2019-03-30'),
    title: "Ender’s Game (Ender's Saga, #1)",
    rating: 5,
    author: 'Orson Scott Card',
    isbn: '9780812550702',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date('2019-04-27'),
    title: "Fahrenheit 451",
    rating: 3,
    author: 'Ray Bradbury',
    isbn: 'None',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date('2019-04-17'),
    title: "Speaker for the Dead (Ender's Saga, #2)",
    rating: 3,
    author: 'Orson Scott Card',
    isbn: '9780812550757',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date('2019-01-03'),
    title: "The Fall of Hyperion (Hyperion Cantos, #2)",
    rating: 4,
    author: 'Dan Simmons',
    isbn: '9780553288209',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date('2019-04-30'),
    title: "Cujo",
    rating: 4,
    author: 'Stephen King',
    isbn: '9780451150646',
    tags: [
        'horror'
    ]
},
{
    date: new Date('2019-05-29'),
    title: "The Green Mile",
    rating: 4,
    author: 'Stephen King',
    isbn: '9780606403719',
    tags: [
        'horror'
    ]
},
{
    date: new Date('2019-08-11'),
    title: "Shoe Dog",
    rating: 5,
    author: 'Phil Knight',
    isbn: 'None',
    tags: [
        'business'
    ]
},
{
    date: new Date('2019-10-23'),
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    rating: 5,
    author: 'Ashlee Vance',
    isbn: '9780062301239',
    tags: [
        "biography",
        'business'
    ]
},
{
    date: new Date('2019-07-28'),
    title: "11/22/63",
    rating: 4,
    author: 'Stephen King',
    isbn: '9781451627282',
    tags: [
        'historical-fiction'
    ]
},
{
    date: new Date('2019-12-15'),
    title: "SSAT  ISEE Prep 2019-2020: 4 Upper/Middle Level Practice Tests + Proven Strategies",
    rating: 4,
    author: 'Kaplan Test Prep',
    isbn: '9781506242583',
    tags: [
        'test-prep'
    ]
},
{
    date: new Date('2018-07-30'),
    title: "The Drawing of the Three (The Dark Tower, #2)",
    rating: 4,
    author: 'Stephen King',
    isbn: '9780451210852',
    tags: [
        "fiction"
    ]
},
{
    date: new Date('2018-05-30'),
    title: "Ready Player One",
    rating: 4,
    author: 'Ernest Cline',
    isbn: '9780307887436',
    tags: [
        'science-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Amulet of Samarkand (Bartimaeus, #1)",
    rating: 4,
    author: 'Jonathan Stroud',
    isbn: '9780786818594',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-10-18'),
    title: "The Edge Chronicles 2: The Winter Knights: Second Book of Quint",
    rating: 2,
    author: 'Paul Stewart',
    isbn: '9781446498279',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date(''),
    title: "The Edge Chronicles 1: The Curse of the Gloamglozer: First Book of Quint",
    rating: 4,
    author: 'Paul Stewart',
    isbn: '9781407076553',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-02-20'),
    title: "Island of Silence (Unwanteds, #2)",
    rating: 5,
    author: 'Lisa McMann',
    isbn: '9781442407718',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-02-09'),
    title: "The Kill Order (The Maze Runner, #0.4)",
    rating: 4,
    author: 'James Dashner',
    isbn: '9780385742887',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-02-13'),
    title: "The Unwanteds (Unwanteds, #1)",
    rating: 5,
    author: 'Lisa McMann',
    isbn: '9781442407688',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-01-30'),
    title: "The Death Cure (The Maze Runner, #3)",
    rating: 5,
    author: 'James Dashner',
    isbn: '9780385738774',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-01-22'),
    title: "The Scorch Trials (The Maze Runner, #2)",
    rating: 5,
    author: 'James Dashner',
    isbn: '9780385738750',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-01-10'),
    title: "The Revenge of Seven (Lorien Legacies, #5)",
    rating: 5,
    author: 'Pittacus Lore',
    isbn: '9780062194725',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2015-01-10'),
    title: "Lord of the Flies",
    rating: 5,
    author: 'William Golding',
    isbn: '9780140283334',
    tags: [
        'classics'
    ]
},
{
    date: new Date('2015-01-15'),
    title: "The Maze Runner (The Maze Runner, #1)",
    rating: 5,
    author: 'James Dashner',
    isbn: '9780385737944',
    tags: [
        'young-adult-fiction'
    ]
},
{
    date: new Date('2019-06-28'),
    title: "Monsters (Isaac Asimov's Wonderful Worlds of Science Fiction #8)",
    rating: 4,
    author: 'Isaac Asimov',
    isbn: '9780451154118',
    tags: [
        'science-fiction'
    ]
},

{
    date: new Date(''),
    title: "The Infinite Sea (The 5th Wave, #2)",
    rating: 3,
    author: 'Rick Yancey',
    isbn: 'None',
    tags: [
    ]
},
{
    date: new Date('2015-01-07'),
    title: "The Fall of Five (Lorien Legacies, #4)",
    rating: 5,
    author: 'Pittacus Lore',
    isbn: '9780061974618',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "The Rise of Nine (Lorien Legacies, #3)",
    rating: 5,
    author: 'Pittacus Lore',
    isbn: '9780061974588',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "The Power of Six (Lorien Legacies, #2)",
    rating: 4,
    author: 'Pittacus Lore',
    isbn: '9780061974557',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "I Am Number Four (Lorien Legacies, #1)",
    rating: 5,
    author: 'Pittacus Lore',
    isbn: '9780061969553',
    tags: [
    ]
},
{
    date: new Date('2014-12-27'),
    title: "The Rule of Thoughts (The Mortality Doctrine, #2)",
    rating: 4,
    author: 'James Dashner',
    isbn: '9780385741415',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "The Eye of Minds (The Mortality Doctrine, #1)",
    rating: 4,
    author: 'James Dashner',
    isbn: '9780385741392',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Son of Slappy (Goosebumps Most Wanted, #2)",
    rating: 4,
    author: 'R.L. Stine',
    isbn: '9780545417990',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "How I Met My Monster (Goosebumps Most Wanted, #3)",
    rating: 4,
    author: 'R.L. Stine',
    isbn: '9780545418003',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Frankenstein's Dog (Goosebumps Most Wanted, #4)",
    rating: 3,
    author: 'R.L. Stine',
    isbn: '9780545418010',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Dr. Maniac Will See You Now (Goosebumps Most Wanted, #5)",
    rating: 3,
    author: 'R.L. Stine',
    isbn: '9780545418027',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Creature Teacher: The Final Exam (Goosebumps Most Wanted, #6)",
    rating: 5,
    author: 'R.L. Stine',
    isbn: '9780545627733',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "The Climb (Everest, #2)",
    rating: 4,
    author: 'Gordon Korman',
    isbn: '9780439405065',
    tags: [
        "fiction"
    ]
},
{
    date: new Date(''),
    title: "The Contest (Everest, #1)",
    rating: 4,
    author: 'Gordon Korman',
    isbn: '9780439401395',
    tags: [
        "fiction"
    ]
},
{
    date: new Date(''),
    title: "Planet of the Lawn Gnomes (Goosebumps Most Wanted, #1)",
    rating: 4,
    author: 'R.L. Stine',
    isbn: '9780545417983',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "To Kill a Mockingbird",
    rating: 5,
    author: 'Harper Lee',
    isbn: 'None',
    tags: [
        "classics"
    ]
},
{
    date: new Date(''),
    title: "Revealed (The Missing, #7)",
    rating: 4,
    author: 'Margaret Peterson Haddix',
    isbn: '9781416989868',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Risked (The Missing, #6)",
    rating: 3,
    author: 'Margaret Peterson Haddix',
    isbn: '9781416989844',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Caught (The Missing, #5)",
    rating: 3,
    author: 'Margaret Peterson Haddix',
    isbn: '9781416989820',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Torn (The Missing, #4)",
    rating: 4,
    author: 'Margaret Peterson Haddix',
    isbn: '9781416989806',
    tags: [
    ]
},
{
    date: new Date(''),
    title: "Found (The Missing, #1)",
    rating: 4,
    author: 'Margaret Peterson Haddix',
    isbn: '9781416954170',
    tags: [
    ]
},
{
    date: new Date(""),
    title: "Harry Potter",
    rating: 5,
    author: "J.K. Rowling",
    isbn: "9780545044257",
    tags: ["fiction"]
},
{
    date: new Date("2023-05-05"),
    title: "Brave New World",
    rating: 5,
    author: "Aldous Huxley",
    isbn: "9780060929879",
    tags: ["science-fiction", 'classics']
},
{
    date: new Date("2023-05-07"),
    title: "A Clockwork Orange",
    rating: 5,
    author: "Anthony Burgess",
    isbn: '9780393341768',
    tags: ["classics"]
},
{
    date: new Date("2023-05-13"),
    title: "Slaughterhouse-Five",
    rating: 4,
    author: "Kurt Vonnegut",
    isbn: "9780385333849",
    tags: ["classics"]
},
{
    date: new Date("2023-05-16"),
    title: "The Hitchhiker's Guide to the Galaxy",
    rating: 5,
    author: "Douglas Adams",
    isbn: "9780671477097",
    tags: ["science-fiction", "classics"]
},
{
    date: new Date("2023-05-21"),
    title: "The Metamorphosis and Other Stories",
    rating: 5,
    isbn: "9781593080297",
    author: "Franz Kafka",
    tags: ["classics"]
},
{
    date: new Date("2023-05-21"),
    title: "The Handmaid's Tale",
    rating: 3,
    isbn: "9780385539241",
    author: "Margaret Atwood",
    tags: ["literature"]
},
{
    date: new Date("2023-06-02"),
    title: "The Pearl",
    rating: 5,
    isbn: "9780142000694",
    author: "John Steinbeck",
    tags: ["literature", "classics"]
}
];

function compare(a: Book, b: Book) {
    let a_last = "";
    let space = false;
    for (let i = 0; i < a.author.length; i++) {
        if (space) {
            a_last += a.author[i];
        } else if (a.author[i] === " ") {
            space = true;
        }
    }

    let b_last = "";
    space = false;
    for (let i = 0; i < b.author.length; i++) {
        if (space) {
            b_last += b.author[i];
        } else if (b.author[i] === " ") {
            space = true;
        }
    }

    if (a_last < b_last) {
        return -1;
    } else if (a_last > b_last) {
        return 1;
    } else {
        return 0;
    }
}

books.sort(compare);

export default books;