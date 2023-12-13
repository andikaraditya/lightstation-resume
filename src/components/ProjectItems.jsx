import "./ProjectItems.css"
import TechItems from "../components/TechItems";
import { useState } from "react";

function ProjectItems(props) {
    const {project, index} = props

    return (
        <div className="project-container">
            <div 
            className={index %2 === 1 ? "item-main item-reverse" : "item-main"}
            >
                {project.images.map((el, index) => {
                    const {link, size} = el
                    return (
                        <img
                            className={size}
                            src={link}
                            key={index}
                        />
                    )
                })}
            </div>
            <div 
            className={index %2 === 1 ? "item-detail detail-reverse" : "item-detail"}
            >
                <h2>{project.name}</h2>
                <p>
                    {project.description}
                    <br />
                    {project.links.map((el, index) => {
                        const {name, link} = el
                        return (
                            <>
                            | <a href={link} key={index} target="_blank">
                                {name}
                            </a> |
                            </>
                        )
                    })}
                </p>
                <p>Tech stacks used</p>
                <div className="tech-container">
                    {project.techStacks.map((el, index) => {
                        return <TechItems tech={el} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectItems
