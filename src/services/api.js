export async function PharmDataByPage(results = 50) {
  const url = `https://randomuser.me/api/?page=3&results=${results}`;

  return await fetch(url).then((res) => res.json());
}

export async function PharmDataById(id) {
  const url = `https://randomuser.me/api/?id=${id}`;

  return await fetch(url).then((res) => res.json());
}
