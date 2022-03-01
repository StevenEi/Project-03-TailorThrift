const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Shirts' },
    { name: 'Slacks' },
    { name: 'Blazer' },
    { name: 'Tie' },
    { name: 'Accessories' },
    { name: 'Measurement Kit' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'shirt',
      description:
        'Light blue dress shirt',
      image: 'https://s7.landsend.com/is/image/LandsEnd/453157_CT15_LF_BLU?$210x315$',
      category: categories[0]._id,
      price: 10.00,
      size: 'large',
      quantity: 5
    },
    {
      name: 'slacks',
      description:
        'Black slacks',
      image: 'https://bonobos-prod-s3.imgix.net/products/227408/original/PANT_DRESS-PANT_BWB00288SBLR45_3.jpg?1644738352=&auto=format&fit=clip&cs=srgb&w=414&q=75',
      category: categories[1]._id,
      price: 20.00,
      size: 'large',
      quantity: 5
    },
    {
      name: 'blazer',
      category: categories[2]._id,
      description:
        'Black blazer',
      image: 'https://bonobos-prod-s3.imgix.net/products/227706/original/BLAZER_CASUAL-BLAZER_BBZ00351SBK394_40_outfitter.jpg?1645170744=&auto=format&fit=clip&cs=srgb&w=414&q=75',
      price: 50.00,
      size: 'large',
      quantity: 5
    },
    {
      name: 'tie',
      category: categories[3]._id,
      description:
        'striped tie',
      image: 'https://www.rlmedia.io/is/image/PoloGSI/s7-1356630_alternate1?$rl_df_pdp_5_7$',
      price: 10.00,
      size: 'large',
      quantity: 5
    },
    {
      name: 'accessories',
      category: categories[4]._id,
      description:
        'hankerchief',
      image: 'https://image.menswearhouse.com/is/image/TMW/MW40_88PD_01_PRONTO_UOMO_MARINE_SET?$40MainPDP$',
      price: 5.00,
      size: 'accessory',
      quantity: 10
    },
    {
      name: 'measurement kit',
      category: categories[5]._id,
      description:
        'measurement kit mens',
      image: 'https://m.media-amazon.com/images/I/61vysAVtFBL._AC_SL1406_.jpg',
      price: 5.00,
      size: 'accessory',
      quantity: 5
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    chest: '25',
    arms: '30',
    waist: '25',
    inseam: '35',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    chest: '25',
    arms: '30',
    waist: '25',
    inseam: '35',
  });

  console.log('users seeded');

  process.exit();
});