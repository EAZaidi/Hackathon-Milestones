var toggleButton = document.getElementById('toggle-skills');
var workExperience = document.getElementById('work-experience');
toggleButton.addEventListener("click", function () {
    if (workExperience.style.display === 'none') {
        workExperience.style.display = 'block';
    }
    else {
        workExperience.style.display = "none";
    }
});
