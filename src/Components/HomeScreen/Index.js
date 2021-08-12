import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import CategoryModal from "./CategoryModal";
import HomeScreen from "./HomeScreen";

function Index() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.from) {
      setOpen(true);
    }
  }, []);

  return (
    <div>
      <HomeScreen setOpen={setOpen} />
      <CategoryModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default Index;
