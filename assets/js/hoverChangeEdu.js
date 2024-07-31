export function hoverChangeEdu(
    nameCard,
    changeEducation,
    titleEdu,
    EduEdu,
    dateEdu
  ) {
    const varChangeDescription = document.querySelector(".changeEducation");
    const varTitleExperience = document.querySelector(".titleEdu");
    const varEducationExperience = document.querySelector(".EduEdu");
    const varDateExperience = document.querySelector(".dateEdu");
  
    document.querySelector(nameCard).addEventListener("click", () => {
      varChangeDescription.innerHTML = changeEducation;
      varEducationExperience.innerHTML = EduEdu;
      varTitleExperience.innerHTML = titleEdu;
      varDateExperience.innerHTML = dateEdu;
    });
  }
  
  const header = document.getElementById("education-school");
  const btns = header.getElementsByClassName("Education");
  
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      const current = document.getElementsByClassName("activeEdu");
      current[0].className = current[0].className.replace(
        " activeEdu",
        ""
      );
      this.className += " activeEdu";
    });
  }
  