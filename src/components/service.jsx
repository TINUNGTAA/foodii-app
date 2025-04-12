import assets from "../assets/assets";


function Service(){
    return(
        <section  className="  py-[160px]  lg:px-28 bg-gray-100 px-10">
            <div className="flex justify-between gap-[150px]  flex-col lg:flex-row">
                <div className="flex flex-1 flex-col">
                    <p className="   font-bold text-[#FF6868]">Our Story & Services</p>
                    <h1 className="lg:mt-10 mt-3 text-5xl font-bold  lg:mb-6 ">Our Culinary Journey And Services</h1>
                    <p  className=" text-xl  lg:text-3xl text-gray-600  lg:leading-loose
                     mt-6">Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                      
                      <div className="mt-12">
                      <button className="  
                             bg-primary text-white font-bold px-10 py-4 text-2xl lg:text-center rounded-full">Explore</button>

                      </div>
                      

                     
                </div>
                <div  className="flex flex-1 gap-6 lg:gap-12 flex-col">
                    {/* top */}
                    <div className="flex gap-6 lg:gap-12">
                       
                       
                        <div className=" flex-col   bg-white w-[220px] h-[300px] lg:w-[320px] lg:p-12  p-6  lg:h-[300px]     items-center shadow-lg rounded-3xl">
                            <div className="flex justify-center mb-6">
                                <img src={assets.m2}/>

                                
                            </div>

                            <div className="">
                                <h1 className="text-2xl text-primary mb-3 font-bold text-center">CATERING</h1>
                                <p className="text-xl font-bold text-[#90BD95]">Delight your guests with our flavors and  presentation</p>
                            </div>
                        </div>



                        <div className=" flex-col   bg-white w-[220px] h-[300px] lg:min-w-[320px] lg:min-h-[300px] flex-shrink-0    items-center  lg:p-12  p-6  shadow-lg rounded-3xl">
                            <div className="flex justify-center mb-6">
                                <img src={assets.m4}/>

                                
                            </div>

                            <div className="">
                                <h1 className="text-2xl text-primary mb-3 font-bold text-center">FAST DELIVERY</h1>
                                <p className="text-xl font-bold text-[#90BD95]">We deliver your order promptly to your doo</p>
                            </div>
                        </div>


                    </div>

                    {/* down */}

                    <div className="flex  gap-6 lg:gap-12">
                       
                       
                       <div className=" flex-col   bg-white w-[220px] h-[300px] lg:min-w-[320px] lg:min-h-[300px] flex-shrink-0  items-center  lg:p-12  p-6  shadow-lg rounded-3xl">
                           <div className="flex justify-center mb-6">
                               <img src={assets.m3}/>

                               
                           </div>

                           <div className="">
                               <h1 className="text-2xl text-primary mb-3 font-bold text-center">ONLINE ORDERING</h1>
                               <p className="text-xl font-bold text-[#90BD95]">Explore menu & order with ease using our Online Ordering </p>
                           </div>
                       </div>



                       <div className=" flex-col   bg-white w-[220px] h-[300px] lg:min-w-[320px] lg:min-h-[300px] flex-shrink-0   items-center lg:p-12  p-6 shadow-lg rounded-3xl">
                           <div className="flex justify-center mb-6">
                               <img src={assets.m1}/>

                               
                           </div>

                           <div className="">
                               <h1 className="text-2xl text-primary mb-3 font-bold text-center">GIFT CARD</h1>
                               <p className="text-xl font-bold text-[#90BD95]">Give the gift of exceptional dining with Foodi Gift Cards</p>
                           </div>
                       </div>


                   </div>


                </div>
            </div>
        </section>
    )
}   export default Service;