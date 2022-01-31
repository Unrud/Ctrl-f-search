// Variables
const $sampleText = document.getElementById("sampleText");
const $searchBar = document.getElementById("searchBar");

//Function
$searchBar.addEventListener("input", (event) => {
  const searchText = event.target.value;
  const regex = new RegExp(searchText, "gi");

  let text = $sampleText.innerHTML;
  text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, "");

  const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
  $sampleText.innerHTML = newText;
});
