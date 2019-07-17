import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceFormComponent } from './resource-form/resource-form.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { FormulaTemplateComponent } from './formula-template/formula-template.component';
import { FormulaFormComponent } from './formula-form/formula-form.component';
import { DataContainerComponent } from './data-container/data-container.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: ResourceFormComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'resource', component: ResourceFormComponent, canActivate: [AuthGuard]},
  { path: 'project', component: ProjectFormComponent, canActivate: [AuthGuard]},
  { path: 'formula/template', component: FormulaTemplateComponent, canActivate: [AuthGuard]},
  { path: 'formula', component: FormulaFormComponent, canActivate: [AuthGuard]},
  { path: 'test', component: DataContainerComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
