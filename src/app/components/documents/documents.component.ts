import { Component } from '@angular/core';
import { ExpanderComponent } from "../expander/expander.component";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [ExpanderComponent],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {

}
