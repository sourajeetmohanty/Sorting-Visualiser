
// let txt;
// $('.dropdown-menu a').on('click', function () {
//       txt= ($(this).text());
//       console.log(txt);
//     });

let numbers, columnWidth, sorter, t0,elements,speed,t_i,t_j;
let sortName;

let values;
let numLines;
let sortHist;
let historyIndex;

function BubbleSort(){
  

  sortName = "bubbleSort";
 
  startSort();
}

function InsertionSort() {
  sortName = "insertionSort";
  startSort();
}

function SelectionSort() {
  sortName = "selectionSort";
  startSort();
}

function MergeSort() {
  sortName="mergeSort";
  setup();
  loop();
}

function startSort() {
  elements = parseInt(prompt("enter number of array elements"));

  speed = prompt("Enter the speed of operations", "slow , medium , fast");
  setup();
  loop();
}

function setup() {
  if (sortName === "mergeSort") {
    values = [];
    numLines = parseInt(prompt("enter no of elements"));
    sortHist = [];
    historyIndex = 0;

    createCanvas(900, 680);
  colorMode(HSB, height);
  for (i = 0; i < numLines; i++) {
    values[i] =random(height);
  }
  sortHist = mergeSort(values);
  frameRate(1);
  noLoop();
  } else if (sortName !== undefined) {

    createCanvas(900, 680);
    
    numbers = Array(elements).fill().map(() => random(1));
    columnWidth = width / numbers.length;

    if (sortName === "bubbleSort") {
      sorter = bubbleSorter();
    } else if (sortName === "insertionSort") {
      sorter = insertionSorter();
    } else if (sortName === "selectionSort") {
      sorter = selectionSorter();
    }
    t0 = performance.now();


    fill(555);
    frameRate(60)
    noStroke();
    noLoop();
  }
}

function draw() {
  if (sortName==="mergeSort") {
    background(0);
  for (i = 0; i < sortHist[historyIndex].length; i++) {
  //  let col = color(sortHist[historyIndex][i], height, height);
    stroke('white');
    fill('blue');
    var location = map(i, 0, sortHist[historyIndex].length, 0, width);
    rect(location, height - sortHist[historyIndex][i], width/numLines, height);
  } 
  historyIndex++;
  if (historyIndex > sortHist.length -1){
    noLoop();
  }
} else if (sortName !== undefined) {
    
  console.log("Udu WEDs Bandu")
	background(0);

	for (let i = 0; i < numbers.length; i++) {
		let columnHeight = map(numbers[i], 0, 1, 0, height);
      //fillStyle = "red";
      fill(255, 500, 0);
      
		rect(i * columnWidth, height, columnWidth, -columnHeight);
      //fillStyle = "blue";
      fill('blue');
       if (t_i === i) fill('red');
      if (t_j === i) fill('yellow');
      //fill('red');
      stroke('white');
        rect(i * columnWidth+0.1, height-0.1, columnWidth-1, -columnHeight-1);
	}

	if (sorter.next().done) {
		let time = round(performance.now() - t0) / 1000;
		print("Done!");
		print(`Sorted ${numbers.length} elements in approximately ${time} seconds.`);
		noLoop();
  }
}
}

function* bubbleSorter() 
{
	for (let i = numbers.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (numbers[j] > numbers[j + 1]) {
				// swap
             
      
                let t = numbers[j];
				numbers[j] = numbers[j + 1];
				numbers[j + 1] = t;
                t_j=j+1;
                       
			}
	
             
            if(speed === "fast")
            yield;
            if(speed === "medium")
            {yield;
            yield;
            yield;
            yield;
        
            }
          if(speed === "slow")
          {
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
           
          }
  t_i=-1;
  t_j=-1;
		}
	}
}

function* insertionSorter() 
{
    let i, key, j;
    for (i = 1; i < numbers.length; i++) 
    {   
        key = numbers[i];  
        j = i - 1;  
      t_i=i;
     
        while (j >= 0 && numbers[j] > key) 
        {   
            numbers[j + 1] = numbers[j]; 
           t_j=j;
            j = j - 1; 
          if(speed === "fast")
            yield;
            if(speed === "medium")
            {yield;
            yield;
            yield;
            yield;
        
            }
          if(speed === "slow")
          {
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
           
          }
        }  
        numbers[j + 1] = key;  
    t_i=-1;
     t_j=-1;
     
    } 
    yield;
   t_j=-1
  
}

function* selectionSorter() {
	let minimum;        

        for(let i = 0; i < numbers.length-1 ; i++) 
        {

             minimum = i ;

         

            for(let j = i+1; j < numbers.length ; j++ )
            {
                if(numbers[ j ] < numbers[ minimum ])  
                {               
                minimum = j ;
                }
             }
          t_i = i;
          t_j = minimum;
           if(speed === "fast")
            yield;
            if(speed === "medium")
            {yield;
            yield;
            yield;
            yield;
        
            }
          if(speed === "slow")
          {
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            yield;
            
           
	
        }
          let temp;
          temp=numbers[ minimum ];
          numbers[ minimum ]=numbers[i];
          numbers[i]=temp;
           
          }
  t_i=-1;
  t_j=-1;
  yield;

    }
    
    function mergeSort(array) {
      var arrays = [array.slice()],
      n = array.length,
      array0 = array,
      array1 = new Array(n);
    
      for (var m = 1; m < n; m <<= 1) {
        for (var i = 0; i < n; i += (m << 1)) {
          merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
        }
        arrays.push(array1.slice());
        array = array0, array0 = array1, array1 = array;
      }
    
    function merge(left, right, end) {
      for (var i0 = left, i1 = right, j = left; j < end; ++j) {
        array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <=    array0[i1]) ? i0++ : i1++];
       }
     }
     return arrays;
    }    
