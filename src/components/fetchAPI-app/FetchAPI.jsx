import React, { useEffect, useState } from "react";

// function useFetch(url) {
  // let [data, setData] = useState(null);
  // let [loading, setLoading] = useState(true);

  // useEffect(async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   const [item] = data.results;
  //   setData(item);
  //   setLoading(false);
  // }, []);

  // return [data, loading];
// }


function FetchAPI() {
  // let [data, loading] = useFetch("https://api.randomuser.me/");

  let [windowWidth, setwindowWidth] = useState(window.innerWidth);
  let [count, setCount] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setwindowWidth(window.innerWidth);
    });

    return () => {
      window.addEventListener("resize", () => {
        setwindowWidth(window.innerWidth);
      });
    };
  }, [windowWidth]);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div className="fetch-api-app app-container">
      <div className="app">
        <h1>hello from fetch api app</h1>
        <section>
          <p>you clicked {count} times</p>

          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            click me
          </button>
        </section>

        <section>
          {/* {loading ? <h2>loading ..</h2> : <h2>{data.name.first}</h2>} */}
        </section>
      </div>
    </div>
  );
}

export default FetchAPI;
