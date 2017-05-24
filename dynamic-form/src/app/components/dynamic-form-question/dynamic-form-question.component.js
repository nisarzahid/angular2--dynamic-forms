"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var question_base_1 = require('../../models/question-base');
var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent() {
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.question.key].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "errors", {
        get: function () {
            var result = [];
            var errors = this.form.controls[this.question.key].errors;
            var _loop_1 = function(error) {
                this_1.question
                    .validations
                    .filter(function (v) { return error.toLowerCase() == v.type.toLowerCase(); })
                    .forEach(function (vld) {
                    vld.errors.forEach(function (err) {
                        /*, Function status: ${errors[error]}*/
                        result.push("Error Message: " + err.msg);
                    });
                });
            };
            var this_1 = this;
            for (var error in errors) {
                _loop_1(error);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormQuestionComponent.prototype.getIsLabel = function (type) {
        var r = type == 'checkbox' || type == 'group' || type == 'radio';
        return !r;
    };
    DynamicFormQuestionComponent.prototype.getIsValid = function (valid, form) {
        if (valid)
            return true;
        var result = true;
        for (var c in form.controls) {
            if (form.controls[c] instanceof forms_1.FormControl) {
                result = result && form.controls[c].valid;
                if (!result)
                    return false;
            }
        }
        return true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', question_base_1.QuestionBase)
    ], DynamicFormQuestionComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], DynamicFormQuestionComponent.prototype, "form", void 0);
    DynamicFormQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'df-question',
            styles: ["\n        .ng-valid {\n          border-left: 5px solid #42A948; /* green */\n        }\n        .ng-invalid {\n          border-left: 5px solid #a94442; /* red */\n        }\n        .ng-touched{\n            border-bottom: 1px solid dodgerblue;\n        }\n        .ng-dirty{\n                border-bottom: 2px solid #2aabd2;\n        }\n    "],
            templateUrl: './dynamic-form-question.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
}());
exports.DynamicFormQuestionComponent = DynamicFormQuestionComponent;
//# sourceMappingURL=dynamic-form-question.component.js.map