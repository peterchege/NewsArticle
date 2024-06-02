// Replace 'YOUR_API_KEY' with your actual API key from News API
const apiKey = "8c0f81969a5b4d27b9f39aadfd60c9ca";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("the response==>", data);
    displayNews(data.articles);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

function displayNews(articles) {
  const newsContainer = document.getElementById("news-articles");
  newsContainer.innerHTML = "";

  articles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");

    const title = document.createElement("h2");
    title.textContent = article.title;
    articleElement.appendChild(title);

    const description = document.createElement("p");
    description.textContent = article.description;
    articleElement.appendChild(description);

    const url = document.createElement("a");
    url.href = article.url;
    url.textContent = "Read more";
    url.target = "_blank";
    articleElement.appendChild(url);

    newsContainer.appendChild(articleElement);
  });
}

fetchNews();
