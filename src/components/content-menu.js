import React from 'react';

const ContentMenu = () => {
  return (
    <div>
      <div className="content__menu container">
        <ul >
          <li className="content__menu__chosen"><a href="./">Новые</a><span className="content__menu__span">1</span></li>
          <li><a href="./">В работе</a><span className="content__menu__orange">1</span></li>
          <li><a href="./">На рассмотрении</a><span className="content__menu__span">3</span></li>
          <li><a href="./">Выполнены</a><span className="content__menu__span">187</span></li>
          <li><a href="./">Отменены</a><span className="content__menu__span">4</span></li>
          <li><a href="./">Черновики</a><span className="content__menu__span">7</span></li>
        </ul>
      <label className="content__menu__circle">
      <img src="./assets/ic_speeddial_white_24dp_2x.png" alt="" />
      </label>
      </div><div className="content__menu__background__line"></div>
      
    </div>
  );
};

export default ContentMenu;