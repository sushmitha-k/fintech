import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-l font-bold text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
