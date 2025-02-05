import React from "react";
import Wrapper from "./Wrapper";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Testimonial from "./Testimonial";
import {FaStar} from "react-icons/fa";
import {IoCheckmarkCircleSharp} from "react-icons/io5";
import Reviews from "./Reviews";
import RelateProducts from "./RelateProduct";

function CustomTabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{p: 3}}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AboutProduct = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Wrapper>
        <Box className="my-16">
          <Box className="">
            <Tabs
              className=" w-full "
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                className="flex-1 mx-auto text-xl text-black"
                label="Product Details"
                {...a11yProps(0)}
              />
              <Tab
                className="flex-1 mx-auto text-xl text-black"
                label="Rating & Reviews"
                {...a11yProps(1)}
              />
              <Tab
                className="flex-1 mx-auto text-xl text-black"
                label="FAQs"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab,
            optio aspernatur consectetur repudiandae laborum neque voluptatum
            modi provident, adipisci doloribus veritatis ducimus. Nihil atque
            adipisci, fugiat voluptatum facilis eum in repellendus enim
            laboriosam minima consequuntur corrupti omnis minus assumenda
            voluptate, quis deserunt voluptatem sequi numquam. Et sequi dolore,
            rem neque, eum aspernatur repellat maiores eveniet cum ut
            accusantium. Adipisci, ipsa ducimus ratione quae eius rem sunt a
            reprehenderit laboriosam sequi soluta nihil placeat vitae et
            molestiae. Tempora quis voluptate dicta nobis ut ipsum amet
            temporibus velit porro perspiciatis, atque animi similique culpa
            molestiae maiores corporis ipsa natus unde eligendi illo! Cupiditate
            officiis voluptas, voluptate neque quasi inventore delectus fuga
            minus necessitatibus doloremque ut consequatur illum veniam et
            explicabo facilis quam sequi! Velit commodi in voluptatum quae
            voluptates suscipit blanditiis facilis, libero, minima, ipsum
            adipisci doloribus nesciunt laborum cumque corporis ad repellat
            officia necessitatibus molestiae dolorum facere. Nobis fugiat
            debitis earum enim obcaecati soluta non aliquid! Dolorem, quam
            earum? Nulla, nostrum! Quas repudiandae distinctio quasi ipsa ea
            veritatis sapiente neque eius voluptatem autem inventore, at
            temporibus hic? Error eligendi corrupti ad, ut illo placeat beatae
            dicta animi, consectetur, nemo eaque! Quisquam nihil veniam debitis,
            adipisci numquam nobis optio blanditiis non?
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Reviews />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
        <RelateProducts />
      </Wrapper>
    </div>
  );
};

export default AboutProduct;
