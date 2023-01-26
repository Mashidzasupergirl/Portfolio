const projectsContainer = document.getElementById('projectsContainer');
const articlesContainer = document.getElementById('articlesContainer');
const otherContainer = document.getElementById('otherContainer');

const projects = [
  {
    image: 'img/final-project-salt.png',
    name: 'Mob timer',
    link: 'http://ec2-16-171-2-140.eu-north-1.compute.amazonaws.com/',
    description:
    'Full-stack application from scratch. This is a mob timer where you can customize the team, timer time and sound',
    tags: ['React', 'Express', 'RESTful APIs', 'MongoDB', 'Docker', 'AWS']
  },
  {
    image: 'img/film-lovers-project.png',
    name: 'Application for filmlovers',
    link: 'https://mashidzasupergirl.github.io/FilmLoversProject/',
    description:
      'Save friends recommendations of what to watch and what is also important what NOT to watch. Here you can also take a test and find out what to watch tonight.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    image: 'img/todo.png',
    name: 'ToDo App',
    link: 'https://mashidzasupergirl.github.io/ToDoList/',
    description:
      'ToDo list for every day. You can add task, cross out and then delete. The data is stored in local memory, do not worry to close the tab. Application adapted for mobile devices',
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    image: 'img/totem-animal.png',
    name: 'Totem animal',
    link: 'https://mashidzasupergirl.github.io/totem-animal/',
    description:
      'This is my very first app ever that I made! If you are a beginner in coding, I will gladly explain you how web applications are created using this code as an example.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
    {
    image: 'img/fizz-buzz.png',
    name: 'FizzBuzz game & Divisors',
    link: 'https://mashidzasupergirl.github.io/FizzBuzz-and-Divisors-game/',
    description:
      '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fiz... Do you know what I mean? If not - google Fizz-Buzz game 😉',
      // This application was created with mob programming
    tags: ['HTML', 'CSS', 'JavaScript'],
  },

    {
    image: 'img/news-website-template.png',
    name: 'News website',
    link: 'https://mashidzasupergirl.github.io/News-website-template/',
    description:
      'A very simple news website template. It is fully responsive so it looks beautiful on all gadgets.',
    tags: ['HTML', 'CSS'],
  },

];

const otherProjects = [
  {
    name: 'Orienteering',
    link: 'https://youtu.be/ZxyUDG2DBD0',
    description:
      'I have been orienteering since childhood. This sport allows you to train both the mind and physical strength and at the same time you can enjoy the beauty of nature.',
    tags: ['Orienteering'],
  },
  {
    name: 'Political activism and volunteering',
    link: 'https://www.russiansagainstthewar.se/',
    description:
      'I want the war in Ukraine started by Putin to end. I am participating in the anti-war committee in Sweden «Russians Against War». I help refugees from Ukraine and political prisoners in Russia.',
    tags: ['Stand with Ukraine'],
  },

];

const articles = [
  {
    image: 'img/article1.webp',
    title: 'Is programming right for me?',
    link: '',
    description:
      'During a career change, ?',
  },
];

projects.forEach((item) => {
  projectsContainer.innerHTML += `
  <a
  href=${item.link}
  rel="noopener"
  target="_blank"
>
  <div class="card">
    <div class="image-container" style="background-image: url('')">
      <img src="${item.image}"/>
    </div>
    <div class="card-text">
      <h2>${item.name}</h2>
      <p>
      ${item.description}
        <span class="arrow-link">>></span>
      </p>
    </div>
    <div class="tags-container" id="tags">
      ${item.tags.map((tag) => `<span class="tags">${tag}</span>`).join('')}
    </div>
  </div>
</a>
  `;
});

otherProjects.forEach((item) => {
  otherContainer.innerHTML += `
  <a
  href=${item.link}
  rel="noopener"
  target="_blank"
>
  <div class="content-container">
    <h2>${item.name}</h2>
    <p>
    ${item.description}
      <span class="arrow-link">>></span>
    </p>
  </div>
  <div class="other-tags-container">
  ${item.tags.map((tag) => `<span class="tags">${tag}</span>`).join('')}
  </div>
</a>
  `;
});

articles.forEach((item) => {
  articlesContainer.innerHTML += `
  <a
  class="card"
  href=${item.link}
  rel="noopener"
  target="_blank"
>
  <div class="image-container">
    <img
      class="image"
      src=${item.image}
      alt="code-article"
    />
  </div>
  <div class="card-text">
    <h2>${item.title}</h2>
    <p>
    ${item.description}
      <span class="arrow-link">>></span>
    </p>
  </div>
</a>
  `;
});
