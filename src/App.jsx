import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Login from "./components/Login";
import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";
import * as C from "./styles/app";
import Chat from "./components/Chat";
import Splash from "./components/Splash/Splash";

const App = () => {
  const [user, loading] = useAuthState(auth);
  const [showSplash, setShowSplash] = useState(true); // Estado para controlar a exibição do splash
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // Esconde o splash após 4 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (showSplash) return <Splash />;

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <C.Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <Chat userChat={userChat} />
    </C.Container>
  );
};

export default App;
