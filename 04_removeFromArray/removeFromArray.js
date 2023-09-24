const removeFromArray = function(myArray,...toRemove) {
    const removedArray = []
    myArray.forEach((item) => {
    if(!toRemove.includes(item)){
        removedArray.push(item)
    }
    }); 
    return removedArray
    
};

// Do not edit below this line
module.exports = removeFromArray;
