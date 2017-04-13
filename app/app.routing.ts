import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RegistreringComponent } from "./pages/registrering/registrering.component";
import { SoegningComponent } from "./pages/soegning/soegning.component";
import { DetaljevisningComponent } from "./pages/detaljevisning/detaljevisning.component";
import { DetaljevisningResolver } from "./pages/detaljevisning/detaljevisning.resolver";

const routes: Routes = [
    { path: "", redirectTo: "/soegning", pathMatch: "full" },
    { path: "registrering", component: RegistreringComponent },
    { path: "soegning", component: SoegningComponent },
    { 
        path: "foedevare/:id",
        component: DetaljevisningComponent,
        resolve: {
            foedevare: DetaljevisningResolver
        }   
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }