import { Redirect } from "react-router-dom";


import Discover from "../pages/discover";
import Album from "../pages/discover/child-pages/album";
import Artist from "../pages/discover/child-pages/artist";
import DJradio from "../pages/discover/child-pages/dj-radio";
import Ranking from "../pages/discover/child-pages/ranking";
import Recommend from "../pages/discover/child-pages/recommend";
import Songs from "../pages/discover/child-pages/songs";
import Player from "../pages/player/index";

import Friend from "../pages/friend";
import MyMusic from "../pages/my-music";

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/discover"/>
        )
    },
    {
        path: "/discover",
        component: Discover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend"/>
                )
            },
            {
                path: "/discover/recommend",
                component: Recommend, 
            },
            {
              path: "/discover/ranking",
              component: Ranking,
            },
            {
              path: "/discover/songs",
              component: Songs,
            },
            {
              path: "/discover/djradio",
              component: DJradio,
            },
            {
              path: "/discover/artist",
              component: Artist,
            },
            {
              path: "/discover/album",
              component: Album,
            },
            {
              path: "/discover/player",
              component: Player,
            },
        ]
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