import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const query = gql`
  query Books {
    books {
      title
      author
      id
    }
  }
`;

export default () => useQuery(query);
