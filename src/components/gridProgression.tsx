import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Statistic } from "antd";

const GridProgression = ({
  grid,
  position,
}: {
  grid: number;
  position: number;
}) => {
  let iconColor = { color: "#000000" };
  let iconDraw = <MinusOutlined />;
  if (grid > position) {
    iconColor = { color: "#51ff00" };
    iconDraw = <ArrowDownOutlined />;
  } else {
    iconColor = { color: "#ff0000" };
    iconDraw = <ArrowUpOutlined />;
  }
  return (
    <Statistic
      title=""
      precision={0}
      value={Math.abs(grid - position)}
      valueStyle={iconColor}
      prefix={iconDraw}
    />
  );
};
export default GridProgression;
