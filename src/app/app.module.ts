import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrComponent } from './hr/hr.component';
import { ProjectList } from './projectList/list.component';
import { ProjectComponent } from './projectList/project/project.component';
import { ButtonsBarComponent } from './shared/buttons-bar/buttons-bar.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HideNotLoadedDirective } from './shared/hideNotLoaded.directive';
import { FlagSrcPipe } from './shared/flag-src.pipe';
import { HeadingComponent } from './shared/heading/heading.component';
function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectList,
    HrComponent,
    ProjectComponent,
    FlagSrcPipe,
    HeadingComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsBarComponent,
    NgOptimizedImage,
    HideNotLoadedDirective,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
