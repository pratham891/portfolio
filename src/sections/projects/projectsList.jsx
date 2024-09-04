import gossipDeckImage from '../../assets/project images/gossip-deck.png';
import crudWebAppImage from '../../assets/project images/crud-web-app.png';
import schulteChallenge from '../../assets/project images/schulte-challenge.png';

const projectsList = [
    {
        img: gossipDeckImage,
        projectName: "Gossip Deck",
        projectDesc: "A web group chat application based on NodeJs with Socket.io",
        liveLink: "https://gossip-deck.onrender.com/",
        srcCodeLink: "https://github.com/pratham891/gossip-deck"
    },
    {
        img: crudWebAppImage,
        projectName: "CRUD Web App",
        projectDesc: "A MERN Stack based CRUD Web App which performs full stack CRUD Operations, includes reCaptcha verification and user authentication",
        liveLink: "https://crud-web-app-nine.vercel.app/",
        srcCodeLink: "https://github.com/pratham891/crud-web-app"
    },
    {
        img: schulteChallenge,
        projectName: "Schulte Challenge",
        projectDesc: "Schulte table game using HTML, CSS and JavaScript",
        liveLink: "https://pratham891.github.io/Schulte-Challenge/",
        srcCodeLink: "https://github.com/pratham891/schulte-challenge"
    }
];

export default projectsList;
