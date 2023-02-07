import { useNavigate } from "react-router-dom";
import {BackgroundImage, Body, DirectoryItemContainer} from "./directory-item.styles.jsx"

const DirectoryItem = ({category})=> {
// This props above needs to correspond to what is equaled in the const 
// below and that name given must then be displayed in the component addressed in App.js and say what is in ({})= {categories.map((category) that category
    const {imageUrl,title, route} = category;

    const navigate = useNavigate();

    const onNavigateHandler =()=> navigate(route)

    return(
        <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl} />
    <Body>
        <h2> {title}</h2>
        <p>Shop Now</p>
    </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;