import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(
        private router: Router
    ) {}

    canActivate() {
        if(localStorage.getItem('auth') != null) {
            return true;
        }
        else{
            this.router.navigate(['/pages/autenticar']);
            return false;
        }
    }
}