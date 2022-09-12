import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { v4 as uuidv4 } from 'uuid';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    trigger('enableDisable', [
      transition('enabled <=> disabled', animate('1s cubic-bezier(0.8,0.3,0,1)')),
    ])
  ]
})
export class FormComponent implements OnInit {
  btnDisabled = true;
  minLength = 10;
  commentValue = '';
  rating = 10;
  constructor(
    private service: FeedbackService
  ) { }

  ngOnInit() {
  }

  handleSubmit() {
    if (this.commentValue.trim().length < this.minLength) {
      return;
    }

    const newFeedback = {
      id: uuidv4(),
      comment: this.commentValue,
      rating: this.rating
    };

    this.service.add(newFeedback);
  }

  onChangeInput(value: any) {
    console.log('onChangeInput');

    this.commentValue = value;
    this.btnDisabled = this.commentValue.trim().length < this.minLength;
  }

  getRating(ratingValue: any): void {
    this.rating = ratingValue;
  }
}
