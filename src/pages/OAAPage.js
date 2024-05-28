import React from "react";

const OAAPage = () => {
  const sideInfo = ["YEAR: 2022", "React, Firebase, Figma, Heroku"];
  return (
    <>
      <div className="proj-page">
        <img
          className="proj-page-header-img"
          src={
            process.env.PUBLIC_URL + "/img/ocad-artist-alley/artist-alley-1.png"
          }
        />
        <div className="proj-page-title">
          <h1>OCAD Artist Alley Redesign</h1>
          <div className="proj-page-side-info">
            {sideInfo.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div className="proj-page-card">
          <div className="proj-page-card-text">
            <h1>Introductory Overview</h1>
            <p>
              The OCAD Artist Alley (OAA) is a bi-annual, student-run, pop-up
              market that was created to allow students to exhibit and sell
              their work. Established in 2018, the OAA is an opportunity for
              students and alumni from all programs to exhibit and sell their
              work, encouraging OCAD U students as artists and small businesses.
              The OAA aims to support and inspire creatives by providing a
              platform to sell, network, and build confidence within their
              community.{" "}
            </p>
          </div>
          <img />
        </div>
        <div className="proj-page-card">
          <img />
          <div className="proj-page-card-text">
            <p>
              However, due to the pandemic, the OAA was forced to move online,
              and a website was hastily constructed in order to provide a venue
              to sell student works. The current OAA website is a modified
              Tumblr blog, which comes with several disadvantages, such as no
              functionality for vendors to upload and modify their own listings,
              as well as multiple design oddities that are a result of trying to
              transform a personal blog into an e-commerce site.
            </p>
          </div>
        </div>
        <div className="proj-page-card">
          <div className="proj-page-card-text">
            <p>
              My project is a rebuilt version of the OCAD Artist Alley website.
              It seeks to address the major shortcoming of the original OCAD
              Artist Alley website, being unable to allow vendors to upload,
              modify, or delete their own listings. As a result of this project,
              there is a more accessible, easy to use portal for OCADU students
              to sell their works.
            </p>
          </div>
          <img />
        </div>
      </div>
      <div className="proj-page-card">
        <div className="proj-page-card-text">
          <h1>Research and Development Process</h1>
          <p>
            I created layouts in Figma to declare a consistent design for the
            final website, helping me decide topics such as the layout of the
            site, design of the product cards, displaying product filters, and
            vendor sign-in. These are all central features since the beginning
            of this project that have now found a place in the redesign.
          </p>
        </div>
        <img />
      </div>
      <div className="proj-page-card">
        <img
          src={
            process.env.PUBLIC_URL + "/img/ocad-artist-alley/artist-alley-2.png"
          }
        />
        <img
          src={
            process.env.PUBLIC_URL + "/img/ocad-artist-alley/artist-alley-4.png"
          }
        />
      </div>
      <div className="proj-page-card">
        <div className="proj-page-card-text">
          <p>
            After creating the layouts, I used React with Chakra UI components
            to build the site. To handle user authentication and data storage, I
            used Firebase. I learned how to use the Firebase API to communicate
            with the real time database and perform create, read, update, and
            delete operations, as well as using the same API to register and
            delete users. However, the free version of Firebase is limited in
            data storage, so storing images on the database was not possible. To
            work around this, I decided to have the user provide a url to an
            image of the listing, hosted on another site. This allows me to
            insert the url into the site and display the image without having to
            host the image myself. The app was deployed using Heroku.{" "}
          </p>
        </div>
        <img />
      </div>
      <div className="proj-page-card">
        <img />
        <div className="proj-page-card-text">
          <h1>Testing</h1>
          <p>
            During testing, I received feedback about the form that handled
            listing submission. Testers pointed out that letters should not be
            possible to insert in the price field, and that it should be clear
            that a dollar sign will be appended automatically to all prices, so
            users don’t have to type in their own dollar sign. Another piece of
            feedback I received was about the field where users put in a url to
            an image of their listing. Testers were confused about the field,
            expecting to be able to upload an image to the site instead. Since
            images aren’t stored in the database, this is not possible, and the
            intention is for the user to host their image on another site such
            as imgur, and paste the link into the form.
          </p>
        </div>
      </div>
      <div className="proj-page-card">
        <div className="proj-page-card-text">
          <p>
            To address this issue, I wanted to make the form field more clear,
            making sure that the user understands that a url is supposed to be
            in the field, and not an image upload. Before, the title of the
            field was “Listing Image”, which was confusing for the user. To
            better convey the proper usage of the field, I changed the title to
            “Listing Image Url”, and added tooltip text that would appear on
            hover explaining the issues with data storage and why a url to the
            image is needed instead. The styling of the form was also improved
            to better match the wireframe layout. I also restricted the price
            field to only accept numerical inputs, and added a dollar sign next
            to the field to communicate to the user that a dollar sign would be
            appended automatically to their input.
          </p>
        </div>
        <img />
      </div>

      <div className="proj-page-card" style={{ display: "block" }}>
        <h1>Submit Form - Before and After</h1>
        <div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/img/ocad-artist-alley/artist-alley-6.png"
            }
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/img/ocad-artist-alley/artist-alley-5.png"
            }
          />
        </div>
      </div>
      <div className="proj-page-card">
        <div className="proj-page-card-text">
          <h1>Onboarding Graphics</h1>
          <p>
            In addition, any vendors are expected to register on the site and
            upload their products onto the site. For this to be possible, they
            must know how to navigate the site and use the upload form
            correctly. As a result, I made some onboarding graphics to help
            orient new users to the functions of the site. These graphics walk
            them through how to create an account and upload, edit, and delete
            listings. They are accompanied with screenshots of the site for easy
            understanding. With any new service, convincing people to use your
            product is a big hurdle, and I hope that streamlining the learning
            process through these graphics will encourage more students to
            participate.
          </p>
        </div>
        <img />
      </div>
      <div className="proj-page-card">
        <div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/img/ocad-artist-alley/artist-alley-7.png"
            }
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/img/ocad-artist-alley/artist-alley-8.png"
            }
          />
        </div>
      </div>
      <div className="proj-page-card-text">
        <h1>Links</h1>
        <p>
          The final deployment can be found at:{" "}
          <a href="https://ocad-artist-alley.herokuapp.com/" target=" ">
            https://ocad-artist-alley.herokuapp.com/
          </a>
        </p>
        <p>
          The repository can be found at:{" "}
          <a href="https://github.com/ThomasJnLiu/ocad-artist-alley" target=" ">
            https://github.com/ThomasJnLiu/ocad-artist-alley
          </a>
        </p>
      </div>
    </>
  );
};

export default OAAPage;
