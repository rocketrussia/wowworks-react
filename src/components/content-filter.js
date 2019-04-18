import React from 'react';

const ContentFilter= () => {
  return (
    <ul>
      <li><input type="text" placeholder="Поиск по слову"></input></li>
      <li><input type="checkbox" value="false"></input>Персональное</li>
      <li><input type="checkbox" value="false"></input>Ночное</li>
      <li><input type="checkbox" value="false"></input>Срочное</li>
      <li><select><option>Никита Ласточкин</option></select></li>
    </ul>
  );
};

export default ContentFilter;