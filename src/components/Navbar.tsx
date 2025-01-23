import Link from "next/link";

export default function Title() {
  return (
    <nav>
      <h1 className="text-4xl py-6 underline underline-offset-4 font-semibold text-yellow-700 ">
        Drag and Drop Kanban Board
      </h1>
      <div className="    text-lg">
        Created by:{" "}
        <Link
          href={"https://anish-acharya.com.np/"}
          target="_blank"
          className="text-yellow-400 font-semibold underline"
        >
          Anish Acharya
        </Link>
      </div>
    </nav>
  );
}
