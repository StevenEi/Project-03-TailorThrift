const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Shirts' },
    { name: 'Sweaters'},
    { name: 'Pants' },
    { name: 'Blazer' },
    { name: 'Shoes' },
    { name: 'Tie' },
    { name: 'Accessories' },
    { name: 'Measurement Kit' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
        name: 'Shirt',
        description:
          'Black Polo Shirt',
        image: "./images/Tops/BlackPoloShirt.png",
        category: categories[0]._id,
        price: 15.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Shirt',
        description:
          'Black Solid Shirt',
        image: "./images/Tops/BlackSolidShirt.png",
        category: categories[0]._id,
        price: 15.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Shirt',
        description:
          'Black Spotted Shirt',
        image: "./images/Tops/BlackSpotShirt.png",
        category: categories[0]._id,
        price: 15.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Shirt',
        description:
          'Blue Gingham Shirt',
        image: "./images/Tops/BlueGinghamShirt.png",
        category: categories[0]._id,
        price: 15.00,
        size: 'large',
        quantity: 4
      },
      {
        name: 'Shirt',
        description:
          'Blue Plaid Shirt',
        image: "./images/Tops/BluePlaidShirt.png",
        category: categories[0]._id,
        price: 15.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Shirt',
        description:
          'Blue Polo Shirt',
        image: "./images/Tops/BluePoloShirt.png",
        category: categories[0]._id,
        price: 15.00,
        size: 'large',
        quantity: 3
      },
      {
        name: 'Shirt',
        description:
          'Blue Solid Shirt',
        image: "./images/Tops/BlueSolidShirt.png",
        category: categories[0]._id,
        price: 15.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Shirt',
        description:
          'Green Blue Plaid Shirt',
        image: "./images/Tops/GreenBluePlaidShirt.png",
        category: categories[0]._id,
        price: 15.00,
        size: 'large',
        quantity: 2
      },
      {
        name: 'Sweater',
        description:
          'Beige Sweater',
        image: "./images/Tops/BeigeSweater.png",
        category: categories[1]._id,
        price: 25.00,
        size: 'large',
        quantity: 3
      },
      {
        name: 'Sweater',
        description:
          'Black Sweater',
        image: "./images/Tops/BlackSweater.png",
        category: categories[1]._id,
        price: 25.00,
        size: 'large',
        quantity: 2
      },
      {
        name: 'Sweater',
        description:
          'Blue Sweather',
        image: "./images/Tops/BlueSweater.png",
        category: categories[1]._id,
        price: 25.00,
        size: 'large',
        quantity: 2
      },
    {
      name: 'Pants',
      description:
        'Navy Pants',
      image: './images/Bottoms/NavyPants.png',
      category: categories[2]._id,
      price: 20.00,
      size: 'large',
      quantity: 5
    },
    {
        name: 'Pants',
        description:
          'Medium Denim Pants',
        image: './images/Bottoms/MediumDenimPants.png',
        category: categories[2]._id,
        price: 20.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Pants',
        description:
          'Khaki Pants',
        image: './images/Bottoms/KhakiPants.png',
        category: categories[2]._id,
        price: 20.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Pants',
        description:
          'Grey Pattern Pants',
        image: './images/Bottoms/GreyPatternPants.png',
        category: categories[2]._id,
        price: 20.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Pants',
        description:
          'Grey Pants',
        image: './images/Bottoms/GreyPants.png',
        category: categories[2]._id,
        price: 20.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Pants',
        description:
          'Dark Grey Pants',
        image: './images/Bottoms/DarkGreyPants.png',
        category: categories[2]._id,
        price: 20.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Pants',
        description:
          'Dark Denim Pants',
        image: './images/Bottoms/DarkDenimPants.png',
        category: categories[2]._id,
        price: 20.00,
        size: 'large',
        quantity: 5
      },
    {
      name: 'Blazer',
      category: categories[3]._id,
      description:
        'Black blazer',
      image: './images/Tops/Blazer.jpg',
      price: 50.00,
      size: 'large',
      quantity: 5
    },
    {
        name: 'Shoes',
        category: categories[4]._id,
        description:
          'Black Shoes',
        image: './images/Accessories/BlackShoes.png',
        price: 35.00,
        size: '10',
        quantity: 3
      },
      {
        name: 'Shoes',
        category: categories[4]._id,
        description:
          'Brown Shoes',
        image: './images/Accessories/BrownShoes.png',
        price: 35.00,
        size: '10',
        quantity: 3
      },
      {
        name: 'Shoes',
        category: categories[4]._id,
        description:
          'Grey Shoes',
        image: './images/Accessories/GreyShoes.png',
        price: 35.00,
        size: '10',
        quantity: 3
      },
      {
        name: 'Shoes',
        category: categories[4]._id,
        description:
          'Tan Shoes',
        image: './images/Accessories/TanShoes.png',
        price: 35.00,
        size: '10',
        quantity: 3
      },
    {
      name: 'Tie',
      category: categories[5]._id,
      description:
        'Black & Red Tie',
      image: './images/Accessories/BlackRedTie.png',
      price: 10.00,
      size: 'large',
      quantity: 5
    },
    {
        name: 'Tie',
        category: categories[5]._id,
        description:
          'Brown Tie',
        image: './images/Accessories/BrownTie.png',
        price: 10.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Tie',
        category: categories[5]._id,
        description:
          'Green & Blue Tie',
        image: './images/Accessories/GreenBlueTie.png',
        price: 10.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Tie',
        category: categories[5]._id,
        description:
          'Green Plaid Tie',
        image: './images/Accessories/GreenPlaidTie.png',
        price: 10.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Tie',
        category: categories[5]._id,
        description:
          'Grey & Blue',
        image: './images/Accessories/GreyBlueTie.png',
        price: 10.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Tie',
        category: categories[5]._id,
        description:
          'Grey & Brown Tie',
        image: './images/Accessories/GreyBrownTie.png',
        price: 10.00,
        size: 'large',
        quantity: 5
      },
      {
        name: 'Tie',
        category: categories[5]._id,
        description:
          'Grey Tie',
        image: './images/Accessories/GreyTie.png',
        price: 10.00,
        size: 'large',
        quantity: 5
      },
    {
      name: 'accessories',
      category: categories[6]._id,
      description:
        'hankerchief',
      image: './images/Accessories/Hankerchief.png',
      price: 5.00,
      size: 'accessory',
      quantity: 10
    },
    {
        name: 'Accessories',
        category: categories[6]._id,
        description:
          'Black Belt',
        image: './images/Accessories/BlackBelt.png',
        price: 35.00,
        size: '36',
        quantity: 10
      },
      {
        name: 'Accessories',
        category: categories[6]._id,
        description:
          'Brown Belt',
        image: './images/Accessories/BrownBelt.png',
        price: 35.00,
        size: '36',
        quantity: 10
      },
      {
        name: 'Accessories',
        category: categories[6]._id,
        description:
          'Tan Belt',
        image: './images/Accessories/TanBelt.png',
        price: 35.00,
        size: '36',
        quantity: 10
      },
    {
      name: 'Measurement Kit',
      category: categories[7]._id,
      description:
        'Measurement Kit Mens',
      image: './images/Accessories/MeasurementKit.png',
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