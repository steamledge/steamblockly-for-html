Blockly.Python['styles_style'] = function(block) {
  var statements_stylesstyles = Blockly.Python.statementToCode(block, 'stylesstyles');
  // TODO: Assemble Python into code variable.
  var code = '&lt;style&gt;\n'
  				+statements_stylesstyles+
  				'&lt;/style&gt;\n' ;
  return code;
};
Blockly.Python['styles_div'] = function(block) {
  var value_div = Blockly.Python.valueToCode(block, 'div', Blockly.Python);
  var statements_class = Blockly.Python.statementToCode(block, 'class');
  // TODO: Assemble Python into code variable.
  var code = '&lt;div class ="'+value_div+'"&gt;\n'

  				+statements_class+

  				'&lt;/div&gt;\n';
  return code;
};
Blockly.Python['styles_span'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python);
  var statements_class = Blockly.Python.statementToCode(block, 'class');
  // TODO: Assemble Python into code variable.
  var code = '&lt;span style = "'+value_name+'" &gt;\n'
  				+statements_class+
  				'&lt;/span&gt;\n';
  return code;
};
Blockly.Python['styles_footer'] = function(block) {
  var statements_stylesfooter = Blockly.Python.statementToCode(block, 'stylesfooter');
  // TODO: Assemble Python into code variable.
  var code = '&lt;footer&gt;\n'
  		+statements_stylesfooter+
  				'&lt;/footer&gt;\n';
  return code;
};
Blockly.Python['styles_article'] = function(block) {
  var statements_stylesarticle = Blockly.Python.statementToCode(block, 'stylesarticle');
  // TODO: Assemble Python into code variable.
  var code = '&lt;article&gt;\n'
  		+statements_stylesarticle+
  				'&lt;/article&gt;\n';
  return code;
};
Blockly.Python['styles_section'] = function(block) {
  var statements_stylessection = Blockly.Python.statementToCode(block, 'stylessection');
  // TODO: Assemble Python into code variable.
  var code = '&lt;section&gt;\n'
  		+statements_stylessection+
  		'&lt;/section&gt;\n';
  return code;
};
Blockly.Python['styles_main'] = function(block) {
  var statements_stylesmain = Blockly.Python.statementToCode(block, 'stylesmain');
  // TODO: Assemble Python into code variable.
  var code = '&lt;main&gt;\n'
  +statements_stylesmain+
  			'&lt;/main&gt;\n';
  return code;
};
Blockly.Python['styles_aside'] = function(block) {
  var statements_stylesarticle = Blockly.Python.statementToCode(block, 'stylesaside');
  // TODO: Assemble Python into code variable.
  var code = ' &lt;aside&gt;\n'
  			+statements_stylesaside+
  				'&lt;/aside&gt;\n';
  return code;
};
Blockly.Python['styles_details'] = function(block) {
  var statements_stylesdetails = Blockly.Python.statementToCode(block, 'stylesdetails');
  // TODO: Assemble Python into code variable.
  var code = '&lt;details&gt;\n'
  		+statements_stylesdetails+
  				'&lt;/details&gt;\n';
  return code;
};
Blockly.Python['styles_summary'] = function(block) {
  var statements_stylessummary = Blockly.Python.statementToCode(block, 'stylessummary');
  // TODO: Assemble Python into code variable.
  var code = '&lt;summary&gt;\n'
  		+statements_stylessummary+
  				'&lt;/summary&gt;\n';
  return code;
};
Blockly.Python['styles_dialog'] = function(block) {
  var statements_stylesdialog = Blockly.Python.statementToCode(block, 'stylesdialog');
  // TODO: Assemble Python into code variable.
  var code = '&lt;dialog open&gt;\n'
  		+statements_stylesdialog+
  				'&lt;/dialog&gt;\n';
  return code;
};
Blockly.Python['styles_data'] = function(block) {
  var statements_stylesdata = Blockly.Python.statementToCode(block, 'stylesdata');
  // TODO: Assemble Python into code variable.
  var code = '&lt;data&gt;\n'
  				+statements_stylesdata+
  				'&lt;/data&gt;\n';
  return code;
};