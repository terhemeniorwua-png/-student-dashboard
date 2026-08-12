

const FilterButton = ({functionality}) => {
// console.log(functionality)
   

    return ( 
        <>
          <div className="w-full">
              <input onKeyUp={functionality} type="search" className="border w-[20%] ml-[40%] mt-5 pl-2 text-sm p-2 rounded-2xl" placeholder="Search for a student"/>
          </div>
        </>
     );
}
 
export default FilterButton;