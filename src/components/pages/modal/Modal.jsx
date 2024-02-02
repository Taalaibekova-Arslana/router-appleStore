import scss from "./Modal.module.scss"; // Import your modal styles

const Modal = ({ isOpen, onClose, content }) => {
	if (!isOpen) return null;

	return (
		<div className={scss.modalOverlay} onClick={onClose}>
			<div className={scss.modalContent} onClick={(e) => e.stopPropagation()}>
				{content}
				<button className={scss.closeButton} onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Modal;
