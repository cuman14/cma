import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import {getDatabase, ref } from "firebase/database";
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private readonly _db: AngularFireDatabase) {   }

  getMenu() {
    return this._db.list('menu').valueChanges();
  }
}
