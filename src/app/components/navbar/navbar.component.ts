import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  title = 'tailpdf';
  hideMenu = true;
  @ViewChild('hambugerButton') hambugerButton = ElementRef;  

  toggleMenu()
  {
    this.hideMenu = !this.hideMenu;
  }
}
