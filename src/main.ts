import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { RegistroComponent } from './app/modules/registro/registro.component';

bootstrapApplication(RegistroComponent, {
  ...appConfig, // Propagamos el appConfig
  providers: [
  provideHttpClient(),
  ...appConfig.providers // Propagamos los providers del appConfig
  ]
  }).catch((err) => console.error(err));