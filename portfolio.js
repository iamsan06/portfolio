let projects=[{projectnumber:"1",title:"Tic Tac Toe Game",description:"This is a simple web-based Tic Tac Toe game developed using HTML, CSS, and JavaScript. The game features a 3x3 grid where two players take turns marking “X” and “O”. It includes logic to detect win conditions (rows, columns, diagonals), draw situations, and displays messages accordingly. The user interface is styled using CSS for a clean and responsive design, and all game logic—including turn management, win checking, and board resetting—is handled with JavaScript.",imagepath:"tictactoe.png"},{projectnumber:"2",title:"Portfolio Website",description:"This is a personal portfolio website built using HTML, CSS and Js. This portfolio is made using the concepts which i have learnt till now and i hope to build a more advanced portfolio in the future when i have finished frameworks, backend and databases. You can find my resume and projects here as well as a contact me option which is powered using formspree.",imagepath:"portfolio.png"}]

projects.forEach(project=>{
    let div=document.querySelector(".description")
    div.innerHTML+=`<p id="projectheading">Project ${project.projectnumber}</p>
        <p id="projecttitle">${project.title}</p>
        <p id="projectdescription">${project.description}<br><br><p>
        <div id="proimg">
        <img src=${project.imagepath} height="400px" width="750px"></img>
        </div><br><br>`
})
