function Card({ children }) {
  return (
    <>
      <div className="p-3 rounded-xl border border-gray-900">{children}</div>
    </>
  );
}
// card titel Component
Card.Title = function Title({ children }) {
  return (
    <>
      <div className="text-3xl font-bold">{children}</div>
    </>
  );
};
// card conten Component
Card.Content = function Content({ children }) {
  return (
    <>
      <div className="">{children}</div>
    </>
  );
};
// card button Component
Card.Button = function Button({ children }) {
  return (
    <>
      <div className="">{children}</div>
    </>
  );
};
