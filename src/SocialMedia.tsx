import './App.css'
import _linkedin from './assets/ico/linkedin.ico'
import _twitter from './assets/ico/twitter.ico'
import _tumblr from './assets/ico/tumblr.ico'
import _instagram from './assets/ico/instagram.ico'
import _cara from './assets/ico/cara.ico'
import _artstation from './assets/ico/artstation.ico'

// Social Media Links Content:
function SocialMedia(){
    
    // Width and Height of Icons
    const _width = "40";
    const _height = "40";

    return(
        <div className="d-flex justify-content-center py-3 border-bottom">
        <a  target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/jo%C3%A3o-silva-98031b2b1/" className="me-4 text-reset">
          <img className="profile-picture" src={_linkedin} width={_width} height={_height} />
        </a>
        <a target="_blank" rel="noopener noreferrer"  href="https://x.com/storiesofsilva" className="me-4 text-reset">
          <img className="profile-picture" src={_twitter} width={_width} height={_height} />
        </a>
        <a target="_blank" rel="noopener noreferrer"  href="https://www.tumblr.com/" className="me-4 text-reset">
          <img className="profile-picture" src={_tumblr} width={_width} height={_height} />
        </a>
        <a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/storiesofsilva/" className="me-4 text-reset">
          <img className="profile-picture" src={_instagram} width={_width} height={_height} />
        </a>
        <a target="_blank" rel="noopener noreferrer"  href="https://cara.app/storiesofsilva/all" className="me-4 text-reset">
          <img className="profile-picture" src={_cara} width={_width} height={_height} />
        </a>
        <a target="_blank" rel="noopener noreferrer"  href="https://www.artstation.com/user-9298276" className="me-4 text-reset">
          <img className="profile-picture" src={_artstation} width={_width} height={_height} />
        </a>
      </div>
    )
}


// Export Command:
export default SocialMedia; 