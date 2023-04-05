import { Col, Row, Space, Divider, Select } from "antd";
import { EnvironmentTwoTone, MailTwoTone } from "@ant-design/icons";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "@/assets/images";
import InnerHeader from "../InnerHeader";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner-about")}>
        <Row className="pt-4 text-white">
          <Col span={8}>
            <Space className="ml-10">
              <EnvironmentTwoTone twoToneColor="#fff" />
              <a href="./">Store Location</a>
              <Divider type="vertical" />
              <MailTwoTone twoToneColor="#fff" />
              <a href="./">support@mojuri.com</a>
            </Space>
          </Col>
          <Col span={8}>
            <p className="text-center">
              Summer sale discount off 30%! <a href="./">Shop Now</a>
            </p>
          </Col>
          <Col className="pl-96" span={8}>
            <Space wrap>
              <Select
                className="w-35"
                defaultValue="USD"
                bordered={false}
                options={[
                  {
                    value: "USD",
                    label: "USD",
                    img: <img src={images.usd} alt=""></img>,
                  },
                  {
                    value: "EUR",
                    label: "EUR",
                    img: <img src={images.eur} alt=""></img>,
                  },
                  {
                    value: "GBP",
                    label: "GBP",
                    img: <img src={images.gbp} alt=""></img>,
                  },
                ]}
              />
            </Space>
            <Divider type="vertical" />
            <Space wrap>
              <Select
                className="min-w-38 text-white"
                defaultValue="English"
                bordered={false}
                options={[
                  {
                    value: "English",
                    label: "English",
                  },
                  {
                    value: "Deutsch",
                    label: "Deutsch",
                  },
                ]}
              />
            </Space>
          </Col>
        </Row>
      </div>
      <div className="w-100 h-54 mt-6">
        <Row className="text-white ml-2">
          <Col span={24}>
            <InnerHeader />
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Header;
