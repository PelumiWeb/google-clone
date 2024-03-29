import { useRouter } from "next/router"
import Link from 'next/link'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid'

function PaginationComponent() {
    const router = useRouter()
    const startIndex = Number(router.query.start) || 0
    return (
        <div className='flex justify-between text-blue-700 max-w-lg'>
            {startIndex >= 10 && 
            (
                <Link href={`/search/?${router.query.term}/&start=${startIndex - 10}`}>
                <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
                    <ChevronLeftIcon className='h-5' />
                    <p>Previous</p>
                </div>
                </Link>
            )}
            <Link href={`/search/?${router.query.term}/&start=${startIndex + 10}`}>
            <div  className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
                <ChevronRightIcon className='h-5'/>
                <p>Next</p>
            </div>
            
            </Link>
        </div>
    )
}

export default PaginationComponent
