import AnimatedBox, {
  rightVariant,
  scrollVariant,
  yoyoVariant,
} from "./VariantsUtility";

export default function ScrollReveal() {
  return (
    <div className=" flex items-center justify-center flex-col">
      <div className="h-60  m-4 text-center w-60 bg-purple-400 rounded-md"></div>
      <div className="h-60  w-60 m-4 text-center bg-purple-400 rounded-md"></div>
      <div className="h-60  w-60 m-4 text-center bg-purple-400 rounded-md"></div>
      <AnimatedBox
        className={"border border-orange-700"}
        variants={rightVariant}
      >
        <h1>Hello</h1>
      </AnimatedBox>
      <AnimatedBox variants={scrollVariant} />
      <AnimatedBox variants={yoyoVariant} />
      <div className="h-60  w-60 m-4 text-center bg-purple-400 rounded-md"></div>
      <div className="h-60  w-60 m-4 text-center bg-purple-400 rounded-md"></div>
    </div>
  );
}
