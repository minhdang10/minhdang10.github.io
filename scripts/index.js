$(document).ready(() => {

    let docWidth = document.body.clientWidth,
    docHeight = document.body.clientHeight;

    window.addEventListener("resize", function () {
        docWidth = document.body.clientWidth;
        docHeight = document.body.clientHeight;
        console.log(docWidth, docHeight);
    }, false);

    const particlesConfig = {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 2500
                }
            },
            "color": {
                "value": ["#5f5fc2", "#250a63"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": ["#5f5fc2", "#250a63"]
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": .5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": .3,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#0C0E38",
                "opacity": .3,
                "width": 1.5
            },
            "move": {
                "enable": true,
                "speed": .5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": false
            },
            "modes": {
                "grab": {
                    "distance": 800,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 100,
                    "size": 10,
                    "duration": 1,
                    "opacity": 1,
                    "speed": .2
                },
                "repulse": {
                    "distance": 100,
                    "duration": 1.5
                },
                "push": {
                    "particles_nb": 2
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

    const particlesConfigContact = {
        "particles": {
            "number": {
                "value": 35,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "color": {
                "value": "#FFFFFF"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": ["#5f5fc2", "#250a63"]
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": .3,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.2,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#FFFFFF",
                "opacity": .2,
                "width": 1.5
            },
            "move": {
                "enable": true,
                "speed": .5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": false
            },
            "modes": {
                "grab": {
                    "distance": 800,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 100,
                    "size": 10,
                    "duration": 1,
                    "opacity": 1,
                    "speed": .2
                },
                "repulse": {
                    "distance": 100,
                    "duration": 1.5
                },
                "push": {
                    "particles_nb": 2
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

    particlesJS("particles-skills", particlesConfig);
    particlesJS("particles-about", particlesConfig);
    particlesJS("particles-projects", particlesConfig);
    particlesJS("particles-contact", particlesConfigContact);

    const controller = new ScrollMagic.Controller(); // initialize scrollmagic

    const headerSlideIn = (header, easing) => {
        return TweenMax.fromTo(header, 1, {
            translateX: -(docWidth / 4),
            opacity: 0
        }, {
            translateX: 0,
            opacity: 1,
            ease: easing
        })
    };

    ////////////////////// skills section //////////////////////

    const skillsEasing = "circ.inOut";

    let skillsTweenTimeline = new TimelineMax().add([
        headerSlideIn("#skills-header", skillsEasing)
    ], 0).add([
        // hexagon rotate in  
        TweenMax.fromTo(".hexagon", 1, {
            translateX: -(docWidth / 2),
            opacity: 0
        }, {
            rotate: 450,
            translateX: 0,
            opacity: 1,
            ease: skillsEasing
        })
    ], 0.5).add([
        // hexagon description slide in to left
        headerSlideIn(".hexagon-description", skillsEasing)
    ], 0.5).add([
        // profile picture slide in to right
        TweenMax.fromTo(".slide-to-right", 1, {
            translateX: -(docWidth / 4),
            opacity: 0
        }, {
            translateX: 0,
            opacity: 1,
            ease: skillsEasing
        })
    ], 1.5).add([
        // skills level slide in to left
        TweenMax.fromTo(".slide-to-left", 1, {
            translateX: (docWidth / 4),
            opacity: 0
        }, {
            translateX: 0,
            opacity: 1,
            ease: skillsEasing
        }),
    ], 1.5).add([
        // progress bar expand
        TweenMax.fromTo(".progress-bar", 1, {
            scaleX: 0
        }, {
            scaleX: 1,
            ease: skillsEasing
        }),
    ], 2);

    new ScrollMagic.Scene({
            triggerElement: "#skills",
            duration: 0,
        })
        .setTween(skillsTweenTimeline)
        .addTo(controller);

    ////////////////////// end skills section //////////////////////

    ////////////////////// About section //////////////////////

    const aboutEasing = "circ.inOut";

    const aboutTweenTimeline = new TimelineMax().add([
        headerSlideIn("#about-header", aboutEasing)
    ], 0).add([
        headerSlideIn(".about-description", aboutEasing)
    ], .5);

    new ScrollMagic.Scene({
            triggerElement: "#about",
            duration: 0,
        })
        .setTween(aboutTweenTimeline)
        .addTo(controller);

    ////////////////////// end about section //////////////////////

    ////////////////////// Projects section //////////////////////

    const projectsEasing = "circ.inOut";

    const projectsTweenTimeline = new TimelineMax().add([
        headerSlideIn("#projects-header", projectsEasing)
    ], 0).add([
        TweenMax.fromTo([".project-images"], 1, {
            // scale: 0, 
            opacity: 0,
            translateY: (docHeight / 5)
        }, {
            // scale: 1,
            opacity: 1,
            translateY: 0,
            ease: projectsEasing
        })
    ], 0);

    new ScrollMagic.Scene({
            triggerElement: "#projects",
            duration: 0,
        })
        .setTween(projectsTweenTimeline)
        .addTo(controller);

    ////////////////////// End Projects section //////////////////////

    ////////////////////// Contact section //////////////////////

    const contactEasing = "power2.inOut";

    const contactTweenTimeline = new TimelineMax().add(
        TweenMax.fromTo(["#contact-header"], 1, {
            scale: 0,
            opacity: 0,
            translateY: -(docHeight / 5)
        }, {
            scale: 1,
            opacity: 1,
            translateY: 0,
            ease: contactEasing
        })
    ).add([
            TweenMax.fromTo(["#contact-form"], 1, {
                scale: 0,
                opacity: 0,
                translateY: -(docHeight / 5)
            }, {
                scale: 1,
                opacity: 1,
                translateY: 0,
                ease: contactEasing
            })
        ], 0 //add tween 0 seconds after previous tween
    ).add([
        TweenMax.fromTo([".contact-icons"], 1, {
            scale: 0,
            opacity: 0,
            translateX: -(docWidth / 5)
        }, {
            scale: 1,
            opacity: 1,
            translateX: 0,
            ease: contactEasing
        })
    ], .5).add([
        TweenMax.fromTo(["footer"], 1, {
            opacity: 0,
        }, {
            opacity: 1,
            ease: contactEasing
        })
    ], 0.5);

    new ScrollMagic.Scene({
            triggerElement: "#contact",
            duration: 0,
        })
        .setTween(contactTweenTimeline)
        .addTo(controller);

    // preload animations by running them once first 
    skillsTweenTimeline.progress(1).progress(0);
    aboutTweenTimeline.progress(1).progress(0);
    projectsTweenTimeline.progress(1).progress(0);
    contactTweenTimeline.progress(1).progress(0);

    ////////////////////// End Projects section //////////////////////


    // // randomize star appearance on mouse move
    // let getRandom = (min, max) => {
    //     return Math.floor(Math.random() * (max - min + 1)) + min
    // };

    // const starfield = document.getElementById("starfield"),
    //     sagittarius = document.getElementById("sagittarius"),
    //     mouseTravel = 15,
    //     mouseDistance = 45;

    // let mouseX = 0,
    //     mouseY = 0;

    // //set background starfield to fullscreen
    // starfield.width = docWidth;
    // starfield.height = docHeight;

    // //set sag map to width
    // sagittarius.width = docWidth;

    // // if the device is a touch screen device
    // if ("ontouchstart" in document.documentElement) {
    //     //set sag map to half of screen height
    //     sagittarius.height = docHeight / 2;
    // } else {
    //     //device is in mouse mode
    //     //set sag map to fullscreen
    //     sagittarius.height = docHeight;
    // }

    // window.addEventListener("resize", function () {
    //     docWidth = document.body.clientWidth;
    //     docHeight = document.body.clientHeight;
    //     console.log(docWidth, docHeight)
    // }, false);

    // // x times a square docHeight will give coordinate
    // const star_coordinates = {
    //     1: [.4, .9],
    //     2: [.39, .8],
    //     3: [.234, .834],
    //     4: [.212, .636],
    //     5: [.2, .584],
    //     6: [.194, .396],
    //     7: [.336, .284],
    //     8: [.476, .406],
    //     9: [.534, .34],
    //     10: [.588, .368],
    //     12: [.456, .17],
    //     13: [.402, .072],
    //     11: [.508, .456],
    //     14: [.684, .32],
    //     15: [.744, .23],
    //     16: [.73, .446],
    //     17: [.81, .474],
    //     18: [.694, .588],
    //     19: [.74, .66],
    // };

    // // copy of the star coordinates for drawing lines
    // const star_coordinates2 = new Object;
    // Object.assign(star_coordinates2, star_coordinates);

    // // map of connecting points 
    // const sagittarius_lines = {
    //     1: 3,
    //     2: 3,
    //     3: 4,
    //     4: 5,
    //     5: 6,
    //     6: 7,
    //     7: 8,
    //     8: 9,
    //     9: 10,
    //     10: 11,
    //     11: 8,
    //     12: 8,
    //     13: 12,
    //     14: 10,
    //     15: 14,
    //     16: 14,
    //     17: 16,
    //     18: 16,
    //     19: 18,
    // };

    // let animateCanvas = (canvas, x, y, radius, saturation, lightness, interval, delay) => {
    //     ctx = canvas.getContext("2d");

    //     let drawStars = (i) => {
    //         ctx.beginPath();
    //         ctx.arc(x, y, i, 0, 360); //draws a circle
    //         ctx.shadowBlur = lightness / 10;
    //         ctx.shadowColor = "hsl(240, " + saturation + "%, " + lightness + "%)";
    //         ctx.fillStyle = "hsl(240, " + saturation + "%, " + lightness + "%)";
    //         ctx.fill();
    //         ctx.closePath();
    //     }

    //     let runOnce = false; //temp variable to let the initial star draw

    //     for (let i = radius / interval; i <= radius; i += radius / interval) {
    //         if (runOnce == false) {
    //             drawStars(i);
    //             runOnce = true;
    //         }
    //         setTimeout(() => {
    //             drawStars(i);
    //         }, delay * i);
    //     }
    // };

    // //////////////////////////// STARFIELD ////////////////////////////

    // toggleScroll = (on_off) => {
    //     const container = document.getElementById("parallaxContainer");
    //     on_off ? container.style.overflowY = "auto" : container.style.overflowY = "hidden";
    // }

    // toggleHeroText = (on_off) => {
    //     const heroText = document.getElementById("hero-text");
    //     const heroTint = document.getElementById("hero-tint");
    //     const guessButton = document.getElementById("guess-horoscope");
    //     const horoscope = document.getElementById("horoscope");

    //     let heroTweenTimeline;
    //     const heroEasing = "circ.inOut";

    //     if (on_off) {
    //         // toggle text/tint ON
    //         heroTweenTimeline = new TimelineMax().add([
    //             TweenMax.fromTo([guessButton], 1, {
    //                 visibility: "hidden",
    //                 opacity: 0
    //             }, {
    //                 visibility: "hidden",
    //                 opacity: 0,
    //                 ease: heroEasing
    //             })
    //         ], 0).add([
    //             TweenMax.fromTo([heroText], 1, {
    //                 opacity: 0,
    //                 display: "none"
    //             }, {
    //                 opacity: 1,
    //                 display: "flex",
    //                 ease: heroEasing
    //             })
    //         ], 0).add([
    //             TweenMax.fromTo([horoscope], 1, {
    //                 opacity: 0,
    //                 display: "none"
    //             }, {
    //                 opacity: 1,
    //                 display: "block",
    //                 ease: heroEasing
    //             })
    //         ], 0).add([
    //             TweenMax.fromTo([heroTint], 1, {
    //                 opacity: 0,
    //                 display: "none"
    //             }, {
    //                 opacity: .95,
    //                 display: "flex",
    //                 ease: heroEasing
    //             })
    //         ], 0)
    //     } else {
    //         // toggle text/tint OFF
    //         heroTweenTimeline = new TimelineMax().add([
    //             TweenMax.fromTo([heroText], 1, {
    //                 opacity: 1,
    //                 display: "flex"
    //             }, {
    //                 opacity: 0,
    //                 display: "none",
    //                 ease: heroEasing
    //             })
    //         ], 0).add([
    //             TweenMax.fromTo([heroTint], 1, {
    //                 opacity: .95,
    //                 display: "block"
    //             }, {
    //                 opacity: 0,
    //                 display: "none",
    //                 ease: heroEasing
    //             })
    //         ], 0)
    //     }

    //     new ScrollMagic.Scene({
    //             triggerElement: "#hero",
    //             duration: 0,
    //         })
    //         .setTween(heroTweenTimeline)
    //         .addTo(controller);
    // }

    // startGame = () => {

    //     let moveHandler = (e) => {
    //         let x, y;

    //         // if the device is a touch screen device
    //         if ("ontouchstart" in document.documentElement) {
    //             x = e.touches[0].pageX;
    //             y = e.touches[0].pageY;
    //         } else {
    //             //device is in mouse mode
    //             x = e.pageX;
    //             y = e.pageY;
    //         }

    //         //if mouse moves the minimum x or y distance
    //         if (Math.abs(x - mouseX) > mouseTravel || Math.abs(y - mouseY) > mouseTravel) {
    //             mouseX = x;
    //             mouseY = y;

    //             animateCanvas(starfield,
    //                 getRandom(-50, 50) + x,
    //                 getRandom(-50, 50) + y,
    //                 Math.random() * 2,
    //                 getRandom(50, 100),
    //                 getRandom(70, 100),
    //                 3,
    //                 500);
    //         }

    //         // check each star coordinate everytime the mouse moves 
    //         for (let star in star_coordinates) {
    //             let starX = star_coordinates[star][0] * sagittarius.width;
    //             let starY = star_coordinates[star][1] * sagittarius.height;

    //             // if mouse is within mouseDistance of star coordinate
    //             if (Math.abs(x - starX) <= mouseDistance && Math.abs(y - starY) <= mouseDistance) {
    //                 animateCanvas(sagittarius,
    //                     starX,
    //                     starY,
    //                     8,
    //                     getRandom(50, 100),
    //                     getRandom(85, 100),
    //                     1,
    //                     0);
    //                 // delete star so it doesn't redraw on hover
    //                 delete star_coordinates[star];

    //                 // check sagitarrius lines for star coordinates that are removed (hovered over)
    //                 for (let line_coordinate in sagittarius_lines) {
    //                     let line_coordinate2 = sagittarius_lines[line_coordinate];
    //                     // if both coordinates are hovered over, form a line connecting the two
    //                     if (!(line_coordinate in star_coordinates) && !(line_coordinate2 in star_coordinates)) {
    //                         let starX1 = star_coordinates2[line_coordinate][0] * sagittarius.width,
    //                             starY1 = star_coordinates2[line_coordinate][1] * sagittarius.height,
    //                             starX2 = star_coordinates2[line_coordinate2][0] * sagittarius.width,
    //                             starY2 = star_coordinates2[line_coordinate2][1] * sagittarius.height;
    //                         ctx.beginPath();
    //                         ctx.lineWidth = 3;
    //                         ctx.strokeStyle = "hsl(240, 90%, 90%)";
    //                         ctx.moveTo(starX1, starY1);
    //                         ctx.lineTo(starX2, starY2);
    //                         ctx.stroke();
    //                         ctx.closePath();
    //                     }
    //                 }
    //             }

    //             // When user finds all of the stars
    //             if (Object.keys(star_coordinates).length === 0) {
    //                 console.log("Found all stars");
    //                 toggleHeroText(true);
    //                 toggleScroll(true); // prevents scrolling when playing game 
    //                 e.currentTarget.removeEventListener(e.type, moveHandler);
    //             }

    //         }
    //     }

    //     document.body.addEventListener("mousemove", moveHandler);
    //     document.body.addEventListener("touchmove", moveHandler);

    // }

    // document.getElementById('start-game').addEventListener("click", () => {
    //     console.log("game start");
    //     toggleHeroText(false);
    //     toggleScroll(false); // prevents scrolling when playing game 
    //     startGame();
    // });


    const addText = (heading, subheading, description) => {
        const modalBody = document.getElementById('projects-modal-body'),
            modalProjectHeading = '<h3 id="modalProjectHeading">' + heading + '</h3>',
            modalProjectSubHeading = '<h5 id="modalProjectSubHeading">' + subheading + '</h5>',
            modalProjectDescription = '<p id="modalProjectDescription">' + description + '</p>',
            closeButton = '<button type="button" class="close" data-dismiss="modal">&times;</button>';

        modalBody.insertAdjacentHTML('beforeend', modalProjectHeading);
        modalBody.insertAdjacentHTML('beforeend', modalProjectSubHeading);
        modalBody.insertAdjacentHTML('beforeend', "<hr>");
        modalBody.insertAdjacentHTML('beforeend', modalProjectDescription);
        modalBody.insertAdjacentHTML('beforeend', closeButton);
    }

    const appendProjectImages = (parentFolder, images) => {
        // Append project images
        for (let image of images) {
            let slideImg = '<div class="carousel-item">' +
                '<img class="w-100 h-100" src="assets/images/projects/' +
                parentFolder + '/' + image + '.png"' + ' alt="' + image + '">' +
                '</div>';
            document.getElementById("projectSlides").insertAdjacentHTML('beforeend', slideImg);
        }
        // add class "active" to ONLY the first slide of the carousel
        document.getElementById("projectSlides").firstElementChild.classList.add("active");
    }

    const addWebIcon = (link) => {
        const icon =
            '<a href="' + link + '" target = "_blank">' +
            '<i class="fas fa-globe-americas mr-2"></i>' +
            '</a>';
        document.getElementById("projects-modal-body").insertAdjacentHTML('beforeend', icon);
    }

    const addGithubIcon = (link) => {
        const icon =
            '<a href="' + link + '" target = "_blank">' +
            '<i class="fab fa-github mr-2"></i>' +
            '</a>';
        document.getElementById("projects-modal-body").insertAdjacentHTML('beforeend', icon);
    }

    //////////////////////////// PROJECTS MODAL ////////////////////////////
    $('.modal-button').on("click",
        modalContents = (e) => {
            // reset existing images/text from the carousel
            document.getElementById("projectSlides").innerHTML = '';
            document.getElementById("projects-modal-body").innerHTML = ''

            let images,
                heading,
                subHeading,
                desc;

            switch (e.target.id.toString()) {
                case "HandDetection":
                    images = ["hand1", "hand2", "hand3", "tensorboard", "preview"],
                        heading = "Hand Detection",
                        subHeading = "Machine Learning Algorithm using OpenCV Library",
                        desc = "Using neural network and GCP cloud service to train the datasets, this project detects hands \
                        from images and videos within miliseconds. Different models and datasets were evaluated to choose the \
                        optimal one to work on, including training & running times, accuracy, precision, recall and loss metrics";

                    appendProjectImages("hand_detection", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/minhdang10/hand-detection-tracking");
                    addWebIcon("https://drive.google.com/drive/folders/1pNtUs8Nteg_OAot8piNi_c0yhsuZogix?usp=sharing");

                    break;
                case "DataMining":
                    images = ["knn", "logistic_regression", "hierarchical_clustering", "kmean_clustering", "preview"]
                    heading = "Data Mining",
                        subHeading = "Regression and Machine Learning Algorithms",
                        desc = "Different data mining techniques are implemented in this project under different datasets, \
                        including data wrangling, exploratory data analysis, linear regression, classification (KNN, logistic \
                        regression, decision tree, and random forest), and clustering (K-mean and hierarchical)";

                    appendProjectImages("data_mining", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/minhdang10/data_mining");
                    addWebIcon("https://drive.google.com/drive/folders/14XHoSZ9x1gyvI6FvqS9c4vxgL-UGwu2s?usp=sharing");

                    break;
                case "DataWarehousing":
                    images = ["dimension", "kpi1", "kpi2", "kpi4", "preview"],
                        heading = "Weather and Accident Data Warehouse",
                        subHeading = "Data Warehousing / ETL Process",
                        desc = "A data warehouse schema with ETL plan based on specific KPI's to identify the effects weather \
                        has on car accidents with the goal of providing data to support the promotion of safe driving conditions \
                        in New York City.";

                    appendProjectImages("data_warehousing", images);
                    addText(heading, subHeading, desc);
                    addWebIcon("https://drive.google.com/drive/folders/1Vy0eQ-_uCF0cmfyoe__tD3pE8hBmbLJJ?usp=sharing");

                    break;
                case "DatabaseManagement":
                    images = ["schema", "er_diagram", "preview"],
                        heading = "Boat Rental Database Management",
                        subHeading = "E-R Diagram, Schema, SQL & VBA Applications",
                        desc = "A database management system for Boat Rental LLC, a company that rents out top class boats \
                        for customers to enjoy their breaks as well as maintenance service. A database is required to keep \
                        track of the daily transactions of involving customers, rentals, staff members and services.";

                    appendProjectImages("database_management", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/minhdang10/boat_rental");
                    addWebIcon("https://drive.google.com/drive/folders/1X_MDUNR-mcOQEwmLbJA33mZ_3BPSwh4R?usp=sharing");

                    break;
                case "sql":
                    images = ["view", "schema1", "schema2", "preview"],
                        heading = "Structured Query Language",
                        subHeading = "SQL on Different Datasets and Software",
                        desc = "SQL queries that summarize useful key information of the data. Different type of SQL were written.";

                    appendProjectImages("sql", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/minhdang10");
                    addWebIcon("https://drive.google.com/drive/folders/1vJ2_2jPUzA7KQoW8CR0fq12DO-Mfcjx9?usp=sharing");

                    break;
                case "Statistics":
                    images = ["linear", "multiple", "time_series"],
                        heading = "Statistical Analysis",
                        subHeading = "Simple Linear / Multiple Regression and Time Series Analyses",
                        desc = "The statistical Analyses on regression and time series to identify trends related to each datasets.";

                    appendProjectImages("statistics", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/minhdang10/statistics");
                    addWebIcon("https://drive.google.com/drive/folders/1L3_1ylKXsupcppLSBR430PdBRZI1atzV?usp=sharing");

                    break;
                case "WineQuality":
                    images = ["histogram", "boxplots", "appendix2", "appendix3", "preview"],
                        heading = "Wine Quality",
                        subHeading = "Predicting Wine Quality Using Machine Learning Algorithms in R",
                        desc = "The goal is to take the wine dataset (comprised of variables which are physicochemical properties\
                        of the wine) and predict the quality of wine on a numeric scale of 0-10 using several learning algorithms. \
                        The subsequent tests and conclusions will best serve the wine producers in this region who may wish to \
                        increase their wine sales by consistently exporting higher qualities of wine rather than low ones. The \
                        methodology represents this problem as one of numeric prediction and one of classification. ";
                        
                    appendProjectImages("wine_quality", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/minhdang10/wine_quality");
                    addWebIcon("https://drive.google.com/drive/folders/1K0KZgh6a7fhDvcek_8YqkoLnnAPp99-1?usp=sharing");

                    break;
                // case "xxx--xxx":
                //     images = ["entire_system", "lcd", "mockup"],
                //         heading = "Arduino Smarthome",
                //         subHeading = "All in One RFID Door Lock",
                //         desc = "Description";

                //     appendProjectImages("arduino_smarthome", images);
                //     addText(heading, subHeading, desc);
                //     addGithubIcon("https://github.com//independent_study-arduino");

                //     break;
            }
        }
    );

}); // end document.ready 