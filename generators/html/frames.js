Blockly.Python['frames_iframe'] = function(block) {
  var value_iframe = Blockly.Python.valueToCode(block, 'iframe', Blockly.Python);
  var statements_src = Blockly.Python.statementToCode(block, 'src');
  // TODO: Assemble Python into code variable.
  var code = '&lt;iframe src ="'+value_iframe+'"&gt;\n'

  				+statements_src+ '\n'+

  				'&lt;/iframe&gt;\n';
  return code;
};

