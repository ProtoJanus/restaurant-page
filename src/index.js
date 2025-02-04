import "./styles.css";
import "./navbar.js";
import Navbar from "./navbar.js";
import Home from "./home.js";
import Footer from "./footer.js";

const navBar = new Navbar();
navBar.init();

const home = new Home();
home.init();

const footer = new Footer();
footer.init();
