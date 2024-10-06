import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expander',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expander.component.html',
  styleUrl: './expander.component.css'
})
export class ExpanderComponent {
   @Input() caption!:string|undefined;
    collapsed = false;
}
