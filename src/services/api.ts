import axios from "axios";

interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface UnsplashResponse {
  results: UnsplashImage[];
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const { data } = await axios.get<UnsplashResponse>(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=9ns-XpDGFf6zzcK0gm5V280chu6X9iy8tpWooKU24cY`
  );
  return data;
};
