import axios, { AxiosResponse } from "axios";
import { User, RandomUserApiResponse } from "../User";
async function fetchRandomUser(): Promise<User> {
  try {
    const response: AxiosResponse<RandomUserApiResponse> = await axios.get(
      "https://randomuser.me/api/"
    );
    return response.data.results[0];
  } catch (error) {
    throw new Error("Failed to fetch random user");
  }
}

async function fetchMultipleUsers(count: number): Promise<User[]> {
  const promises: Promise<User>[] = [];
  for (let i = 0; i < count; i++) {
    promises.push(fetchRandomUser());
  }
  const users: User[] = await Promise.all(promises);
  return users;
}

async function run(): Promise<void> {
  try {
    const users = await fetchMultipleUsers(3);
    users.forEach((user, index) => {
      console.log(` User ${index + 1}`);
      console.log(
        `Name: ${user.name.title} ${user.name.first} ${user.name.last}`
      );
      console.log(`Email: ${user.email}`);
      console.log(
        `Location: ${user.location.city}, ${user.location.state}, ${user.location.country}`
      );
      console.log(`Phone: ${user.phone}`);
      console.log(`Picture: ${user.picture.thumbnail}`);
    });
  } catch (err) {
    console.error("Error fetching users:", err);
  }
}

run();
