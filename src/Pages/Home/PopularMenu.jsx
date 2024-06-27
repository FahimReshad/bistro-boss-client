import SectionTitle from "../../Components/Shared/SectionTitle";
import MenuItem from "../../Components/Shared/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");

  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <div>
      <SectionTitle
        heading={"From our Menu"}
        subHeading={"check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-10 font-semibold">
        <button className="btn btn-outline border-0 border-b-4 text-black ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
