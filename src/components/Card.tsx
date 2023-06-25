import photo from '../assets/photo.jpeg';
import location from '../assets/icons/location.svg';

const Card = () => {
  return (
    <div className='card'>
      <div className='photo'>
        <img src={photo} alt='Personal photo' />
      </div>

      <div className='content'>
        <div className='top'>
          <div>
            <h1>Tomáš Boďa</h1>
            <p className='position'>Software developer</p>
          </div>
          <a
            href='mailto:tomasboda.dev@gmail.com'
            className='contact-btn'
            title='Send me an e-mail'
          >
            Contact Me
          </a>
        </div>

        <div className='desc'>
          <div className='status'>
            <span>Interested in:</span>
            <span>Javascript | Swift | C++</span>
          </div>
          <div className='status'>
            <span>Favorite tech:</span>
            <span>React | Next.js | SwiftUI</span>
          </div>
        </div>

        <div className='desc'>
          <div className='status'>
            <span>Current position:</span>
            <span>Frontend developer</span>
          </div>
          <div className='status'>
            <span>Stack:</span>
            <span>Vue | PHP | Sass</span>
          </div>
        </div>

        <div className='footer'>
          <div className='socials'>
            <a
              className='github link'
              href='https://github.com/dvandyy'
              target='_blank'
              title='Github link'
            ></a>
            <a
              className='linkedin link'
              href='https://www.linkedin.com/in/tomas-boda/'
              target='_blank'
              title='Linked-in link'
            ></a>
            <a
              className='insta link'
              href='https://www.instagram.com/tomasboda_/'
              target='_blank'
              title='Instagram link'
            ></a>
            <a
              className='twitter link'
              href='https://twitter.com/_dvandy'
              target='_blank'
              title='Twitter link'
            ></a>
          </div>
          <p className='location'>
            <span>Slovakia</span> <img src={location} alt='location-mark-ico' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
