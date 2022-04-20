export default function Title(props: any) {
  return (
    <div>
      <h1 className="big-header">{props.bigTitle}</h1>
      <h2 className="mid-header">{props.notBigTitle}</h2>
    </div>
  );
}
