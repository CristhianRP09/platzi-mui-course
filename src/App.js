import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import Searcher from "./Components/Searcher";
import UserCard from './containers/UserCard';
import getGitHubUser from "./services/users";

function App() {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser);

  const getUser = async (user) => {
    const res = await getGitHubUser(inputUser);

    if(userState === 'octocat') {
      localStorage.setItem('octocat', JSON.stringify(res));
    }

    if(res.message === 'Not Found') {
      setUserState(JSON.parse(localStorage.getItem('octocat')));
    } else {
      setUserState(res);
    }
  }

  useEffect(() => {
    getUser(inputUser);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputUser]);

  return (
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
}

export default App;
