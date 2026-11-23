let following = false;

const followBtn = document.getElementById("followBtn");
const count = document.getElementById("count");

followBtn.addEventListener("click", function () {

    if (following === false) {
        following = true;

        followBtn.textContent = "Following";
        followBtn.classList.add("following");
        count.textContent = 121;
    }
    else {
        following = false;

        followBtn.textContent = "Follow";
        followBtn.classList.remove("following");
        count.textContent = 120;
    }

});