import './App.css'
import { useState } from 'react';
import Home from './Home';
import Software from './Software';
import Illustration from './Illustration';
import SocialMedia from './SocialMedia';
import Vfx from './Vfx';

// Import Images
import _profile from './assets/react3.png'

function App() {

  //#region Variable
  // Final Content:
  const _buffer = [];
  // Page Content:
  const [_pageContent, setPageContent] = useState((<Home></Home>));
  //#endregion

  //#region Handler
  // Event Handlers:
  const HomeClick_Event = ()=>{setPageContent((<Home></Home>))};
  const SoftClick_Event = ()=>{setPageContent((<Software></Software>))};
  const IllustrationClick_Event = ()=>{setPageContent((<Illustration></Illustration>))};
  const dArtClick_Event = ()=>{setPageContent((<Vfx></Vfx>))};
  //#endregion

  //#region Nav Item
  // Show Home Button variable:
  const _homeItem = (
      <li className="nav-item">
          <a className="nav-link" href="#" onClick={HomeClick_Event}>Home</a>
      </li>
  );
  const _softwareItem = (
      <li className="nav-item">
          <a className="nav-link" href="#" onClick={SoftClick_Event}>Software Developer</a>
      </li>
  );
  const _illustrationItem = (
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={IllustrationClick_Event}>Illustrator</a>
      </li> 
  );
  const _dArtistItem = (
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={dArtClick_Event}>3D Artist</a>
      </li> 
  );
  //#endregion

  //#region Nav Bar
  // NavBar Content that will allow to change content:
  const _navBar = (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
      <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="profile-picture" src={_profile} width="60" height="60" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-1 justify-content-center navbar-nav h-100" id="navbarNav">
            <ul className="navbar-nav">
                {_homeItem}
                {_softwareItem}
                {_illustrationItem}
                {_dArtistItem}
            </ul>  
          </div>
      </div>
    </nav>
  );
  //#endregion

  //#region Footer
  // Setup of the Footer:
  const _footer = (
       <div className="footer-container py-3 my-4">
          <SocialMedia></SocialMedia>
          <p className="text-center text-body-secondary pt-3">© 2026</p>
       </div>
  );
  //#endregion
  
  // Combines the NavBar + Page Content + Footer:
  _buffer.push(_navBar);
  _buffer.push(_pageContent);
  _buffer.push(_footer);
  return (_buffer);
}

export default App
