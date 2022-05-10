import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { getDatabase, ref, query, orderByChild, child } from "firebase/database";
import { Submenu } from '../menu/models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  private readonly data$ = new BehaviorSubject(null);
  private readonly search$ = new Subject<boolean>();
  private readonly optionsSearch$ = new BehaviorSubject<Submenu[] | null>(null);

  private readonly selectedOptions$ = new BehaviorSubject<Submenu | null>(null);

  results: any;

  constructor() { }

  setData(newData: any) {
    this.data$.next(newData)
  }

  handleSearch(toogle: boolean) {
    this.search$.next(toogle);
  }

  activeSearch(): Observable<boolean> {
    return this.search$.asObservable();
  }

  getOptionsSearch() : Observable<Submenu[] | null> {
    return this.optionsSearch$.asObservable();
  }
  setOptionsSearch(value: Submenu[]) {
    this.optionsSearch$.next(value);
  }

  selectedOptions(value : Submenu | null){
    this.selectedOptions$.next(value);
  }

  getSelectedOptions() {
    return this.selectedOptions$.asObservable();
  }

  
 

  


}
