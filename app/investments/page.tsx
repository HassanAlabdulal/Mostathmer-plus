import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function investments() {
  return (
    <>
      <main className="min-h-screen w-full flex justify-center items-start mt-36 ">
        <section className="flex flex-col justify-center items-center gap-8 md:gap-12">
          <h2 className="md:text-7xl font-bold md:leading-relaxed leading-normal tracking-tight text-3xl text-center">
            فرص{" "}
            <span className="bg-gradient-to-b from-[#bfa260]/60 to-[#CFAA54] text-transparent bg-clip-text">
              الإستثمار
            </span>
          </h2>

          <div className="flex w-full flex-col gap-5 md:flex-row">
            <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
              <Image
                src="/assets/search.svg"
                alt="search"
                width={24}
                height={24}
              />
              <Input
                type="text"
                placeholder="d"
                // onChange={(e) => setQuery(e.target.value)}
                className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            {/* <CategoryFilter /> */}
          </div>

          {/* <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        /> */}
        </section>
      </main>
    </>
  );
}
