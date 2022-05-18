const Card = (props) => {
  // prend en argument props on va pouvoir display notre field toto en parcourant l'object qui a été attribué sur la page parente App.js
  return (
    <div class=" container m-auto rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <p class="text-gray-700 text-center text-base">{props.toto}</p>
      </div>
    </div>
  );
};

export default Card;
