/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let array = [];
  for(const [key, value] of Object.entries(obj)){
    array +=`${value} `;
  }
  array = array.split(' ');
  let result = array.filter( z => fields.indexOf(z) !== -1 );

  if(result.length == 0){
    return obj;
  }
  else{
   obj = new Object();
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
