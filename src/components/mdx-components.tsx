"use client";
import Image from "next/image";
import { useState } from "react";

type AnchorTagProps = {
  href: string;
  children: React.ReactNode;
};

type Props = {
  children: React.ReactNode;
};

const ListItem = (props: Props) => {
  return <li className="w-full leading-tight">{props.children}</li>;
};

const AnchorTag = (props: AnchorTagProps) => {
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
const StyledHeading1 = (props: Props) => {
  return (
    <>
      <h1 className="mt-2 w-full tracking-tight leading-tight text-lg opacity-95 font-medium  py-1 dark:text-gray-50">
        {props.children}
      </h1>
    </>
  );
};

export const BlockQuote = (props: Props) => {
  return (
    <blockquote
      className={`border-l-[4px] w-full py-1.5 px-4 dark:border-neutral-900 italic opacity-80`}
    >
      {props?.children}
    </blockquote>
  );
};

const StyledHeading2 = (props: Props) => {
  return (
    <h2 className="mt-2 w-full tracking-tight leading-tight text-lg opacity-95 font-medium py-1 ">
      {props.children}
    </h2>
  );
};
const StyledHeading3 = (props: Props) => {
  return (
    <h3 className="mt-2 w-full text-lg opacity-95 font-medium py-1 ">
      {props.children}
    </h3>
  );
};

const UnorderedList = (props: Props) => {
  return (
    <ul className="w-full opacity-90 leading-snug list-inside px-3 md:p-0 list-disc flex gap-y-1 mt-2  flex-col   ">
      {props.children}
    </ul>
  );
};
const OrderedList = (props: Props) => {
  return (
    <ol className="w-full opacity-90 leading-snug list-decimal px-3 md:p-0 list-inside flex gap-y-1 mt-2 flex-col ">
      {props.children}
    </ol>
  );
};

const RoundedImage = (props: { src: string }) => {
  const [IsImageLoaded, setIsImageLoaded] = useState(true);

  return (
    <div className="border-2 my-2 mt-2 dark:border-dark-border border-gray-200 w-full overflow-hidden rounded-xl ">
      <Image
        alt=""
        className={`
  \ transition-all duration-100 ease-linear
    ${IsImageLoaded ? "blur-xl " : " blur-0 "})`}
        src={props.src}
        width={800}
        height={900}
        onLoad={() => setIsImageLoaded(false)}
      />
    </div>
  );
};

const StrongTag = (props: Props) => {
  return <strong className=" font-medium ">{props.children}</strong>;
};

const Para = (props: Props) => {
  return (
    <p className="w-full mt-2 text-base leading-snug dark:text-white/80 text-black/80  ">
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
  li: ListItem,
};
