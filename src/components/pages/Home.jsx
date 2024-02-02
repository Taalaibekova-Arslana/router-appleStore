import { useState } from "react";
import scss from "../pages/Home.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import Modal from "./modal/Modal";

const url =
	"https://api.elchocrud.pro/api/v1/d3181fa282547d8156a14933f2ad8bb1/homePage";
const Home = () => {
	const [sliderRef] = useKeenSlider({
		loop: true,
		mode: "free",
		slides: { origin: "center", perView: 3.6, spacing: 10 },
		range: {
			min: -5,
			max: 5,
		},
	});

	const [home, setHome] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const getRequest = async () => {
		const response = await axios.get(url);
		setHome(response.data);
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

	if (home.length === 0) {
		return null;
	}
	return (
		<div className={scss.Home}>
			<div ref={sliderRef} className="keen-slider">
				{home.map((item, index) => (
					<div
						className="keen-slider__slide number-slide1"
						key={index}
						onClick={() => openModal(item)}>
						<div className={scss.card}>
							<p>{item.title}</p>
							<h1>{item.name}</h1>
							<h4>{item.description}</h4>
							<img src={item.img} alt="" />
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

export default Home;
