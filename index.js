const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./server/src/graphql/typeDefs');
const resolvers = require('./server/src/graphql/resolvers.js');
const mongoose = require('mongoose');
const db = require('./server/src/config/db')

async function startServer(){
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app: app});
    app.use((res, req) =>{
        req.send('Hello from express apollo server');
    })
    await mongoose.connect(db, {
        useUnifiedTopology: true,
        useNewURLParser: true
    })
    console.log('Mongoose connected...');
    app.listen(4000, ()=> console.log('Server is running on port 4000'));
}
startServer();