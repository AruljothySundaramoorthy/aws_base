import axios, { AxiosResponse } from "axios";

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Street {
  number: number;
  name: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Dob {
  date: string;
  age: number;
}

interface Registered {
  date: string;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

interface RandomUserApiResponse {
  results: User[];
  info: Info;
}

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
