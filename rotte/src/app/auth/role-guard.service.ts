import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";


import { Router, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";


@Injectable()

export class RoleGuardService implements CanActivate {

    constructor(
        public auth: AuthService,
        public router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        //leggo i lvalore della chiamata che si vorrebe fare (con il ruolo indicato)
        const ruoloRicevuto = route.data['ruoloAutorizzato']
        //il valore che può montare il componente
        const autorizzato = "DBA";

        if (!this.auth.isAuthenticated() || autorizzato != ruoloRicevuto) {
            this.router.navigate(['login'])
            return false
        }
        return true
    }

}