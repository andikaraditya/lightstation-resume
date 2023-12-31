import "./ProjectPage.css"
import { useNavigate } from "react-router-dom";
import data from '../data/data.json'
import stacks from '../data/stacks.json'
import ProjectItems from "../components/ProjectItems";
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
                <p>Experienced in: </p>
                <div id="stacks-container">
                    {stacks.backend.map((el, index) => {
                        return (
                            <TechItems 
                                tech={el}
                                key={index}
                            />
                        )
                    })}
                </div>
                <div id="stacks-container">
                    {stacks.frontend.map((el, index) => {
                        return (
                            <TechItems 
                                tech={el}
                                key={index}
                            />
                        )
                    })}
                </div>
            </header>
            <div id="project-body">
                {data.map((el, index) => {
                    return (
                        <ProjectItems 
                        project={el}
                        key={index}
                        index={index}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default ProjectPage;