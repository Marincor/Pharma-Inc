export default async function PharmDataByPage() {

    const url = "https://randomuser.me/api/?page=3&results=6";


   return await fetch(url).then(res => res.json());



}