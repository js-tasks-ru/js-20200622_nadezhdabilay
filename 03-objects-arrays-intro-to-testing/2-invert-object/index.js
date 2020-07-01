/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  let object = {};
  if (obj === null){
    return object = {};
  }
  else if ( obj !== null && obj !== undefined) {
    let keys = Object.keys(obj),
      values = Object.values(obj);
    for(let i = 0; i < keys.length; i++){
      object[values[i]] = keys[i];
    }
    return object;
  }
  else if(obj === undefined){
    return undefined;
  }
}
