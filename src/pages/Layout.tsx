import {Fragment} from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from '../components/Footer';

// Import Footer and Header here
// Call for this file in index.tsx and have it displayed on all pages on the website
const Layout = () => {
    return (
<Fragment>
<Header />
<Outlet></Outlet>
{/* <Footer /> */}
</Fragment>
    )
};

export default Layout;