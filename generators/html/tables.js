Blockly.Python['tables_table'] = function(block) {
  var statements_table = Blockly.Python.statementToCode(block, 'table');
  // TODO: Assemble Python into code variable.
  var code = ' &lt; table&gt;\n' +statements_table+ '&lt; /table&gt;\n';
  return code;
};
Blockly.Python['tables_tr'] = function(block) {
  var statements_tablerow = Blockly.Python.statementToCode(block, 'tablerow');
  // TODO: Assemble Python into code variable.
  var code = ' &lt; tr&gt;\n' +statements_tablerow+ '&lt; /tr&gt;\n';
  return code;
};
Blockly.Python['tables_td'] = function(block) {
  var statements_tablesdata = Blockly.Python.statementToCode(block, 'tablesdata');
  // TODO: Assemble Python into code variable.
  var code ='&lt; td&gt;\n'
  					+statements_tablesdata+
  			'&lt; /td&gt;\n';
  return code;
};
Blockly.Python['tables_hr'] = function(block) {
  var statements_tables_horizontal = Blockly.Python.statementToCode(block, 'tables_horizontal');
  // TODO: Assemble Python into code variable.
  var code = '&lt; th&gt;\n'
  			+statements_tables_horizontal+
  			'&lt; /th&gt;\n';
  return code;
};
Blockly.Python['tables_caption'] = function(block) {
  var statements_tables_caption = Blockly.Python.statementToCode(block, 'tables_caption');
  // TODO: Assemble Python into code variable.
  var code = '&lt; caption&gt;\n'

  			       +statements_tables_caption+
  			 '&lt; /caption&gt;\n';
  return code;
};
Blockly.Python['tables_head'] = function(block) {
  var statements_tableshead = Blockly.Python.statementToCode(block, 'tableshead');
  // TODO: Assemble Python into code variable.
  var code = '&lt; th&gt;\n'
  	+statements_tableshead+
  				'&lt;/th&gt;\n';
  return code;
};
Blockly.Python['tables_foot'] = function(block) {
  var statements_tablesfoot = Blockly.Python.statementToCode(block, 'tablesfoot');
  // TODO: Assemble Python into code variable.
  var code = '&lt; tfoot&gt;\n'

  				'&lt; /tfoot&gt;\n';
  return code;
};
Blockly.Python['tables_colgroup'] = function(block) {
  var statements_tablescolumn = Blockly.Python.statementToCode(block, 'tablescolumn');
  // TODO: Assemble Python into code variable.
  var code = '&lt; colgroup&gt;\n'
  					+statements_tablescolumn+
  				'&lt; /colgroup&gt;';
  return code;
};
