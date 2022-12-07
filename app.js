const sec = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu__link');
const scrollArrow = document.querySelector('.first-page-btn');
const secPage = document.querySelector('#second-page');

// function checkIfElementisVisibleInViewPort(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };

// function activeMenu() {
//     let len = sections.length;
//     while (--len && window.scrollY + 85 < sections[len].offsetTop) {
//         navLinks.forEach(ltx => ltx.classList.remove("menu__link--active"));
//         navLinks[len].classList.add("menu__link--active");
//     }
// }

// function menuItemsUnderLine() {  
//     navLinks.forEach(section => {    
//             if (checkIfElementisVisibleInViewPort(section)) {
//                 section.classList.add("menu__link--active");
//             } else {
//                 section.classList.remove("menu__link--active");
//             }    
//     });
// }

// window.addEventListener('scroll', menuItemsUnderLine());
// function activeMenu() {
//    let len = sec.length;
//    while (--len && window.scrollY + 85 < sec[len].offsetTop) {
//        navLinks.forEach(ltx => ltx.classList.remove("menu__link--active"));
//        navLinks[len].classList.add("menu__link--active");
//    }
// }

function activeMenu() {
    sec.forEach((section) => {
        if (section.getBoundingClientRect().top <= 150 && section.getBoundingClientRect().bottom >= 150) {
            navLinks.forEach((link) => {
                link.classList.remove("menu__link--active");
                if (section.getAttribute("id") === link.getAttribute("href").slice(1)) {
                    link.classList.add("menu__link--active");
                }
            });
        }
    })
}


//         // sections.addEventListener('scroll', (section) => section.
//         // forEach(section => {
//         //     if (checkIfElementisVisibleInViewPort(section)) {
//         //         section.classList.add("menu__link--active");
//         //     } else {
//         //         section.classList.remove("menu__link--active");
//         //     }
//         // }));
//     }
// }

function makeMenu() {
    navLinks.forEach((link) => {   

        link.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // sections.forEach((section, index) => {
    //     if (activeMenu(section)) {
    //         navLinks[index].classList.add("menu__link--active");
    //     } 
    //     if (!activeMenu(section)) {
    //         navLinks[index].classList.remove("menu__link--active");
    //     }
        
    // });
}


window.addEventListener('scroll', activeMenu);
window.addEventListener('scroll', makeMenu);


// menuItemsUnderLine();

// scrollArrow.addEventListener('click', function (e) {
//     e.preventDefault();
//     secPage.scrollIntoView({
//         behavior: 'smooth'
//     });

// });

// window.addEventListener('scroll', activeMenu);

// function makeNavigation() {
//     activeMenu();
//     navLinks.forEach(function (item) {

//         item.addEventListener('click', function (e) {
//             e.preventDefault();
//             let id = this.getAttribute('href');

//             if (this.getAttribute('href') == "#first-page") {
//                 window.scrollTo({
//                     top: 0,
//                     behavior: 'smooth'
//                 });
//                 this.style.fontWeight = 'bold';
//             } else {
//                 let top = document.querySelector(id).offsetTop;
//                 window.scrollTo({
//                     top: top - 85,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// }

// makeNavigation();

