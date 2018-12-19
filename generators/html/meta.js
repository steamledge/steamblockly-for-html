Blockly.Python['meta_meta'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python);
  // TODO: Assemble Python into code variable.
  var code = '&lt;meta charset = "'+value_name+'" &gt;\n';
  return code;
};

Blockly.Python['meta_charset'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'name', Blockly.Python);
  var value_content = Blockly.Python.valueToCode(block, 'content', Blockly.Python);
  // TODO: Assemble Python into code variable.
  var code = '&lt;meta name ="'+value_name+'" content ="'+value_content+'"&gt;\n';
  return code;
};
