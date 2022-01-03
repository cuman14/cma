import {
  animate,
  group,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
const timing = '0.4s';
export const hamburgerButton = trigger('hamburgerButton', [
  transition('* => true', [
    group([
      query(
        '.up',
        animate(timing, style({ transform: 'rotate(45deg) translateY(0px)' }))
      ),
      query(
        '.down',
        animate(timing, style({ transform: 'rotate(-45deg) translateY(0px)' }))
      ),
    ]),
  ]),
  transition('* => false', [
    group([
      query(
        '.up',
        animate(timing, style({ transform: 'rotate(0deg) translateY(-3px)' }))
      ),
      query(
        '.down',
        animate(timing, style({ transform: 'rotate(0deg) translateY(3px)' }))
      ),
    ]),
  ]),
]);
export const hamburgerButtonChildUp = trigger('hamburgerButtonChildUp', [
  state('true', style({ transform: 'rotate(45deg) translateY(0px)' })),
  state('false', style({ transform: 'rotate(0) translateY(3px)' })),
]);

export const hamburgerButtonChildDown = trigger('hamburgerButtonChildDown', [
  state('true', style({ transform: 'rotate(-45deg) translateY(0px)' })),
  state('false', style({ transform: 'rotate(0) translateY(-3px)' })),
]);

export const expand = trigger('expand', [
  transition(':enter', [
    style({ opacity: 0, height: '0',  overflow: 'hidden' }),
    animate('0.6s', style({ opacity: 1, height: '*' })),
  ]),
  transition(':leave', [
    style({ opacity: 1, height: '*' , overflow: 'hidden'}),
    animate('0.4s ease-in-out', style({ opacity: 0, height: '0', overflow: 'auto'}))

  ]),
]);


export const smoothHeight = trigger('grow', [
    transition('void <=> *', []),
    transition('* <=> *', [style({ height: '{{startHeight}}px', opacity: 0 }), animate('.5s ease')], {
      params: { startHeight: 0 }
    })
  ]);