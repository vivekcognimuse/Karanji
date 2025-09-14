"use client";
import Button from "@/components/ui/Button";

export default function ScrollButton({ targetId, children, ...props }) {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button onClick={handleScroll} {...props}>
      {children}
    </Button>
  );
}
