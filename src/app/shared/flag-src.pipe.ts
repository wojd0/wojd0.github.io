import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'flagSrc' })
export class FlagSrcPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
