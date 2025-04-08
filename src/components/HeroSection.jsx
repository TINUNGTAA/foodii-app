import assets from "../assets/assets";


function heroSection(){
    return(
        <section className=" lg:mt-0 mt-16  lg:px-28 px-10">
            <div className="flex  justify-between lg:flex-row flex-col items-center  lg:gap-[300px]    ">
                {/* left */}
                <div className="flex-1 ">

                    <  h className="lg:text-5xl md:text-3xl  sm:text-center text-2xl font-bold text-center 
                     text-black"> Dive into Delights of<br/> Delectable Food </h>
                    
                    <p className=" text-xl  lg:text-3xl text-gray-600 
                     mt-6 lg:mt-12">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>

 
                           

                          <div className=" flex md:flex-row flex-col
                            lg:mt-12 mt-6   items-center gap-6">
                            
                            <button className="  
                             bg-primary text-white font-bold px-10 py-4 text-2xl lg:text-center rounded-full">Order Now</button>
                             <div></div> 
                         <p className="text-2xl    font-semibold text-gray-600">Watch video  <img src= {assets.video} className="p-6  hover:bg-gray-200 rounded-full shadow-lg" />   </p>   
                            
                         
                          </div>

                         



                </div>
                {/* right */}
                <div className="flex flex-1 ">
                    <img src= {assets.intersect}  className=" "/>
                </div> 

            </div>

        </section>
    );
}


export default heroSection;