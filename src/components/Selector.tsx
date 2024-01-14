import Button from "../UI/Button";
import classes from "./Selector.module.scss";

export default function Selector() {
  return (
    <header className={classes.header}>
      <Button id="length" title="Length" />
      <Button id="weight" title="Weight" />
      <Button id="volume" title="Volume" />
    </header>
  )
}
