/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let array = [],
    strForArray = '';
  for(const [key, value] of Object.entries(obj)){
    strForArray +=`${value} `;
  }
  array = strForArray.split(' ');
  let result = array.filter( z => fields.indexOf(z) !== -1 );
  if(result.length == 0){
    return obj = {};
  }
  else{
    const obj = {} ;
   fields.map(a => {
          obj[a] = a;
      })
    return obj;
  }
};
