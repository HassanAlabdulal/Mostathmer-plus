"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className=" py-20 flex flex-col md:flex-row justify-center items-center md:gap-16 gap-12">
        <Image
          src="/assets/email.svg"
          width={200}
          height={200}
          className="max-md:w-[150px] max-md:h-[150px] "
          alt="Email"
        />
        <div className="flex flex-col w-[20rem] gap-4 justify-center max-md:items-center">
          <h1 className="text-xl font-bold">تواصل معنا</h1>
          <div>
            <p className="text-md max-md:text-center text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
              نحرص على تنفيذ مقترحاتكم وملاحظاتكم وحل المشاكل التي تواجهكم في
              الموقع، راسلونا عبر البريد الإلكتروني: mostathmerplus@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className=" pb-8 flex justify-center items-center gap-5">
        <a
          href="https://twitter.com/7assan_abdulaal"
          className="text-2xl"
          target="_blank"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a
          href="https://github.com/HassanAlabdulal"
          className="text-2xl"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/hassan-alabdulal/"
          className="text-2xl"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </section>

      <section className="container pb-14 text-center">
        <h3 className="flex gap-1 justify-center items-center md:text-base text-sm text-muted-foreground ">
          جميع الحقوق محفوظة لفريق مُستثمر بلس &copy; ٢٠٢٤
        </h3>
      </section>
    </footer>
  );
}
