import About from "../About/About.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import Projects from "../Projects/Projects.jsx";
import Skills from "../Skills/Skills.jsx";
import Banner from "./Banner.jsx";

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

