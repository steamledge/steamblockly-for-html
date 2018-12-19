'use strict';
goog.provide('Blockly.Python.math');
goog.require('Blockly.Python');


Blockly.Python['operators_num'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = parseFloat(block.getFieldValue('NAME'));
  var order;
  if (code == Infinity) {
    code = 'float("inf")';
    order = Blockly.Python.ORDER_FUNCTION_CALL;
  } else if (code == -Infinity) {
    code = '-float("inf")';
    order = Blockly.Python.ORDER_UNARY_SIGN;
  } else {
    order = code < 0 ? Blockly.Python.ORDER_UNARY_SIGN :
            Blockly.Python.ORDER_ATOMIC;
  }
  return [code, order];
};
 
Blockly.Python['operators_string'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code =  Blockly.Python.quote_(block.getFieldValue('NAME'));
  return [code, Blockly.Python.ORDER_ATOMIC];
};
 
Blockly.Python['operators_random'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  'random.randint' + '(' + value_val1 + ',' + value_val2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['operators_logic_and'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  value_val1 + ' and ' + value_val2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_LOGICAL_AND];
};

Blockly.Python['operators_logic_or'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  number_num1 + ' or ' + number_num2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_LOGICAL_OR];
};

Blockly.Python['operators_logic_not'] = function(block) {
  var value_val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ' NOT ' + value_val2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_LOGICAL_NOT];
};

Blockly.Python['operators_less_than'] = function(block) {
  var value_val0 = Blockly.Python.valueToCode(block, 'VAL0', Blockly.Python.ORDER_ATOMIC);
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  value_val0 + ' < ' + value_val1;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_RELATIONAL];
};

Blockly.Python['operators_greater_than'] = function(block) {
  var value_val0 = Blockly.Python.valueToCode(block, 'VAL0', Blockly.Python.ORDER_ATOMIC);
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_val0 + ' > ' + value_val1;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_RELATIONAL];
};

Blockly.Python['operators_equal_to'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_val1 + ' == ' + value_val2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_RELATIONAL];
};

Blockly.Python['operators_plus'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_val1 + ' + ' + value_val2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ADDITIVE];
};

Blockly.Python['operators_minus'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_val1 + ' - ' + value_val2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ADDITIVE];
};

Blockly.Python['operators_divide'] = function(block) {
  var value_val0 = Blockly.Python.valueToCode(block, 'VAL0', Blockly.Python.ORDER_ATOMIC);
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_val0 + ' / ' + value_val1;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.Python['operators_multiply'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_val1 + ' * ' + value_val2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.Python['operators_mode'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  var value_val0 = Blockly.Python.valueToCode(block, 'VAL0', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_val1 + ' % ' + value_val0;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.Python['operators_round'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  'math.round' + '(' + value_val1 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['operators_join'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '"' + value_val1 + '"' + ' + ' + '"' + value_val2 + '"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['operators_letter'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'print' + '(' + value_val2 + '(' + value_val2 + '[' + value_val1 + ']' + ')' + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['operators_length'] = function(block) {
  var value_val = Blockly.Python.valueToCode(block, 'VAL', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'print' + '(' + 'len' + '(' + value_val1 + ')' + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['operators_cast'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + ' = ' + 'str' + '(' + value_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['operators_index'] = function(block) {
  var value_val0 = Blockly.Python.valueToCode(block, 'VAL0', Blockly.Python.ORDER_ATOMIC);
  var value_val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'print' + '(' + '(' + value_val0 + ')' + 'in' + value_val1 + ')' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

