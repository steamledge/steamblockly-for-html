Blockly.Python['lists_ul'] = function(block) {
  var statements_ul = Blockly.Python.statementToCode(block, 'ul');
  // TODO: Assemble Python into code variable.
  var code = '&lt;ul&gt;\n' +statements_ul+ '&lt;/ul&gt;\n';
  return code;
};

Blockly.Python['lists_li'] = function(block) {
  var statements_lists = Blockly.Python.statementToCode(block, 'lists');
  // TODO: Assemble Python into code variable.
  var code = '&lt;li&gt;\n' +statements_lists+ '&lt;/li&gt;\n';
  return code;
};

Blockly.Python['lists_ol'] = function(block) {
  var statements_orderedlists = Blockly.Python.statementToCode(block, 'orderedlists');
  // TODO: Assemble Python into code variable.
  var code = '&lt;ol&gt;\n' +statements_orderedlists+ '&lt;/ol&gt;\n';
  return code;
};
Blockly.Python['lists_dl'] = function(block) {
  var statements_descriptionlists = Blockly.Python.statementToCode(block, 'descriptionlists');
  // TODO: Assemble Python into code variable.
  var code = '&lt;dl&gt;\n' +statements_descriptionlists+ '&lt;/dl&gt;\n';
  return code;
};
Blockly.Python['lists_dd'] = function(block) {
  var statements_descriptiondata = Blockly.Python.statementToCode(block, 'descriptiondata');
  // TODO: Assemble Python into code variable.
  var code = '&lt;dd&gt;\n'

  				+statements_descriptiondata+
  				
  				'&lt;/dd&gt;\n';
  return code;
};
Blockly.Python['lists_dt'] = function(block) {
  var statements_descriptiontable = Blockly.Python.statementToCode(block, 'descriptiontable');
  // TODO: Assemble Python into code variable.
  var code = '&lt;dt&gt;\n'

  				+statements_descriptiontable+
  				
  				'&lt;/dt&gt;\n';
  return code;
};
Blockly.Python['lists_label'] = function(block) {
  var statements_label = Blockly.Python.statementToCode(block, 'label');
  // TODO: Assemble Python into code variable.
  var code = ' &lt;label for = " "&gt;\n'
  					+statements_label+
  					'&lt;/label&gt;\n';
  return code;
};
