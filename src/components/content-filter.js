import React from 'react';

const ContentFilter= () => {
  return (
    <div className="container content__filter">
      <input type="text" placeholder="Поиск по слову"></input>
      <li><input type="checkbox" id="person" name="person"></input><label htmlFor="person" className="content__filter__checkmark">Персональное</label></li>
      <li><input type="checkbox" id="night" name="night"></input><label htmlFor="night" className="content__filter__checkmark">Ночное</label></li>
      <li><input type="checkbox" id="quick" name="quick"></input><label htmlFor="quick" className="content__filter__checkmark">Срочное</label></li>
      <div className="content__select"><select><option>Никита Ласточкин</option><option>Геннадий Орлов</option><option>Валерий Чайкин</option></select></div>
    </div>
  );
};

export default ContentFilter;