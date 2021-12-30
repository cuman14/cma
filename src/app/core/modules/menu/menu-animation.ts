import { animate, group, query, state, style, transition, trigger } from "@angular/animations";
const timing = '0.4s';
export const hamburgerButton = trigger('hamburgerButton', [
    transition('* => true', [
        group( [
            query('.up', animate(timing,style({transform: 'rotate(45deg) translateY(0px)'}))),
            query('.down', animate(timing,style({transform: 'rotate(-45deg) translateY(0px)'})))
        ])
    ]),
    transition('* => false', [
        group( [
            query('.up', animate(timing,style({transform: 'rotate(0deg) translateY(-3px)'}))),
            query('.down', animate(timing,style({transform: 'rotate(0deg) translateY(3px)'}))),
        ])
    ]),
])
export const hamburgerButtonChildUp = trigger('hamburgerButtonChildUp', [
    state('true', style({transform: 'rotate(45deg) translateY(0px)'})),
    state('false', style({transform: 'rotate(0) translateY(3px)'}))
])

export const hamburgerButtonChildDown = trigger('hamburgerButtonChildDown', [
    state('true', style({transform: 'rotate(-45deg) translateY(0px)'})),
    state('false', style({transform: 'rotate(0) translateY(-3px)'})),
])