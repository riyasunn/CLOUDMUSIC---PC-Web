# React CloudMusic-PC Project

## Project Intro
Primarily utilized React for the frontend development, while leveraging an ![open source API service](https://github.com/Binaryify/NeteaseCloudMusicApi) for the backend functionality which I deployed on Vercel.

### Techology Stack
Application based on `React`, `Redux`, `Styled-components`, `Ant-Design`, and `Axios` 
### Features
- Banner: using Carousel to showcase the banner images, while utilizing a blurred background effect for enhanced visual appeal
- Hot recommend: implemented asynchronous data fetching from the backend utilizing Axios, and rendered 8 top-recommended items in the frontend along with their respective play counts and description
- New albums: using axios to request data from backend, and displayed 10 new albums in the frontend utilizing antdesign Carousel
- Ranking list: rendered three lists of the top 10 music tracks, and enabled the display of a music playback icon upon mouse hover for each individual track.  
- Music play bar: functionalities including, play, pause, skip to the previous or next song, adjust play sequence, control volume, manage play progress and so on
- Play list: display play list content including, music information, highlighting the current playing song, displaying lyrics and enabling users to adjust lyrics alongside the play progress. 
  
### Preview address
https://sweet-swan-776acc.netlify.app/#/discover/recommend

## Install and Set up

1. Clone project:
   ```sh
   git clone https://github.com/riyasunn/cloud-music-web.git
   ```
2. Install:
   ```sh
   yarn install
   ```
3. Run:
   ```sh
   yarn start
   ```

   
