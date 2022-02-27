const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    categoryName: String
    categoryId: Int
    products: [Product]
  }

  type Product {
    _id: ID
    productName: String
    description: String
    image: String
    price: Float
    quantity: Int
    size: String
    categoryId: Int
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    chest: String
    arms: String
    waist: String
    inseam: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, chest: String!, arms: String!, waist: String!, inseam: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
