import React, { useContext } from 'react';
import { DataContext } from '../contextAPI/DataContext';

function ExampleComponent() {
  const { data, updateData } = useContext(DataContext);

  const handleClick = () => {
    updateData({
      ...data,
      comments: [
        {
          ...data.comments[0],
          content: 'Nouveau contenu'
        },
        ...data.comments.slice(1)
      ]
    });
  };

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [...arr1, ...arr2];
  console.log(arr3); // [1, 2, 3, 4, 5, 6]

  return (
    <div>
      <p>Donnée actuelle : {data.comments[0].content}</p>
      <button onClick={handleClick}>Modifier la donnée</button>
    </div>
  );
}

export default ExampleComponent;
