import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__item">
          <div className="footer__subtitle">React pizza</div>
          <ul>
            <li>About us</li>
            <li>Our history</li>
            <li>Vlog "The secret is"</li>
            <li>Додо ИС</li>
          </ul>
        </div>
        <div className="footer__item">
          <div className="footer__subtitle">Careers</div>
          <ul>
            <li>Vacancies</li>
          </ul>
        </div>
        <div className="footer__item del">
          <div className="footer__subtitle">For partners</div>
          <ul>
            <li>To suggest a place</li>
          </ul>
        </div>
        <div className="footer__item">
          <div className="footer__subtitle">Lorem</div>
          <ul>
            <li>Why Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
      </div>
      <div className="footer__end">
        <div className="footer__dodo">REACT PIZZA</div>
        <div className="footer__text">© 2012</div>
      </div>
    </footer>
  );
}
