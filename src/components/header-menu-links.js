import React from 'react';

const HeaderMenuLinks = () => {
  return (
    <div className="header__section">
      <label htmlFor="toggle" className="burger">&#9776;</label>
      <input type="checkbox" id="toggle"></input>

      <div className="header__item headerlogo headerButton">taskon</div>
      
      <div className="header__item headerButton header__menulinks"><a href="/" className="header__item__color">Задания</a></div>
      <div className="header__item headerButton header__menulinks"><a href="/">Финансы</a></div>
      <div className="header__item headerButton header__menulinks"><a href="/">Компания</a></div>
      <div className="header__item headerButton header__menulinks"><a href="/">Статистика</a></div>
    </div>
  );
};

export default HeaderMenuLinks;