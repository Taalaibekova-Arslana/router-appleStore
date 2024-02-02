import scss from "../footer/Footer.module.scss";
import logo from "../../../assets/img/pngwing.com.png";

const Footer = () => {
	return (
		<div>
			<div className={scss.texts}>
				<div className={scss.text1}>
					<b>Shop and Learn</b>
					<p>Store</p>
					<p>Mac</p>
					<p>iPad</p>
					<p>iPhone</p>
					<p>Watch</p>
					<p>Vision</p>
					<p>AirPods</p>
					<p>TV & Home</p>
					<p>AirTag</p>
					<p>Accessories</p>
				</div>
				<div className={scss.text2}>
					<b>Apple Wallet</b>
					<p>Wallet</p>
					<p>Apple Card</p>
					<p>Apple Pay</p>
					<p>Apple Cash</p>
          <img src={logo} alt="" />
				</div>
				<div className={scss.text3}>
					<b>Account</b>
					<p>Manage Your Apple ID</p>
					<p>Apple Store Account</p>
					<p>Cloud.com</p>
				</div>
				<div className={scss.text4}>
					<b>Entertainment</b>
					<p>Apple One</p>
					<p>Apple TV+</p>
					<p>Apple Music</p>
					<p>Apple Arcade</p>
					<p>Apple Fitness+</p>
					<p>Apple News+</p>
					<p>Apple Podcasts</p>
					<p>Apple Books </p>
					<p>AirTag</p>
					<p>App Store</p>
				</div>
				<div className={scss.text5}>
					<b>Apple Store</b>
					<p>Find a Store</p>
					<p>Genius Bar</p>
					<p>Today at Apple</p>
					<p>Apple Camp</p>
					<p>Apple Store App</p>
					<p>Certified Refurbished</p>
					<p>Apple Trade In</p>
					<p>Financing</p>
					<p>Carrier Deals at Apple</p>
					<p>Order Status</p>
				</div>
				<div className={scss.text6}>
					<b>For Business</b>
					<p>Apple and Business</p>
					<p>Genius Bar</p>
					<p>Shop for Business</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
