import { gql, useQuery } from "@apollo/client";
import { getApolloAuthClient } from "@faustwp/core";

export default function AuthenticatedView() {
  const client = getApolloAuthClient();

  const { data, loading } = useQuery(
    gql`
      {
        viewer {
          posts {
            nodes {
              id
              title
            }
          }
          name
        }
      }
    `,
    { client }
  );

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <p>Welcome {data?.viewer?.name}!</p>

      <p>My posts</p>

      <ul>
        {data?.viewer?.posts?.nodes.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
