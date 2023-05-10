import React from "react";
import useGeneres from "../hooks/useGenres";
import { list } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useGeneres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
