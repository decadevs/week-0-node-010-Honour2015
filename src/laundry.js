/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
 function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  let objClean = {};
  let objDirty = {};
  let washCount = 0;
 //  Create an object of cleanSocks
  for(let clean of cleanPile) {
    objClean[clean] = objClean[clean] + 1 || 1
  }
 //  Create an object of dirtySocks
  for(let dirty of dirtyPile) {
    objDirty[dirty] = objDirty[dirty] + 1 || 1
 }

 //
  for(let i = 0; i <  dirtyPile.length;  i++) {
    if(washCount < noOfWashes && cleanPile.includes(dirtyPile[i]) && objClean[dirtyPile[i]] % 2 !== 0){
         cleanPile.push(dirtyPile[i])
         objClean[dirtyPile[i]] += 1
         dirtyPile.splice(i, 1)
         washCount++
       }
  }
 //
  for(let j = 0; j < dirtyPile.length; j++){
   if(objDirty[dirtyPile[j]] > 1 && washCount < noOfWashes){
       cleanPile.push(dirtyPile[j])
       washCount++
   }
  }

 //
  let pair = 0
  let finalObj = {}
  cleanPile.forEach(e => {

   finalObj[e] = finalObj[e] + 1 || 1
    if(finalObj[e] % 2 === 0){
     pair++
    }
  })
  return pair

 }

 module.exports = getMaxPairs;
