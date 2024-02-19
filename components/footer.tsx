"use client";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="font-bold text-xl flex">
            {/* <LogoIcon /> */}
            مُستثمر بلس{" "}
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">عنا</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              الخدمات
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              المميزات
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              الأسئلة الشائعة
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <h3 className="font-bold text-lg">تابعنا</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              <TwitterLogoIcon className="w-5 h-5" />
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              <LinkedInLogoIcon className="w-5 h-5" />
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">تواصل معنا</h3>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              البريد الإلكتروني
            </a>
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
