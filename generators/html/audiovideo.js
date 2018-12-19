Blockly.Python['audio_audio'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '&lt;audio controls = "'+value_name+'" &gt;\n'
  
            +statements_name+'\n'+

                '&lt;/audio&gt;\n';
  return code;
};

Blockly.Python['audio_source'] = function(block) {
  var value_source = Blockly.Python.valueToCode(block, 'source', Blockly.Python);
  var value_src = Blockly.Python.valueToCode(block, 'src', Blockly.Python);
  // TODO: Assemble Python into code variable.
  var code = '&lt;source src = "'+value_source+'" type = "'+value_src+'"&gt;\n';
  return code;
};