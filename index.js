class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-" "']+/g, "");
  }

  static titleize(string) {
    let array = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let newString = string.split(" ");
    let finalString = [];
    newString.forEach(function (word) {
      if (array.includes(word)) {
        if (finalString.length === 0) {
          finalString.push(Formatter.capitalize(word));
        } else {
          finalString.push(word);
        }
      } else {
        finalString.push(Formatter.capitalize(word));
      }
    });
    return finalString.join(" ");
  }
}
