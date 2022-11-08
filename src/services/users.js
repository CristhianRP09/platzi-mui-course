import { urlFetch } from "../constants";

const getGitHubUser = async (user) => {
  const res = await fetch(`${urlFetch}${user}`, { method: 'GET'});
  const payload = res.json();
  return payload
}

export default getGitHubUser;
