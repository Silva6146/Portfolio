import './App.css'
import _images from './assets/image/Images.ts'
import { useState } from 'react';

// Software Page Content:
function Illustration(){

// Page Title
const _currentView = "Illustration Works";
// Possible Button States
const _btnStates = [
    "nav-link p-4",
    "nav-link button-active p-4"
];

//#region Illustration Work

// Illustration Work View
function SetIllustrationView(){
    return (
        <div className="row">
            <img className="img-fluid port-image" src={_images[0]}/>
            <img className="img-fluid port-image" src={_images[0]}/>
            <img className="img-fluid port-image" src={_images[0]}/>
            <img className="img-fluid port-image" src={_images[0]}/>
            <img className="img-fluid port-image" src={_images[1]}/>
            <img className="img-fluid port-image" src={_images[1]}/>
            <img className="img-fluid port-image" src={_images[1]}/>
            <img className="img-fluid port-image" src={_images[1]}/>
        </div>
    )
}

// Concept Art View Work View
function SetConceptArtView(){
    return (
        <div className="row">
            <img className="img-fluid port-image" src={_images[1]}/>
            <img className="img-fluid port-image" src={_images[1]}/>
            <img className="img-fluid port-image" src={_images[1]}/>
            <img className="img-fluid port-image" src={_images[1]}/>
            <img className="img-fluid port-image" src={_images[0]}/>
            <img className="img-fluid port-image" src={_images[0]}/>
            <img className="img-fluid port-image" src={_images[0]}/>
            <img className="img-fluid port-image" src={_images[0]}/>
        </div>
    )
}
//#endregion


// Current View State
const [_pageWork, setPageWork] = useState(SetIllustrationView());
const [_btnIlState, setBtnIlState] = useState(_btnStates[1]);
const [_btnCAState, setBtnCAState] = useState(_btnStates[0]);


return(
    <div className="container mt-5">
        <div className="row">
            <div className="col-9">
                <h2 className="mb-5">{_currentView}</h2>
                {_pageWork}
            </div>
            <div className="col-3 pt-3">
                <div className="row pt-5">
                    <div className="container contact p-3 mt-4">
                        <h4 className="contact-text"> Get In Touch </h4>
                        <p className="contact-text"><a href="mailto:newsilva6146@gmail.com" className="contact-link"> Email me </a> or contact me using one of my Socials. Find the buttons that redirect to them at the bottom of the page.</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <h2>Works</h2>
                    <ul>
                        <li className={_btnIlState} onClick={()=>{ 
                            setBtnIlState(_btnStates[1]); 
                            setBtnCAState(_btnStates[0]); 
                            setPageWork(SetIllustrationView());
                        }}>Illustration</li>
                        <li className={_btnCAState} onClick={()=>{ 
                            setBtnIlState(_btnStates[0]); 
                            setBtnCAState(_btnStates[1]); 
                            setPageWork(SetConceptArtView());
                        }}>Concept Art</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-9">
                
            </div>
            <div className="col-3">
                <div className="row">
                    
                </div>
                <div className="row">
                    
                </div>
            </div>
        </div>
        <div className="row py-3">
            <div className="col-6">

            </div>
            <div className="col-6">
                
                <div className="row">
                    
                </div>
            </div>
        </div>
    </div>
    )
}


// Export Command:
export default Illustration; 