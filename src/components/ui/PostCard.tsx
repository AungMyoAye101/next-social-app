import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { TbShare3 } from "react-icons/tb";
import Image from "next/image";
import Image5 from "@/components/img/userPhoto.jpg";
import Image1 from "@/components/img/image 11.jpg";

interface PostsProp {
  id: number;
  title: string;
}
interface PostCardPros {
  post: PostsProp[];
}
const PostCard = ({ post }: PostCardPros) => {
  if (!post) return;
  return (
    <section className="flex flex-col gap-6">
      {post.map((post) => (
        <Card className="bg-slate-50" key={post.id}>
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://nextui.org/avatars/avatar-1.png"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  Chris Evan
                </h4>
              </div>
            </div>
          </CardHeader>
          <div className="px-4 flex flex-col gap-2">
            <p>{post.title}</p>
            <div className="relative w-full h-40 sm:h-56 md:h-64">
              <Image src={Image1} alt="photo" fill className="rounded" />
            </div>
          </div>
          <CardFooter>
            <div className="flex w-full ">
              <Button
                size="sm"
                radius="none"
                className="flex-1 bg-slate-50 text=lg  font-serif hover:bg-gray-300 rounded"
              >
                <BiLike className="text-lg" />
                Like
              </Button>
              <Button
                size="sm"
                radius="none"
                className="flex-1 bg-slate-50 text=lg  font-serif hover:bg-gray-300 rounded"
              >
                <GoComment className="text-lg" />
                Comment
              </Button>
              <Button
                size="sm"
                radius="none"
                className="flex-1 bg-slate-50 text=lg  font-serif hover:bg-gray-300 rounded"
              >
                <TbShare3 className="text-lg " />
                Share
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default PostCard;
