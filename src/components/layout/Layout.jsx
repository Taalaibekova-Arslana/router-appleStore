import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Iphone from "../pages/Iphone";
import Home from "../pages/Home";
import Mac from "../pages/Mac";
import IPad from "../pages/IPad";
import AppleWatch from "../pages/AppleWatch";
import AirPods from "../pages/AirPods";

const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/iphone" element={<Iphone />} />
					<Route path="/mac" element={<Mac />} />
					<Route path="/iPad" element={<IPad />} />
					<Route path="/appleWatch" element={<AppleWatch />} />
					<Route path="/airPods" element={<AirPods />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
