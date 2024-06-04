import React from "react";

export const TrashcanDelete = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    display="block"
    enableBackground="new 0 0 24 24"
  >
    <path
      fill="none"
      stroke={color ?? "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 2.5v-2h4v2M1 2.5h14M9.533 13.5l.25-9M6.217 4.5l.25 9M2.661 4.5l.889 11h8.9l.888-11"
    ></path>
  </svg>
);

export const EditPencil = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="false"
    aria-labelledby="ltclid25_title "
  >
    <title id="ltclid25_title">Edit</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 14V11.7071L9.5 4.20708L11.7929 6.49998L4.29289 14H2ZM12.5 5.79287L13.7929 4.49998L11.5 2.20708L10.2071 3.49998L12.5 5.79287ZM11.1464 1.14642L1.14645 11.1464L1 11.5V14.5L1.5 15H4.5L4.85355 14.8535L14.8536 4.85353V4.14642L11.8536 1.14642H11.1464Z"
      fill={color ?? "currentColor"}
    ></path>
  </svg>
);

export const DateIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    enableBackground="new 0 0 500 500"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      clipRule="evenodd"
      d="M31.949,431.711c0,20.078,16.264,36.34,36.34,36.34h363.421  c20.078,0,36.34-16.262,36.34-36.34V113.718c0-20.079-16.262-36.343-36.34-36.343h-36.345V54.662  c0-12.536-10.176-22.713-22.711-22.713c-12.537,0-22.717,10.177-22.717,22.713v22.713h-36.34V54.662  c0-12.536-10.179-22.713-22.715-22.713s-22.712,10.177-22.712,22.713v22.713H231.83V54.662c0-12.536-10.177-22.713-22.713-22.713  c-12.539,0-22.716,10.177-22.716,22.713v22.713h-36.34V54.662c0-12.536-10.177-22.713-22.715-22.713  c-12.536,0-22.713,10.177-22.713,22.713v22.713H68.29c-20.077,0-36.34,16.264-36.34,36.343V431.711z M97.367,122.802h7.266v31.799  c0,12.538,10.177,22.715,22.713,22.715c12.539,0,22.715-10.177,22.715-22.715v-31.799h36.34v31.799  c0,12.538,10.177,22.715,22.716,22.715c12.536,0,22.713-10.177,22.713-22.715v-31.799h36.342v31.799  c0,12.538,10.176,22.715,22.712,22.715s22.715-10.177,22.715-22.715v-31.799h36.34v31.799c0,12.538,10.18,22.715,22.717,22.715  c12.535,0,22.711-10.177,22.711-22.715v-31.799h7.268c11.084,0,19.99,8.909,19.99,19.991v96.302c0,11.082-8.906,19.991-19.99,19.991  H97.367c-11.086,0-19.991-8.909-19.991-19.991v-96.302C77.375,131.711,86.28,122.802,97.367,122.802z"
      fill={color ?? "currentColor"}
      fillRule="evenodd"
    />
  </svg>
);

export const AddIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    id="Layer_1"
    enableBackground="new 0 0 32 32"
    version="1.1"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
  </svg>
);

export const ArrowIcon = ({ color, size, right }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    viewBox="0 0 48 48"
    style={{ transform: right && "rotate(180deg)" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h48v48h-48z" fill="none" />
    <path d="M40 22h-24.34l11.17-11.17-2.83-2.83-16 16 16 16 2.83-2.83-11.17-11.17h24.34v-4z" />
  </svg>
);
