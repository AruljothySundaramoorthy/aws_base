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

async function runParallel() {
  const [user, posts] = await Promise.all([getUser(1), getPosts(1)]);

  console.log("User:", user);
  console.log("Posts:", posts);
}

runParallel();
