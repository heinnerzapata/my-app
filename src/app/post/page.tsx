import { postStyle } from "./page.css";
import { getClient } from "./../lib/client";
import { gql } from "@apollo/client";

const query = gql`query {\n  allFilms {\n    films {\n      id,\n      title\n    }\n  }\n}`;

export default async function Post() {
  const { data } = await getClient().query({ query });

  return <main className={postStyle}>{JSON.stringify(data)}</main>;
}
