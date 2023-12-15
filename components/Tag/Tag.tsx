import { useState, useEffect, Fragment } from "react";

const Tag = ({ tag }: { tag: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Fragment>
      {isClient ? (
        <a
          href="#"
          className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400 inline-flex items-center justify-center mt-2 no-underline"
        >
          {tag}
        </a>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Tag;
