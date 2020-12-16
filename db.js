const Sequelize = require ("sequelize");
const {STRING, TEXT} = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db');

const Cities = conn.define("city",{
  name: STRING,
  about: TEXT,
  imgsrc: TEXT
});


const syncAndSeed = async () => {
  await conn.sync({force: true});
  await Cities.create({
    name: "London",
    about: "Immersed in history, London's rich seams of eye-opening antiquity are everywhere. The city's buildings are striking milestones in a unique and beguiling biography, and a great many of them – the Tower of London, Westminster Abbey, Big Ben – are instantly recognisable landmarks. There’s more than enough innovation (the Shard, the Tate Modern extension, the Sky Garden) to put a crackle in the air, but it never drowns out London’s seasoned, centuries-old narrative. Architectural grandeur rises up all around you in the West End, ancient remains dot the City and charming pubs punctuate the historic quarters, leafy suburbs and river banks. Take your pick. Source: Lonely Planet.",
    imgsrc: "public/london.jpg"
  });

  await Cities.create({
    name: "Shanghai",
    about: "Shanghai is home to the world's second-tallest tower and a host of other neck-craning colossi. But it's not all sky-scraping razzmatazz. Beyond the crisply cool veneer of the modern city typified by Pudong, you can encounter copious architectural styles. The city's period of greatest cosmopolitan excess – the 1920s and 1930s – left the city with splendid examples of art deco buildings, most of which survived the vicissitudes of the 20th century. And there's more: from Jesuit cathedrals, Jewish synagogues and Buddhist temples to home-grown lòngtáng (laneway) and shíkùmén (stone gate) housing, Shanghai’s diverse architectural heritage is like no other city's on earth. Source: Lonely Planet.",
    imgsrc: "public/shanghai.jpg"
  });

  await Cities.create({
    name: "Prague",
    about: "The 1989 Velvet Revolution that freed the Czechs from communism bequeathed to Europe a gem of a city to stand beside stalwarts such as Rome, Paris and London. Not surprisingly, visitors from around the world have come in droves, and on a hot summer's day it can feel like you’re sharing Charles Bridge with half of humanity. But even the crowds can’t take away from the spectacle of a 14th-century stone bridge, a hilltop castle and a lovely, lazy river – the Vltava – that inspired one of the most hauntingly beautiful pieces of 19th-century classical music, Smetana’s Moldau symphony. Source: Lonely Planet.",
    imgsrc: "public/prague.jpg"
  });
};



module.exports = {
  models: {
    Cities
  },
  syncAndSeed
}


