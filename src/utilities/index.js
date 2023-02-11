
export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function getColor(language) {
    let color = getRandomColor();
    if (language) {
      if (language === "JavaScript") {
        color = "yellow";
      } else if (language === "Python") {
        color = "blue";
      } else if (language === "Java") {
        color = "red";
      } 
    } return color;
  
  }