
import Header from './components/header/Header';
import Router from './router/Router';



export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Router />
      </main>
    </>
  );
}
