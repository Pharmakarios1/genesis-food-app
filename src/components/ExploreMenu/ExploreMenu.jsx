import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div
      className="explore-menu id
  explore-menu"
    >
      <h1>Explore Our Menu</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos iusto
        corporis explicabo? Totam rem ipsum magnam dolor sed eum amet iste
        sapiente, numquam voluptatem debitis, excepturi esse saepe mollitia
        ullam.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div key={index} className="explore-menu-list-item">
            <img src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
