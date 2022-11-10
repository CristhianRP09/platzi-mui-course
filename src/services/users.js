import { urlFetch } from '../constants/constants'

const getGitHubUser = async (user) => {
  const res = await fetch(`${urlFetch}/${user}`);
  const payload = res.json();
  return payload;
}

export default getGitHubUser;
