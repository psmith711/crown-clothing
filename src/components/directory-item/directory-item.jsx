import './directory-item.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div className='directory-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div
        className='directory-body-container'
        onClick={() => {
          navigate(category.route);
        }}
      >
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
