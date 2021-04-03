import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static invalidProjectName(control: FormControl): { [key: string]: boolean } {
        if (control.value == "Test") {
            return { 'invaildProjectName': true };
        }
        return null;
    }

    static asyncInvaidProjectName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value == "TestProject") {
                    resolve({ 'invalidProjectName': true });
                } else {
                    resolve(null);
                }
            }, 1500);
        });

        return promise;

    }
}