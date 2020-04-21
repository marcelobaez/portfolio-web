import React, { useState } from "react";
import Hero from "../components/Hero";
import ObliqueImg from "../components/ObliqueImg";
import Background from "../components/Background";
import MobileNav from "../components/MobileNav";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import CardList from "../components/CardList";
import CategoryMenu from "../components/CategoryMenu";

const cards = [
  {
    category: "Arte",
    name: "Holy Dance Studio",
    owner: "Jessica Heredia",
    avatar:
      "https://instagram.fsfn4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/92455595_1481315778712938_8250002842648051712_n.jpg?_nc_ht=instagram.fsfn4-1.fna.fbcdn.net&_nc_ohc=i-mKPoSzNJYAX_VCxOK&oh=c2c215c65695eb876b7d69a013095a91&oe=5EC6791B",
    images: ["/img/holy.jpg"],
  },
  {
    category: "Indumentaria",
    name: "SweetHope",
    owner: "Nayibe Talamas",
    avatar:
      "https://instagram.fsfn4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/71523188_451358682148602_8573154897803870208_n.jpg?_nc_ht=instagram.fsfn4-1.fna.fbcdn.net&_nc_ohc=Ws9yJKUpdwoAX9SePrt&oh=9fe0b4a5e540d57ef4e2c8fff76e47cf&oe=5EC5B2A9",
    images: ["/img/sweet.jpeg"],
  },
  {
    category: "Salud",
    name: "Preparador físico",
    owner: "Lucas Baez",
    avatar:
      "https://instagram.fsfn4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82760366_118613219537904_2308081825341243392_n.jpg?_nc_ht=instagram.fsfn4-1.fna.fbcdn.net&_nc_ohc=7kbZBtOH6-8AX_k5AKL&oh=d7f50b4ad847116c6932596d36acfb16&oe=5EC786DE",
    images: ["/img/lucas.jpg"],
  },
  {
    category: "Vida sana",
    name: "Servicios de huerta",
    owner: "Ricardo Baez",
    avatar:
      "https://www.facebook.com/search/async/profile_picture/?fbid=100011378341951&width=72&height=72",
    images: ["/img/ricor.jpeg"],
  },
];

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='relative bg-gray-100'>
        <div className='max-w-screen-xl mx-auto '>
          <div className='relative z-10 pb-8 bg-gray-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <NavBar setOpen={setOpen} />
            {open && <MobileNav setOpen={setOpen} />}
            <Hero />
            <ObliqueImg />
          </div>
        </div>
        <Background />
      </div>
      <CategoryMenu />
      <CardList>
        {cards.map((card, index) => (
          <Card
            key={index}
            category={card.category}
            owner={card.owner}
            name={card.name}
            avatar={card.avatar}
            images={card.images}
          />
        ))}
      </CardList>
    </>
  );
};

export default Index;
