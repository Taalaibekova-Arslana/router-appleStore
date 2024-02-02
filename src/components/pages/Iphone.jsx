import axios from "axios";
import { useEffect } from "react";
import scss from "../pages/Iphone.module.scss";
import { useKeenSlider } from "keen-slider/react";
import Modal from "./modal/Modal";
import { useState } from "react";

const url =
	"https://elchocrud.pro/api/v1/4c11844cd0fb933459345a837b0d3ff3/iphone";

const Iphone = () => {
	const [sliderRef] = useKeenSlider({
		loop: true,
		mode: "free",
		slides: { origin: "center", perView: 3.6, spacing: 5 },
		range: {
			min: -5,
			max: 5,
		},
	});
	const [iphone, setIphone] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const getRequest = async () => {
		const response = await axios.get(url);
		setIphone(response.data);
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

	if (iphone.length === 0) {
		return null;
	}

	return (
		<div className={scss.Iphone}>
			<div ref={sliderRef} className="keen-slider">
				{iphone.map((item, index) => (
					<div
						className="keen-slider__slide number-slide1"
						key={index}
						onClick={() => openModal(item)}>
						<div className={scss.card}>
							<h1>{item.name}</h1>
							<img src={item.img} alt={item.name} />
							<p>{item.description}</p>
							<button>
								<a href="https://www.apple.com/shop/buy-iphone/iphone-15-pro">
									Buy
								</a>
							</button>
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
								<a href="https://www.apple.com/shop/buy-iphone/iphone-15-pro">
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

export default Iphone;
