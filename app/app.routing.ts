import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { WebBrowserComponent } from "./pages/webBrowser/webBrowser.component";
import { MarketplaceComponent } from "./pages/marketplace/marketplace.component";

export const routes = [
  { path: "", component: LoginComponent } ,
  { path: "dashboard", component: DashboardComponent },
  { path: "browse/:url", component: WebBrowserComponent },
  { path: "marketplace", component: MarketplaceComponent }
];

export const navigatableComponents = [
  LoginComponent ,
  DashboardComponent,
  WebBrowserComponent,
  MarketplaceComponent
];