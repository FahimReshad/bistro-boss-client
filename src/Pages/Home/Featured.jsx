import SectionTitle from "../../Components/Shared/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white md:py-16 bg-fixed">
            <SectionTitle heading={"from our menu"} subHeading={"check it out"}></SectionTitle>
            <div className="md:flex items-center justify-center md:gap-14 pb-20 md:px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>May 17, 2024</p>
                    <h4 className="uppercase">WHERE CAN I GET SOME?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white font-semibold">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;