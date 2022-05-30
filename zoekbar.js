window.onload = () => {
  const cardHeaders = document.getElementsByClassName("js--cardHeader");
  const colors = ["#0074D9","#FF4136"];
  const randomNumber = Math.floor(Math.random() * 2);

  const searchbar = document.getElementById("js--searchbar");
  const cardsList = document.getElementsByClassName("card");




  searchbar.onkeyup = (event) => {
    let filter = event.target.value.toUpperCase();
    for(let i = 0; i < cardsList.length; i++){
      let innerHTML = cardsList[i].innerHTML.toUpperCase();
      if(innerHTML.indexOf(filter) !== -1){
        cardsList[i].style.display = "";
      }
      else{
        cardsList[i].style.display = "none";
      }

    }
  }
}
