export interface Menu {
    icon: string;
    title: string;
    code: string;
    submenu?: Submenu[];
}

export interface Submenu {
    title: string;
}