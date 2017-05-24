import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import {HttpModule} from "@angular/http";

import { AppComponent }  from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent  } from './components/dynamic-form-question/dynamic-form-question.component';
import { AddQuestionForm } from './components/add-question/add-question.component';

import { QuestionControlService } from './services/question-control.service';
import { QuestionService } from './services/question.service';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, AddQuestionForm ],
  bootstrap:    [ AppComponent ],
  providers: [QuestionControlService, QuestionService],
})
export class AppModule { }
