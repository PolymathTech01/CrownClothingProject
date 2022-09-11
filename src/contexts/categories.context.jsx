import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../Utils/Firebase/Firebase.utils.js';
// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categoryMap: {},
  // setProducts: () => null
});
export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoryMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoryMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
