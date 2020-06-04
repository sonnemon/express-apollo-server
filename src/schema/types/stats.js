const { gql } = require('apollo-server');
export default gql`
	type statType {
		name: String
		count: Int
	}

	type statResponseType {
		message: String
	}

	extend type Query {
		stat: statType
	}

	extend type Mutation {
		createStat: statResponseType
	}
`;
