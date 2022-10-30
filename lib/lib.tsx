const WorkShopOptions = [
  {
    value: "Cover",
    label: "Post Cover",
    description:
      "A flattery cover for the beginning of your informative Carousel",
  },
  {
    value: "TextImage",
    label: "Information with Pictures",
    description:
      "Create a unique set of cards with segmented information and add images to each one",
  },
  { value: "Info", label: "Information" },
  { value: "Code", label: "CodeXplainer", description:"Create slide(s) simply for code snippets, perfectly scaled." },
  { value: "Credits", label: "End Credits" },
];

const StyleGuideOptions = [
  {
    value: "upload",
    label: "Uploading Image",
    description:
      "Images typically are better uploaded in landscape mode, An Ideal Ratio would be 16:9",
  },
  {
    value: "limit",
    label: "Text/Character Limit",
    description:
      "The maxium amount of characters to be typed for each slide is 280. This is to prevent you from overwhelming your audience and boring them. This is the same with Twitter's Character Limit",
  },
];

const customSelectStyle = {
  option: () => ({
    padding: 10,
    fontSize: 20,
    background: "#fff",
    cursor: "pointer",
    color: "#424242",
  }),
  control: () => ({
    background: "#fff",
    display: "flex",
    margin: 10,
    // none of react-select's styles are passed to <Control />
    color: "#424242",
    cursor: "pointer",
    padding: 5,
  }),
};



export { WorkShopOptions, StyleGuideOptions, customSelectStyle };
