ace.define("ace/theme/epoxy", ["require", "exports", "module", "ace/lib/dom"], function (require, exports, module) {

  exports.isDark = false;
  exports.cssClass = "ace-epoxy";
  exports.cssText = "\
.ace-epoxy .ace_gutter {\
top: 1px;\
background: #fafafa;\
}\
.ace_gutter-cell {\
color: transparent;\
background-color: #444444;\
text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.7);\
-webkit-background-clip: text;\
-moz-background-clip: text;\
background-clip: text;\
}\
.ace-epoxy .ace_print-margin {\
width: 1px;\
background: #fafafa;\
}\
.ace-epoxy {\
background-color: #fafafa;\
color: #999999;\
}\
.ace-epoxy .ace_cursor {\
color: #aaaaaa;\
}\
.ace-epoxy .ace_marker-layer .ace_selection {\
background: #dadada;\
}\
.ace-epoxy.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #ffffff;\
}\
.ace-epoxy .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0);\
}\
.ace-epoxy .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #d1d1d1;\
}\
.ace-epoxy .ace_marker-layer .ace_active-line {\
background: #efefef;\
}\
.ace-epoxy .ace_gutter-active-line {\
background-color : #e6e6e6;\
}\
.ace-epoxy .ace_marker-layer .ace_selected-word {\
border: 1px solid #d6d6d6;\
}\
.ace-epoxy .ace_invisible {\
color: #d1d1d1;\
}\
.ace-epoxy .ace_keyword,\
.ace-epoxy .ace_meta,\
.ace-epoxy .ace_storage,\
.ace-epoxy .ace_storage.ace_type,\
.ace-epoxy .ace_support.ace_type {\
font-style: italic;\
color: #999999;\
}\
.ace-epoxy .ace_keyword.ace_operator {\
color: #3E999F;\
}\
.ace-epoxy .ace_constant.ace_character,\
.ace-epoxy .ace_constant.ace_language,\
.ace-epoxy .ace_constant.ace_numeric,\
.ace-epoxy .ace_keyword.ace_other.ace_unit,\
.ace-epoxy .ace_support.ace_constant,\
.ace-epoxy .ace_variable.ace_parameter {\
font-style: italic;\
color: cornflowerblue;\
}\
.ace-epoxy .ace_constant.ace_other {\
color: #666969;\
}\
.ace-epoxy .ace_invalid {\
color: #ffffff;\
background-color: #C82829;\
}\
.ace-epoxy .ace_invalid.ace_deprecated {\
color: #ffffff;\
background-color: #8959A8;\
}\
.ace-epoxy .ace_fold {\
background-color: #4271ae;\
border-color: #4d4d4c;\
}\
.ace-epoxy .ace_entity.ace_name.ace_function,\
.ace-epoxy .ace_support.ace_function,\
.ace-epoxy .ace_variable {\
color: #4271ae;\
}\
.ace-epoxy .ace_support.ace_class,\
.ace-epoxy .ace_support.ace_type {\
font-style: normal;\
color: darkorange;\
}\
.ace-epoxy .ace_heading,\
.ace-epoxy .ace_markup.ace_heading,\
.ace-epoxy .ace_string {\
color: #718c00;\
}\
.ace-epoxy .ace_entity.ace_name.ace_tag,\
.ace-epoxy .ace_entity.ace_other.ace_attribute-name,\
.ace-epoxy .ace_meta.ace_tag,\
.ace-epoxy .ace_string.ace_regexp,\
.ace-epoxy .ace_variable {\
color: #999999;\
}\
.ace-epoxy .ace_comment {\
color: #58a553;\
}\
.ace_content {\
background: #ffffff;\
border-top: solid 1px #eee;\
border-right: none;\
border-bottom: none;\
border-left: solid 1px #eee;\
height: 360px !important;\
}";

  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});