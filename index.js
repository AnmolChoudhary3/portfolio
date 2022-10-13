const projectData = [
    {
        id: 1,
        heading: 'ShapeIt',
        desc: 'Scalable and practical shape recognition Web app game made using React and Flask. Uses an ANN deep learning model to recognise shapes with over 90% accuracy',
        img: './Assets/shapeit.webp',
        link: 'https://github.com/AnmolChoudhary3/shape-it',
        github: 'https://github.com/AnmolChoudhary3/shape-it',
        techStack: 'React | Flask | Machine Learning',
    },
    {
        id: 2,
        heading: 'Momentum 2021',
        desc: 'Website themed on Arabian Nights implemented using React & Firebase, to facilitate registrations, publicity and payments. Gathered Data of over 1100 students and successfully completed 200 registrations with payment.',
        img: './Assets/momentum.webp',
        link: 'https://momentum.ncuindia.edu/',
        github: '',
        techStack: 'React | Firebase',
    },
    {
        id: 3,
        heading: 'URL Shortener',
        desc: 'Generates a short and shareable link that redirects to the original site, implemented using React and Firebase. Maps a URL to an alpha-numeric code (9 characters), effectively reducing the length of any URL to 28 characters.',
        img: './Assets/urlshortener.webp',
        link: 'https://urls-94c0f.web.app/',
        github: 'https://github.com/AnmolChoudhary3/url-shortner',
        techStack: 'React | Firebase',
    },
]

const otherProjects = [
    {
        id: 1,
        heading: 'Teams Meeting Attendence',
        desc: 'Program to parse Microsoft Teams attendance data, to calculate the amount of time(in minutes) for which a user attended the meeting using Python.',
        link: 'https://github.com/AnmolChoudhary3/TeamsMeetingAttendence',
        github: 'https://github.com/AnmolChoudhary3/TeamsMeetingAttendence',
    },
    {
        id: 2,
        heading: 'Knapsack Visualizer',
        desc: 'A simple way to visualize the working of 0-1 knapsack built using HTML, CSS, and vanilla Javascript, designed on Adobe XD',
        link: 'https://anmolchoudhary3.github.io/knapsack-visualizer/',
        github: 'https://github.com/AnmolChoudhary3/knapsack-visualizer',
    },
    {
        id: 3,
        heading: 'Covid-19 Data Analysis',
        desc: 'Used Covid-19 database from Kaggle to analyze and extrapolate death and recovery rates using Pandas module, Python in Jupyter Notebook.',
        link: 'https://github.com/AnmolChoudhary3/Covid-19-Data-Analysis',
        github: 'https://github.com/AnmolChoudhary3/Covid-19-Data-Analysis',
    },
    {
        id: 4,
        heading: 'Atari Breakout',
        desc: 'This is a replica of the iconic arcade video game, Breakout developed and published by Atari, Inc. & designed by Steve Wozniak. It is made using React JS and deployed on Vercel.',
        link: 'https://atari-breakout.vercel.app/',
        github: 'https://github.com/AnmolChoudhary3/Atari-Breakout',
    },
    {
        id: 5,
        heading: 'Weather App',
        desc: 'Uses API by OpenWeatherMap to display weather information based on location(city), implemented using React JS and hosted on Firebase.',
        link: 'https://weather-73adb.web.app/',
        github: 'https://github.com/AnmolChoudhary3/weather-app',
    },
    {
        id: 6,
        heading: 'DrumKit',
        desc: 'Using HTML audio API and DOM manipulation to simulate a fully functional Drum Kit that can be operated with key events, deployed on GitHub pages.',
        link: 'https://anmolchoudhary3.github.io/DrumKit/',
        github: 'https://github.com/AnmolChoudhary3/DrumKit',
    },
]

const getProjectHTML = (data, i) => {
    return(
        `<div class="project-wrapper">
            <div class="project-content ${i%2?"right-child":"left-child"}">
                <h2>${data?.heading}</h2>
                <p>${data?.desc}</p>
                <h3>${data?.techStack}</h3>
                <div class="project-links">
                    <a href=${data?.github} target="_blank" aria-label="Github"><img src="./Assets/github.png" alt=""></a>
                    <a href=${data?.link} target="_blank" aria-label="redirect"><img src="./Assets/redirect.png" alt=""></a>
                </div>
            </div>
            <img src=${data?.img} alt="" class = "${i%2?"left-child":"right-child"}">
        </div>`
    )
}


const getOtherProjectHTML = (data, i) => {
    return(
        `<div id="other-project-div">
        <div id="other-project-icon">
          <img src="./Assets/folder.png" alt="folder">
          <div>
            <a href=${data?.github} target="_blank" aria-label="Github"><img src="./Assets/github.png" alt="github"></a>
            <a href=${data?.link} target="_blank" aria-label="redirect"><img src="./Assets/redirect.png" alt="redirect"></a>
          </div>
        </div>
        <h2>${data?.heading}</h2>
        <p>${data?.desc}</p>
      </div>`
    )
}

const project_section = document.querySelector("#projects");
for(let i = 0; i < projectData.length; i++) {
    project_section.innerHTML += getProjectHTML(projectData[i], i);
};

const other_project_section = document.querySelector("#other-projects-wrapper");
for(let i = 0; i < otherProjects.length; i++) {
    other_project_section.innerHTML += getOtherProjectHTML(otherProjects[i], i);
};



const cursor = document.querySelector('.cursor');
const cursorInner = document.querySelector('.cursor-move-inner');
const cursorOuter = document.querySelector('.cursor-move-outer');

const trigger = document.querySelector('button');

let mouseX = 0;
let mouseY = 0;
let mouseA = 0;

let innerX = 0;
let innerY = 0;

let outerX = 0;
let outerY = 0;

let loop = null;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!loop) {
    loop = window.requestAnimationFrame(render);
  }
});

trigger.addEventListener('mouseenter', () => {
  cursor.classList.add('cursor--hover');
});

trigger.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursor--hover');
});

function render() {

  loop = null;

  innerX = lerp(innerX, mouseX, 0.15);
  innerY = lerp(innerY, mouseY, 0.15);

  outerX = lerp(outerX, mouseX, 0.13);
  outerY = lerp(outerY, mouseY, 0.13);

  const angle = Math.atan2(mouseY - outerY, mouseX - outerX) * 180 / Math.PI;

  const normalX = Math.min(Math.floor(Math.abs(mouseX - outerX) / outerX * 1000) / 1000, 1);
  const normalY = Math.min(Math.floor(Math.abs(mouseY - outerY) / outerY * 1000) / 1000, 1);
  const normal = normalX + normalY * .5;
  const skwish = normal * .7;

  cursorInner.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
  cursorOuter.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) rotate(${angle}deg) scale(${1 + skwish}, ${1 - skwish})`;


  // Stop loop if interpolation is done.
  if (normal !== 0) {
    loop = window.requestAnimationFrame(render);
  }
}

function lerp(s, e, t) {
  return (1 - t) * s + t * e;
}

let prevScrollpos = window.pageYOffset;
let height = window.innerHeight;
const profile_pic = document.getElementById("profile-pic")

window.onscroll = function() {
    let opacity = 1- (window.pageYOffset / height);
    if(opacity>=0 && opacity<=1){
        profile_pic.style.opacity = opacity;
    }
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("profile-pic").style.top = "0";
//   } else {
//     document.getElementById("profile-pic").style.top = "-1000px";
//   }
//   prevScrollpos = currentScrollPos;
}