// import dotenv from 'dotenv';

// dotenv.config();

// const getEnvVar = (key) => {
//   return process.env[key];
// };

// export default getEnvVar;
import {readFile} from "fs"

function readFileAsync(filePath){
    return new Promise((resolve, reject)=>{
      readFile(filePath, "utf8", (err, data)=>{
        if(err){
          reject(err);
        }else{
          resolve(data);
        }
      });
    })
  }
  
  const filePath = "/Users/andre/Desktop/sala-production/Key 3_4_2024, 10_11_34 PM.pk"
 

 const privateKey = readFileAsync(filePath).then(data => {
    console.log(data)
 }).catch(err => {
    console.error(err)
 });
 
 export default privateKey;