import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedbackSubc = new BehaviorSubject<any[]>([
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
  feedback$ = this.feedbackSubc.asObservable();

  constructor() { }

  add(newFeedback: { id: any; comment: string; rating: number; }) {
    const list = this.feedbackSubc.value;
    this.feedbackSubc.next([...list, newFeedback]);
  }

  delete(itemId: number) {
    this.feedbackSubc.next(this.feedbackSubc.value.filter((item) => item.id != itemId));
  }
}
