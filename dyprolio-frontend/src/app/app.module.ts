import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { FormsComponent } from './forms/forms.component';
// import { ButtonsComponent } from './buttons/buttons.component';
// import { TablesComponent } from './tables/tables.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
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
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTopBannerComponent } from './product-top-banner/product-top-banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

// ------ Services
import { ProductService } from './services/product.service';
import { LoginComponent } from './login/login.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { DataManagementAddProductComponent } from './data-management/data-management-add-product/data-management-add-product.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { DataManagementEditProductComponent } from './data-management/data-management-edit-product/data-management-edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // SidebarComponent,
    FooterComponent,
    // DashboardComponent,
    // FormsComponent,
    // ButtonsComponent,
    // TablesComponent,
    // TypographyComponent,
    // IconsComponent,
    // AlertsComponent,
    // AccordionsComponent,
    // BadgesComponent,
    // ProgressbarComponent,
    // BreadcrumbsComponent,
    // PaginationComponent,
    // DropdownComponent,
    // TooltipsComponent,
    // CarouselComponent,
    // TabsComponent,
    HomeComponent,
    ProductListComponent,
    ProductTopBannerComponent,
    AboutUsComponent,
    ContactComponent,
    GalleryComponent,
    LoginComponent,
    DataManagementComponent,
    DataManagementAddProductComponent,
    DataManagementEditProductComponent
  ],
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
