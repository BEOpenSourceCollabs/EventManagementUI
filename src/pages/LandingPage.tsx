import { useState } from "react";
import Header from "../components/Header";
import SignUp from "./SignUp";

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header setModal={setIsModalOpen} />
      <SignUp open={isModalOpen} setModal={setIsModalOpen} />
    </>
  );
}

export default LandingPage;
