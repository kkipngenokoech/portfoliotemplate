AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "pre-post sales Intern",
    cardImage: "assets/images/experience-page/brainverse-technologies.png",
    place: "Nairobi, Kenya",
    time: "(May, 2022 - present)",
    desp: "<li>onboarding of clients to various applications and systems developed by Brainverse.</li> <li>Analysis of Data on Brainverse applications and giving feedback on how to improve more on the application and sourcing more clients.</li> <li>QA testing on pepeo application and its blog website.</li>",
  },
  {
    title: "Kenya Tea Development Holdings(KTDA) ICT intern",
    cardImage: "assets/images/experience-page/KTDA-Foundation.webp",
    place: "KTDA FARMERS BUILDING, NAIROBI",
    time: "(may - Aug, 2022)",
    desp: "<li>worked as a technical IT support, solving employee's computer issues across the whole KTDA building.</li><li>solved hardware issues spanning from Desktop computers, laptops, printers, servers, CCTVs to network cable fixings.</li><li>networks,services and testing of new computer related machines.</li>",
  },
  {
    title: "Jenga school campus ambassador",
    cardImage: "assets/images/experience-page/jengaschool.jpg",
    place: "MMU, Nairobi",
    time: "(June, 22 - present)",
    desp: "<li>Jenga school multimedia university chapter lead ambassador.</li><li>Improved my Networking and leadership skills.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "page turners",
    cardImage: "assets/images/experience-page/pageturners.jpg",
    description:
      "worked with children(age 5-12), to help them grow their reading culture and nurture their ENglish and kiswahili.",
  },
  {
    title: "mater heart run",
    cardImage: "assets/images/experience-page/materheartrun.jpeg",
    description:
      "participated in the mater heart run 2019 chapter at Kapkatet, kericho county which aimed at raising funds for the   cardiac program.",
  },
  {
    title: "High school mentorship",
    cardImage: "assets/images/experience-page/engineered.jpeg",
    description:
      "Mentoried girls of Baraka Ontooiye sec. School on matters to do with subject selection, careers, campus and what next after campus.",
  },
  {
    title: "Mogogosiek Baby home visit",
    cardImage: "assets/images/experience-page/tenwekhighschool.jpg",
    description:
      "I and a team of students from Christian Union Tenwek high school visited Mogogosiek Baby home to show love, bond, and remvamp them with various goodies we had brought.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Software engineering 2020 cohort",
    subtitle: "class representative 2020/2024",
    image: "assets/images/experience-page/mmulogo.jpeg",
    desp: "I would be responsible for ensuring that my cohort are taught and lessons are attended by lecturers, bridge between administration and my cohort on matters concerning my academics and general wellbeing.",
  },
  {
    title: "MMU CIT CLUB",
    subtitle: "DATA SCIENCE co-lead 2021/2023",
    image: "assets/images/experience-page/mmucitclub.png",
    desp: "responsible for assisting the Data science lead when organizing data science related events which included webinars and mentorship talks organized by MMU CIT CLUB.",
  },
  {
    title: "JENGA SCHOOL CAMPUS CHARTER",
    subtitle: "MMU Campus Ambassador 2022/2023",
    image: "assets/images/experience-page/jengacampusambassador.png",
    desp: "responsible for organizing and ensuring successful jenga school initiatives are well achieved in multimedia university of kenya .",
  },
  {
    title: "Tenwek high school",
    subtitle: "Head captain 2018/2019",
    image: "assets/images/experience-page/tenwekphoto.jpg",
    desp: "responsible for ensuring smooth running of the school and bridging the gap between students and the administration.",
  },
  {
    title: "Tenwek High christian Union",
    subtitle: "organizing secretary 2018/2019",
    image: "assets/images/experience-page/tenwekcu.jpg",
    desp: "responsible for ensuring christian union activities, meeting records and minutes and christian union activities are done within the given timeline.",
  },
  {
    title: "Chemaner Vicinary Academy",
    subtitle: "Head Boy",
    image: "assets/images/experience-page/chemanervisionary.jpg",
    desp: "lead about 100 students in 2015, honestly there wasn't much to do but I learned alot, It was one of my first experiences on leadership positions.",
  },
  {
    title: "Tenwek High school",
    subtitle: "Form 1-2 hostel representative",
    image: "assets/images/experience-page/tenwekclassimage.jpg",
    desp: "I felt this was also necessary to include, during my form one and two (2016-2017) I had a chance to organize my fellow form ones and also when I was in form two since they were the ones responsible for ensuring tideness in the hostels.I was in Menengai dorm",
  },
  // {
  //   title: "AtlasHacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/atlas.png",
  //   desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  // },
  // {
  //   title: "NeoHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/neo.png",
  //   desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  // },
  // {
  //   title: "Mission Inspired",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/mission.png",
  //   desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  // },
  // {
  //   title: "Hack3",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hack3.png",
  //   desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  // },
  // {
  //   title: "JITHack",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/jithack.png",
  //   desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  // },
  // {
  //   title: "Recess Hacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/recess.png",
  //   desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  // },
  // {
  //   title: "Citro Tech",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/citro.png",
  //   desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  // },
  // {
  //   title: "NHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/nhacks.png",
  //   desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  // },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
