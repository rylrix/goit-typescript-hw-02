import React from "react";

interface ImageCardProps {
  item: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  };
  onImageClick: (imageUrl: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onImageClick }) => {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => onImageClick(item.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
