import Image from "next/image";
import photos from "../images";
import { notFound } from "next/navigation";

export default function PhotoPage({ params }) {
  const { id } = params;
  const photo = photos.find((p) => p.id === id);

  if (!photo) notFound();

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        <Image
          alt={photo.name}
          src={photo.src}
          width={photo.src.width}
          height={photo.src.height}
          className="w-full object-cover aspect-square"
        />
      </div>
    </div>
  );
}
