import './App.css';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import Blogs from './Blogs';

function App() {
  return (

    <div className="App">
      <div>
        <Blogs articleSources={yourArticles} sectionTopic={'For you'} />
      </div>
      <div>
        <Blogs articleSources={missedArticles} sectionTopic={'In case you missed'} />
      </div>

    </div>
  );
}

export default App;
