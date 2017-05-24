"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * Created by Eyal on 7/4/2016.
 */
var question_textbox_1 = require("./question-textbox");
var question_checkbox_1 = require("./question-checkbox");
var question_radio_1 = require("./question-radio");
var question_dropdown_1 = require("./question-dropdown");
var question_group_1 = require("./question-group");
__export(require('./question-base'));
__export(require('./question-checkbox'));
__export(require('./question-dropdown'));
__export(require('./question-radio'));
__export(require('./question-textbox'));
__export(require('./question-group'));
exports.QUESTION_MODELS = {
    textbox: question_textbox_1.TextboxQuestion,
    checkbox: question_checkbox_1.CheckboxQuestion,
    radio: question_radio_1.RadioQuestion,
    dropdown: question_dropdown_1.DropdownQuestion,
    group: question_group_1.QuestionsGroup
};
//# sourceMappingURL=index.js.map