import { useEffect, useState } from "react";
import { getData } from "./APIcalls";

export default function DataFetch() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      let datatemp = await getData();
      setData(datatemp);
    })();
    console.log(data);
  });

  return <>calling API............</>;
}
