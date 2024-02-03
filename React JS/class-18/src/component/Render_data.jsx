const Render_data = (props) => {
  const { data } = props;

  return (
    <>
      <h1>Class: {data.class}</h1>
      <h1>Module: {data.module}</h1>
    </>
  );
};

export { Render_data };
