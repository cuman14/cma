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

  logContent(contentId: string) {
  /*   this._client.getEntries({content_type: 'cma'}).then(res => console.log(res)); */

    return from(this._client.getEntry('3rqaxN0WyVQYHPk1L22Ay0'))
  }
}
