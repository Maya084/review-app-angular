import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(400, style({ opacity: 0 })))
    ])
  ]
})
export class ListComponent implements OnInit {

  listItems = this.service.feedback$;

  constructor(
    private service: FeedbackService
  ) { }

  ngOnInit() {
  }

  handleDelete(id: number) {
    this.service.delete(id);
  };
}

