import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./components/login/login.component";
import { ExpanderComponent } from "./components/expander/expander.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, CommonModule, RouterModule, LoginComponent, ExpanderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit
{
  title = 'tailpdf';
  hideMenu = true;
  @ViewChild('hambugerButton') hambugerButton = ElementRef;

  ngAfterViewInit(): void
  {

  }

  toggleMenu()
  {
    this.hideMenu = !this.hideMenu;
  }

}
