const db = require('../config/connection');
const { User, Category, Product } = require('../models');

const userData = require('./userData.json');
const productData = require('./product.json');
const categoryData = require('./category.json');

db.once('open', async () => {
  // delete lines to clear the db on launching so there aren't duplicates
  await User.deleteMany({});
  await Category.deleteMany({});
  await Product.deleteMany({});

  const products = await Product.insertMany(productData);
  const categories = await Category.insertMany(categoryData);
  const users = await User.insertMany(userData);

  // products.forEach(async (product, i) => {
  //   const category = await Category.create(categoryData[i])
  //   if (category.categoryId = product.categoryId){
  //     await Category.findOneAndUpdate({_id: category._id}, {$push:{products: product._id}})
  //   }
  // });

  process.exit(0);
});