import { PortableText } from "next-sanity";
import Image from "next/image";
import { Title } from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";

type HeroProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "heroSection" }
>;

export function Hero2({ title, subtitle, text, image }: HeroProps) {
  return (
    <div className="container dark:bg-background py-20 lg:pt-40">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center">
        {title && (
          <h1 className="leading-[0] font-sans">
            <span className="text-base font-semibold">{title}</span>
          </h1>
        )}
        {subtitle && <h2 className="mt-6 font-bold leading-[1.1]">{subtitle}</h2>}
        {text && (
          <div className="text-lg mt-6">
            <PortableText value={text} />
          </div>
        )}
       
      </div>
      <div className="flex flex-col justify-center">
       {image ? (
               <Image
                 className="w-full h-full rounded-lg"
                 src={urlFor(image).width(800).height(800).url()}
                 width={800}
                 height={800}
                 alt=""
               />
             ) : null}
      </div>
    </div>
  </div>


  );}