import React from "react";
import { useState, useEffect, Fragment } from "react";
import { default as Icon } from "@/components/Icons/likes.svg";

const Like = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const colorTheme = isLike ? `red` : `gray`;

  return (
    <Fragment>
      {isClient ? (
        <a
          href="#"
          className={`bg-${colorTheme}-100 hover:bg-${colorTheme}-200 text-${colorTheme}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded border border-${colorTheme}-400 inline-flex items-center justify-center mt-2 no-underline`}
          onClick={() => setIsLike(!isLike)}
        >
          <Icon className="h-3.5 w-3.5" />
          &nbsp;0
        </a>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Like;
