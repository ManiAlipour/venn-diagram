

import { useState } from "react";
import VennContext from "./components/context/venn";
import Header from "./components/header";
import Venn from "./components/venn";
import FormControles from "./components/form";

function App() {
  const [vennData, setVennData] = useState({});
  const [venn, setVenn] = useState(false);

  return (
   <>
   <div>
        <VennContext.Provider
          value={{
            venn,
            setVenn,
            vennData,
            setVennData,
          }}
        >
          <Header />
          {venn ? <Venn data={vennData} /> : <FormControles />}

        </VennContext.Provider>
      </div>
   </>
  );
}

export default App;
