import Index1 from "./pages/index1/index1";
import Index2 from "./pages/index2/index2";
import Index3 from "./pages/index3/index3";
import Index4 from "./pages/index4/index4";
import Index5 from "./pages/index5/index5";
import Index6 from "./pages/index6/index6";
import IndexSecond1 from "./pages2/index1/index1";
import IndexSecond2 from "./pages2/index2/index2";
import IndexSecond3 from "./pages2/index3/index3";
import IndexSecond4 from "./pages2/index4/index4";
import IndexSecond5 from "./pages2/index5/index5";
import IndexSecond6 from "./pages2/index6/index6";

const routes = [
  { path: "/Indexsecond6", component: IndexSecond6 },
  { path: "/indexsecond5", component: IndexSecond5 },
  { path: "/indexsecond4", component: IndexSecond4 },
  { path: "/indexsecond3", component: IndexSecond3 },
  { path: "/indexsecond2", component: IndexSecond2 },
  { path: "/indexsecond1", component: IndexSecond1 },
  { path: "/index6", component: Index6 },
  { path: "/index5", component: Index5 },
  { path: "/index4", component: Index4 },
  { path: "/index3", component: Index3 },
  { path: "/index2", component: Index2 },
  { path: "/", component: Index1 },
];

export default routes;
