const { users, posts, musicDirectors, movies } = require("./data");

const resolvers = {
  Query: {
    users: () => users,
    posts: () => posts,
    listMusicDirectors: () => musicDirectors,
    listMovies: () => movies,
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      const newUser = {
        id: String(users.length + 1),
        name,
        email,
      };
      users.push(newUser);
      return newUser;
    },
    // createPost: (_, { title, content, userId }) => {
    //   const newPost = {
    //     id: String(posts.length + 101),
    //     title,
    //     content,
    //     userId,
    //   };
    //   posts.push(newPost);
    //   return newPost;
    // },
    createPost: (_, { input }, context) => {
      if (!context.currentUserId) {
        throw new Error("Unauthorized");
      }

      const newPost = {
        id: String(posts.length + 101),
        title: input.title,
        content: input.content,
        userId: context.currentUserId,
      };

      posts.push(newPost);
      console.log(newPost);
      return newPost;
    },
    createMusicDirector: (_, { name }) => {
      const musicdirector = {
        id: String(musicDirectors.length + 1),
        name,
        moviesComposed: 0,
      };
      musicDirectors.push(musicdirector);
      return musicdirector;
    },
    createMovie: (_, { title, musicDirectorId }) => {
      const director = musicDirectors.find((d) => d.id === musicDirectorId);
      if (!director) throw new Error("Music director not found");

      const newMovie = {
        id: String(movies.length + 1),
        title,
        musicDirectorId,
      };

      director.moviesComposed++;
      movies.push(newMovie);
      return newMovie;
    },
  },
  User: {
    posts: (parent) => posts.filter((post) => post.userId === parent.id),
  },
  Post: {
    user: (parent) => users.find((user) => user.id === parent.userId),
  },
  MusicDirectors: {
    movies: (parent) => {
      return movies.filter((movie) => movie.musicDirectorId === parent.id);
    },
  },
  Movie: {
    musicDirector: (parent) => {
      return musicDirectors.find(
        (director) => director.id === parent.musicDirectorId
      );
    },
  },
};

module.exports = resolvers;
