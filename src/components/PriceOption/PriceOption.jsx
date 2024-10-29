import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {

    const {price ,option_name,features} =option
    return (
        <div className="bg-sky-300 rounded-xl p-5 m-5 flex flex-col">
            
            <h2 className="text-center">
            <span className="text-3xl">{price} /month</span>
            </h2>
            <h3 className="text-center font-bold">{option_name}</h3>
            <div className="flex-grow"> 
                {
                features.map( (feature , idx) => <Feature key={idx} feature = {feature}></Feature>)
            }
            </div>
            <button className="bg-green-400 w-full m-auto py-2 mt-5 rounded-md hover:bg-green-800 font-bold">Bye Now</button>
        </div>
    );
};

export default PriceOption;