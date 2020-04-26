import { ValidatorFn, AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

export function startWithCapitalValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return null;
        }

        const valid = /^[A-Z]/.test(control.value);
        return valid ? null : {startsWithCapital: {value: control.value}};
    };
}

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[startsWithCapital]',
    providers: [{provide: NG_VALIDATORS,
                useExisting: startWithCapitalValidatorDirective,
                multi: true}]
})

export class startWithCapitalValidatorDirective implements Validator {
    @Input('startsWithCapital') isActive: boolean;
    constructor(parameters) {}
    validate(control: AbstractControl): (ValidationErrors | null) {
        return !this.isActive ? null : startWithCapitalValidator()(control);
    }
}
