// const clickableArea = document.querySelector('.container')
const middleLove = document.querySelector('.middleLoveIcon')
const fullPic = document.querySelector('#fullPic')
const loveIcon = document.querySelector('.loveIcon')

let flag = 0

function triggerLoveAnimation () {
  if (flag === 0) {
    // middleLove.style.display = 'block'
    middleLove.style.opacity = '0.7'
    middleLove.style.transform = 'scale(1.3)'
    middleLove.style.transition = 'transform 0.2s ease'

    flag = 1

    // After the animation is done, fade out and reset transform
    setTimeout(() => {
      middleLove.style.opacity = '0'
      middleLove.style.transform = 'scale(1)' // Reset scale to original
      flag = 0
    }, 1000) // Time to keep the heart visible
  }
}
fullPic.addEventListener('dblclick', triggerLoveAnimation)

// middleLove.addEventListener('dblclick', triggerLoveAnimation)

loveIcon.addEventListener('click', triggerLoveAnimation)

//for story

let arrOfStories = [
  {
    dp: 'https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1594843310706-8a5a09f6a2c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1513385581288-2e94adbbdbd3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1598801702313-e74e28f32f66?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1490551632573-78c6c247f5d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1694629641216-54ad918e5092?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

// Select the .nav element, which is the container for the navigation bar.
const nav = document.querySelector('.nav')

// Select the .card element, which is where the story images will be dynamically added.
const storiyan = document.querySelector('.card')

// Select all images inside the .story class (this won't have any elements initially since the images are dynamically added).
const images = document.querySelectorAll('.story img')

// Initialize an empty string variable that will hold the HTML structure for the stories.
let clutter = ''

// Loop through the array of stories (arrOfStories) and generate HTML for each story image.
arrOfStories.forEach((item, index) => {
  // For each story, append a new div with class 'story' containing an image.
  // The image's source (src) is set to item.dp, and its id is set to the index in the array.
  clutter += ` <div class="story">
    <img
      src="${item.dp}"
      id="${index}"
      alt="story"
    />
  </div>`
})

// Set the innerHTML of the .card element to the generated HTML structure (clutter).
// This adds all the story images dynamically to the page.
storiyan.innerHTML = clutter

// Create a new span element that will contain a plus (+) icon (SVG).
const plusSpan = document.createElement('span')

// Add the class 'plus' to the span element.
plusSpan.classList.add('plus')

// Set the innerHTML of the span element to an SVG icon (in this case, a plus icon).
plusSpan.innerHTML = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
>
<path
  d="M4 9C4 6.49238 5.71351 5 7.5 5C9.40609 5 10.7537 6.58211 12 7.82843C13.2463 6.58211 14.5939 5 16.5 5C18.3158 5 20 6.48356 20 9C20 10.1222 19.7639 11.1501 19.3509 12.1019L21.1856 12.8981C21.7005 11.7114 22 10.4135 22 9C22 5.49592 19.5337 3 16.5 3C14.5905 3 13.1464 3.9848 12 5.02802C10.8536 3.9848 9.40952 3 7.5 3C4.50355 3 2 5.49623 2 9C2 12.0199 3.36207 14.4702 5.20346 16.445C7.03313 18.4073 9.38528 19.955 11.4916 21.1985L12.5084 19.4762C10.441 18.2557 8.29313 16.8259 6.66623 15.0811C5.05106 13.3489 4 11.3626 4 9ZM19 17V14H17V17H14V19H16.999L17 22H19L18.999 19H22V17H19Z"
></path></svg
>`

// Select the first element with the class 'story' (after dynamically adding the content).
const storyDiv = document.querySelector('.story')

// If a story element exists, insert the plusSpan (plus icon) after it in the DOM.
if (storyDiv) {
  storyDiv.insertAdjacentElement('afterend', plusSpan)
}

const fullScreenStory = document.querySelector('.fullScreen')
const profile = document.querySelector('.profile')
const fullProfile = document.querySelector('.profileOpen')

// Show full-screen story
nav.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    const imgId = e.target.id
    fullScreenStory.style.backgroundImage = `url(${arrOfStories[imgId].story})`
    fullScreenStory.style.display = 'block'
    fullScreenStory.style.zIndex = '1001' // Ensure story is on top
    setTimeout(() => {
      fullScreenStory.classList.add('active')
    }, 10)
  }
})

// Hide full-screen story
fullScreenStory.addEventListener('click', () => {
  fullScreenStory.classList.remove('active')
  setTimeout(() => {
    fullScreenStory.style.display = 'none'
  }, 400)
})

// Show profile
profile.addEventListener('click', e => {
  fullProfile.style.visibility = 'visible'
  setTimeout(() => {
    fullProfile.classList.add('active')
    fullProfile.style.zIndex = '1002' // Ensure profile is on top
  }, 10)
})

// Hide profile
fullProfile.addEventListener('click', () => {
  fullProfile.classList.remove('active')
  setTimeout(() => {
    fullProfile.style.visibility = 'hidden'
    fullProfile.style.zIndex = '1000'
  }, 500)
})


//for toggle theme
// Load the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
  updateSVGIcon();
});

const dark = document.querySelector('.dark');

dark.addEventListener('click', e => {
  // Toggle dark mode
  document.body.classList.toggle('dark-mode');

  // Save the current theme in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.removeItem('theme');
  }

  // Handle SVG transition
  const svgIcon = dark.querySelector('svg');

  // Apply fade-out effect to the current SVG
  svgIcon.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  svgIcon.style.opacity = '0';
  svgIcon.style.transform = 'scale(0.8) rotate(90deg)';

  // Wait for the fade-out effect to complete before changing the SVG
  setTimeout(() => {
    updateSVGIcon();

    // Apply fade-in effect to the new SVG
    const newSvgIcon = dark.querySelector('svg');
    newSvgIcon.style.opacity = '0';
    newSvgIcon.style.transform = 'scale(0.8) rotate(-90deg)';
    setTimeout(() => {
      newSvgIcon.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      newSvgIcon.style.opacity = '1';
      newSvgIcon.style.transform = 'scale(1)';
    }, 0);
  }, 300); // This delay should match the fade-out duration (0.3s in this case)
});

function updateSVGIcon() {
  if (document.body.classList.contains('dark-mode')) {
    dark.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000">
        <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z">
        </path>
      </svg>`;
  } else {
    dark.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000">
        <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z">
        </path>
      </svg>`;
  }
}
