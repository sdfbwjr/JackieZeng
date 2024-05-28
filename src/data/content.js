const articles = [
  {
    name: "OCAD Artist Alley Site",
    title: "OCAD Artist Alley Site",
    description:
      "Single Page Application for hosting student works made with React and Firebase.",
    sideInfo: ["YEAR: 2021", "React, Firebase, Figma, Heroku"],
    content: [
      `Students attending OCAD University have the option to participate in the student-run pop-up market known as the OCAD Artist Alley (OAA), which was created to allow students to exhibit and sell their work.However, due to the pandemic, the OAA was forced to move online, and a website was hastily constructed in order to provide a venue to sell student works. The current OAA website is a modified Tumblr blog, which comes with several disadvantages, such as no functionality for vendors to upload and modify their own listings, as well as multiple design oddities that are a result of trying to transform a personal blog into an e-commerce site. `,
      `My project is a rebuilt version of the OCAD Artist Alley website. It seeks to address the major shortcoming of the original OCAD Artist Alley website, being unable to allow vendors to upload, modify, or delete their own listings. As a result of this project, there is a more accessible, easy to use portal for OCADU students to sell their works.`,
      `I created layouts in figma to declare a consistent design for the final website, helping me decide topics such as the layout of the site, design of the product cards, displaying product filters, and vendor sign-in. These are all central features since the beginning of this project that have now found a place in the redesign.`,
      `After creating the layouts, I used React with Chakra UI components to build the site. To handle user authentication and data storage, I used Firebase and made requests to it through its API. The app was deployed using Heroku. This project offers a more streamlined process to be part of the OCAD Artist Alley website. Vendors will no longer need to send an email to an administrator, who would manually add their listings to the website, vendors can now sign in and upload their own listings.`,
      `The final project can be accessed at: https://ocad-artist-alley.herokuapp.com/`,
    ],
    headerImg: "/img/ocad-artist-alley/artist-alley-1.png",
    img: [
      "/img/generative-fireworks/fireworks-6.png",
      "/img/ocad-artist-alley/artist-alley-2.png",
      "/img/ocad-artist-alley/artist-alley-3.png",
      "/img/ocad-artist-alley/artist-alley-4.png",
      "/img/ocad-artist-alley/artist-alley-1.png",
    ],
    heading: [
      "Overview",
      "The Changes",
      "Creating Layouts in Figma",
      "Developing the Site",
      "Final Product",
    ],
    layout: ["2", "1", "0", "1", "3"],
  },
  {
    name: "Shopify Developer Challenge",
    title: "Shopify Developer Challenge",
    description:
      "My project for Shopify's 2021  Developer Intern Challenge, a front-end movie nomination app built using React with data provided by the OMDB API.",
    sideInfo: [
      "YEAR: 2021",
      "TOOLS USED: React, JavaScript, HTML, CSS, Photoshop, Figma",
    ],

    content: [
      `For Shopify's 2021 Summer UX Developer & Web Developer Intern Challenge, the prompt was to build an app for Shopify's movie nomination service, "The Shoppies".
        It was required to use the OMDB API to serve search results to the user, and for the user to nominate 5 movies. Other technical specifications
        included being able to add and remove movies from the nomination list, disabling nomination buttons of already nominated movies, as well as 
        letting the user know when they've nominated 5 movies.`,
      `I began by drafting designs for web user interface in Figma. I wanted to make the link to Shopify's brand obvious, so the colour green was 
        chosen as a secondary colour. To further reinforce the link to Shopify, I created a quick mockup of a movie-based Shopify logo in Photoshop.`,
      `I heavily referenced Google's Material Design guidelines while brainstorming, and eventually settled on a card-based method for displaying the movie results.
        I decided to divide the main content of the page between the movies grid and the nominations panel, the latter of which would follow the user
        as they scrolled through the page. Users would click on the green button below each movie to nominate it, and it be added to the 
        nominations panel on the right. By taking these steps, I ensured the finalized design would be visually sharp and easy to navigate.`,
      `In order to make the design responsive, I also planned for a mobile variant of the user interface. Many elements that were previously side-by-side, such as the
        nominations panel and movie cards, were rearranged on top of each other to account for the decrease in horizontal space.`,
      `Before coding any components, I made a basic search box to communicate with the OMDB API using the Axios client, to make sure I could submit queries and receive
        information correctly. After I confirmed the API was being called correctly, I moved to implementing the user interface in React. While using Figma, I intentionally made self-contained
        elements with clear boundaries so they would be easy to code, such as the nominations box, the movie cards, and header. Once the components and 
        functionality were in place, I styled the app using CSS and added media queries to ensure a responsive design.`,
      `Before finishing my project, I made some minor touch-ups and included a link to the repo in the header, a pop-up
        when the user submits their nominations, and a favicon. The nominations panel was also aligned to the left to occupy the empty space before the user
        has made a search.`,
      `The final project can be accessed at: https://thomasjnliu.github.io/Shopify-Design-Challenge-2021/ `,
    ],
    headerImg: "/img/shopify-design-challenge/shopify-header2.png",
    img: [
      "",
      "/img/shopify-design-challenge/logo.png",
      "/img/shopify-design-challenge/shopify-figma.png",
      "/img/shopify-design-challenge/shopify-figma2.png",
      "/img/shopify-design-challenge/shopify2.png",
      "/img/shopify-design-challenge/shopify3.png",
    ],
    heading: [
      "Overview",
      "First Steps",
      "Using Material Design",
      "Planning a Responsive UI",
      "From Figma to React",
      "Finishing Touches",
      "Final Product",
    ],
    layout: ["2", "0", "1", "0", "1", "3", "2"],
  },
  {
    name: "Online Exam Page Redesign",
    title: "Online Exam Page Redesign",
    description:
      "A front-end responsive redesign of Ontario Power Generation's e-learning exam pages.",
    sideInfo: ["YEAR: 2020", "TOOLS USED: Figma, JavaScript, HTML, CSS"],

    content: [
      `During my internship at Ontario Power Generation, I was tasked with redesigning their e-learning exam page. This page would 
        appear at the end of each course, testing the user on the content they learned. The format of the page remained consistent,
        with only the question changing. The redesign would need to keep the functionality of the old version while improving
        on its shortcomings.`,
      `One of the flaws of the original design I focused in on was the lack of responsive design. The old design (seen right) was built
        for 4:3 aspect ratios and did not resize to fit 16:9 screens. This resulted in a large amount of empty space and often made
        text difficult to read.`,
      `Since the functionality wouldn't change in the redesign, I first began by mapping out the user flow of the old version so that
        I could mimic it in the redesign. This included different screens if the user picked the right/wrong answer, as well as a button
        to submit the exam when all questions are answered.`,
      `I used Figma to create a basic redesigned exam template page. I focused on designing a responsive page that could resize to fit
        both 4:3 and 16:9 aspect ratios. I also used flat colours and simple shapes to make it look more modern and legible.
        In addition, I made sure the design was flexible, that it would be able to resize to long answers and questions.`,
      `While the appearance of the design is important, I also wanted to consider how it felt to interact with the interface. I used
        Figma's prototyping function to add interactivity to my designs to mimic the user flow. This way, anyone who was reviewing my design
        would have an idea of how a typical user would interact with it.`,
      `After seeing the possible paths the user could take in the old design to complete the test, I used the template to mirror all the paths in
        the redesigned version. I then moved to creating a mockup of the page in HTML, so that I could test out responsiveness as well as finalize 
        the user flow.`,
    ],
    headerImg: "/img/exam-redesign/redesign-header.png",
    img: [
      "",
      "/img/exam-redesign/old-img.png",
      "/img/exam-redesign/old-userflow.png",
      "/img/exam-redesign/new-img4.png",
      "/img/exam-redesign/new-img3.png",
      "/img/exam-redesign/new-userflow.png",
    ],
    heading: [
      "Overview",
      "Pain Points",
      "Mapping User Flow",
      "Designing in Figma",
      "Figma Interactive Prototype",
      "Final Design and User Flow",
    ],
    layout: ["2", "0", "3", "1", "3", "3"],
  },

  {
    name: "E-Learning User Interface",
    title: "E-Learning User Interface",
    description:
      "A redesign on old UI buttons made for Ontario Power Generation's e-learning framework.",
    sideInfo: [
      "YEAR: 2020",
      "TOOLS USED: Photoshop, Illustrator, JavaScript, HTML, CSS",
    ],

    content: [
      `During my internship at Ontario Power Generation, I was tasked with updating their e-learning
      framework's user interface buttons to increase accessibility by making them
      complaint for users with colour disabilities.`,
      `The major problem with the previous buttons (seen right) was that they failed to meet the colour contrast standards
      set by the Accessibility for Ontarians with Disabilities Act (AODA). In addition, I was also requested to redesign
      the appearance of the new buttons to be more modern.`,
      `In my first revision of the icons, I moved towards simplifying the forms of the icons. 
        I also got rid of unnecessary extra colours in the design, as seen in the objectives and the glossary icon. While this revision
        was a step in the right direction to making the icons look sharper, I was unhappy with the colours chosen, as the harsh
        orange-red used for the hover state and dark blue was a drastic change from the original colours.`,
      `As a result, many of the variations made afterwards were explorations in what colours would work.
        I experimented with brighter variations of the old icons, as well as outlined versions, and even flat-vector drawings.
        Throughout all these variants, the geometry and shape of the icons remained consistent.`,
      `In the final icons, the orange hover state was darkened to create more contrast when compared to the blue used for the active
       state. In addition, the geometry of the icons were reduced to simple shapes, as seen in the print icon. A subtle dark outline was
       also added around the active states. Both of these changes helped the icons to be more legible, sharper, and easy to recognize.`,
      `Throughout the process, I tested the icons in the e-learning framework in order to evaluate them within the context of their use.
        I was given access to the framework's development server, where I used HTML, CSS, and JS to replace the old icons, as well as
        create pages specifically for testing them out. I ensured that the new icons would be cohesive with the rest of the framework
        and all online courses.`,
    ],
    headerImg: "/img/e-learning-buttons/icons-header3.png",
    img: [
      "",
      "/img/e-learning-buttons/icons-old.png",
      "/img/e-learning-buttons/icons-new-rev1.png",
      "/img/e-learning-buttons/icons-workingdocument2.png",
      "/img/e-learning-buttons/icons-new.png",
      "/img/e-learning-buttons/icons-sim3.png",
      "/img/e-learning-buttons/icons-sim4.png",
    ],
    heading: [
      "Overview",
      "Objectives",
      "First Revision",
      "Designing Variations",
      "Final Icons",
      "In-Course Preview",
    ],
    layout: ["2", "0", "1", "0", "1", "3", "3"],
  },
  {
    name: "Innovation in Training",
    title: "Innovation in Training Branding",
    description:
      "Branding, graphics, and promotional material created for Ontario Power Generation's new work initaitive.",
    sideInfo: ["YEAR: 2019", "TOOLS USED: Photoshop, Illustrator"],
    content: [
      `During my internship at Ontario Power Generation I created branding for a work initiative, named "Innovation in Training".
        In addition, I designed a vertical vinyl banner that features the branding for use in trade shows.`,
      `One element central to the branding was the lightbulb, since it represented innovation and could
        consequently be seen as a summary of the values the initative stood for. While drafting the first concepts in Illustrator,
        I made sure to place emphasis on the lighbulb.`,
      `Another factor to take into consideration was Ontario Power Generation's style guide. It was important that any graphics produced
        adhered to the identity of Ontario Power Generation through their use of iconography, colour, text, and layout. This can be seen in the 
        picture to the right, where the final banner complements the design of the electronic message board while still being distinctly different.`,
      `The final deliverables of the project consisted of the "Innovation in Training" branding, a banner embodying the
      "Innovation in Training" work initiative, as well as condensed versions of the branding for use in email communications.`,
    ],
    headerImg: "/img/innovation-in-training/innovation-header.png",
    img: [
      "/img/innovation-in-training/innovation-header.png",
      "/img/innovation-in-training/innovation-3.png",
      "/img/innovation-in-training/innovation-banner-pic.jpg",
      "",
      "/img/innovation-in-training/innovation-logo.png",
      "/img/innovation-in-training/innovation-banner.png",
    ],
    heading: [
      "Overview",
      "Central Iconography",
      "Considering Design Language",
      "Final Product",
    ],
    layout: ["0", "1", "0", "2", "3", "3"],
  },
  {
    name: "Generative Fireworks",
    title: "Generative Fireworks",
    description:
      "Generative art featuring exploding particles made with p5.js.",
    sideInfo: ["YEAR: 2018", "TOOLS USED: JavaScript, HTML, CSS, p5.js"],

    content: [
      `Inspired by the works of Sol Lewitt and Casey Reas, this project explores the infinite possibilities of form
      generation through the use of p5.js.`,
      `The sketch begins with a single firework shooting up and exploding into 100 randomly coloured particles. 
      As these particles fade, each one has a 1% chance of exploding again, producing even more particles, and so on. 
      There can not be more than 50 explosions on the screen at a time for performance reasons, which is tracked by the 
      counter in the top left. The final project features a different sequence every time, with colourful particles exploding and dancing across the canvas.`,
      `The project can be viewed at: https://thomasjnliu.github.io/GenerativeFireworks/`,
    ],
    headerImg: "/img/generative-fireworks/fireworks-1.png",
    img: [
      "/img/generative-fireworks/fireworks-6.png",
      "/img/generative-fireworks/fireworks-2.png",
      "/img/generative-fireworks/fireworks-3.png",
    ],
    heading: ["Overview", "How it Works", "Links"],
    layout: ["0", "1", "2", "2"],
    linkText: ["View the project here.", "View the repository here"],
    linkUrl: [
      "https://thomasjnliu.github.io/GenerativeFireworks/",
      "https://github.com/ThomasJnLiu/GenerativeFireworks",
    ],
  },
];

export default articles;
