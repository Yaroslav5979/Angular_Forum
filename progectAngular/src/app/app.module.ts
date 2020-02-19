import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ChatComponent } from './chat/chat.component';
import { ThemesComponent } from './themes/themes.component';
import { UserService } from './user.service';

const appRoutes: Routes = [
  {path:'', component: MenuComponent},
  {path:'chat/:id', component: ChatComponent},
  {path:'themes', component: ThemesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ChatComponent,
    ThemesComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
  public name = 'Hello'
 }
