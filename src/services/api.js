import axios from "axios";

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=9ns-XpDGFf6zzcK0gm5V280chu6X9iy8tpWooKU24cY`
  );
  return data;
};
