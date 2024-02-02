import { NavLink } from "react-router-dom";
import search from "../../../assets/img/icons8-search-50.png";
import logo from "../../../assets/img/pngwing.com.png";
import scss from "../header/Header.module.scss";
import { useLocation } from "react-router-dom";
import home from "../../../assets/img/icons8-home-48.png";

const links = [
	{
		name: "Home",
		href: "/",
		img: home,
	},
	{
		name: "Iphone",
		href: "/iphone",
		img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190",
	},
	{
		name: "Mac",
		href: "/mac",
		img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
	},
	{
		name: "Ipad",
		href: "/ipad",
		img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437",
	},
	{
		name: "AppleWatch",
		href: "/appleWatch",
		img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1693703822208",
	},
	{
		name: "AirPods",
		href: "/airPods",
		img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885",
	},
];

const Header = () => {
	const location = useLocation();
	return (
		<header className={scss.Header}>
			<nav className={scss.nav}>
				<ul className={scss.ul}>
					<img src={logo} alt="" />
					<li>Store</li>
					<li>Mac</li>
					<li>iPad</li>
					<li>Phone</li>
					<li>Watch</li>
					<li>Vision</li>
					<li>AirPods</li>
					<li>TV & Home</li>
					<li>Entertainment</li>
					<li>Accessories</li>
					<li>Support</li>
					<img src={search} alt="" />
				</ul>
			</nav>
			<div>
				<h4>
					Get $180–$620 in credit toward iPhone 15 or iPhone 15 Pro when you
					trade in iPhone 11 or higher.2
				</h4>
			</div>
			<div className={scss.h1}>
				<h1>
					Store. <span>The best way to buy the products you love.</span>
				</h1>
			</div>

			<nav className={scss.Nav}>
				<ul className={scss.Ul}>
					{links.map((item, index) => (
						<li key={index}>
							<div className={scss.image}>
								<NavLink
									to={item.href}
									className={
										location.pathname === item.href
											? `${scss.link} ${scss.active}`
											: `${scss.link}`
									}>
									<div>
										<img src={item.img} alt={item.name} />
									</div>
									{item.name}
								</NavLink>
							</div>
						</li>
					))}
				</ul>
			</nav>
			<h1>
				The latest. <span>Take a look at what’s new, right now.</span>
			</h1>
		</header>
	);
};

export default Header;
