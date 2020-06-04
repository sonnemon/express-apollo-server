import { combineResolvers } from 'graphql-resolvers';
const { PubSub } = require('apollo-server');

const pubsub = new PubSub();
let pages = [
	{
		name: 'Ga',
		pageId: '1212'
	}
];
const SUB_PAGE = 'SUB_PAGE';
export default {
	Query: {
		page: async (parent, args, ctx, info) => {
			return {
				name: 'Ga',
				pageId: '1212'
			};
		},
		pages: async (parent, args, ctx, info) => {
			return pages;
		}
	},
	Mutation: {
		createPage: async (parent, { input }, ctx, info) => {
			pages.push(input);
			pubsub.publish(SUB_PAGE, { subPage: pages });
			return { message: 'createStat' };
		}
	},
	Subscription: {
		subPage: {
			subscribe: () => pubsub.asyncIterator(EVENTS.MESSAGE.CREATED)
		}
	}
};
