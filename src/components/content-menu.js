import React from 'react';

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

export default ContentMenu;