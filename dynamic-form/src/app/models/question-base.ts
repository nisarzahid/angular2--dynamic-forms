export interface IError{
    key   :string,
    msg   : string,
    lang? : string
}
export interface IValidation{
    type    : string,
    args?   : any,
    errors? : IError[]
}
export interface IOption<T>{
    value?  : T;
    key?    : string;
    label?  : string;
    order?  : number;
    name?   : string;
    options?:{key?:string,value:string}[];
    validations? : IValidation[];
    controlType? : string;
    type?        : string;
}

export class QuestionBase<T>{
    value   : T;
    key     : string;
    label   : string;
    order   : number;
    controlType: string;
    type    : string;
    validations: IValidation[];

    constructor(options:IOption<T>  = {}) {
        this.value       = options.value;
        this.key         = options.key || '';
        this.label       = options.label || '';
        this.validations = options.validations || [];
        this.order       = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
    }
}

// export class QuestionBase<T>{
//   value: T;
//   key: string;
//   label: string;
//   required: boolean;
//   order: number;
//   controlType: string;

//   constructor(options: {
//       value?: T,
//       key?: string,
//       label?: string,
//       required?: boolean,
//       order?: number,
//       controlType?: string
//     } = {}) {
//     this.value = options.value;
//     this.key = options.key || '';
//     this.label = options.label || '';
//     this.required = !!options.required;
//     this.order = options.order === undefined ? 1 : options.order;
//     this.controlType = options.controlType || '';
//   }
// }