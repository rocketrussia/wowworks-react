import React from 'react';

const ContentFilter= () => {
  return (
    <div className="container content__filter">
      <input type="text" placeholder="Поиск по слову"></input>
      <li><input type="checkbox" className="content__filter__checkbox"></input><span className="content__filter__checkmark">Персональное</span></li>
      <li><input type="checkbox" className="content__filter__checkbox"></input><span className="content__filter__checkmark">Ночное</span></li>
      <li><input type="checkbox" className="content__filter__checkbox"></input><span className="content__filter__checkmark">Срочное</span></li>
      <div className="content__select"><select><option>Никита Ласточкин</option><option>Геннадий Орлов</option><option>Валерий Чайкин</option></select></div>
    </div>
  );
};

export default ContentFilter;