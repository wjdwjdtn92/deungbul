import { graphql } from "react-relay";
import { Link } from "react-router";

import type { IndexQuery } from "../__relay__/IndexQuery.graphql";
import { relayQueryLoader } from "../relay/relayQueryLoader";
import { useRelayQueryLoaderData } from "../relay/useRelayQueryLoaderData";

const query = graphql`
  query IndexQuery {
    ping
  }
`;

export const loader = relayQueryLoader<IndexQuery>({
  query,
  variables: () => ({}),
});

export default function Home() {
  const data = useRelayQueryLoaderData<typeof loader>(query);

  return (
    <div>
      {data.ping}
      <Link to="/about">About</Link>
    </div>
  );
}
