import "./ProjectPage.css"
import { useNavigate } from "react-router-dom";
import data from '../data/techStacks.json'
import TechItems from "../components/TechItems";

function ProjectPage() {
    const navigate = useNavigate()
    return (
        <>
            <header>
                <p id="back"> <a href="" onClick={(e) => {
                    e.preventDefault()
                    navigate("/profile")
                }}>← Back to profile</a></p>
                <h1>My Projects</h1>
                <p>During my time at Hactiv8 Bootcamp, I engaged in diverse project assignments that encompassed a spectrum of complexity, ranging from the development of straightforward features to the creation of intricate applications. The following highlights showcase a selection of my most notable projects, reflecting my proficiency and dedication in delivering high-quality outcomes.</p>
            </header>
            <div id="project-body">
                <div className="project-container">
                    <div className="item-main">
                    </div>
                    <div className="item-detail">
                        <h2>Planet Quiz</h2>
                        <p>Planet Quiz provides a sophisticated interactive platform allowing users to engage in a quiz game centered around solar system planets. Participants are prompted to deduce the identity of planets through provided clues, facilitating an educational and enjoyable experience. <a href="https://github.com/andikaraditya/PlanetQuiz" target="_blank">Github</a></p>
                        <p>Tech stacks used</p>
                        <div className="tech-container">
                            {data.PlanetQuiz.map((el, index) => {
                                return (
                                    <TechItems 
                                    tech={el}
                                    key={index}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="project-container">
                    <div className="item-detail">
                        <h2>SereneReads</h2>
                        <p>A full-stack book forum website, this platform serves as an engaging hub for book enthusiasts. The creation involved the design of an intuitive front-end using Vue, complemented by the implementation of robust backend features through Express.js and PostgreSQL. 
                        <br />
                        Github: <a href="https://github.com/andikaraditya/serene-reads-server" target="_blank">server</a>, <a href="https://github.com/andikaraditya/serene-reads-client" target="_blank">client</a>
                        </p>
                        <p>Tech stacks used</p>
                        <div className="tech-container">
                            {data.SereneReads.map((el, index) => {
                                return (
                                    <TechItems 
                                    tech={el}
                                    key={index}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="item-main">
                    </div>
                </div>
                <div className="project-container">
                    <div className="item-main">
                    </div>
                    <div className="item-detail">
                        <h2>ThriftyBite</h2>
                        <p>Directed the development of a mobile application focused on minimizing food waste through the streamlined sale of surplus food items. Took charge of the project, guiding the creation of an intuitive and user-friendly interface using React Native. Collaborated on both backend and mobile aspects to ensure smooth functionality and secure transactions.
                        <br />
                        <a href="https://github.com/Final-Project-hacktiv8-RMT-41" target="_blank">Github</a> | <a href="https://www.linkedin.com/pulse/tasted-wasted-how-we-fight-food-waste-andika-radityatama-o6bjc%3FtrackingId=w%252Fm7ARAaRKumZeOIxvvwiA%253D%253D/?trackingId=w%2Fm7ARAaRKumZeOIxvvwiA%3D%3D" target="_blank">Article</a>
                        </p>
                        <p>Tech stacks used</p>
                        <div className="tech-container">
                            {data.ThriftyBite.map((el, index) => {
                                return (
                                    <TechItems 
                                    tech={el}
                                    key={index}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectPage;