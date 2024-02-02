import axios from "axios";
import scss from "../pages/Mac.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Modal from "./modal/Modal";

const url =
	"https://api.elchocrud.pro/api/v1/106c898d06ba3ffdde5932f09debf501/mac";

const Mac = () => {
	const [sliderRef] = useKeenSlider({
		loop: true,
		mode: "free",
		slides: { origin: "center", perView: 2.8, spacing: 10 },
		range: {
			min: -5,
			max: 5,
		},
	});
	const [mac, setMac] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const getRequest = async () => {
		const response = await axios.get(url);
		setMac(response.data);
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

	if (mac.length === 0) {
		return null;
	}
	return (
		<div className={scss.Mac}>
			<div ref={sliderRef} className="keen-slider">
				{mac.map((item, index) => (
					<div
						className="keen-slider__slide number-slide1"
						key={index}
						onClick={() => openModal(item)}>
						<div className={scss.card}>
							<h1>{item.name}</h1>
							<img src={item.img} alt={item.name} />
							<p>{item.description}</p>
							<button>
								<a href="https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m2">
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
								<a href="https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m2">
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

export default Mac;
