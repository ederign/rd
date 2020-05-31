// Coding during Coding challenge: https://www.youtube.com/watch?v=goUlyp4rwiU&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=14
//lexicografic: https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering

let vals = [0, 1, 2, 3, 4, 5, 6, 7];
// let vals = [0, 1, 2];

function setup() {
  createCanvas(400, 300);
  // console.log(vals);
}

function draw() {
  background(0);


  //Step 1
  let largestI = -1;

  for (let i = 0; i < vals.length - 1; i++) {
    if (vals[i] < vals[i + 1]) {
      largestI = i;
    }
  }
  if (largestI === -1) {
    noLoop();
    console.log('finished');
  }
  else {




    //Step 2
    let largestJ = -1;
    for (let j = 0; j < vals.length; j++) {
      if (vals[largestI] < vals[j]) {
        largestJ = j;
      }
    }

    //Step 3
    swap(vals, largestI, largestJ);

    //Step 4;
    let endArray = vals.splice(largestI + 1)
    endArray.reverse();
    vals = vals.concat(endArray);

    background(0);
    textSize(64);
    let s = '';
    vals.forEach(element => {
      s += element;
    });
    fill(255); 
    text(s, 20, height / 2);

  }
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}