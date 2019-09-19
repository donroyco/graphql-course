import React from 'react';

import useBooksQuery from './useBooksQuery';
import useDeleteBookMutation from './useDeleteBookMutation';
import ChangeTitle from './ChangeTitle';

const Books = () => {
  let { data, loading } = useBooksQuery();
  let mutate = useDeleteBookMutation();

  if (loading) return <div>loading...</div>;
  if (!data || !data.books) return null;

  return data.books.map(book => (
    <div>
      <h3>{book.title}</h3>
      <p>{book.id}</p>
      <p>{book.author}</p>
      <button onClick={() => mutate(book.id)}>Delete Book</button>
      <ChangeTitle book={book} />

    </div>
  ));
};

export default Books;

