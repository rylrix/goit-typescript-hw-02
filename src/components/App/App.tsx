import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import "./App.css";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import { SearchBar } from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchImages } from "../../services/api";

interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const getImagesData = async () => {
      if (!query.trim()) return;
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchImages(query, page);
        setImages((prev) => [...prev, ...results]);
      } catch (error) {
        setIsError(true);
        console.log(error);
        toast.error("This didn't work. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    getImagesData();
  }, [query, page]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleChangeQuery = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleClickImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleClickImageClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSearchChanged={handleChangeQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleClickImage} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <button onClick={handleChangePage}>Load more</button>
      )}
      {isError && <ErrorMessage />}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleClickImageClose}
        image={selectedImage}
      />
    </>
  );
};

export default App;
