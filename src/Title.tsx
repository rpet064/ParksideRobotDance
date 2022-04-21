export default function Title(props: any) {
  return (
    <div>
      <h1 className="big-header">{props.bigTitle}</h1>
      <h2 className="med-header">{props.medTitle}</h2>
    </div>
  );
}
