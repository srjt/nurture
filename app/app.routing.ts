import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { WebBrowserComponent } from "./pages/webBrowser/webBrowser.component";

export const routes = [
  { path: "", component: LoginComponent } ,
  { path: "dashboard", component: DashboardComponent },
  { path: "browse/:url", component: WebBrowserComponent }
];

export const navigatableComponents = [
  LoginComponent ,
  DashboardComponent,
  WebBrowserComponent
];