import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-yellow-800 py-6 text-white  text-lg">
      Created by:{" "}
      <Link
        href={"https://anish-acharya.com.np/"}
        target="_blank"
        className="text-yellow-400 font-semibold underline"
      >
        Anish Acharya
      </Link>
    </div>
  );
}
