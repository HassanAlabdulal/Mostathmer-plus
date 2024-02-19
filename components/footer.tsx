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

      <section className="container py-20 flex justify-center items-center">
        <div>
          <Image
            src="/assets/email.svg"
            width={200}
            height={200}
            alt="Email
          "
          />{" "}
        </div>
        <div></div>
      </section>

      <section className="container pb-14 text-center">
        <h3 className="flex gap-1 justify-center items-center">
          جميع الحقوق محفوظة لفريق مُستثمر بلس &copy; ٢٠٢٤
        </h3>
      </section>
    </footer>
  );
}
