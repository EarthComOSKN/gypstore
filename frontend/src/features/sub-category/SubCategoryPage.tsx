import { useRouter } from "next/dist/client/router";
import { Navbar } from "../../component/Navbar";
import { Footer } from "../../component/Footer";

export const SubCategoryPage = () => {
  const router = useRouter();
  if (!router) return null;

  console.log(router.query);
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};
