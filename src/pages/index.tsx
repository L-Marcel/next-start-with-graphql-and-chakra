import { GetStaticProps } from "next";
import { User } from "../../prisma/generated/type-graphql";
import { getServerPageUsers } from "../graphql/generated/pages";
import { withApollo } from "../lib/withApollo";

interface HomeProps {
  users: User[];
};

function Home({ users }: HomeProps) {
  return (
    <>
      {users?.map(u => {
        return (
          <h1>{u.id}</h1>
        );
      })}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({}) => {
  const { props: { data } } = await getServerPageUsers({}, {} as any);

  return {
    props: {
      users: data.users
    },
    revalidate: 60 * 60, // 1 hour
  };
};

export default withApollo<HomeProps>(Home);