import PaginationComponent from "./PaginationComponent"

function SearchResult({results}) {
    return (
        <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[-14] lg:pl-52'>
            <p className='text-gray-600 text-md mb-5 mt-3'>About {results?.searchInformation?.formattedTotalResults} results (
             {results?.searchInformation?.formattedSearchTime} seconds)
            </p>
            {results.items?.map(result => (
                <div key={result.link}
                className='max-w-wl mb-8'
                >
                    <div className='group'>
                    <a href={result.link} className='text-sm'> {result?.formattedUrl}</a>
                    <a href={result.link} className='text-sm'>
                    <h2 className='truncate text-xl text-blue-500 font-medium group-hover:underline'>
                        {result?.title}

                        </h2>
                         </a>
                    
                    </div>
                    <p className='line-clamp-2'>{result?.snippet}</p>

                </div>
            ))}

            <PaginationComponent />
        </div>
    )
}

export default SearchResult
