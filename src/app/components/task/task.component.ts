import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export default class TaskComponent
{
  @Input() task: any;
  @Output()
  onPinTask = new EventEmitter<Event>();
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}
