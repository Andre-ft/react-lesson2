import React from 'react';
import paintings from './paintings.json';
import PaintingList from 'components/PaintingList';
import Section from 'components/Section';
import ColorPicker from 'components/ColorPicker';
import Alert from 'components/Alert';
import Container from 'components/Container';
import Box from 'components/Box';
// import Painting from './components/Painting';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  // const element = React.createElement(
  //   'div',
  //   { a: 5, b: 10, key: 'aac' },
  //   'Hello world',
  //   'Hello vasya',
  //   'Hello Petya',
  // );
  // console.log(element);

  // const jsxElement = <div key="aad">Hello jsx Element</div>;

  // const secondElement = React.createElement('span', {
  //   key: 'aaa',
  //   children: 'Hi ',
  // });
  // const thirdElement = React.createElement('span', {
  //   key: 'aab',
  //   children: 'my world!',
  // });

  // const nextJsxElement = (
  //   <div key="aae">
  //     <h1>Next jsx element</h1>
  //     {secondElement}
  //     {thirdElement}
  //   </div>
  // );

  // const data = {
  //   id: 'id-1',
  //   url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
  //   title: 'Feathers. Art abstract',
  //   price: 500,
  //   author: {
  //     tag: 'ractapopulous',
  //     url: 'https://pixabay.com/users/ractapopulous-24766/',
  //   },
  //   quantity: '10',
  // };

  // const onePainting = (
  //   <div key="aaf">
  //     <img src={data.url} alt={data.title} width="480" />
  //     <h2>{data.title}</h2>
  //     <p>
  //       Автор: <a href={data.author.url}>{data.author.tag}</a>
  //     </p>
  //     <p>Цена: {data.price} кредитов</p>
  //     <p>
  //       Доступность: {data.quantity < 10 ? 'заканчивается' : 'есть в наличии'}
  //     </p>
  //     <button type="button">Добавить в корзину</button>
  //   </div>
  // );

  return [
    // element,
    // secondElement,
    // thirdElement,
    // jsxElement,
    // nextJsxElement,
    // onePainting,
    <div key={'gfgf'}>
      <Section title={'Top of week'}>
        <PaintingList items={paintings} />
      </Section>

      <Section />
    </div>,
    <ColorPicker options={colorPickerOptions} />,
    <Container>
      <Alert text="Boss everything is bad!" type=" " />
      <Alert text="Boss everything is bad!" type="success" />
      <Alert text="Boss everything is bad!" type="warning" />
      <Alert text="Boss everything is very bad!" type="error" />
    </Container>,
    <Container>
      <Box type="small" classNames="big red" />
      <Box type="medium" styles={{ border: '3px solid black' }} />
      <Box type="large" styles={{ color: 'white', fontSize: '25px' }} />
    </Container>,
    // <Painting key="aag" {...data} />,
    // <div>
    //   {paintings.map(painting => (
    //     <Painting key={painting.id} {...painting} />
    //   ))}
    // </div>,
    // <Painting
    //   key="aag"
    //   url={data.url}
    //   title={data.title}
    //   author={data.author}
    //   price={data.price}
    //   quantity={data.quantity}
    // />,
  ];
}
