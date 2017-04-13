import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { DataService } from "./shared/data.service";
import { RegistreringComponent } from "./pages/registrering/registrering.component";
import { SoegningComponent } from "./pages/soegning/soegning.component";
import { DetaljevisningComponent } from "./pages/detaljevisning/detaljevisning.component";
import { DetaljevisningResolver } from "./pages/detaljevisning/detaljevisning.resolver";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        RegistreringComponent,
        SoegningComponent,
        DetaljevisningComponent
    ],
    providers: [
        DataService,
        DetaljevisningResolver
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
