import firebase from "firebase/compat/app"; // Importa o pacote firebase compatível com a versão 9
import "firebase/compat/auth"; // Importa o módulo de autenticação do Firebase
import "firebase/compat/firestore"; // Importa o módulo de Firestore do Firebase

const firebaseConfig = {
  apiKey: "AIzaSyAYDXxOeCGg03nCylf5vvQgo7Oz7YliNN4",
  authDomain: "app-chat-leonardo.firebaseapp.com",
  projectId: "app-chat-leonardo",
  storageBucket: "app-chat-leonardo.appspot.com",
  messagingSenderId: "315144570036",
  appId: "1:315144570036:web:b03194e552b3ca830ec3e1",
};
const app = firebase.initializeApp(firebaseConfig); // Inicializa o aplicativo Firebase com a configuração fornecida
const db = app.firestore(); // Obtém uma instância do Firestore para interagir com o banco de dados
const auth = app.auth(); // Obtém uma instância de autenticação para autenticar usuários
const provider = new firebase.auth.GoogleAuthProvider(); // Cria uma instância do provedor de autenticação do Google
export { db, auth, provider }; // Exporta as instâncias do Firestore, autenticação e provedor para uso em outros arquivos
