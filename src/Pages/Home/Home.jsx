import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Banner from "./Banner";

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About ></About>
            <Skills ></Skills>
            <Projects ></Projects>
            <Contact ></Contact>
            <Footer />
        </div>
    );
};

export default Home;

