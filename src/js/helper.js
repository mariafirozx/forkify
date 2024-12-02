import { async } from "regenerator-runtime";
import { TIME_OUT_SECS } from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

export const getJSON = async function(url){

    try{

    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIME_OUT_SECS)]);

    const data = await res.json();
    console.log(data);

    if(!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;

    }catch(err){
        throw err;

    }
    
};