import {
  trigger,
  transition,
  style,
  animate,
  state,
  keyframes,
} from '@angular/animations';
const ANIMATION_TIMINGS = '1.4s cubic-bezier(0.35, 1.1, 0.25, 1)';

export const spin = trigger('spin', [
  state('true', style({ transform: 'translateY(100.2%) scale(1.01)' })),
  state('false', style({ transform: 'translateY(0%)', opacity: 1 })),
  transition(
    '* => true',
    animate(
      ANIMATION_TIMINGS,
      keyframes([
        style({ transform: 'translateY(0%) scale(1.1)' }),
        style({ transform: 'translateY(100.2%) scale(1.01)' }),
      ])
    )
  ),
  transition(
    'true => false',
    animate(
      ANIMATION_TIMINGS,
      keyframes([
        style({ transform: 'translateY(100.2%) scale(1.1)' }),
        style({ transform: 'translateY(0%) scale(1.01)' }),
      ])
    )
  ),
]);

export const displace = trigger('displace', [
  state(
    'true',
    style({ opacity: 1, background: '#ffff', border: '1px solid #0199d7' })
  ),
  state('false', style({ opacity: 0 })),
  transition(
    ':leave',
    animate(
      '2s',
      keyframes([
        style({ opacity: '1' }),
        style({ opacity: '0.5' }),
        style({ opacity: '0' }),
      ])
    )
  ),
]);
