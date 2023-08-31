import Button from "./Button";

const ButtonsList = () => {
  const allbuttons = [
    "All",
    "React",
    "Javascript",
    "Tailwind CSS",
    "HTML",
    "React Router DOM",
    "Redux",
    "Lazy Loading",
    "Debouncing",
  ];
  return (
    <div className="flex">
      {allbuttons.map((btn) => (
        <Button key={btn} name={btn} />
      ))}
    </div>
  );
};

export default ButtonsList;
