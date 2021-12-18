import { Menu } from '../../core/modules/menu/models/menu.model';

export const MENU: Menu[] = [
  {
    icon: 'cirugia.png',
    title: 'Cirugía',
    code: 'surgery',
    submenu: [
      {
        title: 'Cirugía',
      }
    ]
  },
  {
    icon: 'otorrino.png',
    title: 'Otorrinoloringología',
    code: 'hearing',
    submenu: [
      {
        title: 'Cirugía',
      }
    ]
  },
  {
    icon: 'trauma.png',
    title: 'Traumatología',
    code: 'traumatology',
    submenu: [
      {
        title: 'Cirugía',
      }
    ]
  },
  {
    icon: 'play.png',
    title: 'Ginecología',
    code: 'gynecology',
    submenu: [
      {
        title: 'Cirugía',
      }
    ]
  },
];
