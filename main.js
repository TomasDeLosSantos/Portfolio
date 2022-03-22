// $html: #F06529;
// $css: #264DE4;
// $js: #F0DB4F;
// $react: #60DAFB;
// $node: #3D8739;


const techColors = [
    {name: "HTML5", color: "#F06529"},
    {name: "CSS3", color: "#264DE4"},
    {name: "Javascript", color: "#F0BF25"},
    {name: "Bootstrap", color: "#6A10E9"},
    {name: "SASS", color: "#C36190"},
    {name: "React", color: "#2596DC"},
    {name: "NodeJS", color: "#3F873F"},
    {name: "Express", color: "#90C53F"},
    {name: "MongoDB", color: "#412F1F"},
    {name: "MySQL", color: "#CF8B2B"},
    {name: "Java Spring Boot", color: "#EC2025"},
    {name: "AWS", color: "#162B3E"}
];

document.addEventListener("mouseover", (e) => {
    if(e.target.matches(".skills__col")){
        e.target.addEventListener("mouseenter", (e) => {
            const logo = e.target.querySelector(".skills__logo");
            const name = e.target.querySelector(".skills__sub");
            color = techColors.find(t => t.name == name.innerText).color;
            name.style.color = color.toString();
            logo.style.color = color.toString();
        });
        e.target.addEventListener("mouseleave", (e) => {
            const logo = e.target.querySelector(".skills__logo");
            const name = e.target.querySelector(".skills__sub");
            name.style.color = "#fff";
            logo.style.color = "#fff";
        });
    }
});

