function navToggle() {
    document.getElementById("headerUl").classList.toggle("_active");
    // document.getElementById("headerBackdrop").classList.toggle("_active");
}

function openModal(imageUrl) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImg").src = imageUrl;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

document.getElementById("copyright").textContent = new Date().getFullYear();