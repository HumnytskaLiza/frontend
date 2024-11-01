import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import ellipsLg from "../assets/images/ellipse-lg.png";
import ellipsMd from "../assets/images/ellipse-md.png";
import ellipsSm from "../assets/images/ellipse-sm.png";
import ellipsXs from "../assets/images/ellipse-xs.png";

import Button from "../components/ui/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="px-[var(--sm-px) md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <div className="flex w-full mt-[calc(var(--navbar-height)+40px)] h-[calc(100vh-var(--navbar-height)-80px)] mb-[40px]">
        <div className="relative flex flex-col w-full gap-4 justify-center items-center rounded-3xl border-2 border-[var(--border-clr)]">
          <img
            className="animate-orbit transition-transform opacity-[80%]
            absolute top-[-5%] left-[-25%] xl:left-[-15%] w-auto h-[40%] xl:h-[65%]"
            src={ellipsLg}
            alt="Ellips Large"
          />
          <img
            className="animate-orbit-reverse transition-transform 
            absolute bottom-[-5%] right-[-20%] xl:right-[-10%] w-auto"
            src={ellipsMd}
            alt="Ellips Medium"
          />
          <img
            className="animate-orbit-reverse transition-transform 
            absolute bottom-[40%] right-[-20%] xl:right-[-15%] w-auto"
            src={ellipsSm}
            alt="Ellips Small"
          />
          <img
            className="animate-orbit transition-transform 
            absolute bottom-[35%] left-[-10%] xl:bottom-[15%] w-auto"
            src={ellipsXs}
            alt="Ellips Xs"
          />
          <h1 className="text-[50px] lg:text-[65px] uppercase font-bold">
            Вчіться ефективніше <br /> за допомогою ШІ
          </h1>
          <p className="w-[70%] xl:w-[35%] text-[var(--input-text-clr)]">
            Завантажте свої роботи, отримайте доступ до навчальних матеріалів та
            дозвольте ШІ допомагати Вам навчатися
          </p>
          <Button params={{ content: "Почати роботу 👾", className: "mt-6" }} />
        </div>
      </div>
      <div className="w-full flex flex-col items-start">
        <h2 className="text-[32px] uppercase font-bold">
          Чим корисна платформа LearnIT?
        </h2>
        <p className="text-left w-[70%]">
          Learn.it — це платформа, яка розроблена спеціально для студентів.
          Завдяки можливостям штучного інтелекту ми допомагаємо студентам
          завантажувати і перевіряти свої завдання, отримувати доступ до
          навчальних матеріалів та ефективніше співпрацювати з викладачами
        </p>
      </div>
    </div>
  );
}
