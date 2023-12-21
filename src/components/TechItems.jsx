import "./TechItems.css"
function TechItems({tech}) {
    return (
        <div className="tech-item">
            <img src={tech.image} alt="" />
            <span>{tech.name}</span>
        </div>
    )
}

export default TechItems
