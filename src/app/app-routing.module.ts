import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluateComponent } from './pages/evaluate/evaluate.component';

const routes: Routes = [
  { path: 'evaluate', component: EvaluateComponent },
  { path: '',   redirectTo: '/evaluate', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
