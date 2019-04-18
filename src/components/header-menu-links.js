import React from 'react';

const HeaderMenuLinks = () => {
  return (
    <div className="header__section">
      <div className="header_item headerlogo headerButton">taskon</div>
      <div className="header__item headerButton"><a href="/">Задания</a></div>
      <div className="header__item headerButton"><a href="/">Финансы</a></div>
      <div className="header__item headerButton"><a href="/">Компания</a></div>
      <div className="header__item headerButton"><a href="/">Статистика</a></div>
    </div>
  );
};

export default HeaderMenuLinks;