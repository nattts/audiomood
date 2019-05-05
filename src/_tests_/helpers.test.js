import * as helper from 'utils/helpers'; 
import 'jest-dom/extend-expect';

describe('divBuilder()', () => {


 const obj = {
  title:'universeaxiom',
  src:'https://hearthis.at/dereference/dereference-usdnb-mix/listen/?s=sjO',
  genre: 'Drum and Bass'
 };

 test('return a DIV element', async () => {
  expect.assertions(1);
  const actual = await helper.divBuilder(obj);
  expect(actual).toBeInstanceOf(HTMLElement);
 });
  
 test('checks if class value is assigned to the element', async () => {
  const actual = await helper.divBuilder(obj); 
  expect(actual).toHaveClass(obj.title);
 });

 test('checks if genre attribute and a value is assigned to the element', async () => {
  const actual = await helper.divBuilder(obj); 
  expect(actual).toHaveAttribute('data-genre', obj.genre);
 });

 test('checks if src attribute and a value is assigned to the element', async () => {
  const actual = await helper.divBuilder(obj); 
  expect(actual).toHaveAttribute('data-src', obj.src);
 });
});


describe('divBatch()', () => {
 const mockCB = jest.fn();
 const genre = 'Drum and Bass';
 const src = 'https://hearthis.at/dereference/dereference-usdnb-mix/listen/?s=sjO';
 const artist = 'universeaxiom';
 const arr = 
  [ 
   { artist:'universeaxiom',
    genre: 'Drum and Bass',
    src:'https://hearthis.at/dereference/dereference-usdnb-mix/listen/?s=sjO'
   }
  ];

 
 test('checks if a callback is called', async () => {
  expect.assertions(1);
 
  const actual = await helper.divBatch(arr, mockCB);
  expect(mockCB).toBeCalled();
 });

 test('checks if the return value is an array', async () => {
  expect.assertions(1);

  const actual = await helper.divBatch(arr, mockCB);
  expect(actual).toBeInstanceOf(Array) ;
 });

});


describe('parse()', () => {
 test('return parsed JSON object', async () => {
  const jfile = require('components/moodbox/mood.json');
  const actual = await helper.parse(jfile);
  const expected = 
  {
   nostalgic:'Blues',
   romantic:'Jazz',
   euphoric:'Trance', 
   energetic:'Techno',
   calm:'Ambient',
   angry:'Industrial',
   relaxed:'Acoustic',
   happy:'Jungle',
   focused:'House',
   ecstatic:'Psytrance'
  };
 
  expect(actual).toMatchObject(expected) ;

 });
});







