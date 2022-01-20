import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';
@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value) {
      return  marked.marked(value);
    }
    return null;
  }

}
