/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let array = [],
    strForArray = '';
  for(const [key, value] of Object.entries(obj)){
    strForArray +=`${value} `;
  }
  array = strForArray.split(' ');
  let result = array.filter( z => fields.indexOf(z) !== -1 );

  if(result.length == 0){
    return obj;
  }
  else{
   const obj = {};
   let result1 = array.filter( z =>
     fields.indexOf(z) === -1
     );
    result1.map(a => {
         if (a != ""){
           obj[a] = a;
        }
     });
    return obj;
  }
};
