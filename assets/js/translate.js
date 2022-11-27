var dataReload = document.querySelectorAll("a[data-reload]");

var engButton = document.getElementById("eng-translate");
var ptButton = document.getElementById("pt-translate");

var profileTitle = document.getElementById("profile-title");
var profileText = document.getElementById("profile-text");
var iAmText = document.getElementById("i-am");
var developerText = document.getElementById("developer-text");
var apresetationText = document.getElementById("h3-apresetation");
var skillsTitle = document.getElementById("skills-title");
var birthday = document.getElementById("birthday");
var city = document.getElementById("city");
var age = document.getElementById("age");
var skillsText = document.getElementById("skills-text");
var resumeTitle = document.getElementById("resume-title");
var education = document.getElementById("education");
var professionalExperience = document.getElementById("professionalExperience");
var graduation = document.getElementById("graduation");
var mba = document.getElementById("mba");
var technical = document.getElementById("technical");
var profileMenu = document.getElementById("profile-menu");
var skillsMenu = document.getElementById("skills-menu");
var homeMenu = document.getElementById("home-menu");
var resumeMenu = document.getElementById("resume-menu");

var wizParam1 = document.getElementById("wiz-param-1");
var wizParam2 = document.getElementById("wiz-param-2");
var lgParam1 = document.getElementById("lg-param-1");
var lgParam2 = document.getElementById("lg-param-2");
var infopParam1 = document.getElementById("infop-param-1");

var language = {
    eng: {

        homeMenu: "Home",
        profileMenu: "Profile",
        skillsMenu: "Skills",
        resumeMenu: "Resume",


        iAmText: "I'm ",
        developerText: " Developer",
        profiletitle: "Profile",
        profiletext: "I've been a Developer for 4 years, I'm 22 years old and I have a great passion for programming and development, I'm very interested in new technologies. I’m able to effectively self-manage during independent projects, as well as collaborate as part of a productive team. I’m    proficient in an assortment of technologies, including .NET C#, IIS and Microsoft SQL Server.",
        apresetationText: ".NET & Fullstack Developer",
        skillsTitle: "Skills",
        birthday: "Birthday:",
        city: "City:",
        age: "Age:",
        skillsText: "Over the years I have acquired some proficiencies in the area of ​​development, some of which I master more than others.",
        resumeTitle: "Resume",
        education: "Education",
        professionalExperience: "professional Experience",
        mba: "MBA IN FULL STACK DEVELOPER DESIGN, ENGINEERING & DEPLOYMENT",
        graduation: "GRADUATION IN DIGITAL GAMES",
        technical: "IT TECHNICAL COURSE",


        wizParam1: "Development of a Product to improve the system and user experience, in addition to integrating systems and products from Consortiums for large companies such as Santander, Caixa Seguros and others.",
        wizParam2: "Improvement of Legacy APIs or creating new APIs (.Net Core 3.1 and Later) and helping with front-end development (Angular)",
        lgParam1: "Full-stack developer with a focus on Back-end (C# .NET). along with a team of development in support and improvement of the company's LMS (Learning Management System) tool for its customers such as Anglogold Ashanti, Riachuelo, Fast Shop among others.",
        lgParam2: "Effectively coded software changes and alterations based on specific design specifications.",
        infopParam1: "Full-stack Developer (PHP) development of the company's system. Worked on ERP (Enterprise Resource Planning) development.",
    },
    
    pt: {
        
        homeMenu: "Início",
        profileMenu: "Sobre Mim",
        skillsMenu: "Habilidades",
        resumeMenu: "Resumo Profissional",
        
        iAmText: "Desenvolvedor",
        developerText: "",
        profiletitle: "Sobre Mim",
        profiletext: "Sou Desenvolvedor há 4 anos, tenho 22 anos e tenho uma grande paixão por programação e desenvolvimento, me interesso muito por novas tecnologias. Sou capaz de me autogerenciar de forma eficaz durante projetos independentes, bem como colaborar como parte de uma equipe produtiva. Sou proficiente em uma variedade de tecnologias, incluindo .NET C#, IIS e Microsoft SQL Server.",
        apresetationText: "Desenvolvedor .NET & Fullstack",
        skillsTitle: "Habilidades",
        birthday: "Dia de Nascimento:",
        city: "Cidade:",
        age: "Idade:",
        skillsText: "Ao longo dos anos adquiri algumas competências na área do desenvolvimento, algumas das quais domino mais do que outras.",
        resumeTitle: "Resumo Profissional",
        education: "Escolaridade",
        professionalExperience: "Experiência Professional",
        mba: "MBA EM FULL STACK DEVELOPER DESIGN, ENGINEERING & DEPLOYMENT",
        graduation: "GRADUAÇÃO EM JOGOS DIGITAIS",
        technical: "CURSO TÉCNICO EM INFORMÁTICA PARA SISTEMAS",
        
        
        wizParam1: "Desenvolvimento de Produto para melhoria do sistema e experiência do usuário, além de integrar sistemas e produtos de Consórcios para grandes empresas como Santander, Caixa Seguros e outros.",
        wizParam2: "Aprimoramento de APIs herdadas ou criação de novas APIs (.Net Core 3.1 e superior) e ajudando no desenvolvimento front-end (Angular)",
        lgParam1: "Desenvolvedor full-stack com foco em Back-end (C# .NET). juntamente com uma equipe de desenvolvimento em suporte e aprimoramento da ferramenta LMS (Learning Management System) da empresa para seus clientes como Anglogold Ashanti, Riachuelo, Fast Shop entre outros.",
        lgParam2: "Melhoria e manutenções de software com base em especificações de design definidas.",
        infopParam1: "Desenvolvedor Full-stack (PHP) desenvolvimento no sistema da empresa. Desenvolvimento de ERP (Enterprise Resource Planning, Sistema de Gestão de Recursos).",
        
    }

};

var setLanguage = () => {
    
    if (window.location.hash === "#pt") {

        profileMenu.textContent = language.pt.profileMenu;
        skillsMenu.textContent = language.pt.skillsMenu;
        homeMenu.textContent = language.pt.homeMenu;
        resumeMenu.textContent = language.pt.resumeMenu;

        profileTitle.textContent = language.pt.profiletitle;
        profileText.textContent = language.pt.profiletext;
        iAmText.textContent = language.pt.iAmText;
        developerText.textContent = language.pt.developerText;
        apresetationText.textContent = language.pt.apresetationText;
        skillsTitle.textContent = language.pt.skillsTitle;
        birthday.textContent = language.pt.birthday;
        city.textContent = language.pt.city;
        age.textContent = language.pt.age;
        skillsText.textContent = language.pt.skillsText;
        resumeTitle.textContent = language.pt.resumeTitle;
        education.textContent = language.pt.education;
        professionalExperience.textContent = language.pt.professionalExperience;
        graduation.textContent = language.pt.graduation;
        mba.textContent = language.pt.mba;
        technical.textContent = language.pt.technical;

        wizParam1.textContent = language.pt.wizParam1;
        wizParam2.textContent = language.pt.wizParam2;
        lgParam1.textContent = language.pt.lgParam1;
        lgParam2.textContent = language.pt.lgParam2;
        infopParam1.textContent = language.pt.infopParam1;

        ptButton.classList.add("active");
        engButton.classList.remove("active");
        
    } else {
        
        homeMenu.textContent = language.eng.homeMenu;
        profileMenu.textContent = language.eng.profileMenu;
        skillsMenu.textContent = language.eng.skillsMenu;
        resumeMenu.textContent = language.eng.resumeMenu;

        profileTitle.textContent = language.eng.profiletitle;
        profileText.textContent = language.eng.profiletext;
        iAmText.textContent = language.eng.iAmText;
        developerText.textContent = language.eng.developerText;
        apresetationText.textContent = language.eng.apresetationText;
        skillsTitle.textContent = language.eng.skillsTitle;
        birthday.textContent = language.eng.birthday;
        city.textContent = language.eng.city;
        age.textContent = language.eng.age;
        skillsText.textContent = language.eng.skillsText;
        resumeTitle.textContent = language.eng.resumeTitle;
        education.textContent = language.eng.education;
        professionalExperience.textContent = language.eng.professionalExperience;
        graduation.textContent = language.eng.graduation;
        mba.textContent = language.eng.mba;
        technical.textContent = language.eng.technical;


        wizParam1.textContent = language.eng.wizParam1;
        wizParam2.textContent = language.eng.wizParam2;
        lgParam1.textContent = language.eng.lgParam1;
        lgParam2.textContent = language.eng.lgParam2;
        infopParam1.textContent = language.eng.infopParam1;
        

        ptButton.classList.remove("active");
        engButton.classList.add("active");
        
    }

}

for (i = 0; i < dataReload.length; i++) {
    dataReload[i].onclick = function (e) {
        window.location.hash = this.getAttribute("href");
        setLanguage();
    }
}

setLanguage();