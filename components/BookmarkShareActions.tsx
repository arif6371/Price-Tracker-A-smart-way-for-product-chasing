"use client";

// components/BookmarkShareActions.tsx

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  productId: string;
};

const BookmarkShareActions = ({ productId }: Props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setIsBookmarked(bookmarks.includes(productId));
    }
  }, [productId]);

  const toggleBookmark = () => {
    if (typeof window !== 'undefined') {
      let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      if (bookmarks.includes(productId)) {
        bookmarks = bookmarks.filter((id: string) => id !== productId);
      } else {
        bookmarks.push(productId);
      }
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      setIsBookmarked(!isBookmarked);
    }
  };

  const handleShare = () => {
    setIsShared(true);
    // Add your share logic here, such as opening a share dialog
    if (navigator.share) {
      navigator.share({
        title: 'Check out this product!',
        text: 'I found this amazing product on PricePulse!',
        url: window.location.href,
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      alert('Sharing is not supported in this browser. Copy the URL to share.');
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-white-200 rounded-10" onClick={toggleBookmark}>
        <Image 
          src={isBookmarked ? "/assets/icons/bookmark.svg" : "/assets/icons/bookmark.svg"}
          alt="bookmark"
          width={20}
          height={20}
        />
      </div>

      <div className="p-2 bg-white-200 rounded-10" onClick={handleShare}>
        <Image 
          src="/assets/icons/share.svg"
          alt="share"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default BookmarkShareActions;



  //   try {
  //     const response = await fetch(`/api/bookmark`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ productId }),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to bookmark the product');
  //     }
  //   } catch (error) {
  //     console.error('Error bookmarking the product:', error);
  //     setIsBookmarked((prev) => !prev); // Revert the state if there's an error
  //   }
  // };


 