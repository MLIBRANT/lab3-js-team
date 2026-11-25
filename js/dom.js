const liczbaFormularzy = document.forms.length;
const liczbaObrazkow = document.images.length;
const liczbaLinkow = document.links.length;
const liczbaAkapitow = document.querySelectorAll('#projekt1 p').length;

console.log('Formularze na całej stronie:', liczbaFormularzy);
console.log('Obrazki na całej stronie:', liczbaObrazkow);
console.log('Odnośniki na całej stronie:', liczbaLinkow);
console.log('Akapity <p> w sekcji #projekt1:', liczbaAkapitow);