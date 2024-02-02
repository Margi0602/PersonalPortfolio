/* ASSIGNMENT 1
MARGI PATEL
 STUDENT NUMBER- 301403873*/
import BBG from '../src/assets/bbg.jpeg';
import ux from '../src/assets/knowme.jpeg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
import resume from '../src/assets/abc.pdf';
export default function About() {
     return <>
     
     <section id="skill">
     <img src={BBG} alt="profile" className="bbg" width="450" height="450" align="right" />
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">I am a student of software enginerring student in centennial college. I have a strong understanding of design . I am proficient in HTML, CSS, and php, as well as Adobe Photoshop.</span> 
          
          <div className="skillBar">
               <img src={ux} alt="UIDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Want to know more about me</h2>
               <p>Here is my resume.</p>
               <a href={resume} download="abc.pdf">
            Download My Resume
          </a>
               </div>
               </div>
          
          
                  
     </section>
    

     </>
    }
    