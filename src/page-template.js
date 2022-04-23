const gereateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  else {
    return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p></p>
    </section>
    `
  }
}

const generateProjects = projectsArr => {
  const projectHtmlArr = projectsArr.map(({name, description, languages, link }) => {
    return `
    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
      <h3 class="portfolio-item0title text-light">${name}</h3>
      <h5 class="portfolio-languages">
        Built With:
        ${languages.join(', ')}
      </h5>
      <p>${description}</p>
      <a href="${link}" class="btn mt-auto">
        <i class="fab fa-github mr-2"></i>View Project on Github
      </a>
    </div>
    `;
  });

  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
        <!-- Leaving this empty as we'll dynamically insert project HTML here -->
        ${projectHtmlArr.join('')}
      </div>
    </section>
  `;
};


module.exports = (templateData) => {
  const { projects, about, ...header } = templateData;



  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap">
      <link rel="stylesheet" href="style.css">
    <title>${header.name}</title>
    </head>

    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/\n${header.github}">Github</a>
          </nav>
        </div>
      </header>
      <main class="container my-5">
        ${gereateAbout(about)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by $[header.name]</h3>
      </footer>
    </body>
  </html>
  `;
};


