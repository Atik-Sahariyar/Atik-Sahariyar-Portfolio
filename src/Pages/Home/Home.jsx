import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About id ="about"></About>
            <Skills id ="skills"></Skills>
            <Projects id ="projects"></Projects>
            <Contact id ="contact"></Contact>
        </div>
    );
};

export default Home;