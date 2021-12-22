import "./category.styles.css";
import Data from "../../data";

// const data =Data;
const Category = () => {
  //   console.log(Data[1]);

  return (
    <div className="category">
      <h1 className="title">Categories</h1>
      <div className="flex">
        {Data.map(({ name, image_url }, index) => (
          <div key={index} className="card">
            <img src={image_url} alt={name} className="card-img-top" />
            <div className="card-title text-size">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// console.log(Data);

export default Category;
