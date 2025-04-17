import axios from "axios";
import { fetchRandomUser } from "../task_1/randomuser";
import { User, RandomUserApiResponse } from "../User";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchRandomUser", () => {
  const mockUser: User = {
    gender: "female",
    name: { title: "Ms", first: "Anna", last: "Smith" },
    location: {
      street: { number: 123, name: "Main St" },
      city: "Paris",
      state: "Ile-de-France",
      country: "France",
      postcode: 75000,
      coordinates: { latitude: "48.8566", longitude: "2.3522" },
      timezone: { offset: "+1:00", description: "CET" },
    },
    email: "anna.smith@example.com",
    login: {
      uuid: "uuid123",
      username: "annasmith",
      password: "pass",
      salt: "salt",
      md5: "md5",
      sha1: "sha1",
      sha256: "sha256",
    },
    dob: { date: "1990-01-01", age: 34 },
    registered: { date: "2010-01-01", age: 14 },
    phone: "123456789",
    cell: "987654321",
    id: { name: "SSN", value: "123-45-6789" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/1.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
    },
    nat: "FR",
  };

  it("should fetch and return a user", async () => {
    const mockApiResponse: RandomUserApiResponse = {
      results: [mockUser],
      info: {
        seed: "abc",
        results: 1,
        page: 1,
        version: "1.4",
      },
    };

    mockedAxios.get.mockResolvedValue({ data: mockApiResponse });

    const user = await fetchRandomUser();
    expect(user).toEqual(mockUser);
    expect(user.name.first).toBe("Anna");
  });

  it("should throw an error on failure", async () => {
    mockedAxios.get.mockRejectedValue(new Error("API failure"));

    await expect(fetchRandomUser()).rejects.toThrow(
      "Failed to fetch random user"
    );
  });
});
