document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project-card');

    function fadeInProjects() {
        projects.forEach((project, index) => {
            if (isElementInViewport(project)) {
                project.classList.add('animated');
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', fadeInProjects);
    window.addEventListener('resize', fadeInProjects);
    window.addEventListener('load', fadeInProjects);
});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        successMessage.classList.remove('hidden');
        contactForm.reset();
        setTimeout(function () {
            successMessage.classList.add('hidden');
        }, 10000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var showMoreBtn = document.getElementById('showMoreBtn');
    var moreInfo = document.getElementById('moreInfo');

    showMoreBtn.addEventListener('click', function() {
        moreInfo.classList.toggle('hidden');
        moreInfo.classList.toggle('visible');

        if (moreInfo.classList.contains('visible')) {
            showMoreBtn.textContent = 'Show Less';
        } else {
            showMoreBtn.textContent = 'Show More';
        }
    });
});