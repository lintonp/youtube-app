import Button from "./Button";

const ButtonsList = () => {
  const allbuttons = [
    "All",
    "React",
    "Javascript",
    "Tailwind",
    "HTML",
    "Mixes",
    "Music",
    "Live",
    "Playlists",
    "Football",
    "Cricket",
    "News",
    "Gaming",
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
