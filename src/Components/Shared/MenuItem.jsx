

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex gap-8">
            <img style={{borderRadius: '0 200px 200px 200px' }} className="w-[100px] object-cover" src={image} alt="" />
            <div>
                <h2 className="uppercase text-xl font-semibold opacity-80">{name}-------------</h2>
                <p className="opacity-60 font-medium">{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-semibold">${price}</p>
        </div>
    );
};

export default MenuItem;