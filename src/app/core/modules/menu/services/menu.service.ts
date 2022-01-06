import { Menu } from './../models/menu.model';
import { Injectable } from '@angular/core';
import {AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private readonly _db: AngularFireDatabase) {   }

  getMenu() : Observable<Menu[]> {
    const menu : Observable<Menu[]> = this._db.list('menu').valueChanges() as Observable<Menu[]>;
    return menu;
  }
}
