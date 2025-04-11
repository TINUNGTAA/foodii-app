import assets from "../assets/assets";



function Testimonials(){
return(
    <section  className="py-[160px] lg:px-28 px-10 bg-gray-100">

        <div className="flex  flex-col lg:flex-row
        justify-between gap-[150px] items-center">
            {/* left */}

            <div className="flex flex-1">
                <div style={{backgroundImage: `url(${assets.oval})`,backgroundSize: 'cover'}}
                
                
                >
                    <img src={assets.chef}/>
                </div>

            </div>


        {/* right  */}

     <div className="flex flex-1 flex-col">
        <div>
       
            <p className=" text-[#FF6868] font-bold mb-6  text-xl">TESTIMONIALS</p>
            <img src= {assets.pic3} className=" ml-[580px] hidden lg:flex"/>
            <h1 className="lg:text-5xl md:text-3xl   text-2xl font-bold ">What Our Customers Say  About Us</h1>

            <p className=" text-xl  lg:text-3xl text-gray-600 
                     mt-6 lg:mt-12 mb-12">“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
        </div>

        <div>
       

        {/* Feedback */}
        <div className="flex  gap-[100px] items-center ">
            {/* image */}
            <div className="flex  ">
            <img src={assets.pic2} className=" " />
            <img src={assets.pic1} className="  ml-[-15px] "/>
            </div>

            
            <div className=" flex flex-1  flex-col ">
            <h1 className=" text-xl  lg:text-2xl font-bold ">Customer Feedback</h1>

            <div className="flex gap-3 mt-3"><img src={assets.star}/> 
            <p className="text-gray-700 font-bold lg:text-2xl text-xl"></p>
            <p className=" lg:text-2xl text-xl  font-semibold text-gray-600">(18.6k Reviews)</p></div>
            </div>

           
        </div>
     </div>

     </div>


    

        </div>

    </section>
)
}

export default Testimonials;