import './style.css';
import { createClient } from 'contentful';
import { key } from './key.ts';

const client = createClient(key);
const cleanUpData = (rawData: any) => {
  return rawData.map((slide: any) => {
    const { sys, fields } = slide;
    const { id } = sys;
    const { model, description, imgs, year } = fields;
    const { content } = description;
    const desc = content.map((item: any) => {
      const { content } = item;
      return content;
    });
    const images = imgs.map((img: any) => {
      const { fields } = img;
      const {
        title,
        description,
        file: { url }
      } = fields;

      return { title, description, url };
    });
    const updatedSlide = { id, model, desc, images, year };
    return updatedSlide;
  });
};

client
  .getEntries({ content_type: 'cars' })
  .then((response) => console.log(cleanUpData(response.items)))
  .catch(console.error);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

`;
