import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, MainComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'anular11';

hello = ""
sotheimg = "https://images.unsplash.com/photo-1743076851851-0762b336b56d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 print(){
  
  this.hello == "" ? this.hello = "wsg_bro" : this.hello == ""

   this.imgclass = "mainim"
 }
 imgclass = ""



h1 = "Arthur"
h3 = "morgan"
p =38


h11 = ""
h33 = ""
pp! : number |null

showtexts(){
  // this.h11 = this.h1
  // this.h33 = this.h3
  // this.pp = this.p









  this.h11 == "" ? this.h11 = this.h1 : this.h11 = ""
  this.h33 == "" ? this.h33 = this.h3 : this.h33 = ""
  this.pp == null ? this.pp = this.p : this.pp = null
}


















}
