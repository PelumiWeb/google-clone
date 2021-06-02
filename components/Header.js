import { MicrophoneIcon, SearchIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOption from './HeaderOptions'
function Header() {
    const router = useRouter()
    const searchInputRef = useRef()
    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value
        router.push(`/search?term=${term}`)
    }
    return (
        <header className='sticky top-0 big-white'>
            <div className='flex w-full p-6 items-center '> 
            <Image 
            src='https://zurb.com/blog/system/images/1693/original/googleofficial.png?1441313394'
            height={60}
            width={120}
            onClick={() => router.push('/')}
            className='cursor-pointer'
            />
            <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                <input ref={searchInputRef} className='flex-grow w-full focus:outline-none' type='text' ></input>
                <XIcon  className='h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
                onClick={() => (searchInputRef.current.value = '')}
                />
                <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
                <SearchIcon  className='h-6 text-blue-500 hidden sm:inline-flex' />
                <button hidden type='submit' onClick={search}>search</button>
            </form>
            <Avatar url='https://pbs.twimg.com/profile_images/1357370920197885953/H8l90Jup_400x400.jpg' className='ml-auto'/>
            </div>
            <HeaderOption />
          
        </header>
    )
}

export default Header
