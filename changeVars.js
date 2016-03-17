module.exports = function(fileInfo, api) {
  var variables =  api.jscodeshift(fileInfo.source).findVariableDeclarators('foo');
  console.log(variables);    
};
