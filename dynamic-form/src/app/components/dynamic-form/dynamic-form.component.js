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
var question_control_service_1 = require('../../services/question-control.service');
var DynamicFormComponent = (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this.payLoad = '';
        this._questions = [];
    }
    Object.defineProperty(DynamicFormComponent.prototype, "questions", {
        get: function () { return this._questions; },
        set: function (value) {
            this._questions = value;
            this.form = this.qcs.toFormGroup(this._questions);
            this.form.statusChanges
                .subscribe(function (s) { return console.log("myform.status: " + s); });
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormComponent.prototype.ngOnInit = function () {
        //   this.form = this.qcs.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    DynamicFormComponent.prototype.getIsValid = function (valid) {
        if (valid)
            return true;
        var result = true;
        for (var c in this.form.controls) {
            if (this.form.controls[c] instanceof forms_1.FormControl) {
                result = result && this.form.controls[c].valid;
                if (!result)
                    return false;
            }
        }
        return true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], DynamicFormComponent.prototype, "questions", null);
    DynamicFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dynamic-form',
            styles: ["\n        .row-margin{\n            margin: 8px;\n        }    \n        .ng-valid {\n          border-left: 5px solid #42A948; /* green */\n        }\n        form.ng-invalid {\n          border: 2px solid #a94442; /* red */          \n        }\n        .ng-invalid {\n          border-left: 5px solid #a94442; /* red */          \n        }\n    "],
            templateUrl: './dynamic-form.component.html',
        }), 
        __metadata('design:paramtypes', [question_control_service_1.QuestionControlService])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;
//# sourceMappingURL=dynamic-form.component.js.map