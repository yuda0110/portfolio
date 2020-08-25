const $ = require('jquery');

const renderFooter = () => {
  const footer = $('.footer');
  const date = new Date();
  const year = date.getFullYear();
  const myName = $('<span class="footer__important">').text('Yuko Uda')
  // footer.text(`Copyright © ${year} Yuko Uda`);
  if (footer) {
    footer.append(`Copyright © ${year} `, myName);
  }
}

export default renderFooter;