const mobileLinks = document.querySelector('.mobileLinks');
const menuOpen = document.querySelector('#menu-bar');
const closeBtn = document.querySelector('#cancel-icon');
const menuLinks = document.querySelector('#mob-link');
let isOpen = false;
const navBar = document.querySelector('#home');

const sticky = navBar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky')
  }
}
window.onscroll = () => { myFunction(); };

function openNav() {
  if (!isOpen) {
    mobileLinks.style.display = ('block');
    isOpen = true;
    setTimeout(() => {
      menuOpen.disabled = false;
    }, 50);
  }
}

function closeNav() {
  if (isOpen) {
    mobileLinks.style.display = ('none');
    isOpen = false;
    setTimeout(() => {
      menuOpen.disabled = false;
    }, 50);
  }
}
menuOpen.addEventListener('click', () => {
  menuOpen.disabled = true;
  openNav();
});
closeBtn.addEventListener('click', () => {
  menuOpen.disabled = true;
  closeNav();
});
menuLinks.addEventListener('click', () => {
  menuOpen.disabled = true;
  closeNav();
});

/* Feature Speakers */

const speakerData = [
  {
    id: 1,
    name: 'John Davis',
    speakerImg: 'images/speaker1.jpg',
    speakerDescription: 'Music Producer and Founder of a Record Label',
    speakerBio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quia.',
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    speakerImg: 'images/speaker2.jpg',
    speakerDescription: 'Grammy-winning Singer-Songwriter',
    speakerBio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quia.',
  },
  {
    id: 3,
    name: 'Emily Chen',
    speakerImg: 'images/speaker3.jpg',
    speakerDescription: 'Sound Engineer and Mixing Expert',
    speakerBio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quia.',
  },
  {
    id: 4,
    name: 'David Rodriguez',
    speakerImg: 'images/speaker4.jpg',
    speakerDescription: 'Music Journalist and Editor in-Chief of a Music Magazine',
    speakerBio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quia.',
  },
  {
    id: 5,
    name: 'Alex Turner',
    speakerImg: 'images/speaker5.jpg',
    speakerDescription: 'Artist Manager and Founder of an Artist Mangagement Company',
    speakerBio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quia.',
  },
  {
    id: 6,
    name: 'Michael Carter',
    speakerImg: 'images/speaker6.jpg',
    speakerDescription: 'Music Business Consultant and Founder of a Music Consulting Firm',
    speakerBio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quia.',
  },
];

const speakerDiv = document.getElementById('speaker-div');

speakerData.forEach((speaker) => {
  const speakerContainer = document.createElement('div');
  speakerContainer.classList.add('speaker-container');
  speakerContainer.innerHTML = `
    <img src="images/pattern.jpg" class="pattern" alt="Pattern">
    <div class="speaker-img">
      <img src="${speaker.speakerImg}" alt="Speaker Image">
    </div>
    <div class="speaker-info">
      <h3>${speaker.name}</h3>
      <p class="speaker-description">${speaker.speakerDescription}</p>
      <p class="speaker-bio">${speaker.speakerBio}</p>
    </div>
  `;
  speakerDiv.appendChild(speakerContainer);
});

const moreSpeakerDiv = document.getElementById('more-speaker-div');
const showMoreButton = document.getElementById('featuredBtn');

const visibleSpeakers = 2; // Number of speakers to show initially
let allSpeakersVisible = false;

function createSpeakerContainer(speaker) {
  const speakerContainer = document.createElement('div');
  speakerContainer.classList.add('speaker-container');
  speakerContainer.innerHTML = `
    <img src="images/pattern.jpg" class="pattern" alt="Pattern">
    <div class="speaker-img">
      <img src="${speaker.speakerImg}" alt="Speaker Image">
    </div>
    <div class="speaker-info">
      <h3>${speaker.name}</h3>
      <p class="speaker-description">${speaker.speakerDescription}</p>
      <p class="speaker-bio">${speaker.speakerBio}</p>
    </div>
  `;
  return speakerContainer;
}

function toggleSpeakerVisibility() {
  allSpeakersVisible = !allSpeakersVisible;

  if (allSpeakersVisible) {
    speakerData.forEach((speaker) => {
      const speakerContainer = createSpeakerContainer(speaker);
      moreSpeakerDiv.appendChild(speakerContainer);
    });
    showMoreButton.textContent = 'Show Less';
  } else {
    while (moreSpeakerDiv.firstChild) {
      moreSpeakerDiv.firstChild.remove();
    }
    speakerData.slice(0, visibleSpeakers).forEach((speaker) => {
      const speakerContainer = createSpeakerContainer(speaker);
      moreSpeakerDiv.appendChild(speakerContainer);
    });
    showMoreButton.textContent = 'Show More';
  }
}

speakerData.slice(0, visibleSpeakers).forEach((speaker) => {
  const speakerContainer = createSpeakerContainer(speaker);
  moreSpeakerDiv.appendChild(speakerContainer);
});

showMoreButton.addEventListener('click', toggleSpeakerVisibility);
