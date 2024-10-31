type Active = {
  on: boolean;
};

export default function Sidebar({ on }: Active) {
  return <div className={on ? "active" : ""}></div>;
}
