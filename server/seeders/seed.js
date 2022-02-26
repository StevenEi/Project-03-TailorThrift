const db = require('../config/connection');
const { User, Category, Product } = require('../models');


const userData = require('./userData.json');
const productData = require('./product.json');
const categoryData = require('./category.json');

db.once('open', async () => {
  await User.deleteMany({});

  const products = await User.insertMany(productData);
  // const categories = await User.insertMany(categoryData);
  products.forEach(async (product, i) => {

    const category = await Category.create(categoryData[i])
    if (category.categoryId = product.categoryId){
      await Category.findOneAndUpdate({_id: category._id}, {$push:{products: product._id}})
    }
    
  });

  const users = await User.insertMany(userData);


  process.exit(0);
});