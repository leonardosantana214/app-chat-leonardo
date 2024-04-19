

import "./Splash.css";
import Icon from "../../Assets/Icon.png";

export default function Splash() {
  const imgSplash = document.querySelector(".img-splash");

  // Verifica se a imagem foi encontrada
  if (imgSplash) {
    imgSplash.style.opacity = "1";
  }

  const textSplash = document.querySelector(".text-splash");

  // Verifica se a imagem foi encontrada
  if (textSplash) {
    textSplash.style.opacity = "1";
  }

  return (
    <div>
      <div className="splash-container animate__animated animate__slow animate__fadeIn ">
          <div className="splash-img">
            <img src={Icon} alt="Icon" className="img-splash animate__animated icon animate__slower animate__fadeInLeftBig" />
          </div>
          <div className="splash-text">
            {/* FAZER AS BARRAS DE CIMA E A DE BAIXO */}
            <div className="barra1"></div>
            <div className="barra2"></div>
            <div className="animate__animated text">
              <p className="animate__animated animate__slow animate__fadeInDownBig">C</p>
              <p className="animate__animated animate__slow animate__fadeInUpBig">y</p>
              <p className="animate__animated animate__slow animate__fadeInDownBig">a</p>
              <p className="animate__animated animate__slow animate__fadeInUpBig">n</p>

            </div>
            <div className="background-text">
              
              <div className="animate__animated text">
                <p className="animate__animated animate__slower animate__fadeInDown">C</p>
                <p className="animate__animated animate__slower animate__fadeInLeft ">h</p>
                <p className="animate__animated animate__slower animate__fadeInUp">a</p>
                <p className="animate__animated animate__slower animate__fadeInTopLeft">t</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}