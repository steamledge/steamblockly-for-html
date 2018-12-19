Blockly.Python['format_text'] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble Python into code variable.
  var code = text_text + '\n';
  return code;
};
Blockly.Python['format_textt'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = text_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['format_abbr'] = function(block) {
  var statements_abbreviate = Blockly.Python.statementToCode(block, 'abbreviate');
  // TODO: Assemble Python into code variable.
  var code = '&lt;abbr&gt;\n' 
  					+statements_abbreviate+
  					'&lt;/abbr&gt;\n';
  return code;
};

Blockly.Python['format_address'] = function(block) {
  var statements_address = Blockly.Python.statementToCode(block, 'address');
  // TODO: Assemble Python into code variable.
  var code = '&lt;address&gt;\n'  

  					+statements_address+ 

				'&lt;/address&gt;\n';
  return code;
};

Blockly.Python['format_bold'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '&lt;b&gt;\n' +  '&lt;/b&gt;\n';
  return code;
};

Blockly.Python['format_bdi'] = function(block) {
  var statements_bodyisolate = Blockly.Python.statementToCode(block, 'bodyisolate');
  // TODO: Assemble Python into code variable.
  var code = '&lt;bdi&gt;\n' +statements_bodyisolate+ 

  			 '&lt;/bdi&gt;\n';
  return code;
};
Blockly.Python['format_big'] = function(block) {
  var statements_big = Blockly.Python.statementToCode(block, 'big');
  // TODO: Assemble Python into code variable.
  var code = '&lt;big&gt;\n' 
  				+statements_big+ 

   				'&lt;/big&gt;\n';
  return code;
};

Blockly.Python['format_blockquote'] = function(block) {
  var statements_blockquote = Blockly.Python.statementToCode(block, 'blockquote');
  // TODO: Assemble Python into code variable.
  var code = '&lt;blockquote&gt;\n' +statements_blockquote+  

 				'&lt;/blockquote&gt;\n';
  return code;
};
Blockly.Python['format_em'] = function(block) {
  var statements_emphasied = Blockly.Python.statementToCode(block, 'emphasied');
  // TODO: Assemble Python into code variable.
  var code = '&lt;em&gt;\n' 
  				+statements_emphasied+  
  						'&lt;/em&gt;\n';
  return code;
};
Blockly.Python['format_strong'] = function(block) {
  var statements_strong = Blockly.Python.statementToCode(block, 'strong');
  // TODO: Assemble Python into code variable.
  var code = '&lt;strong&gt;\n' 
  					+statements_strong+ 

 		'&lt;/strong&gt;\n';
  return code;
};

Blockly.Python['format_italised'] = function(block) {
  var statements_italised = Blockly.Python.statementToCode(block, 'italised');
  // TODO: Assemble Python into code variable.
  var code = '&lt;i&gt;\n'
  			 +statements_italised+  
  			 '&lt;/i&gt;\n';
  return code;
};
Blockly.Python['format_mark'] = function(block) {
  var statements_mark = Blockly.Python.statementToCode(block, 'mark');
  // TODO: Assemble Python into code variable.
  var code = '&lt;mark&gt;\n' 
 			 +statements_mark+  
  				'&lt;/mark&gt;\n';
  return code;
};


Blockly.Python['format_underlined'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '&lt;u&gt;\n' 
  					+text_name+ 
  			'&lt;/u&gt;\n';
  return code;
};
