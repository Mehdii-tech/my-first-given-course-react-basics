import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./core/components/Card";
import Layout from "./core/components/Layouts/Layout";

function App() {
  // Hook de react qui va permettre d'incrementer notre const "count" via la fonction "setCount" qui permet de modifier notre const
  // Pour rappel on initialise count à 0 (on specifie de meme du coup le type de notre variable count au meme endroit : "";[];{};...)
  const [count, setCount] = useState(0);

  // Hook de react qui nous permet d'executer une fonction au meme moment que la page se rend
  useEffect(() => {
    //-> Nos instructions ici ( à la fin de ses 5 secondes il va decrementé de -1 notre const count via la methode setCount)
    setTimeout(() => {
      setCount(count - 1);
    }, 5000);
  }, []);
  // ↑↑↑↑↑↑↑↑↑
  // ici est l'emplacement de la dependance qui en cas de changement va rappeler notre hook
  // Rappel: useEffect est utilisé quand on doit recuperer de la data qui doit etre affiché avant que notre page s'afficher ou pendant ( recuperez de l'api )

  // Rappel: Grace au jsx et aux hooks de react on peut update une data instantanement (plus techniquement le virtual Dom de react va refresh ce composant uniquement)
  return (
    // notre composant layout si dessous qui prend en argument un argument qu'on nomme "toto" ayant pour valeur notre const count
    <Layout toto={count}>
      <div className="flex space-y-5 justify-center flex-col">
        <Card toto={count} />
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(0)}>return 0</button>
      </div>
    </Layout>
  );
}

export default App;
