// import { useContext } from "react";

// import { CategoriesContext } from "../../contexts/categories.context";

// import CategoryPreview from "../../components/category-preview/category-preview.component";
// import ProductCard from "../../components/product-card/product-card.component";
import { useEffect } from "react";
import { Routes,Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStart } from "../../store/categories/category.action";

import "./shop.styles.scss"

const Shop = ()=> {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchCategoriesStart());
}, []);

    // const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
};

export default Shop;