import axios, { AxiosResponse } from "axios";
import { User, RandomUserApiResponse } from "../User";

async function fetchRandomUser(): Promise<User> {
  try {
    const response: AxiosResponse<RandomUserApiResponse> = await axios.get(
      "https://randomuser.me/api/"
    );
    const user = response.data.results[0];
    return user;
  } catch (error) {
    throw new Error("Failed to fetch random user");
  }
}

async function run(): Promise<void> {
  try {
    const user = await fetchRandomUser();
    console.log("Random User:");
    console.log(
      `Name: ${user.name.title} ${user.name.first} ${user.name.last}`
    );
    console.log(`Email: ${user.email}`);
    console.log(
      `Location: ${user.location.city}, ${user.location.state}, ${user.location.country}`
    );
    console.log(`Phone: ${user.phone}`);
    console.log(`Picture: ${user.picture.medium}`);
  } catch (err) {
    console.error(err);
  }
}

run();
