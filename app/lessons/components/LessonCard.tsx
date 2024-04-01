// /lessons/components/LessonCard.tsx

import React from "react";
import Link from "next/link";
import { CardType } from "../types/CardType"; // Adjust the path as necessary

interface LessonCardProps {
  title: string;
  price: string;
  level: string;
  features: string[];
  cardType: CardType;
  bookNowLink: string;
  readMoreLink: string;
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  price,
  level,
  features,
  cardType,
  bookNowLink,
  readMoreLink,
}) => {
  return (
    <div className="card card-bordered shadow-lg compact side h-full">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <h2 className="card-title">{title}</h2>
            <div className="divider m-0 pr-10"></div>
            <h2 className="card-title">{level}</h2>
          </div>
          <div
            className={`badge badge-lg rounded-full text-lg font-bold flex items-center justify-center bg-secondary w-20 h-20`}
          >
            {price}
          </div>
        </div>
        <div className="my-6">
          <ul className="list-disc list-inside">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-auto">
        <div className="card-actions flex-col justify-center m-4">
          <Link href={bookNowLink} className="btn btn-primary mb-2">
            Book Now
          </Link>
          <Link href={readMoreLink} className="btn bg-tertiary btn-secondary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
