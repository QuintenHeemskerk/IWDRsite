//In dit bestand allemaal kleinere JS functies

// neemt gebruiker terug naar boven
const naarBoven = () => window.scrollTo({top:0, behavior: 'smooth'})


//maak navbar responsive
var navLinks = document.getElementById("navLinks");
function toon(){
  navLinks.style.right = "0";
}
function verberg(){
  navLinks.style.right = "-250px";
}


//neemt gebruiker naar specefiek deel van de samenvatting
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
