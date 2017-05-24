import {  Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../models/question-base';
import {QuestionsGroup} from "../models/question-group";

@Injectable()
export class QuestionControlService{

    constructor(){}

    toFormGroup( questions: QuestionBase<any>[]){
        let group:any = {};

        // questions.forEach(question => {
        //     group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        //                                             : new FormControl(question.value || '');
        // });

        questions.forEach( question => {
            let qg:QuestionsGroup = (<QuestionsGroup><any>question);
            if(qg.questions){
                this.formGroupBuilder(group,qg);
            }else{
                this.formControlBuilder(group,question);
            }
        });
        return new FormGroup(group);
    }

    formControlBuilder(parentGroup:any, question:QuestionBase<any>){
        parentGroup[question.key] =
            new FormControl(
                question.value ,
                this.getValidators(question)
            );
    }
    formGroupBuilder(parentGroup:any,questionsGroup: QuestionsGroup){
        parentGroup[questionsGroup.key] = this.toFormGroup(questionsGroup.questions);
    }

    getValidators(question:QuestionBase<any>):any[]{
        let vals:Validators[] = [];

        question.validations.forEach((v)=>{
            if(Validators[v.type]){
                if(Validators[v.type] === Validators.required){
                    vals.push(Validators[v.type]);
                } else {
                    vals.push(Validators[v.type](...v.args));
                }
            }
        });

        return vals;
    }

}
