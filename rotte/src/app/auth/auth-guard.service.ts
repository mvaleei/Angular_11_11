//obiettivo decidere se innestare il componente richiesto
//o reindirizzare su login  


import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";

import {
    Router,     //per inviare la chiamata al login (se non autoizzaro)
    CanActivate // l'interfaccia che in caso di autenticazione, confermerà l'innesto del componente

} from "@angular/router";

@Injectable()

export class AuthGuardService implements CanActivate {
    constructor(
        public auth: AuthService,
        public router: Router
    ) { }

    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login'])
            return false;
        }
        return true
    }



}