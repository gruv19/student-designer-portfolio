import types from "./types";
import { getRandom, generateId } from "./common";

const generateWorks = (count) => {
  const works = [];
  for (let i = 0; i < count; i++) {
    const work = {};
    work.id = `${generateId()}`;
    work.type = types[getRandom(0, types.length - 1)].title;
    work.main_image = `https://imgholder.ru/720x480/9EA2A3/F5F5F5.jpg&text=WORK+${i + 1}`;
    works.push(work);
  }
  return works;
};

export default generateWorks;
