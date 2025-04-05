function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Arul" }), 1000);
  });
}

function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 101, title: "My Post" }]), 1000);
  });
}

function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Nice post!", "Thanks for sharing."]), 1000);
  });
}

async function loadEverything() {
  try {
    const user = await getUser(1);
    console.log("User:", user);

    const posts = await getPosts();
    console.log("Posts:", posts);

    const comments = await getComments();
    console.log("Comments:", comments);
  } catch (err) {
    console.error("Error loading data:", err);
  }
}

loadEverything();
