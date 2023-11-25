import "./TechItems.css"
function TechItems(props) {
    const {tech} = props
    return (
        <div className="tech-item">
            <img src={tech.image} alt="" />
            <span>{tech.name}</span>
        </div>
    )
}

export default TechItems
