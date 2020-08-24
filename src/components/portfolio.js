import portfolioList from "./portfolio-list";

const $ = require('jquery');

const renderPortfolio = () => {
  const portfolioListEl = $('.portfolio__list');

  $('.no-js').remove();

  portfolioList.forEach((item) => {
    const itemEl = $('<li class="portfolio__item">');
    const titleEl = $('<h3 class="heading-tertiary">').text(item.title);
    const imgEl = $(`<img src=${item.image} class="portfolio__img"/>`);
    const btnContainerEl = $('<div class="portfolio__btn-container">');
    btnContainerEl.append(`
      <a class="btn btn--m btn--pink" href="${item.pageLink}" target="_blank">
        Demo<ion-icon name="link"></ion-icon>
      </a>
      <a class="btn btn--m btn--pink" href="${item.codeLink}" target="_blank">
        Code<ion-icon name="link"></ion-icon>
      </a>
    `);
    const descEl = $('<p class="portfolio__desc">').text(item.description);
    const techListEl = $('<ul class="portfolio__tech-list">');

    item.techs.forEach((tech) => {
      const techItem = $('<li class="portfolio__tech-item">').text(tech);
      techListEl.append(techItem);
    })

    itemEl.append(titleEl, imgEl, btnContainerEl, descEl, techListEl);
    portfolioListEl.append(itemEl);
  })
}

// const renderPortfolio = () => {
//   const portfolioListEl = document.querySelector('.portfolio-list');
//
//   portfolioList.forEach((item) => {
//     const itemEl = document.createElement('li');
//     const titleEl = document.createElement('h3');
//     titleEl.textContent = item.title;
//
//     itemEl.appendChild(titleEl);
//     portfolioListEl.appendChild(itemEl);
//   })
// }

export default renderPortfolio;