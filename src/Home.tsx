import './App.css'

// Import Images
import _phImage0 from './assets/myLife.jpg'
import _phImage1 from './assets/iBooks.jpg'

// Home Page Content:
function Home(){
    
    return(
        <div className="container mt-5">
            <div className="row justify-content-center py-3">
                <div className="col-2">
                    <img className="profile-picture img-fluid" src={_phImage0} width="150" height="150" />
                </div>
                <div className="col-8 pl-1">
                    <p className="text-justify">
                      Alex is a highly motivated, self-driven individual with a growth mindset, eager to expand their skills through self-directed learning, whether via online courses, research, or innovative problem-solving.
                      Proactive and initiative-driven, Alex identifies inefficiencies, proposes data-driven improvements, and actively participates in cross-functional projects, consistently delivering results through adaptability, 
                      analytical thinking, and creative solutions. Committed to continuous improvement and making a meaningful impact, Alex exemplifies the power of curiosity, perseverance, and a solutions-oriented 
                      approach in overcoming challenges and driving growth.  
                    </p>
                </div>
                <div className="col-md-auto"></div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-8 pl-1">
                    <p className="text-left text-wrap">
                        This portfolio serves as a comprehensive showcase of Alex’s diverse talents and dedication to growth, featuring a <br></br> curated collection of projects and learning materials spanning Software Development, Illustration,
                        and 3D Art. <br></br> In Software Development, Alex demonstrates technical proficiency and problem-solving acumen through projects like full-stack applications, algorithmic solutions, and open-source contributions, reflecting 
                        their ability to self-learn and adapt to evolving technologies.
                        The Illustration section highlights their creative flair and attention to detail, with concept art, character designs, and storytelling visuals that emphasize their passion for visual expression. Meanwhile, the 3D Art portfolio
                        reveals mastery of tools like Blender and Unreal Engine, showcasing immersive environments, character modeling, and animation that blend technical skill with artistic innovation.
                    </p>
                </div>
                <div className="col-2">
                    <img className="profile-picture img-fluid" src={_phImage1} width="150" height="150" />
                </div>
                <div className="col-md-auto"></div>
            </div>
        </div>
    )
}


// Export Command:
export default Home; 