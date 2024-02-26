import { useEffect } from "react";
import anychart from "anychart";
import styles from "./index.module.css";

const Venn = ({ data: d }) => {
  const [set1, set2] = d;

  // Calculate the values ​​needed to create a Venn diagram
  const calc = (set1, set2) => {
    // Calculate the union
    let unionSet = [...set1, ...set2];
    let unionArray = unionSet.filter(
      (item, index) => unionSet.indexOf(item) === index
    );
    let unionStr = unionArray.join(",");

    // Calculate the subscription
    let subscription;
    if (set1.length >= set2.length) {
      subscription = set1.filter((m) => set2.includes(m));
    } else {
      subscription = set2.filter((m) => set1.includes(m));
    }

    // Calculate difference and convert to string
    let difference_b = set2.filter((m) => !set1.includes(m));
    let difference_a = set1.filter((m) => !set2.includes(m));

    return { subscription, unionStr, difference_b, difference_a };
  };

  let { subscription, unionStr, difference_b, difference_a } = calc(set1, set2);

  // draw Venn Diagram with set1 and set2
  useEffect(() => {
    let chart1 = anychart.venn([
      { x: "A", label:"A", name: difference_a, value: set1.length },
      { x: "B", label:"B", name: difference_b, value: set2.length },
      { x: ["A", "B"],label:"A,B", name: subscription, value: subscription.length },
    ]);
    chart1.container("container");
    chart1.title(":نمودار ون شما");
    chart1.fill("#a569bd");
    chart1.labels(true)
    chart1.stroke("white",5)
    chart1.labels().format("{%Label}\n\n\n{%Name}");
    chart1.draw();
  }, [set1, set2]);

  return (
    <>
      <div className={`${styles.container}`}>
        <div
          style={{ height: "100%" }}
          className={`${styles.vennContainer} animate__animated animate__rotateInDownRight`}
          id="container"
        ></div>
      </div>
      <table className={`${styles.table}`}>
        <thead>
          <tr className={`${styles.tr}`}>
            <th>اجتماع</th>
            <th>A - B</th>
            <th>B - A</th>
            <th>اشتراک</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`${styles.tr}`}>
            <td>{unionStr}</td>
            <td>{String(difference_a) || "{}"}</td>
            <td>{String(difference_b) || "{}"}</td>
            <td>{String(subscription) || "{}"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Venn;
