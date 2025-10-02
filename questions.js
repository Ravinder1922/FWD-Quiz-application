
const categoryNames = {
    history: "📜 History",
    geography: "🌍 Geography",
    sports: "🏀 Sports",
    politics: "⚖️ Politics",
    currentAffairs: "📰 Current Affairs",
    algebra: "∑ Algebra",
    mensuration: "🧊 Mensuration",
    arithmetic: "➗ Arithmetic",
    trigonometry: "∆ Trigonometry",
    series: "∞ Series",
    physics: "💡 Physics",
    chemistry: "⚛️ Chemistry",
    biology: "🧬 Biology",
    astronomy: "🪐 Solar System",
    environment: "♻️ Environment",
    basics: "🤖 The language of the future",
    english: "📖 Learn Global Language",
    Health: "❤️ Health is Wealth"

};
const quizData = {
    general: {
        history: [
            {
                question: "Who was the first President of the United States?",
                options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
                answer: "George Washington",
                explanation: "George Washington became the first President of the United States in 1789. He served two terms until 1797.",
                additionalInfo: "George Washington was unanimously elected by the Electoral College, the only U.S. president to achieve this. Known as the Father of His Country, he played a crucial role in the Revolutionary War and the drafting of the Constitution. By stepping down after two terms, he set the precedent for presidential term limits, later formalized in the 22nd Amendment, and his leadership helped shape the authority of the executive branch."
            },
            {
                question: "In which year did World War II end?",
                options: ["1945", "1939", "1918", "1963"],
                answer: "1945",
                explanation: "World War II ended in 1945.",
                additionalInfo: "In Europe, Germany surrendered on May 7, 1945 (VE Day), while in the Pacific, Japan surrendered on September 2, 1945, after the bombings of Hiroshima and Nagasaki. The war caused 70–85 million deaths and led to the creation of the United Nations to prevent future conflicts."
            },
            {
                question: "Who discovered America?",
                options: ["Christopher Columbus", "Vasco da Gama", "Marco Polo", "Ferdinand Magellan"],
                answer: "Christopher Columbus",
                explanation: "Columbus reached the Americas in 1492.",
                additionalInfo: "Columbus believed he had reached Asia, calling the locals 'Indians,' though indigenous peoples had lived there for millennia. His voyages opened European exploration and the Columbian Exchange, but also led to colonization and devastation of native populations."
            },
            {
                question: "The Great Fire of London occurred in which year?",
                options: ["1666", "1766", "1866", "1966"],
                answer: "1666",
                explanation: "The Great Fire destroyed much of London in 1666.",
                additionalInfo: "The fire began at a bakery on Pudding Lane and destroyed over 13,000 houses and 87 churches. Few deaths were officially recorded, but thousands were displaced. The disaster led to new building regulations, better urban planning, and the rebuilding of St. Paul’s Cathedral."
            },
            {
                question: "Who was known as the Iron Lady?",
                options: ["Margaret Thatcher", "Indira Gandhi", "Angela Merkel", "Golda Meir"],
                answer: "Margaret Thatcher",
                explanation: "Margaret Thatcher, UK Prime Minister, was called the Iron Lady.",
                additionalInfo: "She was the UK's first female Prime Minister. Her policies, called Thatcherism, promoted free markets and privatization. She led the UK in the Falklands War (1982) and reshaped politics worldwide, but her leadership also drew criticism for deepening inequality."
            }


        ],
        geography: [
            {
                question: "What is the largest continent?",
                options: ["Asia", "Africa", "Europe", "Antarctica"],
                answer: "Asia",
                explanation: "Asia is the largest continent by area.",
                additionalInfo: "Asia spans about 44.58 million km², nearly 30% of Earth's land surface. It is home to over 4.7 billion people, the majority of the global population, and contains diverse landscapes, cultures, and some of the world’s oldest civilizations."
            },
            {
                question: "Which river flows through Egypt?",
                options: ["Nile", "Amazon", "Ganges", "Yangtze"],
                answer: "Nile",
                explanation: "The Nile is the longest river in Egypt.",
                additionalInfo: "The Nile River stretches around 6,650 km through northeastern Africa. Ancient Egyptian civilization thrived along its fertile banks, relying on seasonal flooding for agriculture, trade, and settlement, making it a vital lifeline and symbol of prosperity for thousands of years."
            },
            {
                question: "Mount Everest is located in which country?",
                options: ["Nepal", "India", "China", "Bhutan"],
                answer: "Nepal",
                explanation: "Mount Everest lies on the Nepal-China border.",
                additionalInfo: "Mount Everest, the world’s tallest mountain at 8,849 meters, stands between Nepal and Tibet. Known as 'Sagarmatha' in Nepal and 'Chomolungma' in Tibet, it attracts climbers worldwide but remains a dangerous challenge due to extreme weather, thin air, and avalanches."
            },
            {
                question: "The Sahara Desert is in which continent?",
                options: ["Africa", "Asia", "Australia", "South America"],
                answer: "Africa",
                explanation: "The Sahara is the largest hot desert in Africa.",
                additionalInfo: "Covering around 9.2 million km², the Sahara stretches across 11 North African countries. It features vast sand dunes, rocky plateaus, and scarce vegetation. Despite its harsh climate, nomadic tribes, ancient trade routes, and unique desert wildlife have survived and adapted to its environment."
            },
            {
                question: "What is the capital of Australia?",
                options: ["Canberra", "Sydney", "Melbourne", "Perth"],
                answer: "Canberra",
                explanation: "Canberra is the capital city of Australia.",
                additionalInfo: "Canberra, selected in 1908 as a compromise between Sydney and Melbourne, became Australia’s capital. Located in the Australian Capital Territory, it houses Parliament House, government offices, and national monuments. Designed with planned urban layout, it reflects political, cultural, and administrative importance."
            }
        ],
        sports: [
            {
                question: "How many players are in a soccer team?",
                options: ["11", "9", "7", "10"],
                answer: "11",
                explanation: "A soccer team has 11 players on the field.",
                additionalInfo: "Each soccer team fields 11 players, including a goalkeeper and 10 outfield players. Matches are played worldwide under FIFA rules, making soccer the most popular sport globally, enjoyed by millions across different cultures and nations."
            },
            {
                question: "Which country won the FIFA World Cup in 2018?",
                options: ["France", "Brazil", "Germany", "Argentina"],
                answer: "France",
                explanation: "France won the 2018 World Cup in Russia.",
                additionalInfo: "France defeated Croatia 4–2 in the final to win the 2018 FIFA World Cup, held in Russia. It was France’s second title after 1998, with Kylian Mbappé and Antoine Griezmann as standout players during the tournament."
            },
            {
                question: "In tennis, what is the term 'love'?",
                options: ["0", "15", "30", "40"],
                answer: "0",
                explanation: "'Love' means zero points in tennis.",
                additionalInfo: "In tennis scoring, 'love' represents zero. The term is believed to come from the French word 'l'œuf,' meaning 'egg,' symbolizing zero. Tennis scoring uniquely uses terms like love, 15, 30, and 40 instead of traditional numbers."
            },
            {
                question: "How many rings are there in the Olympic flag?",
                options: ["5", "6", "4", "7"],
                answer: "5",
                explanation: "There are 5 interlocked rings on the Olympic flag.",
                additionalInfo: "The Olympic flag features five interlocking rings in blue, yellow, black, green, and red on a white background. They represent the unity of five continents and the meeting of athletes at the Olympic Games."
            },
            {
                question: "Which sport uses a shuttlecock?",
                options: ["Badminton", "Tennis", "Squash", "Table Tennis"],
                answer: "Badminton",
                explanation: "Badminton is played using a shuttlecock.",
                additionalInfo: "Badminton is a fast-paced racquet sport where players hit a shuttlecock back and forth over a net. The shuttlecock’s feathered design slows its flight, making rallies dynamic and demanding agility, speed, and precision from players."
            }
        ],
        politics: [
            {
                question: "Who is the current President of the United States?",
                options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
                answer: "Joe Biden",
                explanation: "Joe Biden became the 46th President in 2021.",
                additionalInfo: "Joe Biden, inaugurated in January 2021, is the 46th U.S. president. He previously served as vice president under Barack Obama from 2009–2017 and represented Delaware in the Senate for decades. His presidency focuses on climate change, healthcare, economic recovery, and strengthening international relations."
            },
            {
                question: "What is the lower house of the UK Parliament?",
                options: ["House of Commons", "House of Lords", "Senate", "Congress"],
                answer: "House of Commons",
                explanation: "The House of Commons is the elected lower house.",
                additionalInfo: "The House of Commons, based in Westminster, is the elected lower chamber of the UK Parliament. It plays a vital role in passing laws, debating national issues, and holding the government accountable. Members of Parliament (MPs) represent constituencies and are elected by the public."
            },
            {
                question: "Who is the Prime Minister of India (2025)?",
                options: ["Narendra Modi", "Manmohan Singh", "Atal Bihari Vajpayee", "Rahul Gandhi"],
                answer: "Narendra Modi",
                explanation: "Narendra Modi is the current Prime Minister of India.",
                additionalInfo: "Narendra Modi, leader of the Bharatiya Janata Party (BJP), has been India’s Prime Minister since 2014. Under his leadership, India has emphasized digital transformation, infrastructure development, and global diplomacy, while continuing reforms in economic, social, and political spheres to strengthen India’s democratic governance."
            },
            {
                question: "Which country has the largest democracy?",
                options: ["India", "USA", "China", "Brazil"],
                answer: "India",
                explanation: "India is the largest democracy in the world by population.",
                additionalInfo: "India, with over 1.4 billion people, is the world’s largest democracy. It conducts the biggest democratic elections, allowing millions to vote across thousands of constituencies. Its parliamentary system, multi-party politics, and strong democratic framework ensure citizen participation in governance at national and local levels."
            },
            {
                question: "The UN was founded in which year?",
                options: ["1945", "1919", "1939", "1960"],
                answer: "1945",
                explanation: "The United Nations was established after WWII in 1945.",
                additionalInfo: "The United Nations was founded in 1945 after World War II to promote peace, security, and international cooperation. With headquarters in New York, it has 193 member states and works on humanitarian aid, climate action, human rights, and sustainable development worldwide through its specialized agencies."
            }
        ],
        currentAffairs: [

            {
                question: "The COP28 summit was focused on which issue?",
                options: ["Climate Change", "Trade", "Artificial Intelligence", "Health"],
                answer: "Climate Change",
                explanation: "COP28 continued global discussions on climate action.",
                additionalInfo: "COP28, held in Dubai in 2023, brought together world leaders to address climate change. It emphasized phasing down fossil fuels, boosting renewable energy, and providing climate finance for developing nations. The summit reinforced commitments to limit global warming to 1.5°C under the Paris Agreement."
            },
            {
                question: "Which vaccine was first rolled out in India for COVID-19?",
                options: ["Covaxin", "Covishield", "Sputnik V", "Pfizer"],
                answer: "Covishield",
                explanation: "Covishield, developed by Oxford-AstraZeneca and produced in India, was the first widely used vaccine.",
                additionalInfo: "India began its vaccination drive in January 2021, starting with Covishield, manufactured by the Serum Institute of India. Covaxin, an indigenous vaccine developed by Bharat Biotech, was also introduced. Together, they played a critical role in India’s fight against COVID-19, helping vaccinate hundreds of millions."
            },

            {
                question: "Which country will host the 2026 FIFA World Cup?",
                options: ["USA", "Canada", "Mexico", "All three"],
                answer: "All three",
                explanation: "USA, Canada, and Mexico will co-host the 2026 FIFA World Cup.",
                additionalInfo: "The 2026 FIFA World Cup will be the first to feature 48 teams, expanded from 32. It will be co-hosted by the USA, Canada, and Mexico, marking the first time three nations share hosting duties. This tournament aims to increase global participation and inclusivity in football."
            },
            {
                question: "Which city is known as the IT hub of India?",
                options: ["Hyderabad", "Bengaluru", "Pune", "Chennai"],
                answer: "Bengaluru",
                explanation: "Bengaluru is often called the Silicon Valley of India.",
                additionalInfo: "Bengaluru is India’s leading IT hub, home to global tech companies and startups. The city hosts major software parks and R&D centers, contributing significantly to India’s economy. Its strong talent pool, innovation-driven culture, and presence of multinational firms have made it a global technology powerhouse."
            },
            {
                question: "Which Indian state launched the Digital India initiative?",
                options: ["Delhi", "Maharashtra", "All States", "Central Government"],
                answer: "Central Government",
                explanation: "The Digital India initiative was launched by the Indian government in 2015.",
                additionalInfo: "Digital India, launched in 2015, is a flagship program of the Government of India to transform the nation into a digitally empowered society and knowledge economy. It focuses on broadband highways, e-governance, digital literacy, and online services to bridge the digital divide across India."
            }
        ]
    },

    math: {
        algebra: [
            {
                question: "Quadratic Formula?",
                options: ["(-b ± √(b²-4ac)) / 2a", "b² - 4ac", "ax²+bx+c", "(-b ± √a)/2"],
                answer: "(-b ± √(b²-4ac)) / 2a",
                explanation: "x = (-b ± √(b²-4ac)) / (2a)",
                additionalInfo: "The quadratic formula is used to solve any quadratic equation ax² + bx + c = 0. The term under the square root, b² - 4ac, is called the discriminant, which determines the nature of the roots (real or complex)."
            },
            {
                question: "(a+b)² expansion?",
                options: ["a²+2ab+b²", "a²-b²", "a²+b²", "a²+ab+b²"],
                answer: "a²+2ab+b²",
                explanation: "(a+b)² = a²+2ab+b²",
                additionalInfo: "The expansion of (a+b)² is a² + 2ab + b². It is a standard algebraic identity often used in factorization, simplification, and solving equations. It represents the square of a binomial expression."
            },
            {
                question: "(a-b)² expansion?",
                options: ["a²-2ab+b²", "a²-b²", "a²+2ab+b²", "a²+ab+b²"],
                answer: "a²-2ab+b²",
                explanation: "(a-b)² = a²-2ab+b²",
                additionalInfo: "The formula (a-b)² = a² - 2ab + b² is another key identity. It mirrors (a+b)² but with a negative middle term. It is widely used in simplification, geometry, and calculating distances."
            },
            {
                question: "(a+b)(a-b) = ?",
                options: ["a²-b²", "a²+b²", "a²+2ab+b²", "a²+ab+b²"],
                answer: "a²-b²",
                explanation: "(a+b)(a-b) = a²-b² (difference of squares)",
                additionalInfo: "The identity (a+b)(a-b) = a² - b² is called the difference of squares. It is a fundamental factorization method in algebra and is especially useful in simplifying expressions and solving equations quickly."
            },
            {
                question: "Sum of roots of ax²+bx+c=0?",
                options: ["-b/a", "c/a", "-c/b", "b/a"],
                answer: "-b/a",
                explanation: "Sum of roots = -b/a",
                additionalInfo: "For a quadratic equation ax² + bx + c = 0, the sum of its roots is -b/a. This is derived from Vieta’s formulas, which relate the coefficients of a polynomial to sums and products of its roots."
            }],
        arithmetic: [
            {
                question: "Simple Interest formula?",
                options: ["(P×R×T)/100", "P+R+T", "PRT", "P×R/T"],
                answer: "(P×R×T)/100",
                explanation: "SI = (P × R × T) / 100",
                additionalInfo: "Simple Interest is calculated on the original principal throughout the loan or investment period. It is widely used in banks, finance, and lending. Formula: SI = (Principal × Rate × Time) / 100."
            },
            {
                question: "Average formula?",
                options: ["Sum of terms / Number of terms", "Sum × Number", "Sum - Number", "Number / Sum"],
                answer: "Sum of terms / Number of terms",
                explanation: "Average = (Sum of terms) ÷ (Number of terms)",
                additionalInfo: "The average gives the central value of a data set. It is used in statistics, performance analysis, and everyday calculations. Formula: Average = (Sum of Observations) ÷ (Total Number of Observations)."
            },
            {
                question: "Speed = ?",
                options: ["Distance/Time", "Time/Distance", "Distance×Time", "Distance-Time"],
                answer: "Distance/Time",
                explanation: "Speed = Distance ÷ Time",
                additionalInfo: "Speed measures how fast an object moves. It is used in travel, transport, and physics. Formula: Speed = Distance ÷ Time. Related formulas: Distance = Speed × Time, Time = Distance ÷ Speed."
            },
            {
                question: "Profit = ?",
                options: ["SP - CP", "CP - SP", "CP/SP", "SP/CP"],
                answer: "SP - CP",
                explanation: "Profit = Selling Price - Cost Price",
                additionalInfo: "Profit occurs when the Selling Price (SP) is greater than the Cost Price (CP). Used in business, trade, and commerce. Loss is calculated as: Loss = Cost Price - Selling Price."
            },
            {
                question: "Percentage formula?",
                options: ["(Value/Total)×100", "Value×Total", "Value+Total", "(Value×100)/Total²"],
                answer: "(Value/Total)×100",
                explanation: "Percentage = (Value ÷ Total) × 100",
                additionalInfo: "Percentages are used to express ratios as parts of 100. They are applied in exams, finance, discounts, and statistics. Formula: Percentage = (Value ÷ Total) × 100."
            }],
        trigonometry: [
            {
                question: "sin²θ + cos²θ = ?",
                options: ["1", "0", "2", "θ"],
                answer: "1",
                explanation: "Pythagorean identity: sin²θ + cos²θ = 1",
                additionalInfo: "This fundamental trigonometric identity holds for all angles θ. It is widely used in solving equations, physics problems, and verifying other trigonometric identities."
            },
            {
                question: "tanθ = ?",
                options: ["sinθ/cosθ", "cosθ/sinθ", "1/sinθ", "1/cosθ"],
                answer: "sinθ/cosθ",
                explanation: "Definition: tanθ = sinθ / cosθ",
                additionalInfo: "Tangent represents the ratio of the opposite side to the adjacent side in a right triangle. It is useful in engineering, navigation, and calculating slopes."
            },
            {
                question: "cotθ = ?",
                options: ["1/tanθ", "tanθ", "cosθ/sinθ", "1/sinθ"],
                answer: "1/tanθ",
                explanation: "cotθ = 1/tanθ = cosθ/sinθ",
                additionalInfo: "Cotangent is the reciprocal of tangent. It helps in trigonometric simplifications, wave analysis, and solving right triangle problems."
            },
            {
                question: "sec²θ - tan²θ = ?",
                options: ["1", "0", "θ", "sin²θ"],
                answer: "1",
                explanation: "Identity: sec²θ - tan²θ = 1",
                additionalInfo: "This is another Pythagorean identity derived from the main sin²θ + cos²θ = 1. It is used in calculus, integrals, and solving trigonometric equations."
            },
            {
                question: "Angle of elevation is measured from?",
                options: ["Horizontal", "Vertical", "Slope", "Hypotenuse"],
                answer: "Horizontal",
                explanation: "Angle of elevation is from the horizontal line",
                additionalInfo: "Used in surveying, navigation, and astronomy, the angle of elevation measures how high an object appears from the observer’s eye relative to a horizontal line."
            }],
        mensuration: [
            {
                question: "Formula for area of a circle?",
                options: ["πr²", "2πr", "πd", "r²"],
                answer: "πr²",
                explanation: "Area of circle = πr²",
                additionalInfo: "The area of a circle is the space enclosed by its circumference. This formula is essential in architecture, engineering, and land measurement, helping calculate spaces and circular objects like wheels and plates."
            },
            {
                question: "Volume of a cube with side a?",
                options: ["a³", "6a²", "a²", "2a³"],
                answer: "a³",
                explanation: "Volume = side³ = a³",
                additionalInfo: "The volume represents the total space inside a cube. Used in packaging, storage calculations, and 3D modeling, it helps determine how much material is required or how much an object can contain."
            },
            {
                question: "Surface area of a sphere?",
                options: ["4πr²", "2πr", "πr²", "πd²"],
                answer: "4πr²",
                explanation: "Surface Area = 4πr²",
                additionalInfo: "Surface area is the total area covering a sphere. Useful in designing spherical tanks, globes, and in physics for understanding radiation, heat transfer, and fluid dynamics around spherical objects."
            },
            {
                question: "Volume of a cylinder?",
                options: ["πr²h", "2πrh", "πrh²", "πr³"],
                answer: "πr²h",
                explanation: "Volume of cylinder = πr²h",
                additionalInfo: "This calculates the space inside a cylinder. Commonly applied in designing pipes, containers, and storage tanks, as well as in physics problems involving liquid capacity and cylindrical objects."
            },
            {
                question: "Perimeter of a rectangle with length l and breadth b?",
                options: ["2(l+b)", "l×b", "l+b", "4(l+b)"],
                answer: "2(l+b)",
                explanation: "Perimeter = 2(l+b)",
                additionalInfo: "Perimeter is the total distance around a rectangle. Useful in fencing, flooring, and construction, it helps determine boundary lengths and material requirements for rectangular plots and objects."
            }],
        series: [
            {
                question: "Sum of first n natural numbers?",
                options: ["n(n+1)/2", "n²", "n(n-1)/2", "2n+1"],
                answer: "n(n+1)/2",
                explanation: "Formula: 1+2+3+...+n = n(n+1)/2",
                additionalInfo: "This formula quickly calculates the total of consecutive natural numbers without adding each individually. Useful in statistics, programming loops, and solving arithmetic problems efficiently."
            },
            {
                question: "Sum of squares of first n natural numbers?",
                options: ["n(n+1)(2n+1)/6", "n²(n+1)²/4", "n(n+1)/2", "n³"],
                answer: "n(n+1)(2n+1)/6",
                explanation: "Formula: 1²+2²+3²+...+n² = n(n+1)(2n+1)/6",
                additionalInfo: "This formula calculates the sum of squares, which appears in variance, physics (moments of inertia), and combinatorics. It helps avoid repetitive calculations in large datasets."
            },
            {
                question: "Sum of cubes of first n natural numbers?",
                options: ["[n(n+1)/2]²", "n³", "n²(n+1)²/2", "n(n+1)(2n+1)/12"],
                answer: "[n(n+1)/2]²",
                explanation: "Formula: 1³+2³+3³+...+n³ = [n(n+1)/2]²",
                additionalInfo: "The sum of cubes is the square of the sum of natural numbers. Useful in algebra, problem-solving, and in calculating volumes of consecutive cubic numbers in 3D modeling and physics."
            },
            {
                question: "Sum of first n odd numbers?",
                options: ["n²", "n(n+1)", "2n+1", "n³"],
                answer: "n²",
                explanation: "Formula: 1+3+5+...+(2n-1) = n²",
                additionalInfo: "This simple formula links arithmetic progression of odd numbers to perfect squares. Helpful in geometry for square arrangements, algorithm design, and number theory studies."
            },
            {
                question: "Sum of first n even numbers?",
                options: ["n(n+1)", "n²", "2n", "n(n-1)"],
                answer: "n(n+1)",
                explanation: "Formula: 2+4+6+...+2n = n(n+1)",
                additionalInfo: "The sum of even numbers forms a predictable series. This formula is used in finance (even payment calculations), programming, and in solving algebraic and arithmetic problems efficiently."
            }]

    },
    science: {
        physics: [
            {
                question: "Speed of light in vacuum?",
                options: ["3×10^8 m/s", "3×10^6 m/s", "3×10^5 m/s", "3×10^7 m/s"],
                answer: "3×10^8 m/s",
                explanation: "Speed of light is 3×10^8 m/s.",
                additionalInfo: "The speed of light is a fundamental constant of nature, denoted by 'c'. It is crucial in physics, forming the basis of Einstein's theory of relativity and electromagnetic wave calculations."
            },
            {
                question: "Force = ?",
                options: ["mass × acceleration", "mass + acceleration", "mass / acceleration", "mass - acceleration"],
                answer: "mass × acceleration",
                explanation: "Newton's second law: F = m*a",
                additionalInfo: "Force is a vector quantity causing a mass to accelerate. This law is foundational in classical mechanics and is widely applied in engineering, motion analysis, and physics problem-solving."
            },
            {
                question: "Unit of energy?",
                options: ["Joule", "Newton", "Watt", "Pascal"],
                answer: "Joule",
                explanation: "Energy is measured in Joules.",
                additionalInfo: "A Joule (J) is the work done when a force of one newton moves an object one meter. It is used in mechanics, electricity, thermodynamics, and various fields of science and engineering."
            },
            {
                question: "Acceleration due to gravity on Earth?",
                options: ["9.8 m/s²", "10 m/s²", "9 m/s²", "8.9 m/s²"],
                answer: "9.8 m/s²",
                explanation: "g = 9.8 m/s²",
                additionalInfo: "This is the average gravitational acceleration experienced by objects near Earth's surface. It is used in calculating weight, projectile motion, and in designing structures and machines affected by gravity."
            },
            {
                question: "Which particle is negatively charged?",
                options: ["Electron", "Proton", "Neutron", "Photon"],
                answer: "Electron",
                explanation: "Electrons have negative charge.",
                additionalInfo: "Electrons orbit the atomic nucleus and determine chemical properties. Their movement constitutes electric current, and understanding their behavior is crucial in electronics, chemistry, and quantum physics."
            }],
        chemistry: [
            {
                question: "Which noble gas is most abundant in Earth's atmosphere?",
                options: ["Argon", "Neon", "Helium", "Krypton"],
                answer: "Argon",
                explanation: "Argon makes up about 0.93% of Earth's atmosphere, the highest among noble gases.",
                additionalInfo: "Argon is chemically inert, colorless, and odorless. It is used in welding, light bulbs, and as a protective atmosphere in industrial processes. Its abundance and stability make it valuable for scientific and commercial applications."
            },
            {
                question: "Which acid is present in vinegar?",
                options: ["Acetic Acid", "Citric Acid", "Sulfuric Acid", "Lactic Acid"],
                answer: "Acetic Acid",
                explanation: "Vinegar contains acetic acid (CH3COOH), giving it a sour taste.",
                additionalInfo: "Acetic acid is a weak organic acid used in cooking, food preservation, and chemical industries. Concentrated acetic acid, called glacial acetic acid, is corrosive and requires careful handling in laboratories."
            },
            {
                question: "Which base is commonly used in soap making?",
                options: ["Sodium Hydroxide", "Potassium Hydroxide", "Ammonium Hydroxide", "Calcium Hydroxide"],
                answer: "Sodium Hydroxide",
                explanation: "Sodium hydroxide (NaOH) is used in saponification to make soap.",
                additionalInfo: "NaOH is a strong, caustic base used in chemical synthesis, cleaning agents, and industrial processes. In soap making, it reacts with fats or oils to form glycerol and soap through saponification. Proper safety measures are essential when handling NaOH due to its corrosive nature."
            },
            {
                question: "CH4 is commonly known as?",
                options: ["Methane", "Ethane", "Propane", "Butane"],
                answer: "Methane",
                explanation: "CH4 is methane, the simplest hydrocarbon.",
                additionalInfo: "Methane is a colorless, odorless gas and a major component of natural gas. It is used as fuel, and is also a potent greenhouse gas contributing to climate change."
            },
            {
                question: "Acid has pH < ?",
                options: ["7", "14", "0", "10"],
                answer: "7",
                explanation: "Acidic pH < 7",
                additionalInfo: "Acids release hydrogen ions (H⁺) in solution. Common examples include lemon juice, vinegar, and hydrochloric acid. pH indicates concentration of H⁺ ions, with lower values being more acidic."
            }
        ],
        biology: [
            {
                question: "Human heart has how many chambers?",
                options: ["4", "2", "3", "5"],
                answer: "4",
                explanation: "Human heart has 4 chambers: 2 atria and 2 ventricles.",
                additionalInfo: "The heart’s right atrium receives deoxygenated blood from the body, and the right ventricle pumps it to the lungs. The left atrium receives oxygenated blood from the lungs, and the left ventricle pumps it to the body. This separation ensures efficient oxygen circulation and maintains blood pressure."
            },
            {
                question: "Red blood cells carry?",
                options: ["Oxygen", "CO2", "Water", "Hormones"],
                answer: "Oxygen",
                explanation: "RBCs carry oxygen using hemoglobin.",
                additionalInfo: "Red blood cells contain hemoglobin, an iron-rich protein that binds oxygen in the lungs and releases it in tissues. They also help transport a small portion of carbon dioxide back to the lungs. RBCs have a lifespan of about 120 days and are produced in the bone marrow."
            },
            {
                question: "DNA stands for?",
                options: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Deoxyribose Acid", "Nucleic Acid"],
                answer: "Deoxyribonucleic Acid",
                explanation: "DNA is Deoxyribonucleic Acid.",
                additionalInfo: "DNA carries genetic information that determines traits in all living organisms. It consists of two strands forming a double helix, composed of nucleotides: adenine, thymine, guanine, and cytosine. DNA replication ensures inheritance of genetic material, and mutations in DNA can lead to genetic disorders."
            },
            {
                question: "Largest organ in human body?",
                options: ["Skin", "Liver", "Heart", "Lungs"],
                answer: "Skin",
                explanation: "Skin is the largest organ by surface area and weight.",
                additionalInfo: "Skin protects the body from pathogens, regulates temperature, and enables sensation. It has three layers: epidermis (outer), dermis (middle), and hypodermis (inner). Skin also helps in vitamin D synthesis and acts as a barrier against water loss, UV radiation, and mechanical injury."
            },
            {
                question: "Which vitamin is produced in sunlight?",
                options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
                answer: "Vitamin D",
                explanation: "Vitamin D is produced in skin upon sunlight exposure.",
                additionalInfo: "When UVB rays from sunlight hit the skin, 7-dehydrocholesterol is converted to Vitamin D3. It helps in calcium absorption, promoting healthy bones and teeth. Deficiency can cause rickets in children and osteomalacia in adults. Vitamin D can also be obtained from foods like fatty fish and fortified dairy products."
            }],
        astronomy: [
            {
                question: "Earth revolves around?",
                options: ["Sun", "Moon", "Mars", "Jupiter"],
                answer: "Sun",
                explanation: "Earth revolves around the Sun.",
                additionalInfo: "The Earth completes one orbit around the Sun in approximately 365.25 days, which defines a year. This revolution, combined with Earth's axial tilt of 23.5°, causes seasonal changes. Gravity from the Sun keeps Earth in a stable elliptical orbit."
            },
            {
                question: "The Moon is a?",
                options: ["Satellite", "Planet", "Star", "Comet"],
                answer: "Satellite",
                explanation: "Moon is Earth's natural satellite.",
                additionalInfo: "The Moon orbits Earth approximately every 27.3 days. It influences ocean tides through gravitational pull. Its surface has craters, mountains, and plains called maria. The Moon has phases—new, crescent, quarter, gibbous, and full—caused by its position relative to the Sun and Earth."
            },
            {
                question: "Light year measures?",
                options: ["Distance", "Time", "Speed", "Mass"],
                answer: "Distance",
                explanation: "A light year is a measure of distance.",
                additionalInfo: "A light year is the distance light travels in one year, about 9.46 trillion kilometers (5.88 trillion miles). Astronomers use it to express distances between stars and galaxies. It helps understand the vast scale of the universe and the time light takes to reach us from distant objects."
            },
            {
                question: "Galaxy we live in?",
                options: ["Milky Way", "Andromeda", "Whirlpool", "Sombrero"],
                answer: "Milky Way",
                explanation: "We live in the Milky Way galaxy.",
                additionalInfo: "The Milky Way is a barred spiral galaxy containing over 100 billion stars, including the Sun. It has a diameter of about 100,000 light years. The solar system is located in the Orion Arm, about 27,000 light years from the galactic center. Galaxies like ours are part of the Local Group."
            },
            {
                question: "Planet known as Red Planet?",
                options: ["Mars", "Jupiter", "Venus", "Mercury"],
                answer: "Mars",
                explanation: "Mars is called the Red Planet.",
                additionalInfo: "Mars appears red due to iron oxide (rust) on its surface. It has polar ice caps, volcanoes like Olympus Mons, and canyons like Valles Marineris. Mars has seasons, thin atmosphere mostly of CO2, and is a primary target for exploration for potential past life and future human missions."
            }],
        environment: [
            {
                question: "Greenhouse effect is due to?",
                options: ["CO2", "Oxygen", "Nitrogen", "Argon"],
                answer: "CO2",
                explanation: "CO2 traps heat causing greenhouse effect.",
                additionalInfo: "Greenhouse gases like CO2, methane, and water vapor trap heat in Earth's atmosphere, keeping the planet warm. Excess CO2 from burning fossil fuels intensifies global warming, leading to climate change and rising sea levels."
            },
            {
                question: "Which process helps in reducing carbon dioxide in the atmosphere?",
                options: ["Photosynthesis", "Respiration", "Combustion", "Evaporation"],
                answer: "Photosynthesis",
                explanation: "Plants absorb CO2 during photosynthesis and release oxygen.",
                additionalInfo: "During photosynthesis, plants take in carbon dioxide and water to produce glucose and oxygen. This process not only sustains plant growth but also reduces atmospheric CO2 levels, helping mitigate global warming and climate change."
            },           
            {
                question: "Largest rainforest?",
                options: ["Amazon", "Congo", "Daintree", "Sundarbans"],
                answer: "Amazon",
                explanation: "Amazon is the largest rainforest.",
                additionalInfo: "The Amazon rainforest spans across 9 countries in South America and covers over 5.5 million km². It hosts about 10% of known species, produces around 20% of Earth's oxygen, and plays a crucial role in regulating the global climate."
            },
            {
                question: "Pollution is caused by?",
                options: ["Humans", "Animals", "Plants", "Rocks"],
                answer: "Humans",
                explanation: "Human activities cause most pollution.",
                additionalInfo: "Industrial emissions, vehicle exhaust, deforestation, and improper waste disposal are major human causes of air, water, and soil pollution. Pollution harms ecosystems, human health, and contributes to climate change and biodiversity loss."
            },
            {
                question: "Ozone layer protects from?",
                options: ["UV Rays", "Infrared", "X-rays", "Visible light"],
                answer: "UV Rays",
                explanation: "Ozone layer absorbs harmful UV rays.",
                additionalInfo: "The ozone layer in the stratosphere absorbs most of the Sun’s ultraviolet radiation, preventing skin cancer, cataracts, and damage to ecosystems. Ozone depletion caused by CFCs and other chemicals increases UV exposure risks."
            }]
    },
    computerScience: {
        basics: [
            {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Print Unit", "Control Processing Unit"],
    answer: "Central Processing Unit",
    explanation: "CPU is the brain of the computer, executing instructions and processing data.",
    additionalInfo: "The CPU handles arithmetic, logic, control, and input/output operations. Modern CPUs have multiple cores to execute tasks simultaneously, increasing performance for multitasking and complex applications."
  },
  {
    question: "What is RAM used for?",
    options: ["Temporary data storage", "Permanent storage", "Networking", "Power supply"],
    answer: "Temporary data storage",
    explanation: "RAM stores data temporarily for fast access while programs are running.",
    additionalInfo: "Unlike permanent storage like hard drives, RAM is volatile, meaning its contents are lost when the computer is powered off. More RAM improves speed for multitasking and large applications."
  },
  {
    question: "HTML is used for?",
    options: ["Web page structure", "Styling web pages", "Programming logic", "Database management"],
    answer: "Web page structure",
    explanation: "HTML defines the structure and content of web pages.",
    additionalInfo: "HTML uses elements like headings, paragraphs, images, and links to create web content. It works alongside CSS for styling and JavaScript for interactivity."
  },
  {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Standard Question Language", "System Query Logic"],
    answer: "Structured Query Language",
    explanation: "SQL is used to manage and query relational databases.",
    additionalInfo: "SQL allows creating, reading, updating, and deleting data in databases. It is widely used in applications ranging from websites to enterprise software."
  },
  {
    question: "Which data structure uses LIFO?",
    options: ["Stack", "Queue", "Linked List", "Array"],
    answer: "Stack",
    explanation: "Stack follows Last-In-First-Out order; last element added is first removed.",
    additionalInfo: "Stacks are used in programming for function calls, expression evaluation, undo features, and backtracking algorithms."
  },
  {
    question: "Binary system uses how many digits?",
    options: ["2", "8", "10", "16"],
    answer: "2",
    explanation: "Binary uses 0 and 1 to represent all data in computers.",
    additionalInfo: "All digital data, including numbers, text, and multimedia, is encoded in binary. Computers use binary because digital circuits have two stable states: ON (1) and OFF (0)."
  },
  {
    question: "What is an algorithm?",
    options: ["Step-by-step procedure", "Programming language", "Software tool", "Hardware component"],
    answer: "Step-by-step procedure",
    explanation: "An algorithm is a sequence of instructions to solve a specific problem.",
    additionalInfo: "Algorithms are fundamental to programming, problem-solving, and computer science. Efficiency of an algorithm is measured in terms of time and space complexity."
  },
  {
    question: "Which is a programming language?",
    options: ["Python", "HTTP", "HTML", "CSS"],
    answer: "Python",
    explanation: "Python is a high-level programming language used for software development.",
    additionalInfo: "Python is versatile, supporting web development, data science, AI, and automation. It is known for readable syntax and a large library ecosystem."
  },
  {
    question: "What does 'OS' stand for in computers?",
    options: ["Operating System", "Open Software", "Output System", "Online Service"],
    answer: "Operating System",
    explanation: "An operating system manages hardware and software resources of a computer.",
    additionalInfo: "OS examples include Windows, Linux, and macOS. It provides an interface for users, manages memory, processes, storage, and peripheral devices."
  },
  {
    question: "Which protocol is used for web browsing?",
    options: ["HTTP/HTTPS", "FTP", "SMTP", "SSH"],
    answer: "HTTP/HTTPS",
    explanation: "HTTP/HTTPS protocols are used to transfer web pages over the internet.",
    additionalInfo: "HTTP (HyperText Transfer Protocol) is insecure, while HTTPS uses encryption (SSL/TLS) for secure data transmission. Browsers use these protocols to fetch and display websites."
  } ]
    },
    English: {
        english: [
            { 
    question: "Choose the synonym of 'Happy'?", 
    options: ["Joyful", "Sad", "Angry", "Tired"], 
    answer: "Joyful", 
    explanation: "'Happy' means joyful or pleased." 
  },
  { 
    question: "Choose the antonym of 'Generous'?", 
    options: ["Kind", "Selfish", "Benevolent", "Helpful"], 
    answer: "Selfish", 
    explanation: "'Generous' means willing to give; opposite is selfish." 
  },
  { 
    question: "Select the correct sentence:", 
    options: ["She go to school yesterday.", "She went to school yesterday.", "She goes to school yesterday.", "She going to school yesterday."], 
    answer: "She went to school yesterday.", 
    explanation: "Past tense of 'go' is 'went'." 
  },
  { 
    question: "Fill in the blank: I have been living here ____ 2010.", 
    options: ["since", "for", "at", "from"], 
    answer: "since", 
    explanation: "'Since' is used with a specific point in time." 
  },
  { 
    question: "Identify the correctly spelled word:", 
    options: ["Recieve", "Receive", "Recive", "Receeve"], 
    answer: "Receive", 
    explanation: "'Receive' is the correct spelling." 
  },
  { 
    question: "Choose the correct idiom: 'Kick the ____'", 
    options: ["Bucket", "Ball", "Stone", "Box"], 
    answer: "Bucket", 
    explanation: "'Kick the bucket' means to die." 
  },
  { 
    question: "Phrasal verb: 'Give up' means?", 
    options: ["Quit", "Continue", "Take", "Throw"], 
    answer: "Quit", 
    explanation: "'Give up' means to stop doing something." 
  },
  { 
    question: "Vocabulary: Choose the meaning of 'Eloquent':", 
    options: ["Fluent and persuasive", "Silent", "Angry", "Confused"], 
    answer: "Fluent and persuasive", 
    explanation: "'Eloquent' describes clear, expressive, and persuasive speech." 
  },
  { 
    question: "Reading comprehension: 'The cat sat on the mat. It was brown.' What was brown?", 
    options: ["Cat", "Mat", "Both", "None"], 
    answer: "Cat", 
    explanation: "The pronoun 'It' refers to the cat, which was brown." 
  },
  { 
    question: "Tense question: Choose the correct form - 'She ____ a book every week.'", 
    options: ["reads", "read", "is reading", "reading"], 
    answer: "reads", 
    explanation: "For habitual actions, use simple present tense 'reads'." 
  }
        ]
    },
    Health: {
        Health: [
            {
    question: "Which vitamin is produced in the skin upon sunlight exposure?",
    options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
    answer: "Vitamin D",
    explanation: "Vitamin D is synthesized in the skin when exposed to sunlight.",
    additionalInfo: "Vitamin D helps in calcium absorption, bone health, immune function, and may reduce risk of chronic diseases like osteoporosis and certain cancers."
  },
  {
    question: "What nutrient is essential for muscle growth?",
    options: ["Protein", "Carbs", "Fat", "Vitamin C"],
    answer: "Protein",
    explanation: "Proteins are the building blocks for muscle repair and growth.",
    additionalInfo: "Sources include meat, fish, eggs, dairy, legumes, and soy. Adequate protein intake is critical for athletes, bodybuilders, and anyone recovering from injury."
  },
  {
    question: "How many hours of sleep are recommended for adults?",
    options: ["7-9 hours", "5-6 hours", "10-12 hours", "4-5 hours"],
    answer: "7-9 hours",
    explanation: "Adults need 7-9 hours of sleep for optimal health and function.",
    additionalInfo: "Sufficient sleep improves memory, immune function, metabolism, mental health, and reduces the risk of chronic diseases like diabetes and heart disease."
  },
  {
    question: "Which exercise improves cardiovascular health?",
    options: ["Running", "Weight lifting", "Yoga", "Stretching"],
    answer: "Running",
    explanation: "Cardio exercises like running strengthen the heart and lungs.",
    additionalInfo: "Other cardiovascular exercises include swimming, cycling, and brisk walking. Regular cardio lowers blood pressure, improves cholesterol levels, and enhances endurance."
  },
  {
    question: "Which mineral is important for strong bones and teeth?",
    options: ["Calcium", "Iron", "Potassium", "Magnesium"],
    answer: "Calcium",
    explanation: "Calcium is vital for bone density and dental health.",
    additionalInfo: "Sources include dairy products, leafy greens, fortified foods, and supplements. Calcium works with Vitamin D to maintain bone strength and prevent osteoporosis."
  },
  {
    question: "What percentage of the human body is water?",
    options: ["60-70%", "30-40%", "80-90%", "10-20%"],
    answer: "60-70%",
    explanation: "Around two-thirds of the human body is composed of water.",
    additionalInfo: "Water regulates body temperature, aids digestion, removes waste, lubricates joints, and is essential for all cellular processes."
  },
  {
    question: "What type of fat is considered healthy?",
    options: ["Unsaturated fat", "Trans fat", "Saturated fat", "Processed fat"],
    answer: "Unsaturated fat",
    explanation: "Unsaturated fats (from nuts, fish, oils) support heart health.",
    additionalInfo: "They help lower bad cholesterol (LDL) and raise good cholesterol (HDL). Examples include olive oil, avocados, nuts, and fatty fish like salmon."
  },
  {
    question: "Which exercise builds flexibility?",
    options: ["Yoga", "Sprinting", "Cycling", "Bench press"],
    answer: "Yoga",
    explanation: "Yoga enhances flexibility, balance, and reduces stress.",
    additionalInfo: "Regular stretching and yoga prevent injuries, improve posture, reduce muscle soreness, and promote relaxation and mental well-being."
  },
  {
    question: "What is BMI used to measure?",
    options: ["Body fat", "Muscle mass", "Hydration", "Energy"],
    answer: "Body fat",
    explanation: "BMI estimates body fat based on weight and height.",
    additionalInfo: "BMI categories help assess underweight, normal weight, overweight, and obesity, which are linked to risks for diabetes, heart disease, and other health issues."
  },
  {
    question: "Which nutrient provides the most energy per gram?",
    options: ["Fat", "Protein", "Carbohydrates", "Fiber"],
    answer: "Fat",
    explanation: "Fat provides 9 kcal per gram, more than protein or carbs.",
    additionalInfo: "Fats are a concentrated energy source and important for hormone production, brain function, and absorption of fat-soluble vitamins (A, D, E, K)."
  }  ]
    }



};