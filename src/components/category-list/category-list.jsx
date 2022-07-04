import DirectoryItem from '../directory-item/directory-item';
import './category-list.scss';

const CategoryList = ({ categories }) => {
  return (
    <div className='directories-container'>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoryList;
