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
            <About id ="about"></About>
            <Skills id ="skills"></Skills>
            <Projects id ="projects"></Projects>
            <Contact id ="contact"></Contact>
            <Footer />
        </div>
    );
};

export default Home;

