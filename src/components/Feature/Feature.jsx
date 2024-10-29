import { IoIosCheckmark } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center  pl-8"> <IoIosCheckmark className="bg-green-600 mr-4" />{feature}</p>
        </div>
    );
};

export default Feature;