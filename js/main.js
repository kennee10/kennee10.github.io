// ==== preloader ====
$(window).on('load',function(){
    $(".loader-wrapper").fadeOut(1250);
});

// ==== theme toggle btn ====
document.querySelector(".theme-toggle-btn").addEventListener
("click", () => {
    document.body.classList.toggle('dark');
});