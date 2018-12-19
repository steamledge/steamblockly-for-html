Blockly.Python['basic_doctype'] = function(block) {
  
  // TODO: Assemble Python into code variable.
  var code = '&lt;!DOCTYPE html&gt;\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['basic_html'] = function(block) {
  // TODO: Assemble Python into code variable.
  var content = Blockly.Python.statementToCode(block, 'htmlStatements');
  var code = '&lt;html&gt;\n' +content+ '&lt;/html&gt;\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['basic_head'] = function(block) {
  // TODO: Assemble Python into code variable.
  var content = Blockly.Python.statementToCode(block, 'headStatements');
  var code = '&lt;head&gt;\n'  +content+ '&lt;/head&gt;\n';
  return code;
};

Blockly.Python['basic_body'] = function(block) {
  var statements_body = Blockly.Python.statementToCode(block, 'body');
  // TODO: Assemble Python into code variable.
  var code = '&lt;body&gt;\n' +statements_body+  '&lt;/body&gt;\n';
  return code;
};

Blockly.Python['basic_title'] = function(block) {
  var text_title = block.getFieldValue('title');
  // TODO: Assemble Python into code variable.
  var code = '&lt;title&gt;' +text_title+ 

  			 '&lt;/title&gt;\n';
  return code;
};
Blockly.Python['basic_heading1'] = function(block) {
  var statements_heading1 = Blockly.Python.statementToCode(block, 'Heading1');
  // TODO: Assemble Python into code variable.
  var code = '&lt;h1&gt;\n' +statements_heading1+ 

  			' &lt;/h1&gt;\n';
  return code;
};
Blockly.Python['basic_heading2'] = function(block) {
  var statements_heading2 = Blockly.Python.statementToCode(block, 'heading2');
  // TODO: Assemble Python into code variable.
  var code = '&lt;h2&gt;\n' +statements_heading2+

  			 ' &lt;/h2&gt;\n';
  return code;
};

Blockly.Python['basic_heading3'] = function(block) {
  var statements_heading3 = Blockly.Python.statementToCode(block, 'heading3');
  // TODO: Assemble Python into code variable.
  var code = '&lt;h3&gt;\n' +statements_heading3+ 

  			 '&lt;/h3&gt;\n';
  return code;
};

Blockly.Python['basic_heading4'] = function(block) {
  var statements_heading4 = Blockly.Python.statementToCode(block, 'heading4');
  // TODO: Assemble Python into code variable.
  var code = '&lt;h4&gt;\n'  +statements_heading4+
  				
  				' &lt;/h4&gt;\n';
  return code;
};

Blockly.Python['basic_heading5'] = function(block) {
  var statements_heading5 = Blockly.Python.statementToCode(block, 'heading5');
  // TODO: Assemble Python into code variable.
  var code = '&lt;h5&gt;\n' +statements_heading5+

  			 '&lt;/h5&gt;\n';
  return code;
};

Blockly.Python['basic_heading6'] = function(block) {
  var statements_heading6 = Blockly.Python.statementToCode(block, 'heading6');
  // TODO: Assemble Python into code variable.
  var code = '&lt;h6&gt;\n' +statements_heading6+  

  				'&lt;/h6&gt;\n';
  return code;
};
Blockly.Python['basic_paragraph'] = function(block) {
  var statements_paragraph = Blockly.Python.statementToCode(block, 'paragraph');
  // TODO: Assemble Python into code variable.
  var code = '&lt;p&gt;\n'  +statements_paragraph+ 

 				 '&lt;/p&gt;\n';
  return code;
};

Blockly.Python['basic_break'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '&lt;br&gt;\n';
  return code;
};
Blockly.Python['basic_break'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '&lt;hr&gt;\n';
  return code;
};





