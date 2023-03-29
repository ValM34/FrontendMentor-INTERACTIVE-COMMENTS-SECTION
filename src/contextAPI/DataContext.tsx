import { createContext } from 'react';
import messages from '../../data.json';
import { useState } from 'react';

export const DataContext = createContext(messages);


export const DataProvider = (props) => {
  const [data, setData] = useState(messages);

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{data, updateData}}>
      {props.children}
    </DataContext.Provider>
  );
};
