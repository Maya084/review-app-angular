import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
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
    this.commentValue = value;
    this.btnDisabled = this.commentValue.trim().length < this.minLength;
  }

  getRating(a: any): void {
    console.log(a);

  }
}
