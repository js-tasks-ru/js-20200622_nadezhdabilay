/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let array = [];
  for(const [key, value] of Object.entries(obj)){
    array +=`${value} `;
  }
  array = array.split(' ');
  let result = array.filter( z => fields.indexOf(z) !== -1 );
  if(result.length == 0){
    return obj ={};
  }
  else{
    obj = new Object ();
   fields.map(a => {
          obj[a] = a;
      })
  }
  return obj;
};
