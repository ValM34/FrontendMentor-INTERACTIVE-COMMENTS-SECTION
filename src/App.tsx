import './App.scss'
import Post from './components/Post';
import { DataProvider } from './contextAPI/DataContext';
import data from '../data.json';
import ExampleComponent from './components/ExampleComponent';

function App() {
  const user = data.comments[1].replies[1].user;

  return (
    <DataProvider>
      <div className="main-content">
        <div className="messages-container">
          <ExampleComponent />
          RAF: <br />
          - Faire fonctionner le bouton d'ajoute d'un commentaire <br />
          - Faire fonctionner les boutons de la modal <br />
          - Utiliser le local storage pour sauvegarder artificiellement les nouvelles données (commentaire ajouté/supprimé) <br />
          - Quand j'appuie sur reply sur 2 commentaire, 2 champs de réponse se chargent. Il faudrait que le précédent s'enlève. <br />
          {data.comments ? data.comments.map(comment => (
            <Post key={comment.id} comment={comment} />
          )) : ''}
        </div>
        <div className="form-container">
          <form>
            <textarea placeholder="Add a comment..."></textarea>
            <div className="form-options">
              <div className="avatar">
                <img src={user.image.png} />
              </div>
              <button className="btn-send-reply">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </DataProvider>
  )
}

export default App
