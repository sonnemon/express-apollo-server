const { gql } = require('apollo-server');
export default gql`
	type pageType {
		name: String
		pageId: String
	}

	input pageInput {
		name: String
		pageId: String
	}

	type pageResponseType {
		message: String
	}

	extend type Query {
		page: pageType
		pages: [pageType]
	}

	extend type Mutation {
		createPage(input: pageInput): pageResponseType
	}

	extend type Subscription {
		subPage: [pageType]
	}
`;
