
import "./category-item.styles.scss"

const CategoryItem = ({category})=> {
// This props above needs to correspond to what is equaled in the const 
// below and that name given must then be displayed in the component addressed in App.js and say what is in ({})= {categories.map((category) that category
    const {imageUrl,title} = category;

    return(
        <div className="category-container">
        <div 
        className="background-image" 
        style={{backgroundImage:`url(${imageUrl})`}}
        />
    <div className="category-body-container">
        <h2> {title}</h2>
        <p>Shop Now</p>
    </div>
        </div>
    )
}

export default CategoryItem;