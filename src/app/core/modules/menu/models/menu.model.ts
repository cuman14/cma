export interface Menu {
    icon: string;
    title: string;
    code: string;
    submenu?: Menu;
}