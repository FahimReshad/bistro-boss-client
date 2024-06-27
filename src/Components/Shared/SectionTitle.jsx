/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center my-4 md:my-10 lg:my-16 text-[#D99904] ">
            <p className="border-b-4 mx-auto w-2/3 md:w-1/3 lg:w-1/5 pb-2">{subHeading}</p>
          
            <h3 className="text-4xl uppercase font-semibold text-black border-b-4 mx-auto w-2/3 md:w-1/3 lg:w-1/5 py-2 md:py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;