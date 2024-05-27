
function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflowhidden")
    document.querySelector(".iconbox").classList.toggle("cross")
}
// accordion
const accordionbtn = document.querySelectorAll(".accordionbtn")
accordionbtn.forEach((e) => {
    e.addEventListener("click", () => {
        const activeaccodion = document.querySelector(".active")
        e.parentElement.classList.toggle("active")
        activeaccodion && activeaccodion.classList.remove("active")
    })
});


$('.slider_collaboration').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1000,
    pauseOnHover: true,
    cssEase: 'linear',
});
$('.Testimonials_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '60px',
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,

            }

        },

    ]
});