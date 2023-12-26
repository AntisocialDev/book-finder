import next from "next";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export async function getBookById(bookId: string) {
  const data = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${bookId}`,
    {
      next: { revalidate: 0 },
    }
  );

  return data.json();
}

export default async function Book({ params }: { params: { id: string } }) {
  const book = await getBookById(params.id);
  const createMarkup = (html: string) => ({ __html: html });

  return (
    <div className="flex flex-col lg:flex-row items-start gap-20 justify-center mt-10">
      <div className="flex flex-col gap-5 p-5 w-full lg:w-[350px] min-h-[450px] bg-white shadow-lg border border-gray">
        <h2 className="text-center">{book.volumeInfo?.title}</h2>
        <Image
          className="self-center object-cover"
          src={book.volumeInfo.imageLinks?.smallThumbnail}
          width={130}
          height={120}
          alt="Book image"
        />
        <p className="w-full">
          Authors:
          {book.volumeInfo?.authors &&
            book.volumeInfo?.authors.map((author: string, index: number) => (
              <span className="text-gray-600" key={index}>
                {" "}
                {author},{" "}
              </span>
            ))}
        </p>
        <p>
          Date Published:{" "}
          <span className="text-gray-600">{book.volumeInfo.publishedDate}</span>
        </p>
        <p>
          Publisher:{" "}
          <span className="text-gray-600">{book.volumeInfo.publisher}</span>
        </p>

        {book.saleInfo.listPrice?.amount && (
          <p>
            Amount:
            <span className="text-gray-600">
              {book.saleInfo.listPrice.amount}{" "}
              {book.saleInfo.listPrice.currencyCode}
            </span>
          </p>
        )}
      </div>

      <div className="flex flex-col gap-5 border border-gray w-full lg:w-[350px] p-5 bg-white shadow-lg flex-1">
        <h2>Book Description</h2>
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={createMarkup(
            book.volumeInfo.description || ""
          )}
        />
        <a className="text-sm text-primary" target="_blank" href={book.volumeInfo.infoLink}>More about this book?</a>
      </div>
    </div>
  );
}
