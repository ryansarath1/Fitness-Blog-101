// require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');




// const mongoose = require('mongoose');


// // Database connection
// const username = encodeURIComponent(process.env.MONGO_USERNAME);
// const password = encodeURIComponent(process.env.MONGO_PASSWORD);
// const clusterUrl = process.env.MONGO_CLUSTER;
// const dbName = process.env.MONGO_DBNAME;

// const uri = `mongodb+srv://mad88era:MiamiD1972%40@atlascluster.9704vui.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`;

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 5000  // Increase timeout to handle network issues
// }).then(() => {
//   console.log('Connected to MongoDB Atlas');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB Atlas:', error.message);
//   console.error('Error details:', error);
// });




const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
  startApolloServer();
