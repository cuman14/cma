import { trigger, transition, style, animate, state } from "@angular/animations";
const ANIMATION_TIMINGS = '2s cubic-bezier(0.25, 0.8, 0.25, 1)';

export const spin = trigger('spin', [
      state('true', style({ transform: 'scaleY(-1)', background: '#ffff', border: '1px solid #0199d7'})),
      state('false', style({  transform: 'scaleY(1)', opacity: 1})),
      transition('* => *', animate(ANIMATION_TIMINGS))
  ]);

export const displace = trigger('displace', [
    state('true', style({ transform: 'translateY(0%)'})),
    state('false', style({  transform: 'translateY(-96%)'})),
    transition('* => *', animate(ANIMATION_TIMINGS))
]);