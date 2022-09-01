import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { FotoComponent } from './pages/foto/foto.component';
import { MapComponent } from './pages/map/map.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MapComponent,
      },
      {
        path: 'foto',
        component: FotoComponent,
      },
      {
        path: 'sobre',
        component: SobreComponent,
      },
    ],
  },
];
