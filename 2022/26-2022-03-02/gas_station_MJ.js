
// ! General double-loop approach 
// ! Time limit exceeded fail
var canCompleteCircuit1 = function(gas, cost) {
  let cycle = gas.length + 1;
  let result = 0;
  // check each elements whether they can go circular route.
  // check 1 loop cycle per each element
  for (let i = 0; i < gas.length; i++) { 
      let count = 0;
      let curGas = gas[i];
      
      for (let j = i ; count < cycle ; j++) {
          // if value j reaches the length of array, makes it to the index zero. 
          if (gas[j] === undefined) j = 0;
          count++;                         
          curGas = curGas - cost[j]            
          
          if (curGas < 0) {
              break;
          }
          else {    
            // if there is no element at the index [j + 1] , makes it to the zero.                 
            let charge = gas[j + 1] === undefined ? gas[0] : gas[j + 1]
            curGas += charge;
            result = i;
            if (count === cycle) return result;
          }            
      }        
  }  
  return -1;
};

console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));
console.log(canCompleteCircuit([5,1,2,3,4],[4,4,1,5,1]));
console.log(canCompleteCircuit([4,5,2,6,5,3],[3,2,7,3,2,9]));


//! Reference
var canCompleteCircuit2 = function(gas, cost) {
  let length = gas.length;
  let tank = 0;
  let cur = 0;
  let index = false;
  for (let i = 0; i < length; i++) {
      let amount = gas[i];
      let spend = cost[i];
      if (cur + amount - spend > 0) {
          if (index === false) {
              index = i;
          };
          cur += amount - spend;
      } else {
          index = false;
          cur = 0;
      };
      tank += amount - spend;
  };
  return (tank > -1 ? index : -1);
};