/* ASSIGNMENT-1
MARGI PATEL
 STUDENT NUMBER- 301403873*/

import React from 'react';
// Image paths
const mobileappdevelopment  = '../src/assets/mappd.jpg';
const uiDesignImagePath = '../src/assets/ui design.png';
const pushnotification = '../src/assets/pnotif.png';
 
 
const Services = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Our Web Design Services</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <div>
                    <img src={mobileappdevelopment} alt="MOBILE APP DEVELOPMENT" style={{ width: '500px', height: '500px' }} />
                    <h2>MOBILE APP DEVELOPMENT</h2>
                    <p>Certainly! Mobile app development is the process of creating software applications that run on mobile devices such as smartphones and tablets. Here is some foundational information about mobile app development.</p>
                </div>
                <div>
                    <img src={uiDesignImagePath} alt="User Interface Design" style={{ width: '500px', height: '500px' }} />
                    <h2>User Interface Design</h2>
                    <p>User Interface (UI) Design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms—e.g., voice-controlled interfaces.</p>
                </div>
                <div>
                    <img src={pushnotification} alt="Search Engine Optimization" style={{ width: '500px', height: '500px' }} />
                    <h2>PUSH NOTIFICATION</h2>
                    <p>
                    Push notifications are short, informative messages sent by mobile applications to a user's device, even when the app is not actively in use. They serve as a direct communication channel between the app and its users, providing real-time updates, reminders, or personalized information. This feature has become a fundamental aspect of mobile app development, enhancing user engagement and retention.</p>
                </div>
            </div>  
        </div>
    );
}
 
export default Services;