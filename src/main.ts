import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { RegistroComponent } from './app/modules/registro/registro.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig, // Propagamos el appConfig
  providers: [importProvidersFrom(RouterModule.forRoot(routes)),
  provideHttpClient(),
  ...appConfig.providers // Propagamos los providers del appConfig
  ]
  }).catch((err) => console.error(err));