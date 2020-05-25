import {changeItemByPropName} from "../utils/items-helpers";

test('Should change item by prop name', () => {
   const obj = [
       {
           id: 1,
           name: 'a',
           location: 'x',
       },
       {
           id: 2,
           name: 'b',
           location: 'x',
       },
   ];
   const propName = 'id';
   const itemIndexToChange = obj.length - 1;
   const itemToChange = obj[itemIndexToChange];
   const idToChange = itemToChange.id;
   const testValue = 'c';

   const newObj = changeItemByPropName(obj, propName, idToChange, { name: testValue });

   expect(newObj[itemIndexToChange].name).toBe(testValue);
});