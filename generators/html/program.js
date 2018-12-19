Blockly.Python['program_noscript'] = function(block) {
  var statements_programscript = Blockly.Python.statementToCode(block, 'programscript');
  // TODO: Assemble Python into code variable.
  var code = '&lt;noscript&gt;\n'
  						+statements_programscript+
  			'&lt;/noscript&gt;\n';
  return code;
};

Blockly.Python['program_embed'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python);
  // TODO: Assemble Python into code variable.
  var code = '&lt;embed src = "'+value_name+'"&gt;\n';
  return code;
};

Blockly.Python['program_object'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'object', Blockly.Python);
  var statements_data = Blockly.Python.statementToCode(block, 'data');
  // TODO: Assemble Python into code variable.
  var code = '&lt;object type = "'+value_object+'"&gt;\n'

  			+statements_data+

  					'&lt;/object&gt;\n';
  return code;
};

Blockly.Python['program_param'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'name', Blockly.Python);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python);
  // TODO: Assemble Python into code variable.
  var code = '&lt;param name ="'+value_name+'"  value = "'+value_value+'"&gt;\n';
  return code;
};
