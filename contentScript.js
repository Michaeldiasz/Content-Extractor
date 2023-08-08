const headings = [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(h => h.innerText);
const bodyText = [...document.querySelectorAll('p')].map(p => p.innerText);
const images = [...document.querySelectorAll('img')].map(img => img.src);

const extractedContent = {
    headings: headings,
    bodyText: bodyText,
    images: images
};

console.log(extractedContent);
