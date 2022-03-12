const italyImage = "https://i.imgur.com/mFzKAKw.png";
const austriaImage = "https://i.imgur.com/zXtzdUD.png";
const franceImage = "https://i.imgur.com/M80R6eQ.png";
const spainImage = "https://i.imgur.com/DDWqFKh.png";
const sloveniaImage = "https://i.imgur.com/4EwrZu0.png";
const usImage = "https://i.imgur.com/kS1PTUa.png";
const georgiaImage = "https://i.imgur.com/aFwDsFw.png";
const portugalImage = "https://i.imgur.com/oH6Z5RY.png";
const germanyImage = "https://i.imgur.com/EtjYHs2.png";
const greeceImage = "https://i.imgur.com/zd1Lh0r.png";
const argentinaImage = "https://i.imgur.com/hXl2IFk.png";
const mexicoImage = "https://i.imgur.com/pKmA7A2.png";

const wines = [
  {
    _id: "0",
    producer: "Biokult",
    name: "Naken",
    type: "Sparkling ",
    country: "Austria ",
    flag: austriaImage,
    review:
      "Grape bubblegum, grapefruit, orange peel, a bit sour, slightly creamy, bubbly, well balanced, super slammable. ",
    score: "4.5/5",
  },
  {
    _id: "1",
    producer: "Domaine La Bohème",
    name: "Festejar!",
    type: "Sparkling",
    country: "France ",
    flag: franceImage,
    review:
      "For the Bouju Boys (and babes and others). Light and bubbly, yeasty, round in the mouth with targeted sweetness, rose water aftertaste, strawberry shortcake with lemon zest. ",
    score: "4.5/5",
  },
  {
    _id: "2",
    producer: "Demarie",
    name: "Luigi",
    type: "Pét-Nat ",
    country: "Italy ",
    flag: italyImage,
    review:
      "Strong smell on this, funky, dry, mouth feel is kind of creamy, some citrus notes, think strawberry french toast with whipped cream, refreshing fizz. ",
    score: "4/5",
  },
  {
    _id: "3",
    producer: "Podere Pradarolo",
    name: "Vej",
    type: "Orange ",
    country: "Italy ",
    flag: italyImage,
    review:
      "Orange, lemon, apricot, pear, elderflower, slight blueberry undertones, honey, straw, super dry, amazing. ",
    score: "5/5",
  },
  {
    _id: "4",
    producer: "Quo",
    name: "Gastiago Garnacha",
    type: "Red ",
    country: "Spain",
    flag: spainImage,
    review:
      "Dark fruit, cherry, Twizzlers, some oak and smoke, dry, heavy hitter at 14.5% ",
    score: "4/5",
  },
  {
    _id: "5",
    producer: "Gönc",
    name: "Canvas Pét-Nat",
    type: "Pét-Nat ",
    country: "Slovenia",
    flag: sloveniaImage,
    review: "Lemon heavy, sour, fresh, and ULTRA fizzy.",
    score: "4/5",
  },
  {
    _id: "6",
    producer: "Gönc",
    name: "Canvas Rose Pét-Nat",
    type: "Pét-Nat ",
    country: "Slovenia",
    flag: sloveniaImage,
    review: "Sour strawberries, light and refreshing.",
    score: "4/5",
  },
  {
    _id: "7",
    producer: "Gönc",
    name: "Yellow Muscat",
    type: "White ",
    country: "Slovenia",
    flag: sloveniaImage,
    review:
      "Apricot, peach, pear, crisp and refreshing, some cream cheese at the end, some sweetness, fruit forward, but dry. Would kill on a hot summer day.",
    score: "4/5",
  },
  {
    _id: "8",
    producer: "Partida Creus",
    name: "Xarel-Lo",
    type: "White ",
    country: "Spain",
    flag: spainImage,
    review:
      "Mustard, sea salt, vegetal notes, very thin but active layer of citrus on top, hints of green apple and pear, round and smooth up front with a targeted finish, all that Xarel-Lo FUNK.",
    score: "4/5",
  },
  {
    _id: "9",
    producer: "Partida Creus",
    name: "Ancestral Xarel-Lo",
    type: "Sparkling ",
    country: "Spain",
    flag: spainImage,
    review:
      "Classic vegetal funk up front. Celery salt? Salt and vinegar chips? Dill pickle? Incense? Citrus still cutting through. Bubbles.",
    score: "4.5/5",
  },
  {
    _id: "10",
    producer: "Partida Creus",
    name: "Vinel-Lo",
    type: "Orange ",
    country: "Spain",
    flag: spainImage,
    review:
      "Punchy and delicious. Blueberry and wildflowers? Massimo and Antonella are absolute legends.",
    score: "5/5",
  },
  {
    _id: "11",
    producer: "Can Sumoi",
    name: "Ancestral Sumoll",
    type: "Sparkling ",
    country: "Spain",
    flag: spainImage,
    review:
      "Light, bright, dry, yeasty, almost toasty, tree fruit, straw, maybe a hint of red fruit, gentle bubbles, overall could probably be more impactful, highly drinkable.",
    score: "4/5",
  },
  {
    _id: "12",
    producer: "Old Westminster",
    name: "Take it Easy",
    type: "Rosé ",
    country: "USA",
    flag: usImage,
    review:
      "Watermelon candy, strawberry, cherry, grapefruit, golden hour, pink skies, very tart, berry fun.",
    score: "4/5",
  },
  {
    _id: "13",
    producer: "Old Westminster",
    name: "Blinded by the Light",
    type: "White ",
    country: "USA",
    flag: usImage,
    review:
      "Lots of citrus, high acidity, suagared lemons, ginger ale, pineapple, not as zippy as you might expect though. Light body.",
    score: "3.5/5",
  },
  {
    _id: "14",
    producer: "Weingut Carl Ehrhard",
    name: "Frau Ehrhard Natürlich",
    type: "White ",
    country: "Germany",
    flag: germanyImage,
    review:
      "Skin contact riesling. Straw, lemongrass, rubber erasers, baked apple, toasted nuts, citrus zest, almost banana at moments? I’ve heard pencil shavings and bandaids too, all fair.",
    score: "4/5",
  },
  {
    _id: "15",
    producer: "Field Recordings",
    name: "Fiction Red",
    type: "Red ",
    country: "USA",
    flag: usImage,
    review:
      "Dark fruit, oak, leather, campfire, fig, raisin, spicy, sticky, and very dry.",
    score: "3.5/5",
  },
  {
    _id: "16",
    producer: "Il Farneto",
    name: "God Save the Wine",
    type: "Sparkling ",
    country: "italy",
    flag: italyImage,
    review:
      "Funky apricot, orange, hints of tropical fruit, traditional pet-nat notes are present but secondary to a lot of tartness and acidity, very interesting, decently chuggable.",
    score: "4/5",
  },
  {
    _id: "17",
    producer: "Demarie",
    name: "Sabbia",
    type: "Orange ",
    country: "Italy",
    flag: italyImage,
    review:
      "Orange, honey, copper, kinda nutty, dry, funky, vegetal notes, some cheese, very layered and well balanced.",
    score: "4/5",
  },
  {
    _id: "18",
    producer: "Cantina Giardino",
    name: "Na Bianco",
    type: "Orange",
    country: "Italy",
    flag: italyImage,
    review:
      "Mango and assorted tropical fruit, apple, melon, chestnut, sweet and sour, overall pleasant.",
    score: "4/5",
  },
  {
    _id: "19",
    producer: "Subject to Change",
    name: "Sleepless Nights",
    type: "Red",
    country: "USA",
    flag: usImage,
    review:
      "Cranberry heavy, hints of pomegranate, mushroom, lemon zest, granny smith, and saline. Earthy and juicy.",
    score: "4/5",
  },
  {
    _id: "20",
    producer: "Subject to Change",
    name: "Wild Child",
    type: "Red",
    country: "USA",
    flag: usImage,
    review:
      "Red fruit, light body, bright, suppeerrrr dry, hints of a baseball glove from the shed.",
    score: "4.5/5",
  },
  {
    _id: "21",
    producer: "Martha Stoumen",
    name: "Post Flirtation Red",
    type: "Red",
    country: "USA",
    flag: usImage,
    review:
      "Red fruit forward, pomegranate, orange peel, some black fruit jam, black pepper, slightly figgy, comfortably dry, juicy and joyous when chilled.",
    score: "4/5",
  },
  {
    _id: "22",
    producer: "Subject to Change",
    name: "Unsung Hero",
    type: "Orange",
    country: "USA",
    flag: usImage,
    review:
      "Citrus fruit, tropical fruit, a hint of strawberry, bright and floral, crisp and dry.",
    score: "5/5",
  },
  {
    _id: "23",
    producer: "Franchere",
    name: "For Heaven’s Sake, Don’t Move Here",
    type: "Orange",
    country: "USA",
    flag: usImage,
    review:
      "Red berries, hints of grapefruit, herbs, salt and pepper, somewhat tart, medium body, medium funk, very dry, very good.",
    score: "4.5/5",
  },
  {
    _id: "24",
    producer: "Podere Pradarolo",
    name: "Ex Alba Bianco Macerato",
    type: "Orange",
    country: "Italy",
    flag: italyImage,
    review:
      "Orange, honey, apricot, saline, ginger, hay, some guava juice, tomato soup??? Soooooo pleasant.",
    score: "4.5/5",
  },
  {
    _id: "25",
    producer: "Tenuta S. Lucia",
    name: "Orange Crest",
    type: "Sparkling",
    country: "Italy",
    flag: italyImage,
    review:
      "Saturday morning mimosa, strawberry toast, orange, super effervescent.",
    score: "4/5",
  },
  {
    _id: "26",
    producer: "Clos Lentiscus",
    name: "Litrona Sumoll",
    type: "Red",
    country: "Spain",
    flag: spainImage,
    review:
      "Barnyard on the nose, tart berries but plenty dry, big tannins, sticky mouth feel, dusty books.",
    score: "4/5",
  },
  {
    _id: "27",
    producer: "Albamar",
    name: "Litrona Albariño",
    type: "White",
    country: "Spain",
    flag: spainImage,
    review:
      "Pear and green apple, lemon squeezed on top, limestone, slightly metallic, funky enough to be interesting, very acidic all the way through with a short finish. Requires you to take another sip.",
    score: "4/5",
  },
  {
    _id: "28",
    producer: "Partida Creus",
    name: "Ull de Llebre",
    type: "Red",
    country: "Spain",
    flag: spainImage,
    review:
      "Very nice Earthy, almost nutty tone to this. Balanced with some bitterness. Not too sweet. Some fruit somewhere. Good feeling on the back molars when sipping. Would drink again.",
    score: "4/5",
  },
  {
    _id: "29",
    producer: "Oro di Diamanti",
    name: "Vines Sum",
    type: "Pét-Nat",
    country: "Italy",
    flag: italyImage,
    review:
      "Extremely airy, light, bubbly, citrus acidity, melon, toasty, a hollow sourdough crust, light beer and grapefruit juice, exactly what I want in a pét-nat.",
    score: "4.5/5",
  },
  {
    _id: "30",
    producer: "Day Wines",
    name: "Lemonade Rosé",
    type: "Rosé",
    country: "USA",
    flag: usImage,
    review:
      "100% pinot noir that survived the wildfires but lots of smoke in the air meant fermentation on the skins wouldn’t be great. The result is this easy drinker. Literal lemonade rosé, exactly what you would imagine!",
    score: "4/5",
  },
  {
    _id: "31",
    producer: "Dila-O",
    name: "Rkatsiteli",
    type: "Orange",
    country: "Georgia",
    flag: georgiaImage,
    review:
      "A smooth amber wine with some citrus tang on the tongue. You can really taste the clay pots used in vinification along with notes of white pepper, ginger, raisins, apricot, and slate. FLoral. Notes of birch bark and cedar driftwood. Dry finsih.",
    score: "4/5",
  },
  {
    _id: "32",
    producer: "Can Sumoi",
    name: "Xarel-Lo",
    type: "White",
    country: "Spain",
    flag: spainImage,
    review:
      "Butterscotch, caramel apple, funky but still easy to drink, tree fruit, some minerals, a tad smoky if you really reach for it. ",
    score: "4.5/5",
  },
  {
    _id: "33",
    producer: "Can Sumoi",
    name: "Sumoll-Garnatxa",
    type: "Red",
    country: "Spain",
    flag: spainImage,
    review:
      "Red fruit forward, silky smooth, very balanced, Earthy, hints of oak and vanilla.",
    score: "4/5",
  },
  {
    _id: "34",
    producer: "Can Sumoi",
    name: "La Rosa",
    type: "Rosé",
    country: "Spain",
    flag: spainImage,
    review:
      "Strawberry, raspberry, tree fruit undertones, slightly musky finish, very refreshing.",
    score: "4/5",
  },
  {
    _id: "35",
    producer: "Day Wines",
    name: "Vin de Days l’Orange",
    type: "Orange",
    country: "USA",
    flag: usImage,
    review:
      "Citrus fruit balanced with vegetal funk (exactly what I want in an orange), not sweet (thank you), dry, mineral, crisp when cold. Kind of briny. Think sea salt, spring air, Pacific Northwest. The downside is that this got softer, clumsier, and overly tart as it warmed up.",
    score: "4/5",
  },
  {
    _id: "36",
    producer: "Justin Dutraive",
    name: "Pét-Nat",
    type: "Pét-Nat",
    country: "France",
    flag: franceImage,
    review:
      "Strawberry, banana, maybe even Challah French Toast topped with strawberries and bananas, the various jams at iHop, fruit scented dolls that have been in the basement a long time (please tell me someone else knows about these), yogurt parfait with oats and granola. ",
    score: "4.5/5",
  },
  {
    _id: "37",
    producer: "JPassionate Via Revolucionaria",
    name: "Torrontes Brutal",
    type: "Orange",
    country: "Argentina",
    flag: argentinaImage,
    review:
      "Licking lime juice and salt off a rock. Slurping a puddle of apple juice off a rock. ",
    score: "4/5",
  },
  {
    _id: "38",
    producer: "Domaine La Bohème",
    name: "Super B",
    type: "Red",
    country: "France",
    flag: franceImage,
    review:
      "Smoked Thanksgiving cranberries. Earthy and rich, but also surprisingly slammable. Fruity enough. Very good. ",
    score: "4.5/5",
  },
  {
    _id: "39",
    producer: "Aphros",
    name: "Phaunus Pét-Nat Rosé ",
    type: "Pét-Nat",
    country: "Portugal",
    flag: portugalImage,
    review:
      "Bright and fresh and delicious. Straberry and bris crostini in the summer. Tree fruit. Big bubbles. ",
    score: "4.5/5",
  },
  {
    _id: "40",
    producer: "Aphros",
    name: "Phaunus Pét-Nat",
    type: "Pét-Nat",
    country: "Portugal",
    flag: portugalImage,
    review: "Tree fruit forward, citrus fruit peaks, minerals, yeast. ",
    score: "4.5/5",
  },
  {
    _id: "41",
    producer: "Aphros",
    name: "Phaunus Loureiro",
    type: "Orange",
    country: "Portugal",
    flag: portugalImage,
    review:
      "Orange, lemon juice, has kind of a sweet and sour thing going on, floral, Earthy, smooth finish. ",
    score: "4/5",
  },
  {
    _id: "42",
    producer: "Bichi",
    name: "La Santa",
    type: "Red",
    country: "Mexico",
    flag: mexicoImage,
    review:
      "Extremely funky, barnyardy, smoke, soil, charred red meat, toasted walnuts, harsh finsih. ",
    score: "2.5/5",
  },
  {
    _id: "43",
    producer: "Ktima Ligas",
    name: "Pella Rosé",
    type: "Rosé",
    country: "Greece",
    flag: greeceImage,
    review:
      "Much fuller than other rosés, layers of flavor ranging from raspberry to tomato to slate, spicy and floral notes, some qualities reminiscent of herbal tea, finish has a strong presence, gets better with every glass.",
    score: "4.5/5",
  },
];

export function getWines() {
  return wines;
}

export function getWine(id) {
  return wines.find((w) => w._id === id);
}
