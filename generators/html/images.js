Blockly.Python['images_image'] = function(block) {
  var value_img = Blockly.Python.valueToCode(block, 'img', Blockly.Python);
  var value_src = Blockly.Python.valueToCode(block, 'src', Blockly.Python);
  // TODO: Assemble Python into code variable.
  var code = '&lt;img src = "'+value_img+'" alt = "'+value_src+'" /&gt;\n';
  return code;
};
Blockly.Python['images_map'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python);
  // TODO: Assemble Python into code variable.
  var code = '&lt;map name = "'+value_name+'"&gt;\n';
  			
  return code;
};
Blockly.Python['images_area'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python);
  var value_shape = Blockly.Python.valueToCode(block, 'shape', Blockly.Python);
  var value_href = Blockly.Python.valueToCode(block, 'href', Blockly.Python);
  var value_alt = Blockly.Python.valueToCode(block, 'alt', Blockly.Python);
  // TODO: Assemble Python into code variable.
  var code = '&lt;area shape = "'+value_name+'" coords = "'+value_shape+'" href = "'+value_href+'" alt ="'+value_alt+'"&gt;\n';

  return code;
};

Blockly.Python['images_canvas'] = function(block) {
  var value_canvas = Blockly.Python.valueToCode(block, 'canvas', Blockly.Python);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '&lt;canvas id = "'+value_canvas+'"&gt;\n'

  				+statements_name+'\n'+
  						'&lt;/canvas&gt;';
  return code;
};

Blockly.Python['images_script'] = function(block) {
  var statements_script = Blockly.Python.statementToCode(block, 'script');
  // TODO: Assemble Python into code variable.
  var code = '&lt;script&gt;\n'
  				+statements_script+
  						'&lt;/script&gt;\n'	;
  return code;
};
Blockly.Python['images_figcaption'] = function(block) {
  var statements_figcaption = Blockly.Python.statementToCode(block, 'figcaption');
  // TODO: Assemble Python into code variable.
  var code = '&lt;figcaption&gt;\n'
  				+statements_figcaption+
  						'&lt;/figcaption&gt;\n'	;
  return code;
};
Blockly.Python['images_figure'] = function(block) {
  var statements_figure = Blockly.Python.statementToCode(block, 'figure');
  // TODO: Assemble Python into code variable.
  var code = '&lt;figures&gt;\n'
  				+statements_figures+
  						'&lt;/figures&gt;\n'	;
  return code;
};
Blockly.Python['images_svg'] = function(block) {
  var statements_svg = Blockly.Python.statementToCode(block, 'svg');
  // TODO: Assemble Python into code variable.
  var code = '&lt;svg&gt;\n'
  				+statements_svg+
  						'&lt;/svg&gt;\n'	;
  return code;
};


