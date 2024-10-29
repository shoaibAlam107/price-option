import PriceOption from "../priceOption/Priceoption";


const PriceOptions = () => {

    const PriceOptions = [
        {
          "id": 1,
          "option_name": "Basic Membership",
          "price": 20,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking"
          ]
        },
        {
          "id": 2,
          "option_name": "Standard Membership",
          "price": 35,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking",
            "1 personal training session per month",
            "Group classes access"
          ]
        },
        {
          "id": 3,
          "option_name": "Premium Membership",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking",
            "Unlimited group classes",
            "5 personal training sessions per month",
            "Access to spa and sauna"
          ]
        },
        {
          "id": 4,
          "option_name": "Family Membership",
          "price": 80,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking",
            "Unlimited group classes for family members",
            "10 personal training sessions per month",
            "Access to spa and sauna",
            "Kids area access"
          ]
        }
      ]
      

    return (
        <div className="m-12">
            <h1 className="text-2xl"> Best price in the city: </h1>
           <div className="grid md:grid-cols-3 gap-6">
           {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;