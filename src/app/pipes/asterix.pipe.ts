import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "asterix",
})
export class AsterixPipe implements PipeTransform {
  transform(ch) {
    let v = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
    let result = "";
    for (let i = 0; i < ch.length; i++) {
      if (this.chercher(ch[i], v)) {
        result += "*";
      } else {
        result += ch[i];
      }
    }
    return result;
  }
  chercher(char, v) {
    for (let i = 0; i < v.length; i++) {
      if (v[i] == char) {
        return true;
      }
    }
    return false;
  }
}
// return value.replace(/[aeiouyAEIOUY]/, '*');
