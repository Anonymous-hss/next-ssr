import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      Todo Application
      <br />
      <Link className="text-md border-2 m-2" href="/signin">
        Sign in to Todo App
      </Link>
      <Link className="text-md border-2 m-2" href="/signup">
        Sign up to Todo App
      </Link>
    </div>
  );
}

export default page;
