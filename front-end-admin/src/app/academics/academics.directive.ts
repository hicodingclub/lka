
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { dateStructureToString, stringToDateStructure } from 'mean-rest-angular';

export class MraNgbDateFormatterService extends NgbDateParserFormatter {
    private dateFormat = 'MM-DD-YYYY';
    private timeFormat = 'hh:mm:ss';

    // from input -> internal model
    parse(value: string): NgbDateStruct {
        return stringToDateStructure(value, this.dateFormat);
    }
    // from internal model -> string
    format(date: NgbDateStruct): string {
        return dateStructureToString(date, this.dateFormat);
    }
}
@Directive({
  selector: '[directiveMultiSelectionRequired]',
  providers: [{provide: NG_VALIDATORS, useExisting: DirectiveMultiSelectionRequired, multi: true}]
})
export class DirectiveMultiSelectionRequired implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    let selected = false;
    let controlGroup = control as FormGroup; //cast to FormGroup
    if(controlGroup) {
      for(let ctrl in controlGroup.controls) {
        if(controlGroup.controls[ctrl].value) { //true or false of the selected item
          selected = true;
          break;
        }
      }
    }

    if (selected) {
      return null; //no error
    } else {
      return { 'required': true };
    }
  }
}