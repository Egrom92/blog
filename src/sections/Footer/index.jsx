import {Instagram, Telegram, Tiktok, YouTube} from '../../svg'

const Footer = (props) => {

  const socials = [Instagram, Telegram, Tiktok, YouTube]

  return (
    <>
      <div style={{flexGrow: 1}}></div>
      <footer className="Footer-section">
        <div className="container">
          <div className="Footer">
            <ul>
              {socials.map((Ico, i) => (
                <li key={i}>
                  <a href="#">
                    <Ico/>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
