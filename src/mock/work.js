import { getRandom } from "./common";

const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, blanditiis, cum aliquam ullam dolores error ea sunt atque quas libero nemo consequatur maiores, recusandae saepe vel eius hic ad laboriosam.";
const arrayText = text.replace(/[.,]/g, "").split(" ");

const generateTitle = () => {
  let title = arrayText[getRandom(0, arrayText.length - 1)];
  if (getRandom(0, 1)) {
    title += ` ${arrayText[getRandom(0, arrayText.length - 1)]}`;
  }
  return title;
};

const generateSubtitle = () => {
  const length = getRandom(1, 3);
  let subtitle = arrayText[getRandom(0, arrayText.length - 1)];
  for (let i = 0; i < length; i++) {
    subtitle += ` ${arrayText[getRandom(0, arrayText.length - 1)]}`;
  }
  return subtitle;
};

const generateImages = (count) => {
  const images = [];
  for (let i = 0; i < count; i++) {
    images.push(`https://imgholder.ru/720x480/9EA2A3/F5F5F5.jpg&text=IMAGE+${i + 1}`)
  }
  return images;
};

const generateWork = () => {
  const work = {};
  work.title = generateTitle();
  work.subtitle = generateSubtitle();
  work.task = text;
  work.images = generateImages(getRandom(1, 10));
  return work;
};

export default generateWork;
