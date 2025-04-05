import assets from "../assets/assets";


function heroSection(){
    return(
        <section className=" lg:mt-0 mt-16  lg:px-28 px-6">
            <div className="flex  justify-between items-center  lg:gap-[300px]    ">
                {/* left */}
                <div className="flex-1 ">

                    <  h className="lg:text-5xl  text-2xl font-bold font-loose text-black"> Dive into Delights of Delectable Food </h>
                    
                    <p className=" text-xl  lg:text-3xl text-gray-600 
                     mt-6 lg:mt-12">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>


                           

                          <div className=" flex lg:flex-row flex-col lg:mt-12 mt-6  items-start lg:items-center gap-6">
                            
                            <button className="  px-10  py-4 bg-primary text-white font-bold  lg:text-2xl lg:text-center rounded-full">Order Now</button> 
                         <p className="lg:text-2xl  text-xl font-semibold text-gray-600">Watch video </p>  <img src= {assets.video} className="p-6  hover:bg-gray-200 rounded-full shadow-lg" />
                            
                         
                          </div>

                         



                </div>
                {/* right */}
                <div className="flex flex-1 ">
                    <img src= {assets.intersect} />
                </div>

            </div>

        </section>
    );
}


export default heroSection;