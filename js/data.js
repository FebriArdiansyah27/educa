document.addEventListener("DOMContentLoaded", function () {
  const courses = [
    {
      imageUrl: "image/c1.jpg",
      updatedDate: "Updated 20/3/2024",
      title: "Javascript Beginners Course",
      stars: 218,
    },
    {
      imageUrl: "image/c2.jpg",
      updatedDate: "Updated 30/3/2024",
      title: "HTML & CSS Beginners Course",
      stars: 829,
    },
    {
      imageUrl: "image/c3.jpg",
      updatedDate: "Updated 09/9/2021",
      title: "Python Beginners Course",
      stars: 218,
    },
    {
      imageUrl: "image/c4.jpg",
      updatedDate: "Updated 20/7/2023",
      title: "Web Design Crash Course",
      stars: 18,
    },
    {
      imageUrl: "image/c5.jpg",
      updatedDate: "Updated 24/3/2023",
      title: "Web Development Crash Course",
      stars: 128,
    },
    {
      imageUrl: "image/c6.jpg",
      updatedDate: "Updated 10/3/2024",
      title: "Angular Beginners Course",
      stars: 918,
    },
    {
      imageUrl: "image/c7.jpeg",
      updatedDate: "Updated 20/3/2024",
      title: "Javascript Beginners Course",
      stars: 218,
    },
  ];

  const courseBox = document.querySelector(".course-box");

  // Function to generate course cards
  function generateCourseCard(course) {
    const card = document.createElement("div");
    card.classList.add("courses");

    const image = document.createElement("img");
    image.src = course.imageUrl;
    image.alt = course.title;
    card.appendChild(image);

    const details = document.createElement("div");
    details.classList.add("details");

    const updatedDate = document.createElement("span");
    updatedDate.textContent = course.updatedDate;
    details.appendChild(updatedDate);

    const title = document.createElement("h6");
    title.textContent = course.title;
    details.appendChild(title);

    const starsDiv = document.createElement("div");
    starsDiv.classList.add("star");

    for (let i = 0; i < 5; i++) {
      const starIcon = document.createElement("i");
      starIcon.classList.add("fas", "fa-star");
      if (i < Math.floor(course.stars / 100)) {
        starIcon.classList.add("fas");
      } else {
        starIcon.classList.add("far");
      }
      starsDiv.appendChild(starIcon);
    }

    const starsCount = document.createElement("span");
    starsCount.textContent = `(${course.stars})`;
    starsDiv.appendChild(starsCount);

    details.appendChild(starsDiv);
    card.appendChild(details);

    return card;
  }

  // Function to render course cards
  function renderCourses() {
    courses.forEach((course) => {
      const courseCard = generateCourseCard(course);
      courseBox.appendChild(courseCard);
    });
  }

  // Call the function to render courses
  renderCourses();
});
