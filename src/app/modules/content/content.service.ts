import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private _client= contentful.createClient({
    space: environment.contentFul.spaceId,
    accessToken: environment.contentFul.token
  })

  constructor() { }

  getContent(entryId: string) {
    return from(this._client.getEntry(entryId))
  }
}
