import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

const ScrollTop = () => {
  return (
    <Button
      variant={"secondary"}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="fixed bottom-8 right-6 p-2 h-8 rounded-none border"
    >
      <ChevronUp size={20} />
    </Button>
  );
};

export default ScrollTop;
