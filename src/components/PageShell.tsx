export default function PageShell({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pose-wrap">
      {kicker ? <p className="pose-kicker">{kicker}</p> : null}
      <h1 className="pose-title">{title}</h1>
      <div className="pose-lead">{children}</div>
    </div>
  );
}
