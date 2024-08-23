import FileInput from "@/app/components/fileUpload";
import { Card } from "@nextui-org/react";
import React from "react";
import FileCard from "./FileCard";

interface Props {
  images: File[];
  setImages: (images: File[]) => void;
}

const Applicationfiles = (props: Props) => {
  return (
    <Card>
      <FileInput
        onSelect={(e) =>
          props.setImages([(e as any).target.files[0], ...props.images])
        }
      />
      <div className="flex gap-3 flex-wrap">
        {props.images.map((image, index) => {
          const srcUrl = URL.createObjectURL(image);
          return (
            <FileCard
              key={srcUrl}
              src={srcUrl}
              index={index}
              onDelete={(i) =>
                props.setImages([
                  ...props.images.slice(0, i),
                  ...props.images.slice(i + 1),
                ])
              }
            />
          );
        })}
      </div>
    </Card>
  );
};

export default Applicationfiles;
