import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function minCharsValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return control.value.trim().length > minLength
            ? null
            : { minLegth: false }
    };
}