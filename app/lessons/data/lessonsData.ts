// lessons/data/lessonsData.ts
import { CardType } from "../types/CardType"; // Adjust the path as necessary

export const lessonsData: {
  title: string;
  price: string;
  level: string;
  features: string[];
  cardType: CardType;
  bookNowLink: string;
  readMoreLink: string;
}[] = [
  {
    title: "STUDENT-LED",
    price: "€25",
    level: "B1 - C1",
    features: [
      "preparation required",
      "no winging",
      "20 min - presentation",
      "deliberate practice",
      "vocabulary recall",
    ],
    cardType: "student",
    bookNowLink: "https://calendly.com/app/login",
    readMoreLink: "/student-led-lesson",
  },
  {
    title: "TEACHER-LED",
    price: "€30",
    level: "A1 - B1",
    features: [
      "minimum to no preparation required",
      "build upon your pre-existing knowledge",
      "guided practice",
    ],
    cardType: "teacher",
    bookNowLink: "https://calendly.com/app/login",
    readMoreLink: "/teacher-led-lesson",
  },
  {
    title: "GROUP",
    price: "€10",
    level: "B1 - C1",
    features: [
      "preparation required",
      "meeting like-minded people",
      "book discussions",
      "storytelling practice",
    ],
    cardType: "group",
    bookNowLink: "https://calendly.com/app/login",
    readMoreLink: "group-lesson",
  },
];
