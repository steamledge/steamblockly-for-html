goog.provide('Blockly.Python.time');
goog.provide('Blockly.Python.sys');

goog.require('Blockly.Python');

Blockly.Python['controls_wait'] = function(block) {
  var number_times = block.getFieldValue('TIMES');
  // TODO: Assemble Python into code variable.    
  var code = 'time.sleep(' + number_times + ')\n';
  return code;
}


  Blockly.Python['controls_repeat'] = function(block) {
  // Repeat n times.
  if (block.getField('TIMES')) {
    // Internal number.
    var repeats = String(parseInt(block.getFieldValue('TIMES'), 10));
  } else {
    // External number.
    var repeats = Blockly.Python.valueToCode(block, 'TIMES',
        Blockly.Python.ORDER_NONE) || '0';
  }
  if (Blockly.isNumber(repeats)) {
    repeats = parseInt(repeats, 10);
  } else {
    repeats = 'int(' + repeats + ')';
  }
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  var loopVar = Blockly.Python.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for ' + loopVar + ' in range(' + repeats + '):\n' + branch;
  return code;
};

  Blockly.Python['controls_repeatuntil'] = function(block) {
  var condition = Blockly.Python.valueToCode(block, 'CONDITION', Blockly.Python.ORDER_ATOMIC);
  var branch = Blockly.Python.statementToCode(block, 'STATEMENT');
  // TODO: Assemble Python into code variable.
  var code = 'While True:\n'+
          branch + 
        '\  if '+ condition +':\n'+ 
          '\    break';
  return code;

};
Blockly.Python['controls_forever'] = function(block) {
  var branch = Blockly.Python.statementToCode(block, 'STATEMENT');
  // TODO: Assemble Python into code variable
  var code = 'while (true):\n' + branch ;
  return code;
};
 
Blockly.Python['controls_ifthen'] = function(block) {
  // If/elseif/else condition.
  var code = '', branchCode, conditionCode;
  conditionCode = Blockly.Python.valueToCode(block, 'CONDITION',
        Blockly.Python.ORDER_NONE) || 'False';
  branchCode = Blockly.Python.statementToCode(block, 'STATEMENT') ||
        Blockly.Python.PASS;
  code = 'if ' + conditionCode + ':\n' + branchCode;
  return code;
};

 Blockly.Python['controls_ifelse'] = function(block) {
  // If then.

  var code = '', branchCode, conditionCode, elseBranchCode;
  conditionCode = Blockly.Python.valueToCode(block, 'CONDITION',
        Blockly.Python.ORDER_NONE) || 'False';
  branchCode = Blockly.Python.statementToCode(block, 'STATEMENT') ||
        Blockly.Python.PASS;
  elseBranchCode = Blockly.Python.statementToCode(block, 'ELSE_STATEMENT') ||
        Blockly.Python.PASS;
  code = 'if ' + conditionCode + ':\n' + branchCode + '\nelse:\n' + elseBranchCode;
  return code;
};

 Blockly.Python['controls_waituntil'] = function(block) {
  var condition = Blockly.Python.valueToCode(block, 'CONDITION', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'while not '+condition+': \n' +
          '   time.sleep(1)\n';                 
  return code;
};


Blockly.Python['controls_stopall'] = function(block) {
  var stopselected = block.getFieldValue('TIMES');
  // TODO: Assemble Python into code variable.
  var code ='';
  if (stopselected == 'ALL'){
    code = 'exit()\n';
  }else if(stopselected == 'THISSPRITE'){
    code = 'exit("this script")\n';
  }else if(stopselected == 'OTHERS'){
    code = 'exit("other script in sprite")\n';
  }
  return code;
};


Blockly.Python['controls_createclone'] = function(block) {
  var cloneselected = block.getFieldValue('Statement');
  // TODO: Assemble Python into code variable.
  var code = ''; 
  if (cloneselected == 'true'){
     code ='create("myself")\n';
  }else if (cloneselected == 'false'){
     code = 'create("M-panda")\n';
  }
  return code;
};

Blockly.Python['controls_deleteclone'] = function(block) {

  // TODO: Assemble Python into code variable.
  var code = 'del(clone): \n';
  return code;
};
 
 Blockly.Python['controls_asclone'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '\n';
  return code;
};



