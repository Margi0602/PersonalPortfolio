/*ASSIGNMENT-1
MARGI PATEL
STUDENT NUMBER- 301403873*/

import '../src/contact.css';
import { useNavigate } from 'react-router-dom';
 
export default function Contact() {
  let navigate = useNavigate();
 
  const handleSubmit = (event) => {
    event.preventDefault(); // This prevents the default form submission action
    navigate('/'); // This will navigate to the home page fvf
  };
 
  return (
    <>
     <p>Contact</p>
     <form id="ffp" onSubmit={handleSubmit}>
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> <br></br>
          <p><i>Call me on: <strong>147-878-1706 </strong></i></p>
 <p>facebook:Margi Patel</p>
 <p>email:margip694@gmail.com</p>
     </>
     );
     }
    