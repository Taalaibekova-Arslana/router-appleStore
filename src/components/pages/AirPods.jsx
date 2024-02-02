import scss from "../pages/AirPods.module.scss";

const AirPods = () => {
	return (
		<div className={scss.AirPods}>
			<div className={scss.cards}>
				<div>
					<div className={scss.text1}>
						<h1>AirPods</h1>
						<p>3rd generation From $169</p>
					</div>
					<img
						src="https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg"
						alt=""
					/>
				</div>
				<div>
					<div className={scss.text2}>
						<h1>AirPods</h1>
						<p>2nd generation $129</p>
					</div>
					<div className={scss.image}>
						<img
							src="https://www.apple.com/v/airpods/v/images/overview/airpods_2ndgen_left__gjpt8k836yy6_large.png"
							alt=""
						/>
						<img
							src="https://www.apple.com/v/airpods/v/images/overview/airpods_2ndgen_right__gahfggwvcx6q_large.png"
							alt=""
						/>
					</div>
				</div>
				<div>
					<div className={scss.text3}>
						<h1>AirPods Max</h1>
						<p>$549</p>
					</div>
					<img
						src="https://www.apple.com/v/airpods/v/images/overview/airpods_max__f265q4g4ddym_large.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default AirPods;
