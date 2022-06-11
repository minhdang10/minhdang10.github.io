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
                "value": ["#c25f5f", "#631f0a"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": ["#c25f5f", "#631f0a"]
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
                "color": "#380c0c",
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
                    "color": ["#c25f5f", "#631f0a"]
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
                case "SocialBuzz":
                    images = ["content", "barh", "pie"],
                        heading = "Social Buzz Content Popularity",
                        subHeading = "Data Merging, Analysis and Visualization with Python",
                        desc = "With the use of Python and its pandas, matplotlib and numpy library, this project forms a final \
                        dataset from multiple ones to serve Social Buzz's request of evaluating what 5 contents receive the \
                        most attention; then ploting necessary bar and pie chart to visualize the findings";

                        appendProjectImages("social_buzz_content", images);
                        addText(heading, subHeading, desc);
                        addGithubIcon("https://github.com/minhdang10/social_buzz_content");
                        addWebIcon("https://drive.google.com/drive/folders/1AwiWLak7IHG4ll8xCdDNHVm6WubRnwn-?usp=sharing");

                    break;
    
                case "AnomaliesDetection":
                    images = ["anomalies2", "dashboard", "anomalies1", "PowerBI", "preview"],
                        heading = "Anomalies Detection",
                        subHeading = "Time Series Regression using Prophet Library",
                        desc = "With Prophet library in Python and SQL queries from SendTech databases from Snowflake, this \
                        project detects anomalies using time series regression modeling in terms of measurements of packages \
                        (masses, dimensions, densities, volumes) and number of processed parcels within a specific time frame \
                        across US facilities. Various metrics were used to evaluate the model and to alert and interact with \
                        clients regarding timely reported anomalies on the interactive dashboard.";

                    appendProjectImages("anomalies_detection", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/minhdang10/anomalies_detection");
                    addWebIcon("https://drive.google.com/drive/folders/1jbllg6S8RTJSK-aENn1dda3-AAV8EHUW?usp=sharing");

                    break;
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
                    addGithubIcon("https://github.com/minhdang10/structured_query_language");
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

                    case "GrandOcean":
                    images = ["home", "story", "todays_selection", "footer", "checkout_modal", "checkout", "confirmation"],
                        heading = "Grand Ocean Seafood",
                        subHeading = "Local Seafood Wholesale in Queens, NY",
                        desc = "This is one of SavingTakeouts' first client projects. In the span of two weeks, ST's development \
                        team (myself, Jun Huang, Nicholas Chen, and Ivy Tong) designed and developed this website for a local \
                        seafood wholesale business. Having used to acquired customers through word of mouth, this website helps \
                        them build an online presence to expand their client base and boost revenue.";

                    appendProjectImages("grand_ocean", images);
                    addText(heading, subHeading, desc);
                    addWebIcon("https://junh6.sg-host.com/");

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