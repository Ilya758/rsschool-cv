document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded.');

    const
        headerInfo = document.querySelector('.header-info'),
        headerNav = document.querySelector('.header-nav'),
        menuBtn = document.querySelector('.icon-menu'),
        fadeWrapper = document.querySelector('.wrapper-fade'),
        infoContent = document.querySelector('.general-info__content'),
        prioritiesDiv = document.querySelector('.general-priorities'),
        skillsDiv = document.querySelector('.general-skills'),
        portfolioDiv = document.querySelector('.general-portfolio'),
        englishDiv = document.querySelector('.general-english'),
        codeDiv = document.querySelector('.code-example'),
        iconToTop = document.querySelector('.icon-toTop');

    appear();
    function appear() {
        const
            basicDelay = 2000,
            headerInfoDelay = basicDelay + 1000,
            headerNavDelay = headerInfoDelay + 1000;
        setTimeout(() => {
            document.body.classList.remove('opacity_perc_0');
            document.body.classList.add('body_state_appear');
        }, basicDelay);

        setTimeout(() => {
            headerInfo.classList.add('active', 'header-info_state_fadeInDown');
        }, headerInfoDelay);

        setTimeout(() => {
            if (window.innerWidth > 576) {
                headerNav.classList.add('active');
            }
        }, headerNavDelay);
    }

    function scrollToTop() {
        if (window.scrollY !== 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }

    document.addEventListener('click', (event) => {
        if (event.target !== menuBtn && Array.from(fadeWrapper.classList).find((el) => el === 'wrapper_state_fadeIn')) {
            fadeWrapper.style.opacity = 0;
            headerNav.style.opacity = 0;
            setTimeout(() => {
                fadeWrapper.style.opacity = 1;
                headerNav.style.opacity = 1;
                toggleMenu();
            }, 510);
        }
    });

    menuBtn.addEventListener('click', toggleMenu);

    function animateMenuBtn() {
        function getQuantityOfDegs() {
            return {
                count: 0,
            }
        }

        function changeDegOfMenuIcon() {
            menuBtn.style.transform = `rotateZ(${degs.count += 10}deg)`;
        }

        const interval = setInterval(() => {
            changeDegOfMenuIcon();
        }, 100)

        const degs = getQuantityOfDegs();
        setTimeout(() => {
            clearInterval(interval);
            menuBtn.style.transform = 'matrix(1,0,0,1,0,0)';
        }, 14400);
    }

    animateMenuBtn();

    function toggleMenu() {
        fadeWrapper.classList.toggle('wrapper_state_fadeIn');
        headerNav.classList.toggle('header-nav_state_fadeInLeft');
    }

    function scrollAppear() {
        let yCoord = window.scrollY;
        const htmlWidth = document.documentElement.clientWidth;
        if (window.innerHeight > 3000) {
            setTimeout(() => infoContent.classList.add('active', 'general-info_state_fadeInDown'), 3500);
            setTimeout(() => prioritiesDiv.classList.add('general-priorities_state_fadeInDown'), 4500);
            setTimeout(() => skillsDiv.classList.add('general-skills_state_fadeInUp'), 5500);;
            setTimeout(() => portfolioDiv.classList.add('general-portfolio_state_appear'), 6500);
            setTimeout(() => englishDiv.classList.add('general-english_state_fadeInLeft'), 7500);
            setTimeout(() => codeDiv.classList.add('code-example_state_fadeInLeft'), 8500);

        }
        if (htmlWidth >= 768) {
            setTimeout(() => {
                infoContent.classList.add('active', 'general-info_state_fadeInDown');
            }, 3500);

            if (yCoord > 1100) {
                prioritiesDiv.classList.add('general-priorities_state_fadeInDown');
            }

            if (yCoord > 2000) {
                skillsDiv.classList.add('general-skills_state_fadeInUp');
            }

            if (yCoord > 3200) {
                portfolioDiv.classList.add('general-portfolio_state_appear');
            }

            if (yCoord > 4300) {
                englishDiv.classList.add('general-english_state_fadeInLeft');
                codeDiv.classList.add('code-example_state_fadeInLeft');
            }
        }

        if (htmlWidth >= 250 && htmlWidth < 768) {
            setTimeout(() => {
                infoContent.classList.add('active', 'general-info_state_fadeInDown');
            }, 3500);

            if (yCoord > 500) {
                prioritiesDiv.classList.add('general-priorities_state_fadeInDown');
            }

            if (yCoord > 900) {
                skillsDiv.classList.add('general-skills_state_fadeInUp');
            }

            if (yCoord > 1500) {
                portfolioDiv.classList.add('general-portfolio_state_appear');
            }

            if (htmlWidth > 425) {
                if (yCoord > 2800) {
                    englishDiv.classList.add('general-english_state_fadeInLeft');
                    codeDiv.classList.add('code-example_state_fadeInLeft');
                }
            }
            else {
                if (yCoord > 2400) {
                    englishDiv.classList.add('general-english_state_fadeInLeft');
                    codeDiv.classList.add('code-example_state_fadeInLeft');
                }
            }
        }
    }
    scrollToTop();
    setTimeout(() => {
        scrollAppear();
        window.addEventListener('scroll', () => {
            scrollAppear();
            if (window.scrollY >= 500) {
                iconToTop.classList.add('active');
            } else {
                iconToTop.classList.remove('active');
            }
        })
    }, 1000);

    window.addEventListener('resize', () => {
        if (headerNav.style.opacity !== 0 && window.innerWidth < 576) {
            headerNav.classList.remove('active');
        }
    })
});
