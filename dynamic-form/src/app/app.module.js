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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var app_component_1 = require('./app.component');
var dynamic_form_component_1 = require('./components/dynamic-form/dynamic-form.component');
var dynamic_form_question_component_1 = require('./components/dynamic-form-question/dynamic-form-question.component');
var add_question_component_1 = require('./components/add-question/add-question.component');
var question_control_service_1 = require('./services/question-control.service');
var question_service_1 = require('./services/question.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, dynamic_form_component_1.DynamicFormComponent, dynamic_form_question_component_1.DynamicFormQuestionComponent, add_question_component_1.AddQuestionForm],
            bootstrap: [app_component_1.AppComponent],
            providers: [question_control_service_1.QuestionControlService, question_service_1.QuestionService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map