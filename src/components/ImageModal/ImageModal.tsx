import Modal from "react-modal";
import s from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string | null;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={s.overlay}
      className={s.modal}
      shouldCloseOnOverlayClick={true}
    >
      {image && <img src={image} className={s.img} alt="Selected" />}
    </Modal>
  );
};

export default ImageModal;
