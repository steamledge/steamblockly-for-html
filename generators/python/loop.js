Blockly.Python['loop_if'] = function(block) {
  var value_if = Blockly.Python.valueToCode(block, 'if', Blockly.Python.ORDER_ATOMIC);
  var statements_then = Blockly.Python.statementToCode(block, 'then');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['loop_if_else'] = function(block) {
  var value_if = Blockly.Python.valueToCode(block, 'if', Blockly.Python.ORDER_ATOMIC);
  var statements_then = Blockly.Python.statementToCode(block, 'then');
  var statements_else = Blockly.Python.statementToCode(block, 'else');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['loop_if_elif'] = function(block) {
  var value_if = Blockly.Python.valueToCode(block, 'if', Blockly.Python.ORDER_ATOMIC);
  var statements_then = Blockly.Python.statementToCode(block, 'then');
  var value_elif = Blockly.Python.valueToCode(block, 'elif', Blockly.Python.ORDER_ATOMIC);
  var statements_then2 = Blockly.Python.statementToCode(block, 'then2');
  var statements_else = Blockly.Python.statementToCode(block, 'else');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['loop_for'] = function(block) {
  var value_for = Blockly.Python.valueToCode(block, 'for', Blockly.Python.ORDER_ATOMIC);
  var value_sequence = Blockly.Python.valueToCode(block, 'sequence', Blockly.Python.ORDER_ATOMIC);
  var statements_code = Blockly.Python.statementToCode(block, 'code');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['loop_for_else'] = function(block) {
  var value_for = Blockly.Python.valueToCode(block, 'for', Blockly.Python.ORDER_ATOMIC);
  var value_sequence = Blockly.Python.valueToCode(block, 'sequence', Blockly.Python.ORDER_ATOMIC);
  var statements_code = Blockly.Python.statementToCode(block, 'code');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['loop_while'] = function(block) {
  var value_expression = Blockly.Python.valueToCode(block, 'expression', Blockly.Python.ORDER_ATOMIC);
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['loop_while_else'] = function(block) {
  var value_expression = Blockly.Python.valueToCode(block, 'expression', Blockly.Python.ORDER_ATOMIC);
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  var statements_else = Blockly.Python.statementToCode(block, 'else');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['loop_break'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['loop_continue'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['loop_pass'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

