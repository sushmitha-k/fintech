import { getImagePath } from "@/lib/utils";
import { Blog } from "@/types/blog";

const getBlogData = (): Blog[] => [
  {
    id: 1,
    title: "Top Fintech Trends to Watch in 2025",
    paragraph:
      "Explore the latest trends in financial technology, from AI-driven banking solutions to blockchain-based payment systems that are shaping the future of finance.",
    image: getImagePath("/images/blog/blog1.png"),
    author: {
      name: "Alex Johnson",
      image: getImagePath("/images/blog/author-01.png"),
      designation: "Fintech Analyst",
    },
    tags: ["fintech", "trends"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Financial Services",
    paragraph:
      "Artificial Intelligence is transforming the financial services industry by enhancing customer experiences, improving risk management, and automating processes.",
    image: getImagePath("/images/blog/blog2.png"),
    author: {
      name: "Maria Garcia",
      image: getImagePath("/images/blog/author-02.png"),
      designation: "Data Scientist",
    },
    tags: ["AI", "financial services"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "The Future of Digital Payments",
    paragraph:
      "As digital payment solutions continue to evolve, businesses must adapt to new technologies and consumer expectations. This article explores the future trends in digital payments.",
    image: getImagePath("/images/blog/blog3.png"),
    author: {
      name: "Liam Smith",
      image: getImagePath("/images/blog/author-03.png"),
      designation: "Payment Solutions Expert",
    },
    tags: ["payments", "future"],
    publishDate: "2025",
  },
];
export default getBlogData;
