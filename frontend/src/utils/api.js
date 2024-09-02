import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get("http://localhost:5000/user/find-all"); // Replace with your actual endpoint
  return response.data;
};

export const fetchHomes = async (userId, page = 1) => {
  console.log(
    `Fetching homes with URL: http://localhost:5000/home/find-by-user/${userId}?page=${page}`
  );
  let response = await axios.get(
    `http://localhost:5000/home/find-by-user/${userId}?page=${page}`
  ); // Replace with your actual endpoint
  return response.data;
};
