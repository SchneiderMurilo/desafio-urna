import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Certifique-se de importar AppModule

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
