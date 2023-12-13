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
                        <img className="wide" src="https://cdn.discordapp.com/attachments/1157904545201008703/1178144696695005274/9k.png?ex=657513c0&is=65629ec0&hm=163ce309fc8b3ba720812a60ed59258e5da0a7a3ffd9efb1e450a94ef151bce5&" alt="" />
                        <img className="wide" src="https://cdn.discordapp.com/attachments/1157904545201008703/1178145542472212530/9k.png?ex=6575148a&is=65629f8a&hm=e2936d8470aa5618f4ebbbfd9c4782202b827c49cc563a74e0a5aebfb32caeb8&" alt="" />
                        <img className="wide" src="https://cdn.discordapp.com/attachments/1157904545201008703/1178144697693249616/2Q.png?ex=657513c0&is=65629ec0&hm=522950d9e8301bf7c03151eb7698852d8f3bafae9a8927872ecd9f19fb098e93&" alt="" />
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
                        <img className="wide" src="https://cdn.discordapp.com/attachments/1157904545201008703/1178144950056136815/Z.png?ex=657513fc&is=65629efc&hm=6eb02a386d52c8ff2a4917fdb345f9c8b01d0d9bb38ace99a3aa61e00b48c925&" alt="" />
                        <img className="wide" src="https://cdn.discordapp.com/attachments/1157904545201008703/1178144950727213147/image.png?ex=657513fd&is=65629efd&hm=4b63badd6ccd550d913bfdb9a3690b94a41012966450a62dc44f959e4e78085d&" alt="" />
                    </div>
                </div>
                <div className="project-container">
                    <div className="item-main">
                        <img className="tall" src="https://cdn.discordapp.com/attachments/1157904545201008703/1178145231804313630/1700613567649.png?ex=65751440&is=65629f40&hm=388f88be9e598bd1df5fba2ccd86a5cc7f90726be4a5f252d90ade32e51f6532&" alt="" />
                        <img className="tall" src="https://cdn.discordapp.com/attachments/1157904545201008703/1178145232613806231/1700613567678.png?ex=65751440&is=65629f40&hm=813c963785ebeb7405ea2275a5a7fd2a371aa509aaee7f172bcc888e7aa67ca2&" alt="" />
                        <img className="tall" src="https://cdn.discordapp.com/attachments/1157904545201008703/1178145233037443152/1700613567709.png?ex=65751440&is=65629f40&hm=b41a8f5272f686c37cca3ff7ec29488e7d6744ca685bb1b6613b41874b1ca684&" alt="" />
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
                <div className="project-container">
                    <div className="item-detail">
                        <h2>Lightstation Blog</h2>
                        <p>An elegantly crafted personal blog, showcasing a sophisticated minimalist design. Developed with a robust Node.js backend and a polished Nuxt.js frontend.
                        <br />
                        <a href="https://github.com/Final-Project-hacktiv8-RMT-41" target="_blank">Github</a>
                        </p>
                        <p>Tech stacks used</p>
                        <div className="tech-container">
                            {data.LightstationBlog.map((el, index) => {
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
                        <img className="wide" src="https://cdn.discordapp.com/attachments/1157904545201008703/1184326707897970779/FireShot_Capture_363_-_-_localhost.png?ex=658b9132&is=65791c32&hm=7087ac86b5cc89377ed14e3ad57f73bfb6284ba1e11b335effb2a3fd6c81f8cc&" alt="" />
                        <img className="wide" src="https://cdn.discordapp.com/attachments/1157904545201008703/1184326708514537522/FireShot_Capture_364_-_-_localhost.png?ex=658b9133&is=65791c33&hm=bf8910cb26dc9441f323085a530b84f29cc9348d5c4dfd1e938fc5fae48370cb&" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectPage;