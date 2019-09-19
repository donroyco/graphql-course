const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    id: 6755432
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    id: 7654122
  },
  {
    title: '1984',
    author: 'George Orwell',
    id: 3023911
  },
];

export const resolvers = {
  Query: {
    books: () => {
      return books;
    },
    authors: () => {
      return [
        { name: 'Todd Motto', twitter: 'toddmotto' },
        { name: 'React', twitter: 'reactjs' }
      ]
    }
  },
  Mutation: {
    addAuthor: (_, { input: { name, twitter } }) => {
      return {
        name,
        twitter,
      };
    },
    deleteBook: (_, { id }) => true,
    changeBookTitle: (_, { input }) => {
      let { id, title } = input;

      let book = books.find(book => book.id === id);

      //Return the new book title
      return {
        ...book,
        title,
      };
    },
  }
};
