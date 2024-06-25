// import { client } from "@/lib/createClient";
import { client } from "../../../../sanity/lib/client";

import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import Wrapper from "@/components/layout/Wrapper";
// import AddToCartButton from "@/components/Button";
// import { auth } from "@clerk/nextjs";

interface IProduct {
  title: string;
  image: IImage;
  alt: string;
  category: {
    name: string;
  };
  price: number;
  ptype: string;
  _id: string;
}

async function getData(slug: string) {
  const res = await client.fetch(
    `*[_type=="product" && alt==$slug]{
      title,image,alt,price,quantity,_id,category -> {
        name
      }, ptype -> {
        name
      }
    }`,
    { slug }
  );
  return res;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);

  return (
    <Wrapper>
      <div className="  mx-[8.5%] py-10">
        <div className="flex justify-start gap-x-5 w-full">
          {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 justify-center items-center gap-y-8 gap-x-5 mt-24"> */}
          <div className="hidden lg:flex justify-end items-start">
            <Image
              src={urlForImage(data[0].image).url()}
              alt="item.alt"
              width={100}
              height={100}
              className="max-h-[100px] object-cover object-top"
            />
          </div>
          <div key={data[0]._id} className="flex flex-col gap-y-2">
            <Image
              src={urlForImage(data[0].image).url()}
              alt="item.alt"
              width={700}
              height={700}
              className="max-h-[700px] object-cover object-top"
            />
          </div>
          <div>
            {/* Right side */}
            <h2 className="pt-10 text-xl sm:text-3xl">{data[0].title}</h2>
            {/* <div className="pdp">{data[0].ptype.name}</div> */}
            <h4></h4>
            <div className="pt-5">
              {/* <AddToCartButton props={data[0]} /> */}
              <span className=" text-lg sm:text-2xl font-bold">
                ${data[0].price}
              </span>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-y-8 gap-x-5">
          <div className="relative">
            <h4 className="z-20">Product Information</h4>
            <div className="z-0 absolute left-10 text-[#F2F3F7] text-2xl font-bodyFont font-bold">
              Overview
            </div>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default page;
