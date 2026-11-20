import { Routes } from '@angular/router';
import { Clienti } from './clienti/clienti';
import { Fatture } from './fatture/fatture';
import { Fornitori } from './fornitori/fornitori';
import { Magazzino } from './magazzino/magazzino';

import { ListaFatture } from './lista-fatture/lista-fatture';
import { NuovaFattura } from './nuova-fattura/nuova-fattura';

//il file che configura le regole di routing
//regola di routing: data una url, verrà innestato un determinato componente
//http://www.pippo.it/clienti  -> innesterà il componente dei clienti


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
];
