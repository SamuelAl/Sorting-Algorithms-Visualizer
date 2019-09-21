
const ShuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i) ;

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const UpdateGrid = (array) => {
  document.getElementById("pixelGrid").innerHTML = "";
  array.forEach((value) => {
    document.getElementById("pixelGrid").appendChild(value);
    document.getElementById(value.id).className = "pixel-item";
  })
}

const BubbleSort = (array) => {
  let swapped = false;
  let i = 1;
  var forLoop = setInterval(function() {BubbleSortForLoop();}, 1)

  function BubbleSortForLoop() {
    if (i < array.length) {
      // Select pixel effect
      document.getElementById(array[i].id).className = "pixel-item selected-pixel";

      if (parseInt(array[i].id.slice(1), 10) < parseInt(array[i-1].id.slice(1))) {
        let temp = array[i];
        array[i] = array[i-1];
        array[i-1] = temp;
        swapped = true;
        UpdateGrid(array);
        i++;
      }
      else {
      setTimeout(DeselectPixel, 3, i);
      i++;
      }
    }
    else {
      if (swapped == true) {
        i = 1;
        swapped = false;
        console.log(swapped);
      }
      else {
        clearInterval(forLoop);
        console.log("Finished");
      }
    }
  }
  function DeselectPixel(j) {
    document.getElementById(array[j].id).className = "pixel-item";
  }
}

const mainArray = [];

let lightness = 50;
for (let i = 0; i < 100; i++) {
  var pixel = document.createElement('div');
  pixel.className = "pixel-item";
  pixel.id = "p" + i;

  if (i % 10 == 0) {
    lightness+=5;
  }
   // var x = Math.floor(Math.random() * 100);
   // var y = Math.floor(Math.random() * 100);
   // var z = Math.floor((Math.random() * 50) + 50);
  var bgColor = "hsl(" + 0 + "," + "100%" + "," +  lightness + "%)";
  pixel.style.background = bgColor;
  mainArray.push(pixel);
}

ShuffleArray(mainArray);
UpdateGrid(mainArray);
BubbleSort(mainArray);
console.log("Finished");
