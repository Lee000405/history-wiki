
const searchInput = document.getElementById("searchInput");
const articleCards = document.querySelectorAll(".article-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    let visibleCount = 0;

    articleCards.forEach(card => {
        const matches = card.textContent.toLowerCase().includes(keyword);
        card.style.display = matches ? "block" : "none";
        if (matches) visibleCount++;
    });

    noResults.hidden = visibleCount !== 0;
});
