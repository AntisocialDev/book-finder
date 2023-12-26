"use client";
import React, { useState } from "react";
import searchIcon from "../../../public/images/search.png";
import loadIcon from "../../../public/images/loader.gif";
import Image from "next/image";
import Link from "next/link";

 async function getBooks(param: string | undefined) {
  const bookList = await fetch(
    "https://www.googleapis.com/books/v1/volumes?" +
      new URLSearchParams({
        q: `${param}`,
        maxResults: "12",
      })
  );

  return bookList.json();
}

export default function SearchPage() {
  const [bookList, setBookList] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const searchBook = async () => {
    try {
      setBookList([]);
      setIsError(false);
      setIsLoading(true);
      const books = await getBooks(bookParam);
      setIsLoading(false);
      setBookList(books.items);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
      throw new Error("An error occured");
    }
  };
  const [bookParam, setBookParam] = useState<string>("");
  return (
    <div className="mt-[150px] flex self-center flex-col items-center justify-center">
      <p className="text-xl text-center">
        Search the name of the author, publisher or book name to find more info
      </p>
      <div className="relative w-full sm:w-2/4">
        <input
          value={bookParam}
          onChange={(e) => setBookParam(e.target.value)}
          className="mt-10 h-[40px] border w-full p-2 border-black outline-none focus:border-primary rounded-md"
          placeholder="Enter author or book name"
          type="text"
        ></input>
        <div
          onClick={searchBook}
          className="flex cursor-pointer justify-center items-center bg-primary absolute w-[41px] rounded-r-md min-h-[40px] right-0 inset-y-2/4"
        >
          <Image
            src={searchIcon}
            width={20}
            height={20}
            alt="search icon"
            className="object-cover"
          />
        </div>
      </div>

      {isError && <p className="mt-10 text-red-500">An error occured</p>}

      {isLoading && (
        <Image
          className="mt-10"
          src={loadIcon}
          width={50}
          height={50}
          alt="loading icon"
        />
      )}

      {bookList && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 gap-x-20">
          {bookList &&
            bookList.map((book: any, index: number) => (
              <Link href={`/search/book/${book.id}`} key={book.id}>
                <div
                  className="flex flex-col p-y-10 sm:flex-row border-gray-50 border  min-h-[350px] max-h-[1000px] md:h-[350px] bg-white shadow-lg w-full md:text-[12px] md:w-[280px] lg:text-[14px] lg:w-[380px] cursor-pointer rounded-sm"
                >
                  <Image
                    className="object-fill w-full h-[180px] sm:h-full sm:w-[150px] md:w-[100px]"
                    src={book.volumeInfo.imageLinks?.smallThumbnail}
                    width={150}
                    height={100}
                    quality={100}
                    alt="Book Image"
                  />
                  <div className="flex flex-col justify-between gap-2 p-5">
                    <div className="flex flex-col gap-2">
                      <p>Title: {book.volumeInfo.title}</p>
                      <p className="w-full">
                        Authors:
                        {book.volumeInfo?.authors &&
                          book.volumeInfo?.authors.map(
                            (author: string, index: number) => (
                              <span key={index}> {author}, </span>
                            )
                          )}
                      </p>
                      <p>Date Published: {book.volumeInfo.publishedDate}</p>
                      <p>Publisher: {book.volumeInfo.publisher}</p>
                    </div>
                    <div>
                      <button className="self-end bg-primary text-white rounded-md min-h-[35px] w-[120px]">
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
