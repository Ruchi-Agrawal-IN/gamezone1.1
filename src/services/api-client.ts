import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "294b8017e2c34473aad1b1aafb6efddd" },
});
