import Button from "@/UI/Button";
import classes from "@/components/Selector.module.scss";

export default function Selector() {
  const buttons = [
    { id: "length", title: "Length" },
    { id: "weight", title: "Weight" },
    { id: "volume", title: "Volume" },
    { id: "data", title: "Data" },
    { id: "time", title: "Time" },
  ];

  return (
    <div className={classes["selector-wrapper"]}>
      <header>
        {buttons.map(button => (
          <Button
            key={button.id}
            id={button.id}
            title={button.title}
          />
        ))}
      </header>
    </div>
  );
}
