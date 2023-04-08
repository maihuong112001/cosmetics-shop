import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

import images from "@/assets/images";
function Footer() {
  return (
    <footer className="bg-gray-100 w-full mt-10">
      <div className="w-full mx-auto pb-8 pt-16">
        <div className="md:flex md:mt-0 md:order-1">
          <div className="mt-8 md:mt-0 md:ml-6 px-8 text-[13px] tracking-wider font-base">
            <h2>CONTACT US</h2>
            <br />
            <div className="flex mb-2">
              Head Office: <p className="text-gray-500 ml-1">26 Wyle Cop,</p>
            </div>
            <p className="text-gray-500 mb-2">
              Shrewsbury, Shropshire, SY1 1XD
            </p>
            <div className="flex mb-2">
              Tel: <p className="text-gray-500 ml-1">01743 234500</p>{" "}
            </div>
            <div className="flex mb-2">
              Email: <p className="text-gray-500 ml-1">support@mojuri.com.</p>{" "}
            </div>
            <Space className="text-[13px]">
              <FacebookOutlined className="border-[1px] border-gray-300 p-4 rounded-full"/>
              <TwitterOutlined className="border-[1px] border-gray-300 p-4 rounded-full" />
              <InstagramOutlined className="border-[1px] border-gray-300 p-4 rounded-full" />
              <YoutubeOutlined className="border-[1px] border-gray-300 p-4 rounded-full" />
            </Space>
          </div>
          <div className="mt-8 md:mt-0 md:ml-6 px-32 text-[13px] tracking-wider font-base">
            <h2>CUSTOMER SERVICES</h2>
            <br />
            <p className="text-gray-500 mb-2">Contact Us</p>
            <p className="text-gray-500 mb-2">Track Your Order</p>
            <p className="text-gray-500 mb-2">Product Care & Repair</p>
            <p className="text-gray-500 mb-2">Book an Appointment</p>
            <p className="text-gray-500 mb-2">Frequently Asked Questions</p>
            <p className="text-gray-500 mb-2">Shipping & Returns</p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-6 px-32 text-[13px] tracking-wider font-base">
            <h2>ABOUT US</h2>
            <br />
            <p className="text-gray-500 mb-2">About Us</p>
            <p className="text-gray-500 mb-2">FAQ</p>
            <p className="text-gray-500 mb-2">Our Producers</p>
            <p className="text-gray-500 mb-2">Sitemap</p>
            <p className="text-gray-500 mb-2">Terms & Conditions</p>
            <p className="text-gray-500 mb-2">Privacy Policy</p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-6 px-32 text-[13px] tracking-wider font-base">
            <h2>CATALOG</h2>
            <br />
            <p className="text-gray-500 mb-2">Earrings</p>
            <p className="text-gray-500 mb-2">Necklaces</p>
            <p className="text-gray-500 mb-2">Bracelets</p>
            <p className="text-gray-500 mb-2">Rings</p>
            <p className="text-gray-500 mb-2">Jewelry Box</p>
            <p className="text-gray-500 mb-2">Studs</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-[13px] tracking-wider font-base ml-10 text-gray-400">
            Copyright © 2023 Mojuri Jewellery
          </p>
          <img
            src={images.payments}
            alt="payments"
            className="h-10 mr-10"
          ></img>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
