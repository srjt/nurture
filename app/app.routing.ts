import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

export const routes = [
  { path: "", component: LoginComponent } ,
  { path: "dashboard", component: DashboardComponent } 

];

export const navigatableComponents = [
  LoginComponent ,
  DashboardComponent
];