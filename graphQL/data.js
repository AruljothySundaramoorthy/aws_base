const users = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
];

const posts = [
  {
    id: "101",
    title: "GraphQL Basics",
    content: "Learn GraphQL step by step",
    userId: "1",
  },
  {
    id: "102",
    title: "Apollo Server",
    content: "Setup Apollo Server with Node.js",
    userId: "2",
  },
];

const musicDirectors = [
  { id: "1", name: "A.R. Rahman", moviesComposed: 150 },
  { id: "2", name: "Ilaiyaraaja", moviesComposed: 150 },
];

const movies = [
  { id: "101", title: "Roja", musicDirectorId: "1" },
  { id: "102", title: "Slumdog Millionaire", musicDirectorId: "1" },
  { id: "103", title: "Thalapathi", musicDirectorId: "2" },
];
module.exports = { users, posts, musicDirectors, movies };
