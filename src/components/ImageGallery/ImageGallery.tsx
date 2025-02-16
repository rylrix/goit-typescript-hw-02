import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  }[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div>
      <ul className={s.container}>
        {images.map((item) => (
          <li key={item.id}>
            <div>
              <ImageCard item={item} onImageClick={onImageClick} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
