const devBaseURL = "https://netease-cloud-music-api-self-nu.vercel.app/";
const proBaseURL = "https://netease-cloud-music-api-self-nu.vercel.app/";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

// export const TIMEOUT = 50000;