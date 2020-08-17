import portfolioList from "./portfolio-list";

const renderPortfolio = () => {
  const portfolioListEl = document.querySelector('.portfolio-list');

  portfolioList.forEach((item) => {
    const itemEl = document.createElement('li');
    const titleEl = document.createElement('h3');
    titleEl.textContent = item.title;

    itemEl.appendChild(titleEl);
    portfolioListEl.appendChild(itemEl);
  })
}

export default renderPortfolio;