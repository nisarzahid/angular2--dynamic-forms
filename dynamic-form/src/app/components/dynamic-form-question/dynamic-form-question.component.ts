import { Component, Input } from '@angular/core';
import { FormGroup, FormControl }        from '@angular/forms';
import { QuestionBase }     from '../../models/question-base';



@Component({
  moduleId: module.id,
  selector: 'df-question',
    styles:[`
        .ng-valid {
          border-left: 5px solid #42A948; /* green */
        }
        .ng-invalid {
          border-left: 5px solid #a94442; /* red */
        }
        .ng-touched{
            border-bottom: 1px solid dodgerblue;
        }
        .ng-dirty{
                border-bottom: 2px solid #2aabd2;
        }
    `],
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

    get errors() {
        let result:string[] = [];
        let errors = this.form.controls[this.question.key].errors;



        for(let error in errors){
            this.question
                .validations
                .filter(v => error.toLowerCase() == v.type.toLowerCase())
                .forEach(vld =>{
                    vld.errors.forEach(err=>{
                        /*, Function status: ${errors[error]}*/
                        result.push(`Error Message: ${err.msg}`);
                    })
                });
        }
        return result;
    }
    getIsLabel(type:string){
        let r =  type == 'checkbox' || type == 'group' || type == 'radio'
        return !r;
    }

    getIsValid(valid:boolean,form:FormGroup){
        if(valid) return true;

        let result = true;
        for(let c in form.controls){
            if(form.controls[c] instanceof FormControl){
                result = result && form.controls[c].valid;
                if(!result) return false;
            }
        }
        return true;
    }
}