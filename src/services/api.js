export default async function PharmDataByPage(results = 50) {

    const url = `https://randomuser.me/api/?page=3&results=${results}`;


   return await fetch(url).then(res => res.json());



}