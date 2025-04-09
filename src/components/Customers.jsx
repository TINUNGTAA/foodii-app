import assets from "../assets/assets";
function Customer (){


    return(
        <section className=" mt-16  lg:px-28 bg-gray-100 px-10">
            <div className=" flex flex-col mx-auto">
                <div className=" flex-col  mx-auto  mb-16">
                    <p className="text-sm  text-center font-bold text-[#FF6868]">CUSTOMER FAVORITES</p>
                   <h1 className="lg:mt-6 mt-3 text-5xl font-bold mb-6 lg:mb-12 ">Popular Categories</h1>
                  
                </div>  

            

                    
                   

                   
                     
                

<div className="lg:flex-row  flex-col flex  gap-4 lg:gap-16 ">


{/* top */}
<div className="flex flex-row lg:gap-16 gap-4">


  <div className=" flex-col bg-white w-[220px] h-[220px] lg:w-[320px] lg:h-[300px]   items-center   shadow-lg rounded-3xl">
  <div className="bg-green-300 border rounded-full w-[100px] h-[100px]  lg:h-[180px] lg:w-[180px] mx-auto mt-6 flex flex-col items-center justify-center text-center">
    
    <img src={assets.mainDish} className=" rounded-full" />

    

  </div>
  <div className="text-center mt-6">
  <p className=" font-bold text-xl">  Main Dish</p>
  <p className="text-gray-500 font-bold">(86 dishes)</p>
  <p></p>

  </div>
</div>

<div className="flex-col  bg-white w-[220px] h-[220px]  lg:w-[320px] lg:h-[300px]  items-center  shadow-lg rounded-3xl">
  <div className="bg-green-300 border rounded-full w-[100px] h-[100px]  lg:h-[180px] lg:w-[180px] mx-auto mt-6 flex flex-col items-center justify-center text-center">
    
    <img src={assets.breakfast} className=" rounded-full " />

    

  </div>
  <div className="text-center mt-6">
  <p className=" font-bold text-xl"> Breakfast</p>
  <p className="text-gray-500 font-bold">(12 dishes)</p>
  <p></p>

  </div>
</div>

</div>



{/* down */}
<div  className="flex flex-row lg:gap-16 gap-4">

<div className="flex-col  bg-white w-[220px] h-[220px]  lg:w-[320px] lg:h-[300px] items-center  shadow-lg rounded-3xl">
  <div className="bg-green-300 border rounded-full w-[100px] h-[100px]  lg:h-[180px] lg:w-[180px] mx-auto mt-6 flex flex-col items-center justify-center text-center">
    
    <img src={assets.desert} className=" rounded-full " />

    

  </div>
  <div className="text-center mt-6">
  <p className=" font-bold text-xl"> Dessert </p>
  <p className="text-gray-500 font-bold">(48 dishes)</p>
  <p></p>

  </div>
  </div>


  <div className="flex-col  bg-white w-[220px] h-[220px]  lg:w-[320px] lg:h-[300px] items-center  shadow-lg rounded-3xl">
  <div className="bg-green-300 border rounded-full w-[100px] h-[100px]  lg:h-[180px] lg:w-[180px] mx-auto mt-6 flex flex-col items-center justify-center text-center">
    
    <img src={assets.browse} className=" rounded-full " />

    

  </div>
  <div className="text-center mt-6">
  <p className=" font-bold text-xl "> Browse All</p>
  <p className="text-gray-500 font-bold">(225 dishes)</p>
  <p></p>

  </div>
</div>






</div>






</div>


                  
                      

                <div>
               
</div>
            </div>

        </section>
    );

}   export default Customer;