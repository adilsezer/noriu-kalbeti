import Footer from "../../components/layout/Footer";
import TopNavBar from "../../components/layout/TopNavBar";
import ReferenceCards from "./components/ReferenceCards";

export default function References() {
  const referenceArray = [
    {
      title: "Title1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio vitae diam aliquam aliquet sit amet quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio vitae diam aliquam aliquet sit amet quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio vitae diam aliquam aliquet sit amet quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio vitae diam aliquam aliquet sit amet quis nisl.",
      image: "https://picsum.photos/200",
    },
    {
      title: "Title2",
      description: "Description",
      image: "https://picsum.photos/200",
    },
    {
      title: "Title3",
      description:
        "Description asdasdasd as da d adadadasdsad asdsadasdsadasdasd asdsadadasdasd",
      image: "https://picsum.photos/200",
    },
    {
      title: "Title4",
      description: "Description",
      image: "https://picsum.photos/200",
    },
    {
      title: "Title5",
      description: "Description",
      image: "https://picsum.photos/200",
    },
  ];

  return (
    <div>
      <TopNavBar />
      <ReferenceCards referenceArray={referenceArray} />
      <Footer />
    </div>
  );
}
