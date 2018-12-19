Blockly.Blocks['basic_doctype'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DOCTYPE html");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['basic_html'] = {
  init: function() {
    this.appendStatementInput("htmlStatements")
        .setCheck()
        .appendField("hypertext markup language");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
     this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
    }
  };
Blockly.Blocks['basic_head'] = {
  init: function() {
    this.appendStatementInput("headStatements")
        .appendField("head")
        .setCheck(['title']);
    this.setPreviousStatement(true, 'title');
    this.setNextStatement(true, 'title');
    //this.appendStatementInput('basic_title').setCheck('title');
    //this.appendStatementInput('title')
                //.setCheck('title');
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['basic_body'] = {
  init: function() {
    this.appendStatementInput("body")
        .setCheck(null)
        .appendField("body");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['basic_title'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("title")
        .appendField(new Blockly.FieldTextInput(""), "title");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['basic_heading1'] = {
  init: function() {
    this.appendStatementInput("Heading1")
        .setCheck(null)
        .appendField("heading 1");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['basic_heading2'] = {
  init: function() {
    this.appendStatementInput("heading2")
        .setCheck(null)
        .appendField("heading 2");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['basic_heading3'] = {
  init: function() {
    this.appendStatementInput("heading3")
        .setCheck(null)
        .appendField("heading 3");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['basic_heading4'] = {
  init: function() {
    this.appendStatementInput("heading4")
        .setCheck(null)
        .appendField("heading 4");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['basic_heading5'] = {
  init: function() {
    this.appendStatementInput("heading5")
        .setCheck(null)
        .appendField("heading 5");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['basic_heading6'] = {
  init: function() {
    this.appendStatementInput("heading6")
        .setCheck(null)
        .appendField("heading 6");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['basic_paragraph'] = {
  init: function() {
    this.appendStatementInput("paragraph")
        .setCheck(null)
        .appendField("paragraph");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['basic_break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("break");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['basic_horizontal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("horizontal");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['format_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("text"), "text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['format_textt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['format_abbr'] = {
  init: function() {
    this.appendStatementInput("abbreviate")
        .setCheck(null)
        .appendField("abbreviate");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['format_address'] = {
  init: function() {
    this.appendStatementInput("address")
        .setCheck(null)
        .appendField("address");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['format_bdi'] = {
  init: function() {
    this.appendStatementInput("bdi")
        .setCheck(null)
        .appendField("body isolate");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['format_bold'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("bold");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['format_big'] = {
  init: function() {
    this.appendStatementInput("big")
        .setCheck(null)
        .appendField("big");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['format_blockquote'] = {
  init: function() {
    this.appendStatementInput("blockquote")
        .setCheck()
        .appendField("blockquote");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['format_em'] = {
  init: function() {
    this.appendStatementInput("emphasied")
        .setCheck(null)
        .appendField("emphasied");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['format_strong'] = {
  init: function() {
    this.appendStatementInput("strong")
        .setCheck(null)
        .appendField("strong");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['format_italised'] = {
  init: function() {
    this.appendStatementInput("italised")
        .setCheck(null)
        .appendField("italised");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['format_mark'] = {
  init: function() {
    this.appendStatementInput("mark")
        .setCheck(null)
        .appendField("mark");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['format_underlined'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("underlined")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['form_form'] = {
  init: function() {
    this.appendValueInput("form")
        .setCheck(null)
        .appendField("form action");
    this.appendDummyInput();
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("method");
    this.appendStatementInput("forms")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['form_input'] = {
  init: function() {
    this.appendValueInput("inputs")
        .setCheck(null)
        .appendField("input type");
    this.appendDummyInput();
    this.appendValueInput("method")
        .setCheck(null)
        .appendField("name");
    this.appendValueInput("name")
        .setCheck(null)
        .appendField("value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['form_textarea'] = {
  init: function() {
    this.appendValueInput("rows")
        .setCheck(null)
        .appendField("textarea rows");
    this.appendDummyInput();
    this.appendValueInput("cols")
        .setCheck(null)
        .appendField("column");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['form_button'] = {
  init: function() {
    this.appendValueInput("button")
        .setCheck(null)
        .appendField("button type");
    this.appendDummyInput();
    this.appendStatementInput("type")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['form_select'] = {
  init: function() {
    this.appendStatementInput("select")
        .setCheck(null)
        .appendField("select");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['form_option'] = {
  init: function() {
    this.appendStatementInput("option")
        .setCheck(null)
        .appendField("option");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['form_optgroup'] = {
  init: function() {
    this.appendStatementInput("optgroup")
        .setCheck(null)
        .appendField("optiongroup");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['form_label'] = {
  init: function() {
    this.appendValueInput("label")
        .setCheck(null)
        .appendField("label");
    this.appendDummyInput();
    this.appendStatementInput("for")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['form_fieldset'] = {
  init: function() {
    this.appendStatementInput("fieldset")
        .setCheck(null)
        .appendField("fieldset");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['form_legend'] = {
  init: function() {
    this.appendStatementInput("legend")
        .setCheck(null)
        .appendField("legend");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['form_datalist'] = {
  init: function() {
    this.appendStatementInput("datalist")
        .setCheck(null)
        .appendField("datalist");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['frames_iframe'] = {
  init: function() {
    this.appendValueInput("iframe")
        .setCheck(null)
        .appendField("iframe");
    this.appendDummyInput();
    this.appendStatementInput("src")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['images_image'] = {
  init: function() {
    this.appendValueInput("img")
        .setCheck(null)
        .appendField("image source");
    this.appendDummyInput();
    this.appendValueInput("src")
        .setCheck(null)
        .appendField("alternative");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['images_map'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("map name");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['images_area'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("area shape");
    this.appendDummyInput();
    this.appendValueInput("shape")
        .setCheck(null)
        .appendField("coordinates");
    this.appendValueInput("href")
        .setCheck(null)
        .appendField("href");
    this.appendValueInput("alt")
        .setCheck(null)
        .appendField("alternative");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['images_canvas'] = {
  init: function() {
    this.appendValueInput("canvas")
        .setCheck(null)
        .appendField("canvas");
    this.appendDummyInput();
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['images_script'] = {
  init: function() {
    this.appendStatementInput("script")
        .setCheck(null)
        .appendField("script");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['images_style'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("style");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['images_figcaption'] = {
  init: function() {
    this.appendStatementInput("figcaption")
        .setCheck(null)
        .appendField("figure caption");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['images_figure'] = {
  init: function() {
    this.appendStatementInput("figure")
        .setCheck(null)
        .appendField("figure");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['images_svg'] = {
  init: function() {
    this.appendStatementInput("svg")
        .setCheck(null)
        .appendField("svg");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['audio_audio'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("audio");
    this.appendDummyInput();
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['audio_source'] = {
  init: function() {
    this.appendValueInput("source")
        .setCheck(null)
        .appendField("source");
    this.appendDummyInput();
    this.appendValueInput("src")
        .setCheck(null)
        .appendField("type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['links_a'] = {
  init: function() {
    this.appendStatementInput("atag")
        .setCheck(null)
        .appendField("anchor");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['links_link'] = {
  init: function() {
    this.appendValueInput("link")
        .setCheck(null)
        .appendField("link rel");
    this.appendDummyInput();
    this.appendValueInput("rel")
        .setCheck(null)
        .appendField("type")
    this.appendValueInput("type")
        .setCheck(null)
        .appendField("href");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['links_nav'] = {
  init: function() {
    this.appendStatementInput("navigation")
        .setCheck(null)
        .appendField("navigation");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lists_ul'] = {
  init: function() {
    this.appendStatementInput("ul")
        .setCheck(null)
        .appendField("unordered lists");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['lists_li'] = {
  init: function() {
    this.appendStatementInput("lists")
        .setCheck(null)
        .appendField("list");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['lists_ol'] = {
  init: function() {
    this.appendStatementInput("orderedlists")
        .setCheck(null)
        .appendField("ordered list");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lists_dl'] = {
  init: function() {
    this.appendStatementInput("descriptionlists")
        .setCheck(null)
        .appendField("description list");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lists_dt'] = {
  init: function() {
    this.appendStatementInput("descriptiontable")
        .setCheck(null)
        .appendField("description table");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lists_dd'] = {
  init: function() {
    this.appendStatementInput("descriptiondata")
        .setCheck(null)
        .appendField("description data");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lists_label'] = {
  init: function() {
    this.appendStatementInput("label")
        .setCheck(null)
        .appendField("label");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tables_table'] = {
  init: function() {
    this.appendStatementInput("table")
        .setCheck(null)
        .appendField("table");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tables_tr'] = {
  init: function() {
    this.appendStatementInput("tablerow")
        .setCheck(null)
        .appendField("table row");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tables_td'] = {
  init: function() {
    this.appendStatementInput("tablesdata")
        .setCheck(null)
        .appendField("table data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['tables_hr'] = {
  init: function() {
    this.appendStatementInput("tables_horizontal")
        .setCheck(null)
        .appendField("table horizontal");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tables_caption'] = {
  init: function() {
    this.appendStatementInput("tables_caption")
        .setCheck(null)
        .appendField("caption");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tables_head'] = {
  init: function() {
    this.appendStatementInput("tableshead")
        .setCheck(null)
        .appendField("tables head");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tables_foot'] = {
  init: function() {
    this.appendStatementInput("tablesfoot")
        .setCheck(null)
        .appendField("tables foot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tables_colgroup'] = {
  init: function() {
    this.appendStatementInput("tablescolumn")
        .setCheck(null)
        .appendField("tables column");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['styles_style'] = {
  init: function() {
    this.appendStatementInput("stylesstyles")
        .setCheck(null)
        .appendField("style");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['styles_div'] = {
  init: function() {
    this.appendValueInput("div")
        .setCheck(null)
        .appendField("div");
    this.appendDummyInput();
    this.appendStatementInput("class")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['styles_span'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("span");
    this.appendDummyInput();
    this.appendStatementInput("class")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['styles_header'] = {
  init: function() {
    this.appendStatementInput("headertag")
        .setCheck(null)
        .appendField("header");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['styles_footer'] = {
  init: function() {
    this.appendStatementInput("stylesfooter")
        .setCheck(null)
        .appendField("footer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['styles_main'] = {
  init: function() {
    this.appendStatementInput("stylesmain")
        .setCheck(null)
        .appendField("main");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['styles_section'] = {
  init: function() {
    this.appendStatementInput("stylessection")
        .setCheck(null)
        .appendField("section");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['styles_article'] = {
  init: function() {
    this.appendStatementInput("stylesarticle")
        .setCheck(null)
        .appendField("article");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['styles_aside'] = {
  init: function() {
    this.appendStatementInput("stylesaside")
        .setCheck(null)
        .appendField("aside");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['styles_details'] = {
  init: function() {
    this.appendStatementInput("stylesdetails")
        .setCheck(null)
        .appendField("details");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['styles_summary'] = {
  init: function() {
    this.appendStatementInput("stylessummary")
        .setCheck(null)
        .appendField("summary");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['styles_dialog'] = {
  init: function() {
    this.appendStatementInput("stylesdialog")
        .setCheck(null)
        .appendField("dialog");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['styles_data'] = {
  init: function() {
    this.appendStatementInput("stylesdata")
        .setCheck(null)
        .appendField("data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['meta_meta'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("meta charset");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(63);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['meta_charset'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck(null)
        .appendField("meta name");
    this.appendDummyInput();
    this.appendValueInput("content")
        .setCheck(null)
        .appendField("content");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(63);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['program_noscript'] = {
  init: function() {
    this.appendStatementInput("programscript")
        .setCheck(null)
        .appendField("noscript");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['program_embed'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("embed source");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['program_object'] = {
  init: function() {
    this.appendValueInput("object")
        .setCheck(null)
        .appendField("object type");
    this.appendDummyInput();
    this.appendStatementInput("data")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['program_param'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck(null)
        .appendField("parameter name");
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("value");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};












