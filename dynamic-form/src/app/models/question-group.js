"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_base_1 = require("./question-base");
var QuestionsGroup = (function (_super) {
    __extends(QuestionsGroup, _super);
    function QuestionsGroup(obj) {
        if (obj === void 0) { obj = {}; }
        _super.call(this, obj);
        this.questions = obj.questions || [];
    }
    return QuestionsGroup;
}(question_base_1.QuestionBase));
exports.QuestionsGroup = QuestionsGroup;
//# sourceMappingURL=question-group.js.map