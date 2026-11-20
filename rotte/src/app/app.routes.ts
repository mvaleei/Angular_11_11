import { Routes } from '@angular/router';
import { Clienti } from './clienti/clienti';
import { Fatture } from './fatture/fatture';
import { Fornitori } from './fornitori/fornitori';
import { Magazzino } from './magazzino/magazzino';

import { ListaFatture } from './lista-fatture/lista-fatture';
import { NuovaFattura } from './nuova-fattura/nuova-fattura';

import { Login } from './login/login';
import { Utenza } from './utenza/utenza';
import { Ruoli } from './ruoli/ruoli';

//il file che configura le regole di routing
//regola di routing: data una url, verrà innestato un determinato componente
//http://www.pippo.it/clienti  -> innesterà il componente dei clienti

import { AuthGuardService } from './auth/auth-guard.service';
import { RoleGuardService } from './auth/role-guard.service';


export const routes: Routes = [
    {
        path: 'clienti/:nomecliente/:fatturato',
        component: Clienti
    },
    {
        path: 'clienti/:nomecliente',
        component: Clienti
    },
    {
        path: 'fatture',
        component: Fatture,
        children: [
            {
                path: 'listato',
                component: ListaFatture
            },
            {
                path: 'inserisci',
                component: NuovaFattura
            }
        ]
    },
    {
        path: 'fornitori',
        component: Fornitori
    },
    {
        path: 'magazzino',
        component: Magazzino
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'utenze',
        component: Utenza,
        canActivate: [AuthGuardService]
    },
    {
        path: 'ruoli',
        component: Ruoli,
        canActivate: [RoleGuardService],
        data: {
            ruoloAutorizzato: "DBA"
        }
    },
];
