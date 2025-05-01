// projectsData.js
import currency from "../../assets/projects/currency.avif"
import portfolio from "../../assets/about.png"
import MergX from "../../assets/projects/portfolio.jpg"
const projectsData = [
    {
        title: "Personal portfolio",
        description: "A react js powered personal portfolio showing my journey",
        technologies: ["React", "Tailwind", "Bootstrap"],
        imageUrl: portfolio,
        githubUrl: "https://github.com/HemantKamliya/React-js/tree/main/hemant_portfolio",
        liveUrl: "https://portfolio2-pi-lime.vercel.app/"
    },
    {
        title: "Currency Converter",
        description: "Built a responsive currency converter web application using React.js, which fetches real-time exchange rates via a public currency conversion API.",
        technologies: ["React", "Tailwind CSS", "Currency API"],
        imageUrl: currency,
        githubUrl: "https://github.com/HemantKamliya/React-js/tree/main/currency_converter",
        liveUrl: "https://weather-dashboard.vercel.app"
    },
    {
        title: "MergX",
        description: "Developed a desktop/web application called MergX focused on enhancing productivity through smart PDF and file handling",
        technologies: ["React", "Tailwind", "Material UI","Multer"],
        imageUrl: MergX,
        githubUrl: "https://github.com/HemantKamliya/minor",
        liveUrl: "https://imapdf.vercel.app"
    },
    {
        title: "MergX",
        description: "Developed a desktop/web application called MergX focused on enhancing productivity through smart PDF and file handling",
        technologies: ["React", "Tailwind", "Material UI","Multer"],
        imageUrl: MergX,
        githubUrl: "https://github.com/HemantKamliya/minor",
        liveUrl: "https://imapdf.vercel.app"
    }
];

export default projectsData;