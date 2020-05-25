window.onload = () => {
    const rank_button = document.createElement("button");
    rank_button.id = "rank";
    rank_button.textContent = "Rank"
    document.querySelector('#navbar-right').prepend(rank_button);
    
    rank_button.addEventListener("click", () => fetch_rank());
};

function fetch_rank() {
    document.querySelector('#rank').textContent = "Bronze";
}