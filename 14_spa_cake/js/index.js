// import the elements the index.html
const headerIndex = document.querySelector('header');
const mainIndex = document.querySelector('main');
const footerIndex = document.querySelector('footer');
headerIndex.innerHTML = `
<section id="cupcakesSection">
    <h2>Cupcakes</h2>
    <img src="img/cupcakes1.webp" alt="Cupcakes">
    <img src="img/cupcakes2.jpg" alt="Cupcakes">
    <img src="img/cupcakes3.webp" alt="Cupcakes">
</section>
`;

// import the pages
import * as pageHome from './home.js';
import * as pageDoces from './doces.js';
import * as pageBrigadeiros from './brigadeiros.js';
import * as pageCupcakes from './cupcakes.js';

// print of header, home and footer the page
headerIndex.innerHTML = pageHome.header();
mainIndex.innerHTML = pageHome.homePage();
footerIndex.innerHTML = pageHome.footer();

// creation the custon event
const eventOnstatechange = new CustomEvent('onstatechange', { detail: { namePage: location.pathname } });

// import the elements the moduler.js
const btns = document.querySelectorAll('#navBar a');

// check button click
btns.forEach((elementBtn) => {

    elementBtn.addEventListener('click', () => {

        switch (elementBtn.textContent) {
            case 'Home':
                history.pushState('', '', 'index.html');
                break;

            case 'Doces':
                history.pushState('', '', 'doces');
                break;

            case 'Brigadeiros':
                history.pushState('', '', 'brigadeiros');
                break;

            case 'Cupcakes':
                history.pushState('', '', 'cupcakes');
                break;

            default:
                break;
        }
        eventOnstatechange.detail.namePage = location.pathname;
        document.dispatchEvent(eventOnstatechange);
    });
});
 
// routing the pages
document.addEventListener('onstatechange', () => {

    switch (eventOnstatechange.detail.namePage) {
        case '/index.html':
            mainIndex.innerHTML = pageHome.homePage();
            break;

        case '/doces':
            mainIndex.innerHTML = pageDoces.docesPage();
            break;

        case '/brigadeiros':
            mainIndex.innerHTML = pageBrigadeiros.brigadeirosPage();
            break;

        case '/cupcakes':
            mainIndex.innerHTML = pageCupcakes.cupcakesPage();
            break;

        default:
            break;
    }
});