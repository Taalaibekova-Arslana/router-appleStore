import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import scss from "../pages/Ipad.module.scss";
import Modal from "./modal/Modal";

const url =
	"https://api.elchocrud.pro/api/v1/904090873ff679cb92768d8c8532530c/ipad";

const IPad = () => {
	const [sliderRef] = useKeenSlider({
		loop: true,
		mode: "free",
		slides: { origin: "center", perView: 3.6, spacing: 10 },
		range: {
			min: -5,
			max: 5,
		},
	});
	const [ipad, setIpad] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const getRequest = async () => {
		const response = await axios.get(url);
		setIpad(response.data);
	};

	useEffect(() => {
		getRequest();
	}, []);

	const openModal = (item) => {
		setSelectedItem(item);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	if (ipad.length === 0) {
		return null;
	}

	return (
		<div className={scss.Ipad}>
			<div ref={sliderRef} className="keen-slider">
				{ipad.map((item, index) => (
					<div className="keen-slider__slide number-slide1" key={index} onClick={() => openModal(item)} >
						<div className={scss.card}>
							<h1>{item.name}</h1>
							<img src={item.img} alt={item.name} />
							<p>{item.description}</p>
							<button>	<a href="https://www.apple.com/shop/buy-ipad/ipad-pro">
									Buy
								</a></button>
						</div>
					</div>
				))}
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				content={
					selectedItem && (
						<>
							<h1>{selectedItem.name}</h1>
							<img src={selectedItem.img} alt={selectedItem.name} />
							<p>{selectedItem.description}</p>
							<button>
								<a href="https://www.apple.com/shop/buy-ipad/ipad-pro">
									Buy
								</a>
							</button>
						</>
					)
				}
			/>
		</div>
	);
};

export default IPad;
