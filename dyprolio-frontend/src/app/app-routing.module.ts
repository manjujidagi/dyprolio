import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent } from './dashboard/dashboard.component';
// import { FormsComponent } from './forms/forms.component';
// import { ButtonsComponent } from './buttons/buttons.component';
// import { TablesComponent } from './tables/tables.component';
// import { IconsComponent } from './icons/icons.component';
// import { TypographyComponent } from './typography/typography.component';
// import { AlertsComponent } from './alerts/alerts.component';
// import { AccordionsComponent } from './accordions/accordions.component';
// import { BadgesComponent } from './badges/badges.component';
// import { ProgressbarComponent } from './progressbar/progressbar.component';
// import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
// import { PaginationComponent } from './pagination/pagination.component';
// import { DropdownComponent } from './dropdown/dropdown.component';
// import { TooltipsComponent } from './tooltips/tooltips.component';
// import { CarouselComponent } from './carousel/carousel.component';
// import { TabsComponent } from './tabs/tabs.component';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { DataManagementComponent } from './data-management/data-management.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'forms', component: FormsComponent },
  // { path: 'buttons', component: ButtonsComponent },
  // { path: 'tables', component: TablesComponent },
  // { path: 'icons', component: IconsComponent },
  // { path: 'typography', component: TypographyComponent },
  // { path: 'alerts', component: AlertsComponent },
  // { path: 'accordions', component: AccordionsComponent },
  // { path: 'badges', component: BadgesComponent },
  // { path: 'progressbar', component: ProgressbarComponent },
  // { path: 'breadcrumbs', component: BreadcrumbsComponent },
  // { path: 'pagination', component: PaginationComponent },
  // { path: 'dropdowns', component: DropdownComponent },
  // { path: 'tooltips', component: TooltipsComponent },
  // { path: 'carousel', component: CarouselComponent },
  // { path: 'tabs', component: TabsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'data-management', component: DataManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
