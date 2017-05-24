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
var QuestionControlService = (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var _this = this;
        var group = {};
        // questions.forEach(question => {
        //     group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        //                                             : new FormControl(question.value || '');
        // });
        questions.forEach(function (question) {
            var qg = question;
            if (qg.questions) {
                _this.formGroupBuilder(group, qg);
            }
            else {
                _this.formControlBuilder(group, question);
            }
        });
        return new forms_1.FormGroup(group);
    };
    QuestionControlService.prototype.formControlBuilder = function (parentGroup, question) {
        parentGroup[question.key] =
            new forms_1.FormControl(question.value, this.getValidators(question));
    };
    QuestionControlService.prototype.formGroupBuilder = function (parentGroup, questionsGroup) {
        parentGroup[questionsGroup.key] = this.toFormGroup(questionsGroup.questions);
    };
    QuestionControlService.prototype.getValidators = function (question) {
        var vals = [];
        question.validations.forEach(function (v) {
            if (forms_1.Validators[v.type]) {
                if (forms_1.Validators[v.type] === forms_1.Validators.required) {
                    vals.push(forms_1.Validators[v.type]);
                }
                else {
                    vals.push(forms_1.Validators[v.type].apply(forms_1.Validators, v.args));
                }
            }
        });
        return vals;
    };
    QuestionControlService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], QuestionControlService);
    return QuestionControlService;
}());
exports.QuestionControlService = QuestionControlService;
//# sourceMappingURL=question-control.service.js.map