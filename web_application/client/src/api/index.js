import axios from "axios";

const API = axios.create({
   baseURL: "https://solar-flare-server.onrender.com/",
});

//api to send file from frontend
export const postFile = ({ file }) => {
   const data = new FormData();
   data.append("file", file);
   return API.post("/", data);
};
