import {
  enableProdMode,
  ErrorHandler,
  importProvidersFrom,
} from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { provideRouter } from "@angular/router";
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from "@angular/common/http";
import {
  Title,
  BrowserModule,
  bootstrapApplication,
} from "@angular/platform-browser";

import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { routes } from "./app/routes";
import { SentryErrorHandler } from "./app/sentry";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      MatButtonModule,
      MatCardModule,
      MatIconModule,
      MatToolbarModule,
      ServiceWorkerModule.register("ngsw-worker.js", {
        enabled: environment.production,
      }),
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    Title,
    {
      provide: ErrorHandler,
      useClass: environment.production ? SentryErrorHandler : ErrorHandler,
    },
  ],
}).catch((err) => console.log(err));
