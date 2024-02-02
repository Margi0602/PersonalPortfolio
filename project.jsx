/* ASSIGNMENT-1
MARGI PATEL
 STUDENT NUMBER- 301403873*/

import project3 from '../src/assets/project3.png';
import project4 from '../src/assets/project4.jpeg';
import project5 from '../src/assets/project5.jpeg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>
     
     <section id="works">
         
          <h2 className="worksTitle">Want to know more about my Projects</h2>
          <span className="worksDesc">
I have completed a variety of compelling projects. The "Salon management system" was my initial venture, where customers are able to take appointment from their home they do not need to go there and also they were able to see availabilty. following by "EVENT MANAGEMENT" where people can book venue for their event and many more facilites.  Additionally, I created the "Emotion Detector," a cutting-edge application designed to identify various facial emotions, including happiness, sadness, surprise, and anger.</span>
          <div className="worksImgs">
                   
                 
                   <img src={project3} alt="project3" className="worksImg" />
                   <img src={project4} alt="project4" className="worksImg" />
                   <img src={project5} alt="project5" className="worksImg" />
                   
                 
               
               </div>
<h2>SALON MANAGEMENT SYSTEM</h2>
          <p>In the dynamic world of beauty and wellness, effective salon management is paramount to delivering exceptional services and ensuring a seamless client experience. Introducing my latest project—a Salon Management System designed to revolutionize the way beauty establishments operate..</p>
<h2>EVENT MANAGEMENT</h2>
 
<p>In the fast-paced world of event planning, executing seamless and memorable experiences requires precision and organization. Introducing my latest project—an Event Management System designed to simplify the complexities of planning, coordinating, and executing events of all scales.</p>
 
   <h2>Emotion Detector</h2>    
   <p>In an era where technology strives to understand and interact with us on a more human level, I present my latest project—an Emotion Detector designed to decipher and interpret human emotions through advanced sensory analysis.</p>          
                 
     </section>
   
 
     </>
    }
   