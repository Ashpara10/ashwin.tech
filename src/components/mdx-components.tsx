"use client";
import { Info } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const AnchorTag = (props: any) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-700 font-medium dark:text-indigo-600 underline  underline-offset-2"
      href={props.href}
    >
      {props.children}
    </a>
  );
};
const StyledHeading1 = (props: any) => {
  return (
    <>
      <h1 className="mt-1.5 tracking-tight leading-tight text-lg opacity-95 font-medium  py-1 dark:text-gray-50">
        {props.children}
      </h1>
    </>
  );
};

export const BlockQuote = (props: any) => {
  const [colorScheme, setColorScheme] = useState({
    bg: "#afd89d",
    color: "#13250e",
    icon: <Info />,
  });

  return (
    <blockquote
      className={`border-l-[4px] py-1.5 px-4 dark:border-neutral-900 italic opacity-80`}
    >
      {props?.children}
    </blockquote>
  );
};

const StyledHeading2 = (props: any) => {
  return (
    <h2 className="mt-1.5 tracking-tight leading-tight text-lg opacity-95 font-medium py-1 ">
      {props.children}
    </h2>
  );
};
const StyledHeading3 = (props: any) => {
  return (
    <h3 className="mt-1.5 text-lg opacity-95 font-medium py-1 ">
      {props.children}
    </h3>
  );
};

const UnorderedList = (props: any) => {
  return (
    <ul className="w-full opacity-90 list-inside px-3 md:p-0 list-disc flex gap-y-1.5 mt-2  flex-col   ">
      {props.children}
    </ul>
  );
};
const OrderedList = (props: any) => {
  return (
    <ol className="w-full opacity-90 list-decimal px-3 md:p-0 list-inside flex gap-y-1.5 mt-2 flex-col ">
      {props.children}
    </ol>
  );
};

const RoundedImage = (props: any) => {
  const [IsImageLoaded, setIsImageLoaded] = useState(true);

  return (
    <div className="border-2 my-2 dark:border-dark-border border-gray-200 w-full overflow-hidden rounded-xl ">
      <Image
        alt=""
        className={`
  \ transition-all duration-100 ease-linear
    ${IsImageLoaded ? "blur-xl " : " blur-0 "})`}
        src={props.src}
        width={800}
        height={900}
        onLoadingComplete={() => setIsImageLoaded(false)}
      />
    </div>
  );
};

const StrongTag = (props: any) => {
  return <strong className=" font-medium ">{props.children}</strong>;
};

const Para = (props: any) => {
  return (
    <p className="w-ful text-base dark:text-white/80 text-black/80  ">
      {props.children}
    </p>
  );
};

export const MdxComponent = {
  strong: StrongTag,
  Image: RoundedImage,
  h1: StyledHeading1,
  h2: StyledHeading2,
  h3: StyledHeading3,
  ul: UnorderedList,
  ol: OrderedList,
  a: AnchorTag,
  blockquote: BlockQuote,
  p: Para,
};
