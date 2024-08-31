import { PROJECTS } from "../constants";


const CardData = () => {
  return (
    <div>
    <div className="tracking-wider text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl dark:text-white justify-center-between mt-20" >Projects</div>

    <div className="flex flex-wrap justify-center mt-10 ">
    {PROJECTS.map((card, index) => (
        <Card 
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
        />
    ))}
</div>
</div>
  )
}

// const Card = ({ title, description, image }) => {
//   return (
//     <div className="max-w-md rounded overflow-hidden shadow-lg m-4 bg-slate-300 group relative">
//       <img className="w-full h-40 object-cover" src={image} alt={title} />
      
//       {/* Card Content */}
//       <div className="px-4 py-2 transition-opacity duration-300 group-hover:opacity-0">
//         <div className="font-bold text-l mb-2 text-blue-950">{title}</div>
//         <p className="text-gray-700 text-base font-semibold">
//           {description}
//         </p>
//       </div>

//       {/* Button that appears on hover */}
//       <div className="absolute inset-0 flex items-center justify-center bg-blue-950 bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//         <button className="text-white font-bold py-2 px-4 rounded">
//           Click me!!
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;


const Card = ({ title, description, image }) => {

    return (
        <div className="max-w-md rounded overflow-hidden shadow-lg m-4 bg-slate-300 group-hover:opacity-0 transition-opacity duration-300">
            <img className="w-full h-40" src={image} />
            <div className="px-4 py-2">
                <div className="font-bold text-l mb-2 text-blue-950 opacity-100 ">{title}</div>
                <p className="text-gray-700 text-sm font-semibold">
                    {description}
                </p>
                {/* <div className="flex items-center justify-center mt-4">
            <button className="">
                Click me!!
            </button> */}
        </div>
            </div>
        // </div>
    
        
    );
};

export default CardData;