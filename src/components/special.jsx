import assets from "../assets/assets";
 

function SpecialDish(){

// object  
const dishes =[
    {}
]





    return(

        <section className="mt-16  lg:px-28 bg-gray-100 px-10">

<div className="flex flex-col ">
    <div className="flex justify-between   gap-[600px] ">
        <div className=" flex flex-1 flex-col">
            <p className="text-sm font-bold mb-6 text-[#FF6868]">SPECIAL DISHES</p>
            <h1 className="text-5xl font-bold ">Standout Dishes From Our Menu</h1>

        </div>

<div className="flex flex-1 py-[65px] gap-10 justify-end">
    
    <img src={assets.lefts} className=" p-8 rounded-full bg-gray-200  hover:bg-primary active:bg-primary"/>

   
<img src={assets.right}  className="p-8 rounded-full bg-gray-200  hover:bg-primary active:bg-primary"/>

</div>

 
       

    </div>
      {/* 1 */}
    <div className="flex gap-12"> 
        <div className= " w-[446px] h-[523px] rounded-3xl bg-white  ">
        {/* image */}
        <div className="flex flex-col p-12  ">
            <div className="flex justify-center">
                <img src={dishes.image}/>
            </div>
      {/* text */}
            <div className="flex flex-col mt-10">
                <h1 className="font-bold text-2xl">{dishes.name}</h1>
                <p className="text-gray-500 text-xl mt-2">Description of the item</p>

            </div>

            <div className="flex justify-between mt-6 items-center ">
               
               <div><p className="font-bold text-xl"><span className="text-lg text-[#FF6868]">$</span>{dishes.price}</p></div> 


                  <div className="flex ">          
                      <img src={assets.star}/><p className="font-semibold text-gray-500 px-2">20</p>
                  </div>

            </div>


            </div>
        </div>
  

 {/* 2*/}

   <div className= " w-[446px] h-[523px] rounded-3xl bg-white  ">
        {/* image */}
        <div className="flex flex-col p-12  ">
            <div className="flex justify-center">
                <img src={assets.veggies}/>
            </div>
      {/* text */}
            <div className="flex flex-col mt-10">
                <h1 className="font-bold  text-2xl">Vegetable salad</h1>
                <p className="text-gray-500 text-xl mt-2">Description of the item</p>

            </div>

            <div className="flex justify-between mt-6 items-center ">
               
               <div><p>$24.00</p></div> 


                  <div className="flex ">          
                      <img src={assets.star}/><p className="font-semibold text-gray-500 px-2">20</p>
                  </div>

            </div>


            </div>
        </div>



        {/* 3 */}


        <div className= " w-[446px] h-[523px] rounded-3xl bg-white  ">
        {/* image */}
        <div className="flex flex-col p-12  ">
            <div className="flex justify-center">
                <img src={assets.fattouh}/>
            </div>
      {/* text */}
            <div className="flex flex-col mt-10">
                <h1 className="font-bold text-2xl">Fattoush salad</h1>
                <p className="text-gray-500 text-xl mt-2">Description of the item</p>

            </div>

            <div className="flex justify-between mt-6 items-center ">
               
               <div>< p className="font-bold"> $ 24.00</p></div> 


                  <div className="flex ">          
                      <img src={assets.star}/><p className="font-semibold text-gray-500 px-2">20</p>
                  </div>

            </div>


            </div>

            ////
        </div>

    </div>








</div>



        </section>
    
    )
}   export default SpecialDish;