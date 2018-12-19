Blockly.Python['function_def'] = function(block) {
  var value_def = Blockly.Python.valueToCode(block, 'def', Blockly.Python.ORDER_ATOMIC);
  var statements_statement = Blockly.Python.statementToCode(block, 'statement');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};