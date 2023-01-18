const projectsContainer = document.getElementById('projectsContainer');
const articlesContainer = document.getElementById('articlesContainer');
const otherContainer = document.getElementById('otherContainer');

const projects = [
  {
    image: 'img/final-project-salt.png',
    name: 'Mob timer',
    link: 'http://ec2-16-171-2-140.eu-north-1.compute.amazonaws.com/',
    description:
    'Final project at Salt. We had two weeks to make a full-stack application from scratch. This is a mob timer where you can customize the team, timer time and sound',
    tags: ['React', 'Express', 'RESTful APIs', 'MongoDB', 'Docker', 'AWS']
  },
  {
    image: 'img/film-lovers-project.png',
    name: 'Application for filmlovers',
    link: 'https://mashidzasupergirl.github.io/FilmLoversProject/',
    description:
      'This application will help you to save friends recommendations of what to watch and what is also important what NOT to watch. Here you can also take a test and find out what to watch tonight.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    image: 'img/movies.png',
    name: 'Movie App',
    link: 'https://the-movie-db-project.netlify.app/',
    description:
      'Pair-programming project using React Router, displaying lists of Top Rated Movies and more details when clicked on.',
    tags: ['React', 'React Router'],
  },
  {
    image: 'img/todo.png',
    name: 'ToDo App',
    link: 'https://mashidzasupergirl.github.io/ToDoList/',
    description:
      'ToDo list for every day. You can add task, cross out and then delete. The data is stored in local memory, do not worry to close the tab',
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
  },

    {
    image: 'img/fizz-buzz.png',
    name: 'FizzBuzz game & Divisors',
    link: 'https://dl-shows-api.netlify.app/',
    description:
      '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz... Do you know what I mean? If not - google Fizz-Buzz game 😉',
    tags: ['API', 'Express.js', 'Backend'],
  },

  // {
  //   image: 'img/express_api.png',
  //   name: 'Express Api',
  //   link: 'https://dl-shows-api.netlify.app/',
  //   description:
  //     'First backend project where I have created an API using Express. This API returns an array of data, or a single item',
  //   tags: ['API', 'Express.js', 'Backend'],
  // },
];

const otherProjects = [
  {
    name: 'Music App',
    link: 'https://react-app-music-realeses.netlify.app/',
    description:
      'Pair-programming project which shows new albums and singles releases.',
    tags: ['JSX', 'React', 'API'],
  },
  {
    name: 'Guess Who?',
    link: 'https://guess-who-by-darya.netlify.app/',
    description:
      'My digital version of the old character guessing board game -> Guess Who? I enjoyed working on this project even when sometimes it was hard to deal with challenges. After all, I built my own game for the first time!',
    tags: ['JavaScript', 'CSS', 'HTML'],
  },
];

const articles = [
  {
    image: 'img/article1.webp',
    title: 'Is programming right for me?',
    link: 'https://medium.com/@darya.lapata/is-programming-right-for-me-d17678c198f7',
    description:
      'During a career change, you may come across some thoughts and questions. Is it for me? Am I smart enough for this? Will I ever understand the code?',
  },
  {
    image: 'img/article2.webp',
    title: 'My top 5 resources to learn how to code',
    link: 'https://medium.com/@darya.lapata/is-programming-right-for-me-d17678c198f7',
    description:
      'In this article, I wanted to share my top 5 resources to learn how to code...',
  },
  {
    image: 'img/article3.webp',
    title: 'Think like a programmer',
    link: 'https://medium.com/@darya.lapata/think-like-a-programmer-4f47aed41433',
    description:
      'Recently I was thinking about what does it mean to be a programmer. After some googling I found a ton of interesting articles and created an image that explains it so clearly...',
  },
  {
    image: 'img/article4.webp',
    title: 'Git common commands',
    link: 'https://medium.com/@darya.lapata/git-common-commands-7d329583f34a',
    description:
      'Git is an important tool to handle when you are a developer. In this article, I wanted to share most common git commands...',
  },
];

projects.forEach((item) => {
  projectsContainer.innerHTML += `
  <a
  href=${item.link}
  rel="noopener"
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
