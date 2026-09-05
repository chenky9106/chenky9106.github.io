(function () {
    'use strict';

    const root = document.documentElement;
    root.classList.add('js');
    const header = document.querySelector('[data-header]');
    const themeToggle = document.querySelector('[data-theme-toggle]');
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const menuLinks = Array.from(document.querySelectorAll('#site-menu a'));
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function storageGet(key) {
        try {
            return window.localStorage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    function storageSet(key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (error) {
            // Theme switching remains functional for the current page.
        }
    }

    function applyTheme(theme, persist) {
        const isDark = theme === 'dark';
        if (isDark) {
            root.dataset.theme = 'dark';
        } else {
            delete root.dataset.theme;
        }

        if (themeToggle) {
            themeToggle.setAttribute('aria-pressed', String(isDark));
            themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
        }

        if (themeMeta) {
            themeMeta.setAttribute('content', isDark ? '#101720' : '#F5F4F0');
        }

        if (persist) {
            storageSet('theme', theme);
        }
    }

    applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light', false);

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
        });
    }

    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = function (event) {
        if (!storageGet('theme')) {
            applyTheme(event.matches ? 'dark' : 'light', false);
        }
    };
    if (typeof systemTheme.addEventListener === 'function') {
        systemTheme.addEventListener('change', handleSystemThemeChange);
    } else if (typeof systemTheme.addListener === 'function') {
        systemTheme.addListener(handleSystemThemeChange);
    }

    function closeMenu() {
        if (!header || !menuToggle) {
            return;
        }
        header.dataset.menuOpen = 'false';
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    if (menuToggle && header) {
        menuToggle.addEventListener('click', function () {
            const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
            header.dataset.menuOpen = String(willOpen);
            menuToggle.setAttribute('aria-expanded', String(willOpen));
            if (willOpen && menuLinks.length) {
                window.requestAnimationFrame(function () {
                    menuLinks[0].focus();
                });
            }
        });

        menuLinks.forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
                closeMenu();
                menuToggle.focus();
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 860) {
                closeMenu();
            }
        });
    }

    let scrollTicking = false;
    const trackedSections = ['work', 'publications', 'profile', 'contact']
        .map(function (id) { return document.getElementById(id); })
        .filter(Boolean);

    function updateScrollState() {
        const scrollY = window.scrollY;
        if (header) {
            header.classList.toggle('is-scrolled', scrollY > 24);
        }

        let currentId = '';
        trackedSections.forEach(function (section) {
            if (section.getBoundingClientRect().top <= 150) {
                currentId = section.id;
            }
        });

        menuLinks.forEach(function (link) {
            const isCurrent = link.getAttribute('href') === '#' + currentId;
            if (isCurrent) {
                link.setAttribute('aria-current', 'true');
            } else {
                link.removeAttribute('aria-current');
            }
        });

        scrollTicking = false;
    }

    window.addEventListener('scroll', function () {
        if (!scrollTicking) {
            window.requestAnimationFrame(updateScrollState);
            scrollTicking = true;
        }
    }, { passive: true });
    updateScrollState();

    const animatedElements = Array.from(document.querySelectorAll('[data-animate]'));
    if ('IntersectionObserver' in window && !reduceMotion.matches && animatedElements.length) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -36px 0px'
        });

        animatedElements.forEach(function (element) {
            observer.observe(element);
        });

        window.requestAnimationFrame(function () {
            root.classList.add('motion-ready');
        });
    } else {
        animatedElements.forEach(function (element) {
            element.classList.add('is-visible');
        });
    }

    document.querySelectorAll('[data-current-year]').forEach(function (element) {
        element.textContent = String(new Date().getFullYear());
    });
}());
