import Discover from "../pages/discover";
import Friend from "../pages/friend";
import MyMusic from "../pages/my-music";

const routes = [
    {
        path: "/",
        exact: true,
        component: Discover
    },
    {
        path: "/mine",
        component: MyMusic 
    },
    {
        path: "/friend",
        component: Friend 
    },
];

export default routes;