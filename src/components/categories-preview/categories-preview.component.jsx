import { Fragment} from "react";
import { useSelector } from "react-redux";

// import { CategoriesContext } from "../../contexts/categories.context";

import { selectCategoriesMap,selectCategoriesIsLoading } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../spinner/spinner.component";
// import ProductCard from "../../components/product-card/product-card.component";

    const CategoriesPreview = () => {
        
    // const {categoriesMap} = useContext(CategoriesContext);
        const categoriesMap = useSelector(selectCategoriesMap);
        const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        <Fragment>
        {
            isLoading ? (
            <Spinner/>
            ) : (
            Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
                <CategoryPreview key={title} title={title} products={products} />
            );
            })
            )}
        </Fragment>
        );
    };
    
    export default CategoriesPreview;
