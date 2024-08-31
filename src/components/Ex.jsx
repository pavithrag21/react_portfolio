import { EXPERIENCES } from "../constants"

const Ex = () => {
  return (
    <div>
                  <h1 className="tracking-wider text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl dark:text-white justify-center-between mt-20 mb-10">
            Experience
          </h1>
          <div className="bg-slate-950 bg-opacity-45 mb-20">
            
            {EXPERIENCES.map((e) => (
              <div
                key={e.id}
                className="flex flex-col md:flex-row ">
                  {/* <div className="w-full justify-center align-middle"> */}
                  <img
                    className="h-40 w-40 p-4"
                    src={e.image}
                    alt="image"
                  />
                  {/* </div> */}
                <div className="flex flex-col justify-items-center p-4">
                  <h1 className="text-xl font-bold">{e.company}</h1>
                  <span className="text-base">{e.year}</span>
                  <span className="text-base">{e.role}</span>
                  <span className="text-base text-blue-200">{e.description}</span>
                </div>
              </div>
            ))}
        
          </div>
        </div>
    
  )
}

export default Ex