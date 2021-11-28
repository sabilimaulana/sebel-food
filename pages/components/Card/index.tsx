import Image from "next/image";

interface CardProps {
  minute: number;
  owner: string;
  title: string;
  image: string;
}

const Card = ({ title, owner, minute, image }: CardProps) => {
  return (
    <div className="card">
      <figure className="relative overflow-hidden w-full h-32 sm:h-48 object-cover">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </figure>
      <div className="m-4">
        <span className="font-bold">{title}</span>{" "}
        <span className="block text-gray-500 text-sm">{`Recipe by ${owner}`}</span>
      </div>
      <div className="badge">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{minute} mins</span>
      </div>
    </div>
  );
};

export default Card;
