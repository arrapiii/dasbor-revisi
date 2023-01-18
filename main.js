
var circle = document.querySelector('.outer-circle');
var chartContainer = document.querySelector('.overview-charts');

let percentage = 50;
let circleLength = 439.1124572753906;
let elemPercentage = circleLength - (percentage * circleLength / 100);
console.log(elemPercentage, 'ss');

var data = [
 
  {id: 3, percentage: 15, title: 'Players'},
  {id: 4, percentage: 62, title: 'Income'},
  
]

const creatSvg = (elementPercentage, title, percentageText, svgColor) => {
// console.log(`te dhenat mbrenda createSVG percentage: ${percentage}`)
// console.log(`te dhenat mbrenda createSVG title: ${title}`)
let svg =`
  <div class="overview-charts-container">
      <svg height="190" width="170">
           <g>
               <circle class="circle-inner"cx="80" cy="80" r="65"/>
               <text fill="#8b8a90" x="85" y="85" font-size="30" dominant-baseline="middle" text-anchor="middle">${percentageText}%</text>
           </g>
           <circle stroke-dasharray="439.1124572753906"
                   stroke-dashoffset="${elementPercentage}"
                   stroke="${svgColor}"
                   cx="20" cy="80" r="70"
                   stroke-width="3"
                   fill="transparent"
                   stroke-linecap="round"
                   class="circle-outer"
                   transform="rotate(-90 ) translate(-100 0)" />
           <text class="circle-text"
                 fill="#8b8a90" 
                 x="85" y="180" 
                 dominant-baseline="middle" 
                 text-anchor="middle" 
                 font-weight="bold">${title}</text>
        </svg>
  </div>
`;
 chartContainer.insertAdjacentHTML('beforeend', svg);
}


data.map(element => {
  let { percentage, title} = element;
  
  
  let elemPercentage = circleLength - (percentage * circleLength / 100);
  let svgColor;
  if(percentage < 50){
      svgColor = '#49D490';
  }else if( percentage >= 50 && percentage <= 60 ){ 
     svgColor = '#EFB93F';
  }else if( percentage >= 61 && percentage <= 75 ){ 
     svgColor = '#F26739';
  }else if( percentage >= 76 ){
     svgColor = '#F77C7C';
  }
  
  creatSvg(elemPercentage, title, percentage, svgColor);
})


let testCircle = document.querySelector('.arc-outter-circle-filled');
let getValue = testCircle.getBoundingClientRect();

console.log(getValue)


