import React from 'react';
import ReactDOM from 'react-dom';

const HeaderLogo = () => {
  return (
    <h1>taskon</h1>
  );
};

const HeaderMenuOne = () => {
  return (<ul>
      <li>Задания</li>
      <li>Финансы</li>
      <li>Компания</li>
      <li>Статистика</li>
    </ul>);
};

const HeaderMenuTwo = () => {
  return (<ul>
      <li>Баланс <span>218 982,90 рублей</span></li>
      <li><select><option>Уведомления</option></select></li>
      <li><select><option>Никита Ласточкин</option></select></li>
      <li>FAQ</li>
    </ul>);
};

const ContentTitle = () => {
  return (
    <h1>Задания</h1>
  );
};

const ContentMenu = () => {
  return (
    <ul>
      <li>Новые <span>1</span></li>
      <li>В работе <span>1</span></li>
      <li>На рассмотрении <span>3</span></li>
      <li>Выполнены <span>187</span></li>
      <li>Отменены <span>4</span></li>
      <li>Черновики <span>7</span></li>
      <li><button>+ <span>Добавить задание</span></button></li>
    </ul>
  );
};

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

const ContentTable = () => {
  return (
    <table>
      <tr>
        <td>ID</td>
        <td>Город</td>
        <td>Название</td>
        <td>Выполнить до</td>
        <td>Сумма</td>
      </tr>
      <tr>
        <td>12564</td>
        <td>Самара</td>
        <td>Подключение провода от клеммной коробки пожарной сигнализации к расцепителю, проверить работоспособность</td>
        <td>13 августа</td>
        <td>7 021 рублей</td>
      </tr>
      <tr>
        <td>12565</td>
        <td>Волгоград</td>
        <td>Установить систему видео-наблюдения</td>
        <td>13 августа</td>
        <td>27 340 рублей</td>
      </tr>
      <tr>
        <td>12566</td>
        <td>Челябинск</td>
        <td>Заменить осветительное оборудование в складском помещении</td>
        <td>13 августа</td>
        <td>12 780 рублей</td>
      </tr>
      <tr>
        <td>12567</td>
        <td>Новый Уренгой</td>
        <td>Переоборудовать парадный вход</td>
        <td>13 августа</td>
        <td>150 799 рублей</td>
      </tr>
    </table>
  );
};

const App = () => {
  return (
    <div>
      <HeaderLogo />
      <HeaderMenuOne />
      <HeaderMenuTwo />
      <ContentTitle />
      <ContentMenu />
      <ContentFilter />
      <ContentTable />
    </div>
  );
;}

ReactDOM.render(<App />, document.getElementById('root'));