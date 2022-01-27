export default function ProjectView({ project }) {
  return <div>{project}</div>;
}

export async function getStaticPaths() {
  let data = await fetch("http://localhost:3000/api/project").then((data) =>
    data.json()
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
    `http://localhost:3000/api/project/${params.id}`
  ).then((d) => d.json());
  console.log(data);
  return {
    props: {
      project: "hello",
    },
  };
}
