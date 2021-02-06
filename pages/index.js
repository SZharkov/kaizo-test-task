import { useState, useEffect } from "react";
import Head from 'next/head'
import Gifs from "../components/Gifs";
import Search from "../components/Search";
import LoadingContainer from "../components/LoadingContainer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [gifs, setGifs] = useState([]);

  /* Get GIFs based on search query */
  const getGifs = async (value) => {
    setIsLoading(true);

    const res = await fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&limit=9`);

    if (res.status === 200) {
      const result = await res.json();
      setGifs(result.data);
    } else {
      setIsError(true);
    }

    setIsLoading(false);
  };

  /* Get random trending GIFs */
  const getRandomGifs = async () => {
    setIsLoading(true);

    const res = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&limit=9`);

    if (res.status === 200) {
      const result = await res.json();
      setGifs(result.data);
    } else {
      setIsError(true);
    }

    setIsLoading(false);
  };

  /* Show trending GIFs on page load */
  useEffect(() => {
    getRandomGifs();
  }, []);

  return (
    <>
      <Head>
        <title>Find your GIF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container">
        <Search onSearch={getGifs} />

        <LoadingContainer loading={isLoading}>
          {isError ? <h2>Oops... There is some error. Try again later</h2> : <Gifs data={gifs} />}
        </LoadingContainer>
      </section>
    </>
  )
}
