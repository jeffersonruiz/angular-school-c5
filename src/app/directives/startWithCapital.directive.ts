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
    selector: '[startsWithCapital]',
    providers: [{provide: NG_VALIDATORS,
                useExisting: StartWithCapitalValidatorDirective,
                multi: true}]
})

export class StartWithCapitalValidatorDirective implements Validator {
    @Input('startsWithCapital') isActive: boolean;
    constructor() {}
    validate(control: AbstractControl): (ValidationErrors | null) {
        return !this.isActive ? null : startWithCapitalValidator()(control);
    }
}
