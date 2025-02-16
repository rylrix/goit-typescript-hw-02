import { useEffect, useState } from "react";
import "./App.css";
import { fetchImages } from "../services/api";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import { SearchBar } from "./SearchBar/SearchBar";
import ImageModal from "./ImageModal/ImageModal";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleClickImage = (imageUrl) => {
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
}

export default App;
