import { Pipe, PipeTransform } from  "@angular/core";

@Pipe({
  name: 'replace'
})

export class ReplacePipe implements PipeTransform {
  /// a qui é um pipe aerve para
  //ele recebe um parametro e troca por outro paramentro

  transform(value: string, char: string, valueToReplace: string) {
    return value.replace(char, valueToReplace);
  }


}
