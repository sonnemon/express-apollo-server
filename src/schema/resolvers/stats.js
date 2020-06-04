import { combineResolvers } from 'graphql-resolvers';
export default {
	Query: {
		stat: async (parent, args, ctx, info) => {
			return {
				name: 'gaa',
				count: 13
			};
		}
	},
	Mutation: {
		createStat: async (parent, args, ctx, info) => {
			return { message: 'createStat' };
		}
	}
	// Subscription: {
	// 	messageCreated: {
	// 		subscribe: () => pubsub.asyncIterator(EVENTS.MESSAGE.CREATED)
	// 	}
	// }
};
