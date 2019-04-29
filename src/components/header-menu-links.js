import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderMenuLinks = () => {
  return (
    <div className="header__section">
      <label htmlFor="toggle" className="burger">&#9776;</label>
      <input type="checkbox" id="toggle"></input>

      <div className="header__item headerlogo headerButton">taskon</div>
      
      <div className="header__item"><NavLink activeClassName="header__item__color" to="/"exact={true}>Задания</NavLink></div>
      <div className="header__item"><NavLink activeClassName="header__item__color" to="/finance">Финансы</NavLink></div>
      <div className="header__item"><NavLink activeClassName="header__item__color" to="/company">Компания</NavLink></div>
      <div className="header__item"><NavLink activeClassName="header__item__color" to="/stats">Статистика</NavLink></div>
    </div>
  );
};

export default HeaderMenuLinks;