import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import Searcher from "./Components/Searcher";
import getGitHubUser from "./services/users";

function App() {
  console.log('1')
  const [inputUser, setInputUser] = useState('octocat');
  console.log('2')
  const [userState, setUserState] = useState(inputUser);
  // const [notFound, setNotFound] = useState(false);
  console.log('3')

  const getUser = async (user) => {
    console.log('8')
    const response = await getGitHubUser(inputUser);
    console.log('9')

    if(userState === 'octocat') {
      // localStorage.setItem('octocat', response);
      console.log('10')
    }

    if(response.message === 'Not Found') {
      console.log('11')
      // const {octocat} = localStorage;
      // setUserState(octocat);
      // setNotFound(true);
    } else {
      console.log('12')
      setUserState(response);
      console.log('13')
      // setNotFound(false);
    }
    console.log('14')
  }

  console.log('4')
    
  useEffect(() => {
    console.log('5')
    getUser(inputUser);
    console.log('6');
    // console.log(userState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputUser]);

  console.log('7')

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
      <Searcher 
        inputUser={inputUser}
        setInputUser={setInputUser}
      />
    </Container>
  );
}

export default App;
