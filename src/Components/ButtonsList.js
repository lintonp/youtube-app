import Button from "./Button";
// create selected buttonSlice and store selected button, add CSS to selected button and load videos by this button
const ButtonsList = () => {
  const allbuttons = [
    "All",
    "React",
    // "Javascript",
    "Tailwind CSS",
    // "HTML",
    "React Router DOM",
    "Redux",
    "Lazy Loading",
    "Debouncing",
    "n-Level nested comments",
    "Live Chat",
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
