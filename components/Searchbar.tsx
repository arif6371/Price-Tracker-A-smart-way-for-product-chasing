"use client"

import { scrapeAndStoreProduct } from '@/lib/actions';
import { FormEvent, useState } from 'react'

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(
      hostname.includes('amazon.com') || 
      hostname.includes ('amazon.') || 
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
}

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if(!isValidLink) return alert('Please provide a valid Amazon link')

    try {
      setIsLoading(true);

     //Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);

      // Trigger search completion
      setSearchCompleted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div>
          {searchCompleted && (
           <p className="mt-6 font-bold text-primary-green text-xl/8">🥳Done! Check Out Your Product Below👇👇</p>
          )}
    
    <form 
      className="flex flex-wrap gap-4 mt-12" 
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />

      <button 
        type="submit" 
        className="searchbar-btn"
        disabled={searchPrompt === ''}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
    </div>
  )
}

export default Searchbar















// "use client";

// import { scrapeAndStoreProduct } from '@/lib/actions';
// import { FormEvent, useState } from 'react';

// const isValidAmazonProductURL = (url: string) => {
//   try {
//     const parsedURL = new URL(url);
//     const hostname = parsedURL.hostname;

//     if (
//       hostname.includes('amazon.com') || 
//       hostname.includes('amazon.') || 
//       hostname.endsWith('amazon')
//     ) {
//       return true;
//     }
//   } catch (error) {
//     return false;
//   }

//   return false;
// };

// const Searchbar = () => {
//   const [searchPrompt, setSearchPrompt] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchCompleted, setSearchCompleted] = useState(false);

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const isValidLink = isValidAmazonProductURL(searchPrompt);

//     if (!isValidLink) return alert('Please provide a valid Amazon link');

//     try {
//       setIsLoading(true);

//       // Scrape the product page
//       const product = await scrapeAndStoreProduct(searchPrompt);

//       // Trigger search completion
//       setSearchCompleted(true);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {searchCompleted && (
//         <p className="mt-6 font-bold text-primary-green text-xl/8">🥳Done! Check Out Your Product Below👇👇</p>
//       )}
//       <form 
//         className="flex flex-wrap gap-4 mt-12" 
//         onSubmit={handleSubmit}
//       >
//         <input 
//           type="text"
//           value={searchPrompt}
//           onChange={(e) => setSearchPrompt(e.target.value)}
//           placeholder="Enter product link"
//           className="searchbar-input"
//         />

//         <button 
//           type="submit" 
//           className="searchbar-btn"
//           disabled={searchPrompt === ''}
//         >
//           {isLoading ? 'Searching...' : 'Search'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Searchbar;
