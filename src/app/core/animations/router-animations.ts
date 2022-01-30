import { trigger, transition, style, animate } from "@angular/animations";

export const fadeIn = trigger('fadeIn', [
    transition('* =>*', [
      style({ opacity: 0 }),
      animate('1.5s', style({ opacity: 1 })),
    ]),
    transition(':enter, :leave', [
        style({ opacity: 0 }),
        animate('1.5s', style({ opacity: 1 })),
      ]),
  ])