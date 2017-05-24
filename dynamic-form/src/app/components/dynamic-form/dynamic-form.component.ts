import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup, FormControl }                 from '@angular/forms';

import { QuestionBase }  from '../../models/question-base';
import { QuestionControlService }    from '../../services/question-control.service';

@Component({
  moduleId: module.id,
  selector: 'dynamic-form',
    styles:[`
        .row-margin{
            margin: 8px;
        }    
        .ng-valid {
          border-left: 5px solid #42A948; /* green */
        }
        form.ng-invalid {
          border: 2px solid #a94442; /* red */          
        }
        .ng-invalid {
          border-left: 5px solid #a94442; /* red */          
        }
    `],
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  payLoad = '';

 _questions: QuestionBase<any>[] = [];

    @Input()
    set questions(value:QuestionBase<any>[]){
        this._questions = value;
        this.form = this.qcs.toFormGroup(this._questions);
        this.form.statusChanges
            .subscribe(s=>console.log(`myform.status: ${s}`));
    }

    get questions(){ return this._questions;}


  constructor(private qcs: QuestionControlService) {  }

   ngOnInit() {
  //   this.form = this.qcs.toFormGroup(this.questions);
   }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

    getIsValid(valid:boolean){
        if(valid) return true;

        let result = true;
        for(let c in this.form.controls){
            if(this.form.controls[c] instanceof FormControl){
                result = result && this.form.controls[c].valid;
                if(!result) return false;
            }
        }
        return true;
    }
}