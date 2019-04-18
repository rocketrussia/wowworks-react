import React from 'react';


import './header-menu-info';

const HeaderMenuInfo = () => {
  return (<div className="header__section">
      <div className="header__item headerButton"><span className="header__item__balance ">Баланс</span><span className="header__item__bold">218 982,90 ₽</span></div>
      <button className="header__item headerButton header__item__notifications header__notification__badge" data-badge=""></button>
      <div className="header__item headerButton header__select"><select><option>Никита Ласточкин</option><option>Геннадий Орлов</option><option>Валерий Чайкин</option></select></div>
      <div className="header__item headerButton header__item__help"></div>
    </div>);
};

export default HeaderMenuInfo;