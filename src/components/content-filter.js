import React from 'react';

const ContentFilter= () => {
  return (
    <div className="container content__filter">
      <input type="text" placeholder="Поиск по слову"></input>
      <input type="checkbox" className="content__filter__checkbox"></input><span className="content__filter__checkmark">Персональное</span>
      <input type="checkbox" className="content__filter__checkbox"></input><span className="content__filter__checkmark">Ночное</span>
      <input type="checkbox" className="content__filter__checkbox"></input><span className="content__filter__checkmark">Срочное</span>
      <div className="content__select"><select><option>Никита Ласточкин</option></select></div>
    </div>
  );
};

export default ContentFilter;