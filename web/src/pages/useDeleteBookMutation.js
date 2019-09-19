import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { query as booksQuery } from './useBooksQuery';

export const mutation = gql`
  mutation DeleteBook($id: Int!) {
    deleteBook(id: $id)
  }
`;

export default () => {
  let [deleteBook] = useMutation(mutation);

  return id => {
    return deleteBook({
      variables: { id },
      notifyOnNetworkStatusChange: true,
      update: store => {
        const data = store.readQuery({
          query: booksQuery,
        });

        store.writeQuery({
          query: booksQuery,
          data: {
            books: data.books.filter(
              currentBook => currentBook.id !== id,
            ),
          },
        });
      },
    });
  };
};
