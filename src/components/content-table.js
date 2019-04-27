import React from 'react';
import ContentTableItem from './content-table-item';

const ContentTable = ({ tasks }) => {

  const elements = tasks.map((item) => {

    return (
          <ContentTableItem
          {...item}
          key={item.id}
        />
    );
  });

  return (
    <div className="container content__table">
    <table>
      <tbody>
      <tr>
        <th>ID</th>
        <th>Город</th>
        <th>Название</th>
        <th>Выполнить до</th>
        <th>Сумма</th>
      </tr>
      { console.log(elements) }
      { elements }
      </tbody>
    </table>
    </div>
  );
};

export default ContentTable;