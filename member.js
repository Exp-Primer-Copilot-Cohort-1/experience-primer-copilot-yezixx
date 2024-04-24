function skillsMember(){
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Express', 'MongoDB', 'Firebase'];
    var skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';
    skills.forEach(skill => {
        var li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}