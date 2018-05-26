
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert(
        [{
          "path": "http://dummyimage.com/219x187.png/cc0000/ffffff",
          "name": "Bear, american black"
        }, {
          "path": "http://dummyimage.com/150x140.png/ff4444/ffffff",
          "name": "Gray langur"
        }, {
          "path": "http://dummyimage.com/203x248.jpg/ff4444/ffffff",
          "name": "Ibis, glossy"
        }, {
          "path": "http://dummyimage.com/133x103.jpg/cc0000/ffffff",
          "name": "Black-throated cardinal"
        }, {
          "path": "http://dummyimage.com/169x126.bmp/cc0000/ffffff",
          "name": "African ground squirrel (unidentified)"
        }, {
          "path": "http://dummyimage.com/143x118.jpg/dddddd/000000",
          "name": "Ring-tailed possum"
        }, {
          "path": "http://dummyimage.com/182x232.jpg/ff4444/ffffff",
          "name": "Squirrel, smith's bush"
        }, {
          "path": "http://dummyimage.com/169x210.bmp/5fa2dd/ffffff",
          "name": "Sheep, stone"
        }, {
          "path": "http://dummyimage.com/149x100.png/ff4444/ffffff",
          "name": "North American red fox"
        }, {
          "path": "http://dummyimage.com/158x168.jpg/ff4444/ffffff",
          "name": "Frog (unidentified)"
        }, {
          "path": "http://dummyimage.com/158x187.bmp/5fa2dd/ffffff",
          "name": "Dama wallaby"
        }, {
          "path": "http://dummyimage.com/106x198.bmp/dddddd/000000",
          "name": "Deer, spotted"
        }, {
          "path": "http://dummyimage.com/110x105.bmp/dddddd/000000",
          "name": "Black-crowned night heron"
        }, {
          "path": "http://dummyimage.com/245x198.png/ff4444/ffffff",
          "name": "Common shelduck"
        }, {
          "path": "http://dummyimage.com/142x122.bmp/dddddd/000000",
          "name": "Andean goose"
        }, {
          "path": "http://dummyimage.com/180x132.png/5fa2dd/ffffff",
          "name": "Baboon, yellow"
        }, {
          "path": "http://dummyimage.com/163x216.jpg/cc0000/ffffff",
          "name": "Cobra, egyptian"
        }, {
          "path": "http://dummyimage.com/231x163.bmp/cc0000/ffffff",
          "name": "Tortoise, galapagos"
        }, {
          "path": "http://dummyimage.com/239x180.png/5fa2dd/ffffff",
          "name": "Kori bustard"
        }, {
          "path": "http://dummyimage.com/208x219.jpg/cc0000/ffffff",
          "name": "Four-horned antelope"
        }, {
          "path": "http://dummyimage.com/214x169.bmp/5fa2dd/ffffff",
          "name": "Cobra, cape"
        }, {
          "path": "http://dummyimage.com/214x245.jpg/ff4444/ffffff",
          "name": "Barbet, levaillant's"
        }, {
          "path": "http://dummyimage.com/209x204.bmp/5fa2dd/ffffff",
          "name": "Rattlesnake, dusky"
        }, {
          "path": "http://dummyimage.com/125x152.bmp/5fa2dd/ffffff",
          "name": "Black-eyed bulbul"
        }, {
          "path": "http://dummyimage.com/171x134.png/ff4444/ffffff",
          "name": "Snake, green vine"
        }, {
          "path": "http://dummyimage.com/168x214.bmp/dddddd/000000",
          "name": "Seal, southern elephant"
        }, {
          "path": "http://dummyimage.com/182x199.jpg/cc0000/ffffff",
          "name": "Egret, cattle"
        }, {
          "path": "http://dummyimage.com/170x228.bmp/dddddd/000000",
          "name": "Cormorant, flightless"
        }, {
          "path": "http://dummyimage.com/226x188.png/cc0000/ffffff",
          "name": "Egret, cattle"
        }, {
          "path": "http://dummyimage.com/250x209.png/cc0000/ffffff",
          "name": "Long-tailed skua"
        }, {
          "path": "http://dummyimage.com/132x157.bmp/5fa2dd/ffffff",
          "name": "Northern phalarope"
        }, {
          "path": "http://dummyimage.com/206x207.jpg/ff4444/ffffff",
          "name": "African ground squirrel (unidentified)"
        }, {
          "path": "http://dummyimage.com/115x116.png/dddddd/000000",
          "name": "Defassa waterbuck"
        }, {
          "path": "http://dummyimage.com/165x180.jpg/ff4444/ffffff",
          "name": "Little cormorant"
        }, {
          "path": "http://dummyimage.com/231x228.bmp/cc0000/ffffff",
          "name": "Tayra"
        }, {
          "path": "http://dummyimage.com/219x243.jpg/cc0000/ffffff",
          "name": "Mockingbird, galapagos"
        }, {
          "path": "http://dummyimage.com/114x247.bmp/dddddd/000000",
          "name": "Griffon vulture"
        }, {
          "path": "http://dummyimage.com/186x237.jpg/5fa2dd/ffffff",
          "name": "Swainson's francolin"
        }, {
          "path": "http://dummyimage.com/102x147.jpg/5fa2dd/ffffff",
          "name": "Hawk-eagle, crowned"
        }, {
          "path": "http://dummyimage.com/179x235.png/ff4444/ffffff",
          "name": "Lesser flamingo"
        }, {
          "path": "http://dummyimage.com/156x221.jpg/5fa2dd/ffffff",
          "name": "Langur, hanuman"
        }, {
          "path": "http://dummyimage.com/114x174.bmp/ff4444/ffffff",
          "name": "Painted stork"
        }, {
          "path": "http://dummyimage.com/143x172.bmp/dddddd/000000",
          "name": "Indian star tortoise"
        }, {
          "path": "http://dummyimage.com/196x192.jpg/cc0000/ffffff",
          "name": "Eastern cottontail rabbit"
        }, {
          "path": "http://dummyimage.com/157x179.bmp/ff4444/ffffff",
          "name": "Savannah deer (unidentified)"
        }, {
          "path": "http://dummyimage.com/165x215.png/dddddd/000000",
          "name": "Common waterbuck"
        }, {
          "path": "http://dummyimage.com/194x100.png/5fa2dd/ffffff",
          "name": "Fairy penguin"
        }, {
          "path": "http://dummyimage.com/127x123.bmp/5fa2dd/ffffff",
          "name": "Dragon, netted rock"
        }, {
          "path": "http://dummyimage.com/172x162.png/ff4444/ffffff",
          "name": "Two-toed sloth"
        }, {
          "path": "http://dummyimage.com/112x226.bmp/5fa2dd/ffffff",
          "name": "Sheep, american bighorn"
        }, {
          "path": "http://dummyimage.com/127x232.bmp/ff4444/ffffff",
          "name": "Eastern quoll"
        }, {
          "path": "http://dummyimage.com/142x175.jpg/5fa2dd/ffffff",
          "name": "Gull, pacific"
        }, {
          "path": "http://dummyimage.com/187x243.bmp/dddddd/000000",
          "name": "Gull, lava"
        }, {
          "path": "http://dummyimage.com/172x216.jpg/cc0000/ffffff",
          "name": "Ant (unidentified)"
        }, {
          "path": "http://dummyimage.com/131x155.png/ff4444/ffffff",
          "name": "Sacred ibis"
        }, {
          "path": "http://dummyimage.com/122x242.bmp/5fa2dd/ffffff",
          "name": "Phalarope, grey"
        }, {
          "path": "http://dummyimage.com/204x232.jpg/5fa2dd/ffffff",
          "name": "Phalarope, northern"
        }, {
          "path": "http://dummyimage.com/203x248.png/cc0000/ffffff",
          "name": "Fox, crab-eating"
        }, {
          "path": "http://dummyimage.com/245x209.bmp/ff4444/ffffff",
          "name": "Lesser flamingo"
        }, {
          "path": "http://dummyimage.com/245x129.jpg/cc0000/ffffff",
          "name": "Magistrate black colobus"
        }, {
          "path": "http://dummyimage.com/105x186.jpg/5fa2dd/ffffff",
          "name": "European red squirrel"
        }, {
          "path": "http://dummyimage.com/242x176.png/dddddd/000000",
          "name": "Cat, kaffir"
        }, {
          "path": "http://dummyimage.com/197x212.bmp/cc0000/ffffff",
          "name": "Hawk-eagle, crowned"
        }, {
          "path": "http://dummyimage.com/207x182.bmp/5fa2dd/ffffff",
          "name": "Azara's zorro"
        }, {
          "path": "http://dummyimage.com/113x173.jpg/5fa2dd/ffffff",
          "name": "Red-capped cardinal"
        }, {
          "path": "http://dummyimage.com/195x175.bmp/ff4444/ffffff",
          "name": "Penguin, magellanic"
        }, {
          "path": "http://dummyimage.com/127x204.png/dddddd/000000",
          "name": "Common goldeneye"
        }, {
          "path": "http://dummyimage.com/132x228.png/cc0000/ffffff",
          "name": "Crested screamer"
        }, {
          "path": "http://dummyimage.com/106x232.png/dddddd/000000",
          "name": "Four-spotted skimmer"
        }, {
          "path": "http://dummyimage.com/243x121.png/cc0000/ffffff",
          "name": "Stork, painted"
        }, {
          "path": "http://dummyimage.com/170x119.bmp/5fa2dd/ffffff",
          "name": "Sportive lemur"
        }, {
          "path": "http://dummyimage.com/190x104.bmp/ff4444/ffffff",
          "name": "Vulture, griffon"
        }, {
          "path": "http://dummyimage.com/232x102.bmp/cc0000/ffffff",
          "name": "Square-lipped rhinoceros"
        }, {
          "path": "http://dummyimage.com/106x110.png/5fa2dd/ffffff",
          "name": "Grenadier, purple"
        }, {
          "path": "http://dummyimage.com/123x221.jpg/5fa2dd/ffffff",
          "name": "Bateleur eagle"
        }, {
          "path": "http://dummyimage.com/202x109.png/5fa2dd/ffffff",
          "name": "Collared lizard"
        }, {
          "path": "http://dummyimage.com/145x192.png/ff4444/ffffff",
          "name": "Bleu, red-cheeked cordon"
        }, {
          "path": "http://dummyimage.com/113x241.png/dddddd/000000",
          "name": "Black-faced kangaroo"
        }, {
          "path": "http://dummyimage.com/169x204.jpg/dddddd/000000",
          "name": "Black-capped chickadee"
        }, {
          "path": "http://dummyimage.com/245x145.png/ff4444/ffffff",
          "name": "Red and blue macaw"
        }, {
          "path": "http://dummyimage.com/129x133.bmp/cc0000/ffffff",
          "name": "American marten"
        }, {
          "path": "http://dummyimage.com/153x210.bmp/cc0000/ffffff",
          "name": "Egyptian viper"
        }, {
          "path": "http://dummyimage.com/240x131.bmp/ff4444/ffffff",
          "name": "Sungazer, yellow-brown"
        }, {
          "path": "http://dummyimage.com/137x190.jpg/cc0000/ffffff",
          "name": "Kingfisher, malachite"
        }, {
          "path": "http://dummyimage.com/185x199.png/ff4444/ffffff",
          "name": "Macaw, blue and yellow"
        }, {
          "path": "http://dummyimage.com/231x143.jpg/dddddd/000000",
          "name": "Cormorant, flightless"
        }, {
          "path": "http://dummyimage.com/212x113.jpg/ff4444/ffffff",
          "name": "Stone sheep"
        }, {
          "path": "http://dummyimage.com/156x164.bmp/ff4444/ffffff",
          "name": "Bent-toed gecko"
        }, {
          "path": "http://dummyimage.com/124x144.jpg/5fa2dd/ffffff",
          "name": "Striped dolphin"
        }, {
          "path": "http://dummyimage.com/205x118.png/cc0000/ffffff",
          "name": "Chuckwalla"
        }, {
          "path": "http://dummyimage.com/171x192.jpg/5fa2dd/ffffff",
          "name": "Australian sea lion"
        }, {
          "path": "http://dummyimage.com/127x200.bmp/ff4444/ffffff",
          "name": "Western spotted skunk"
        }, {
          "path": "http://dummyimage.com/223x211.png/ff4444/ffffff",
          "name": "Heron, gray"
        }, {
          "path": "http://dummyimage.com/152x172.bmp/cc0000/ffffff",
          "name": "Heron, boat-billed"
        }, {
          "path": "http://dummyimage.com/136x240.bmp/dddddd/000000",
          "name": "Sandgrouse, yellow-throated"
        }, {
          "path": "http://dummyimage.com/140x172.jpg/ff4444/ffffff",
          "name": "Field flicker"
        }, {
          "path": "http://dummyimage.com/200x234.bmp/5fa2dd/ffffff",
          "name": "Baboon, yellow"
        }, {
          "path": "http://dummyimage.com/123x207.bmp/ff4444/ffffff",
          "name": "Crimson-breasted shrike"
        }, {
          "path": "http://dummyimage.com/231x143.jpg/5fa2dd/ffffff",
          "name": "Gull, swallow-tail"
        }, {
          "path": "http://dummyimage.com/243x187.png/5fa2dd/ffffff",
          "name": "Square-lipped rhinoceros"
        }]
      );
    });
};
