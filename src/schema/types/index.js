import { gql } from 'apollo-server-express';

import pageSchema from './page';
import statsSchema from './stats';

const linkSchema = gql`
	scalar Date

	type Query {
		_: Boolean
	}

	type Mutation {
		_: Boolean
	}

	type Subscription {
		_: Boolean
	}
`;
export default [ linkSchema, pageSchema, statsSchema ];
