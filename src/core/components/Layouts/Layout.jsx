import Header from "../design-systems/Header";
import Footer from "../design-systems/Footer";

// VA englober notre header et footer et va permettre de pouvoir contenir
// un composant enfant via children pour avoir une logique codé qu'une fois

export default function Layout(props) {
  return (
    // Je met en parametre de mon composant Header le props que je nomme "count"
    // qui va prendre la valeur toto de que j'ai attribué dans la page parente App.js au layout qu'on recupere en argument de la fonction
    // juste au dessus ↑↑↑↑↑↑↑↑↑
    <>
      <Header count={props.toto} />
      {props.children}
      <Footer />
    </>
  );
}
