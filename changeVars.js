module.exports = function(fileInfo, api) {
  var variables =  api.jscodeshift(fileInfo.source).findVariableDeclarators();
  var variableNodes = variables.nodes().reduce(function(prevVal, item){
    console.log(item.id.type);
    if(item.id.type === 'Identifier'){
      prevVal.push(item.id);
    }
    return prevVal;
  }, []);

  var editObject = api.jscodeshift(fileInfo.source);

  variableNodes.forEach(function(node){
    console.log('trying...');
    editObject
    .findVariableDeclarators(node.name)
    .renameTo(node.name + 'Eh');
  });

  return editObject.toSource();

};
