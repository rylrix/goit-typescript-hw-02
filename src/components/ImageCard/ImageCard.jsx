const ImageCard = ({ item, onImageClick }) => {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => {
          onImageClick(item.urls.regular);
        }}
      />
    </div>
  );
};

export default ImageCard;
