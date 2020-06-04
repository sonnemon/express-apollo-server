import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import schema from './schema';
import config from './config';

const server = new ApolloServer({
	...schema,
	cors: true,
	introspection: true,
	playground: true,
	context: ({ req }) => {
		if (req.headers.authorization) {
			const token = (req.headers.authorization || '')
				.replace('Bearer ', '');
			return { token };
		}
		return {};
	}
});
const app = express();

server.applyMiddleware({ app, cors: true });

app.listen({ port: config.apiPort }, () => {
	console.log(`http://localhost:${config.apiPort}${server.graphqlPath}`);
});
