export default function Column({children,title}) {
    
    return (

        <div className='flex flex-col gap-6 md:w-[15%]'>

            <h3 className='text-base font-bold text-[#E4DDC3]'>{title}</h3>
            
            <div className="flex flex-col gap-4 text-sm font-semibold text-[#E4DDC3]">

                {children}

            </div>
        
        </div>
    
    )

}