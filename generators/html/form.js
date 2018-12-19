Blockly.Python['form_form'] = function(block) {
  var value_form = Blockly.Python.valueToCode(block, 'form', Blockly.Python);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python);
  var statements_forms = Blockly.Python.statementToCode(block, 'forms');
  // TODO: Assemble Python into code variable.
  var code = '&lt;form action = "'+value_form+'"   method = "'+value_name+'"&gt;\n'

  					   +statements_forms+ '\n'+

                    '&lt;/form&gt;\n';
  return code;
};

Blockly.Python['form_input'] = function(block) {
  var value_inputs = Blockly.Python.valueToCode(block, ' inputs', Blockly.Python);
  var value_method = Blockly.Python.valueToCode(block, 'method', Blockly.Python);
  var value_name = Blockly.Python.valueToCode(block, 'name', Blockly.Python);
  // TODO: Assemble Python into code variable.
  var code = '&lt;input type = "'+value_inputs+'"   name = "'+value_method+'" value ="'+value_name+'"&gt;\n';
  return code;
};

Blockly.Python['form_textarea'] = function(block) {
  var value_rows = Blockly.Python.valueToCode(block, 'rows', Blockly.Python);
  var value_cols = Blockly.Python.valueToCode(block, 'cols', Blockly.Python);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '&lt;textarea rows = "'+value_rows+'"  cols = "'+value_cols+'"&gt;\n'
  				+statements_name+ '\n'+
  						'&lt;/textarea&gt;\n';
  return code;
};

Blockly.Python['form_button'] = function(block) {
  var value_button = Blockly.Python.valueToCode(block, 'button', Blockly.Python);
  var statements_type = Blockly.Python.statementToCode(block, 'type');
  // TODO: Assemble Python into code variable.
  var code = '&lt;button type = "'+value_button+'"&gt;\n'

  				            +statements_type+ '\n'+

  						'&lt;/button&gt;\n';
  return code;
};
Blockly.Python['form_select'] = function(block) {
  var statements_select = Blockly.Python.statementToCode(block, 'select');
  // TODO: Assemble Python into code variable.
  var code = ' &lt;select&gt;\n' 

  					+statements_select+  

  				 '&lt;/select&gt; \n';
  return code;
};

Blockly.Python['form_option'] = function(block) {
  var statements_option  = Blockly.Python.statementToCode(block, 'option');
  // TODO: Assemble Python into code variable.
  var code = '&lt;option&gt;\n' 

  					+statements_option+ 

  				 '&lt;/option&gt; \n';
  return code;
};
Blockly.Python['form_optgroup'] = function(block) {
  var statements_optgroup  = Blockly.Python.statementToCode(block, 'optgroup');
  // TODO: Assemble Python into code variable.
  var code = '&lt;optgroup&gt;\n' 

  					+statements_optgroup+ 

  				 '&lt;/optgroup&gt; \n';
  return code;
};
Blockly.Python['form_label'] = function(block) {
  var value_label = Blockly.Python.valueToCode(block, 'label', Blockly.Python);
  var statements_for = Blockly.Python.statementToCode(block, 'for');
  // TODO: Assemble Python into code variable.
  var code = '&lt;label for = "'+value_label+'"&gt;\n'
  				+statements_for+ '\n'+

  				'&lt;/label&gt;\n';
  return code;
};

Blockly.Python['form_fieldset'] = function(block) {
  var statements_fieldset  = Blockly.Python.statementToCode(block, 'fieldset');
  // TODO: Assemble Python into code variable.
  var code = '&lt;fieldset&gt;\n' 

  					+statements_fieldset+ 

  				 '&lt;/fieldset&gt; \n';
  return code;
};
Blockly.Python['form_legend'] = function(block) {
  var statements_legend  = Blockly.Python.statementToCode(block, 'legend');
  // TODO: Assemble Python into code variable.
  var code = '&lt;legend&gt;\n' 

  					+statements_fieldset+ 

  				 '&lt;/legend&gt; \n';
  return code;
};
Blockly.Python['form_datalist'] = function(block) {
  var statements_datalist = Blockly.Python.statementToCode(block, 'datalist');
  // TODO: Assemble Python into code variable.
  var code = '&lt;datalist&gt;\n' 

  					+statements_datalist+ 

  				 '&lt;/datalist&gt; \n';
  return code;
};





