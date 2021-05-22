import React, { useState } from "react";
import CategoryModal from "./CategoryModal";
import HomeScreen from "./HomeScreen";

function Index() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <HomeScreen setOpen={setOpen} />
      <CategoryModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default Index;
