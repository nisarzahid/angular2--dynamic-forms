"use strict";
var QuestionBase = (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.validations = options.validations || [];
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
    }
    return QuestionBase;
}());
exports.QuestionBase = QuestionBase;
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
//# sourceMappingURL=question-base.js.map