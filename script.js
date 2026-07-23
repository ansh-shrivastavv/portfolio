/* =====================================================
   ANSH SHRIVASTAV — PORTFOLIO JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       PAGE NAVIGATION
    ================================================= */

    const navItems = document.querySelectorAll(".nav-item");
    const pages = document.querySelectorAll(".page");


    navItems.forEach(navItem => {

        navItem.addEventListener("click", () => {

            const targetPage =
                navItem.dataset.page;


            // Remove active from navigation
            navItems.forEach(item => {

                item.classList.remove("active");

            });


            // Add active to clicked navigation
            navItem.classList.add("active");


            // Hide all pages
            pages.forEach(page => {

                page.classList.remove("active");

            });


            // Show selected page
            const selectedPage =
                document.getElementById(targetPage);


            if (selectedPage) {

                selectedPage.classList.add("active");

            }


            // Scroll content to top
            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    });


    /* =================================================
       MOBILE CONTACT TOGGLE
    ================================================= */

    const contactToggle =
        document.getElementById("contactToggle");


    const profileContacts =
        document.getElementById("profileContacts");


    if (
        contactToggle &&
        profileContacts
    ) {

        contactToggle.addEventListener(
            "click",
            () => {


                contactToggle.classList.toggle(
                    "active"
                );


                profileContacts.classList.toggle(
                    "active"
                );


                const buttonText =
                    contactToggle.querySelector(
                        "span"
                    );


                if (
                    profileContacts.classList.contains(
                        "active"
                    )
                ) {

                    buttonText.textContent =
                        "Hide Contacts";

                } else {

                    buttonText.textContent =
                        "Show Contacts";

                }

            }

        );

    }


    /* =================================================
       PORTFOLIO FILTER
    ================================================= */

    const filterButtons =
        document.querySelectorAll(
            ".filter-btn"
        );


    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    filterButtons.forEach(button => {


        button.addEventListener(
            "click",
            () => {


                const filter =
                    button.dataset.filter;


                // Active filter button
                filterButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                // Filter projects
                projectCards.forEach(project => {


                    const category =
                        project.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        project.style.display =
                            "block";


                        setTimeout(() => {

                            project.style.opacity =
                                "1";

                            project.style.transform =
                                "scale(1)";

                        }, 20);


                    } else {

                        project.style.opacity =
                            "0";

                        project.style.transform =
                            "scale(0.95)";


                        setTimeout(() => {

                            project.style.display =
                                "none";

                        }, 250);

                    }

                });

            }

        );

    });


    /* =================================================
       CONTACT FORM
    ================================================= */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    const formMessage =
        document.getElementById(
            "formMessage"
        );


    if (contactForm) {


        contactForm.addEventListener(
            "submit",
            event => {


                event.preventDefault();


                const name =
                    document
                        .getElementById(
                            "name"
                        )
                        .value
                        .trim();


                const email =
                    document
                        .getElementById(
                            "email"
                        )
                        .value
                        .trim();


                const subject =
                    document
                        .getElementById(
                            "subject"
                        )
                        .value
                        .trim();


                const message =
                    document
                        .getElementById(
                            "message"
                        )
                        .value
                        .trim();


                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    formMessage.textContent =
                        "Please fill in all fields.";

                    formMessage.style.color =
                        "#ff7777";

                    return;

                }


                // Email validation
                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(
                        email
                    )
                ) {

                    formMessage.textContent =
                        "Please enter a valid email.";

                    formMessage.style.color =
                        "#ff7777";

                    return;

                }


                const submitButton =
                    contactForm.querySelector(
                        ".submit-button"
                    );


                const originalText =
                    submitButton.innerHTML;


                submitButton.innerHTML = `

                    <span>
                        Sending...
                    </span>

                    <i class="fa-solid fa-spinner fa-spin"></i>

                `;


                submitButton.disabled =
                    true;


                setTimeout(() => {


                    formMessage.textContent =
                        "Message sent successfully!";

                    formMessage.style.color =
                        "#8fd56d";


                    contactForm.reset();


                    submitButton.innerHTML =
                        originalText;


                    submitButton.disabled =
                        false;


                }, 1500);

            }

        );

    }


    /* =================================================
       INPUT FOCUS EFFECT
    ================================================= */

    const formInputs =
        document.querySelectorAll(
            ".form-group input, .form-group textarea"
        );


    formInputs.forEach(input => {


        input.addEventListener(
            "focus",
            () => {

                input.parentElement.classList.add(
                    "focused"
                );

            }

        );


        input.addEventListener(
            "blur",
            () => {

                input.parentElement.classList.remove(
                    "focused"
                );

            }

        );

    });


    /* =================================================
       SERVICE CARD ANIMATION
    ================================================= */

    const serviceCards =
        document.querySelectorAll(
            ".service-card"
        );


    serviceCards.forEach((card, index) => {


        card.style.opacity =
            "0";


        card.style.transform =
            "translateY(20px)";


        card.style.transition =
            `opacity .5s ease ${index * .08}s,
             transform .5s ease ${index * .08}s`;


        setTimeout(() => {

            card.style.opacity =
                "1";


            card.style.transform =
                "translateY(0)";

        }, 300);

    });


    /* =================================================
       SKILL BAR ANIMATION
    ================================================= */

    const skillBars =
        document.querySelectorAll(
            ".skill-bar span"
        );


    skillBars.forEach(bar => {


        const finalWidth =
            bar.style.width;


        bar.style.width =
            "0";


        setTimeout(() => {

            bar.style.transition =
                "width 1.2s ease";


            bar.style.width =
                finalWidth;

        }, 500);

    });


    /* =================================================
       PROJECT HOVER
    ================================================= */

    const projectImages =
        document.querySelectorAll(
            ".project-image"
        );


    projectImages.forEach(image => {


        image.addEventListener(
            "mousemove",
            event => {


                const rect =
                    image.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateX =
                    (
                        y /
                        rect.height -
                        0.5
                    ) * -2;


                const rotateY =
                    (
                        x /
                        rect.width -
                        0.5
                    ) * 2;


                image.style.transform =
                    `
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    `;

            }

        );


        image.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "";

            }

        );

    });


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".section-title, .timeline-item, .tool-card, .project-card"
        );


    const observer =
        new IntersectionObserver(
            entries => {


                entries.forEach(entry => {


                    if (
                        entry.isIntersecting
                    ) {


                        entry.target.classList.add(
                            "show"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.1
            }

        );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* =================================================
       KEYBOARD NAVIGATION
    ================================================= */

    document.addEventListener(
        "keydown",
        event => {


            if (
                event.key === "Escape"
            ) {


                if (
                    profileContacts &&
                    profileContacts.classList.contains(
                        "active"
                    )
                ) {


                    profileContacts.classList.remove(
                        "active"
                    );


                    contactToggle.classList.remove(
                        "active"
                    );


                    contactToggle.querySelector(
                        "span"
                    ).textContent =
                        "Show Contacts";

                }

            }

        }

    );


});