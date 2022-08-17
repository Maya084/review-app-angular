import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
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

