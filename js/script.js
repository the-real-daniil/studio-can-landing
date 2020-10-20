$(document).ready(function () {
    // тут я добавляю слайдер на меню с помощью sly библиотеки
    let slider;
    if (window.matchMedia('(max-width: 768px)').matches) {
        // если ширина экрана не больше 768 пикселей
        const options = {
            horizontal: 1,
            speed: 300,
            mouseDragging: 1,
            touchDragging: 1,
        };
        slider = new Sly('#frame', options).init();
    }

    

    // тут реализована логика движения менюшки 
    // все грязновато, непонятно и трудночитаемо, но я пока оставлю так

    $("#menu-fake").width($("#menu-we").width()) // установили начальную ширину бегунку

    if (window.matchMedia('(min-width: 900px)').matches) { 
        // если ширина экрана больше 900 пикселей
        $(".menu__item").click(function () { // подписались на событие клика по менюшке
            // listen menu-item click  
            $(".menu__item").removeClass("menu__item_active") // удалили активный класс со всех блочков
            $(this).addClass("menu__item_active") // добавили активный класс к блоку, на который тыкнули
            const id = $(this).attr('id'); // взяли id у активного блока
            const fakeItem = $("#menu-fake") // нашли наш бегающий блок
            switch (id) {
                case "menu-we":
                    moveFakeItem(3) // подвинули бегунок на 3 пикселя вправо
                    fakeItem.width($(this).width()) // установили ему ширину равную размеру блока, по которому он едет
                    break
                case "menu-services":
                    moveFakeItem($("#menu-we").outerWidth() + 3)  // подвинули бегунок на ширину предыдущего блока + 3px
                    fakeItem.width($(this).width()) // установили ему ширину равную размеру блока, по которому он едет
                    break
                    // далее все аналогично
                case "menu-examples":
                    moveFakeItem($("#menu-we").outerWidth() + $("#menu-services").outerWidth() + 3)
                    fakeItem.width($(this).width())
                    break
                case "menu-process":
                    moveFakeItem($("#menu-we").outerWidth() + $("#menu-services").outerWidth() + $("#menu-examples").outerWidth() + 3)
                    fakeItem.width($(this).width())
                    break
                case "menu-vacancies":
                    moveFakeItem($("#menu-we").outerWidth() + $("#menu-services").outerWidth() + $("#menu-examples").outerWidth() + $("#menu-process").outerWidth() + 3)
                    fakeItem.width($(this).width())
                    break
                case "menu-contacts":
                    moveFakeItem($("#menu-we").outerWidth() + $("#menu-services").outerWidth() + $("#menu-examples").outerWidth() + $("#menu-process").outerWidth() + $("#menu-vacancies").outerWidth())
                    fakeItem.width($(this).width())
                    break
                default:
                    break
            }
        })
    } else {
        // тут все то же самое
        // отличается только ширина сдвига бегунка
        // и добавляется новая фича - слайдер автоматически скроллится при переключении блоков
        $(".menu__item").click(function () {
            $(".menu__item").removeClass("menu__item_active")
            $(this).addClass("menu__item_active")
            const id = $(this).attr('id');
            const fakeItem = $("#menu-fake")
            switch (id) {
                case "menu-we":
                    moveFakeItem(2) // подвинули бегунок на 2 пикселя вправо
                    fakeItem.width($(this).width()) // установили ему ширину равную размеру блока, по которому он едет
                    slider.slideTo(0) // сдвинули слайдер в начало
                    break
                case "menu-services":
                    moveFakeItem($("#menu-we").outerWidth() + 2)
                    fakeItem.width($(this).width())
                    slider.slideTo($("#menu-we").outerWidth() / 4 + 2) // сдвинули на ширину предыдущего блока + 2px вправо
                    break
                case "menu-examples":
                    moveFakeItem($("#menu-we").outerWidth() + $("#menu-services").outerWidth() + 2)
                    fakeItem.width($(this).width())
                    slider.slideTo($("#menu-we").outerWidth() + $("#menu-we").outerWidth() / 2 + 2)
                    break
                case "menu-process":
                    moveFakeItem($("#menu-we").outerWidth() + $("#menu-services").outerWidth() + $("#menu-examples").outerWidth() + 2)
                    fakeItem.width($(this).width())
                    slider.slideTo($("#menu-we").outerWidth() + $("#menu-services").outerWidth() + $("#menu-services").outerWidth() / 2 + 2)
                    break
                case "menu-vacancies":
                    moveFakeItem($("#menu-we").outerWidth() + $("#menu-services").outerWidth() + $("#menu-examples").outerWidth() + $("#menu-process").outerWidth() + 2)
                    fakeItem.width($(this).width())
                    slider.slideTo($("#menu-we").outerWidth() + $("#menu-services").outerWidth() + $("#menu-examples").outerWidth() + $("#menu-process").outerWidth() / 2 + 2)
                    break
                case "menu-contacts":
                    moveFakeItem($("#menu-we").outerWidth() + $("#menu-services").outerWidth() + $("#menu-examples").outerWidth() + $("#menu-process").outerWidth() + $("#menu-vacancies").outerWidth())
                    fakeItem.width($(this).width())
                    slider.slideTo($("#menu-we").outerWidth() + $("#menu-services").outerWidth() + $("#menu-examples").outerWidth() + $("#menu-process").outerWidth() + $("#menu-vacancies").outerWidth())
                    break
                default:
                    break
            }
        })
    }

    // $(window).scroll(function () {
    //     // make menu fixed on top
    //     if ($(this).scrollTop() >= 70) {
    //         $('.menu').addClass('stickytop');
    //         $('.top').addClass('p-top-184')
    //     } else {
    //         $('.menu').removeClass('stickytop');
    //         $('.top').removeClass('p-top-184')
    //     }
    // });

    // $(".menu__row").on('click', '[href*="#"]', function (e) {
    //     // make smooth scroll to anchor
    //     $.scrollTo($(this.hash), 500, {
    //         'offset': -70
    //     });
    //     e.preventDefault();
    // });

    // let visibleElem = null
    // // let prevScrollPos = 0

    // $(window).on('resize scroll', function () {
    //     // switch menu items when scrolling
    //     let pagesArr = [
    //         "we",
    //         "services",
    //         "examples",
    //         "process",
    //         "vacancies",
    //         "contacts",
    //     ]

    //     // pagesArr = prevScrollPos > $(this).scrollTop ? pagesArr.reverse() : pagesArr
    //     // prevScrollPos = $(this).scrollTop

    //     elem = pagesArr.find(page => $(`#${page}`).isInViewport())
    //     if (elem && visibleElem !== elem) {
    //         $(`#menu-${elem}`).click()
    //         visibleElem = elem
    //     }
    // });




});

$.fn.isInViewport = function () {
    // check element visibility
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();

    const menuHeight = 70 // height of top fixed menu

    const viewportTop = $(window).scrollTop() + menuHeight;
    const viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

const moveFakeItem = (left = 1, delay = 300) => {
    // move fake menu item to left with delay
    const fakeItem = $(".menu__item_fake")
    fakeItem.animate({
        left: `${left}px`
    }, delay)
}