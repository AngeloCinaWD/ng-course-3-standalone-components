import { enableProdMode, importProvidersFrom } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import {
  BrowserAnimationsModule,
  provideAnimations,
} from "@angular/platform-browser/animations";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

// per gestire il bootstrap dell'app, senza utilizzare AppModule, ho bisogno di utilizzare un'altra API, bootstrapApplication e passare il componente per il bootstrap
// per importare i moduli che prima erano elencati negli imports di app.module, li devo elencare nella proprietà providers ed importarli tramite API importProvidersFrom()
// quello per le animazioni tramite provideAnimations() e l'http tramite provideHttpClient()
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    // importProvidersFrom(BrowserAnimationsModule),
    provideAnimations(),
    // di solito è meglio aggioungere l'opzione per gli interceptors from dependency injection in caso si utilizzino, se non passo nulla ho il provider basico per l'http
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.log(err));
