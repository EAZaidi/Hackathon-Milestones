const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const workExperience = document.getElementById('work-experience') as HTMLElement;

toggleButton.addEventListener("click", ()=>{
    if (workExperience.style.display === 'none'){
        workExperience.style.display = 'block';
    }
    else {
        workExperience.style.display = "none";
    }
});
