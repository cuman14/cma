import { trigger, transition, style, animate, state } from "@angular/animations";
const ANIMATION_TIMINGS = '200ms cubic-bezier(0.25, 0.8, 0.25, 1)';
//TODO: mejorar animación touch
export const slideContent = trigger('slideContent', [
      state('void', style({  opacity: 0 }),
      {params: {pointY: 'translate3d(0, 79%, 0)'}}
      ),
      state('enter', style({ opacity: 1}),
      {params: {pointY: 'translate3d(0, 8%, 0)'}}),
       state('leave', style({ opacity: 0}), 
      {params: {pointY: 'translate3d(0, 79%, 0)'}}), 
      transition('* => *', animate(ANIMATION_TIMINGS))
  ]);