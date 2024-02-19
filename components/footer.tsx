"use client";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 flex flex-col md:flex-row justify-center items-center md:gap-24 gap-12">
        <div className="">
          <Image src="/assets/email.svg" width={200} height={200} alt="Email" />{" "}
        </div>
        <div className="flex flex-col w-[20rem] gap-4 max-md:justify-center max-md:items-center">
          <h1 className="text-xl font-bold">تواصل معنا!</h1>
          <div>
            <p className="text-md max-md:text-center text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
              نحرص على تنفيذ مقترحاتكم وملاحظاتكم وحل المشاكل التي تواجهكم في
              الموقع، راسلونا عبر البريد الإلكتروني: mostathmerplus@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3 className="flex gap-1 justify-center items-center">
          جميع الحقوق محفوظة لفريق مُستثمر بلس &copy; ٢٠٢٤
        </h3>
      </section>
    </footer>
  );
}
