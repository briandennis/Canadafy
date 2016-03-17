module.exports = function(fileInfo, api) {
  var variables =  api.jscodeshift(fileInfo.source).findVariableDeclarators();
  console.log(variables.nodes().reduce(function(prevVal, item){
    console.log(item.id.type);
    if(item.id.type === 'Identifier'){
      prevVal.push(item.id);
    }
    return prevVal;
  }, []).length);
};
