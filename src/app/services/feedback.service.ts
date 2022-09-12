import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedbacksSubc = new BehaviorSubject([
    {
      id: 1,
      rating: 10,
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia commodi hic quos tempora temporibus harum. Illum a nobis harum ullam.",
    },
    {
      id: 2,
      rating: 9,
      comment: "Lorem ipsum dolor sit amet. Illum a nobis harum ullam.",
    },
    {
      id: 3,
      rating: 7,
      comment:
        "Illum a nobis harum ullam. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
  ]);

  constructor() {
  }

  add(newFeedback: any): void {
    const helper = this.feedbacksSubc.value;
    helper.push(newFeedback);
    console.log(helper);
    
    
    this.feedbacksSubc.next(helper);
  }

  delete(itemId: number): void {
    const helper = this.feedbacksSubc.value;
    this.feedbacksSubc.next(helper.filter(
      (item) => item.id != itemId
    ));
  }
}
