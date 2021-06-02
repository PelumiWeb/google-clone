import { GlobeIcon } from "@heroicons/react/outline";

function Footer() {
    return (
        <footer className='grid w-full divide-y-[1px] divide-gray-300 text-sm text-gray-500'>
            <div className='px-8 py-3'>
            <p>United Kingdom</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4'>
            <GlobeIcon className='h-5 mr-5 text-green-700'/>
                Carbon neutral since 2007
            </div>
            <div className='flex justify-center space-x-0 whitespace-nowrap'>
                <p>Advertising</p>
                <p>Business</p>
                <p>New Search works</p>
            </div>
            <div  className='flex justify-center space-x-0 md:ml-auto justify-self-start '>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
            
        </footer>
    )
}

export default Footer
