import design1 from "../../img/news-area/design1.jpg";
import design2 from "../../img/news-area/design2.jpg";
import style1 from "../../img/news-area/style1.jpg";
import style2 from "../../img/news-area/style2.jpg";
import travel1 from "../../img/news-area/travel1.jpg";
import travel2 from "../../img/news-area/travel2.jpg";

export interface NewsAreaCard {
    id: string,
    type: string,
    county?: string,
    title: string,
    text: string,
    image: string,
}

export const NewsAreaData: NewsAreaCard[] = [
    {
        id: "1",
        image: travel1,
        type: "travel",
        county: "chile",
        title: "Patagonia",
        text: "Суровый дикий край с узкими реками и фьордами, с крутыми склонами и обрывистыми горами, ледниковыми долинами, продуваемыми холодными ветрами. Здесь находятся такие чудеса природы, как гранитные башни в Национальном парке Торрес дель Пайне, Национальный парк Лос-Гласьярес с огромными ледниками, разноцветными осадочными породами и потрясающей красоты изумрудными озерами и реками."
    },
    {
        id: "2",
        image: travel2,
        type: "travel",
        county: "JAPAN",
        title: "Amidst the Pines",
        text: "Посещение сада Рицурин периода Эдо и чайного домика Кикугецу-тей, недалеко от Такамацу, Япония."
    },
    {
        id: "3",
        image: design1,
        type: "design",
        county: "ARCHITECTURE | LOS ANGELES",
        title: "Hollyhock House",
        text: "Культовый центр парка искусств Барнсдолл в Лос-Анджелесе, этот бывший дом, спроектированный Фрэнком Ллойдом Райтом, в настоящее время является объектом всемирного наследия ЮНЕСКО."
    },
    {
        id: "4",
        image: design2,
        type: "design",
        title: "Understanding",
        text: "Художественный фонд, основанный мексиканским художником и скульптором Боско Соди и построенный Тадао Андо."
    },
    {
        id: "5",
        image: style1,
        type: "style",
        title: "Iconic Forms",
        text: "Исследование некоторых из самых знаковых произведений Cartier за 174-летнюю историю."
    },
    {
        id: "6",
        image: style2,
        type: "style",
        county: "FASHION",
        title: "The Row, London",
        text: "Новый магазин The Row в Мейфэре, Лондон, где коллекции бренда представлены наряду с избранными произведениями современного искусства и культовым дизайном середины века."
    },
]