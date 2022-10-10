import Cover from "./workshop-components/Cover";
import TextImage from "./workshop-components/TextImage";

type Props = {
  workshop: any;
};

export default function WorkShopBody(props: Props) {
  return (
    <div className="mt-2">
      <div className="text-center">
        <h3 className="text-3xl tracking-wide">{props.workshop.label}</h3>
        <p className="font-albert mb-3">{props.workshop.description}</p>
      </div>
      {props.workshop.value === "TextImage" && (
        <TextImage workshop={props.workshop} />
      )}
      {props.workshop.value === "Cover" && <Cover />}
    </div>
  );
}
