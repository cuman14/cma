import { Component, OnInit, Renderer2 } from '@angular/core';
import { ToolUtil } from 'src/app/core/utils/ToolUtils';
import { Menu, Submenu } from '../../menu/models/menu.model';
import { MenuService } from '../../menu/services/menu.service';
import { SearchDataService } from '../search-data.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'cma-search-icon',
  templateUrl: './search-icon.component.html',
  styleUrls: ['./search-icon.component.scss'],
})
export class SearchIconComponent implements OnInit {
  toggle: boolean = false;
  optionsSearch: Submenu[] = [];
  constructor(
    private readonly _search: SearchService,
    private readonly _searchData: SearchDataService,
    private readonly _searchOptions: MenuService,
    private readonly _reander2: Renderer2
  ) {}

  ngOnInit(): void {
    this._getElementsSubmenu();
    this._changeValue();
  }

  search(event: Event): void {
    this.toggle = !this.toggle;
    this._search.open();
    if(ToolUtil.isMobile()) {
      this._reander2.setStyle(document, 'overflow-y', 'hidden');
    } else {
      this._reander2.setStyle(document, 'overflow-y', 'scroll');

    }
    event.stopPropagation();
    // this._searchData.handleSearch(this.toggle);
  }
  close(event?: Event) {
    this.toggle = !this.toggle;
    this._search.close();
    this._reander2.setStyle(document, 'overflow-y', 'scroll');
    event?.stopPropagation();

    //  this._searchData.handleSearch(false);
  }

  onValueChange(target: any) {
    const optionsFilter = this._getOptionsFilter(target.value);
    this._searchData.setOptionsSearch(optionsFilter);
  }

  private _getElementsSubmenu() {
    this._searchOptions.getMenu().subscribe((res) => {
      res.forEach(
        (menu: Menu) =>
          menu?.submenu?.forEach((submenu) => this.optionsSearch.push(submenu)),
        this._searchData.setOptionsSearch(this.optionsSearch)
      );
    });
  }

  private _getOptionsFilter(value: string) {
    return this.optionsSearch.filter((element) =>
      element?.title.toLowerCase().includes(value.toLowerCase())
    );
  }

  private _changeValue() {
    this._searchData.getSelectedOptions().subscribe((res) => this.close());
  }
}


