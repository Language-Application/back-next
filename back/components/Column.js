export default function Column({children,title}) {
    
    return (

        <div className='flex flex-col gap-6 max-w-1/5'>

            <h3 className='text-base font-bold text-green-200'>{title}</h3>
            
            <div className="flex flex-col gap-4 text-sm font-semibold text-green-300">

                {children}

            </div>
        
        </div>
    
    )

}