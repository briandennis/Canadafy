module.exports = function(fileInfo, api) {
  var variables =  api.jscodeshift(fileInfo.source).findVariableDeclarators();
  var variableNodes = variables.nodes().reduce(function(prevVal, item){
    console.log(item.id.type);
    if(item.id.type === 'Identifier'){
      prevVal.push(item.id);
    }
    return prevVal;
  }, []);

  return api.jscodeshift(fileInfo.source)
    .findVariableDeclarators(variableNodes[0].name,variableNodes[1].name)
    .renameTo(variableNodes[0].name + 'Worked', variableNodes[1].name + 'Worked')
    .toSource();

};
