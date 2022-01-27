export default function ProjectView({ project }) {
  return <div>{project}</div>;
}

export async function getStaticPaths() {
  let data = await fetch(`${process.env.RESTURL_SESSIONS}/project`).then(
    (data) => data.json()
  );
  const params = data.map((d) => ({
    params: {
      id: d.id,
    },
  }));
  return {
    paths: params,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `${process.env.RESTURL_SESSIONS}/project/${params.id}`
  ).then((d) => d.json());
  return {
    props: {
      project: "hello",
    },
  };
}
