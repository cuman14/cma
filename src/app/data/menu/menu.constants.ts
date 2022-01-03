import { Menu } from '../../core/modules/menu/models/menu.model';

export const MENU: Menu[] = [
  {
    icon: 'cirugia.png',
    title: 'Cirugía',
    code: 'surgery',
    submenu: [
      {
        title: 'Hernia y/o  eventración',
      },
      {
        title: 'Abscesos de partes blandas',
      },
      {
        title: 'Tumoraciones de partes blandas',
      },
      {
        title: 'Sinus Pilonidal sobreinfectado',
      },
      {
        title: 'Varices',
      }
    ]
  },
  {
    icon: 'otorrino.png',
    title: 'Otorrinoloringología',
    code: 'hearing',
    submenu: [
      {
        title: 'Microcirugía Laringea',
      },
      {
        title: 'Septoplastia',
      },
      {
        title: 'Timpanoplastia',
      },
    ]
  },
  {
    icon: 'trauma.png',
    title: 'Traumatología',
    code: 'traumatology',
    submenu: [
      {
        title: 'Astrocopia de rodilla',
      },
      {
        title: 'Cirugía de mano',
      },
      {
        title: 'Cirugía de pie',
      },
    ]
  },
  {
    icon: 'play.png',
    title: 'Ginecología',
    code: 'gynecology',
    submenu: [
      {
        title: 'Cirugía de mama',
      },
      {
        title: 'Conización',
      },
    ]
  },
];
