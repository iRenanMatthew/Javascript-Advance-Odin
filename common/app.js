const lessonContainer = document.querySelector(".lesson-container");
let contentList = [];
let contentHTML = "";
function fetchJSONData() {
  let url = "./common/api/content.json";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => console.error("Unable to fetch data:", error));
}

fetchJSONData().then((data) => {
  contentList = data;

  insertContentData(contentList);
});

function insertContentData(content) {
  content.forEach(({ id, title, icon, url }) => {
    contentHTML += `
    <div class="content-item ${id}" >
      <a class="content-image" href="${url}" target="_self">
        <span class="${icon}"></span>
      </a>
      <p class="content-title">${title}</p> 
     </div>`;
  });

  console.log(contentHTML);
  lessonContainer.innerHTML = contentHTML;
}
