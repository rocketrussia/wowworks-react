import React from 'react';

import ContentTableItem from './content-table-item';

const ContentTable = () => {
  return (
    <table>
      <tr>
        <td><ContentTableItem /></td>
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
        <td>7 021 ₽</td>
      </tr>
      <tr>
        <td>12565</td>
        <td>Волгоград</td>
        <td>Установить систему видео-наблюдения</td>
        <td>13 августа</td>
        <td>27 340 ₽</td>
      </tr>
      <tr>
        <td>12566</td>
        <td>Челябинск</td>
        <td>Заменить осветительное оборудование в складском помещении</td>
        <td>13 августа</td>
        <td>12 780 ₽</td>
      </tr>
      <tr>
        <td>12567</td>
        <td>Новый Уренгой</td>
        <td>Переоборудовать парадный вход</td>
        <td>13 августа</td>
        <td>150 799 ₽</td>
      </tr>
    </table>
  );
};

export default ContentTable;