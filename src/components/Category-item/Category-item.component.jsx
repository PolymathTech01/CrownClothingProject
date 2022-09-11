import { useNavigate } from 'react-router-dom';
import {
  CategoryItemContainer,
  BackgroundImage,
  Body,
} from './category-item.style';

const CategoryItem = ({ category: { imageUrl, title, route } }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
