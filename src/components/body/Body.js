import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Row } from "reactstrap";
import "./Body.css";
import Thumb from "../thumb/Thumb";
import { Link } from "react-router-dom";
import hinh1 from "../.././img/hinh1.png";
import hinh2 from "../.././img/hinh2.png";
import Card_news4 from "../blog/card-news4/Card-news4";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Body() {
  const [data, setData] = useState([]);
  const getData = () => {
    const url = "https://658f810fcbf74b575ec9e34d.mockapi.io/products";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const [news, setNews] = useState([]);
  const getNews = () => {
    const url1 = "https://658f810fcbf74b575ec9e34d.mockapi.io/news";
    axios
      .get(url1)
      .then((res) => {
        setNews(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getNews();
  }, []);
  console.log(news);

  return (
    <>
      <div className="body">
        <Container>
          <div className="home-content">
            <div className="new-arrivals">
              <div className="title">
                <h3>TOP BÁN CHẠY</h3>
              </div>
              <Row>
                {data
                  .filter((item) => item.id < 5)
                  .map((item, index) => (
                    <Thumb key={index} product={item} />
                  ))}
              </Row>
            </div>
            <div className="featured-collection">
              <div className="title">
                <h3>TOP NỔI BẬT</h3>
              </div>
              <Row>
                {data
                  .filter((item) => item.id > 6 && item.id < 11)
                  .map((item, index) => (
                    <Thumb key={index} product={item} />
                  ))}
              </Row>
            </div>
            <div className="sale-off">
              <Container>
                <Row>
                  <div className="image">
                    <img src={hinh1} />
                    <img src={hinh2} />
                  </div>
                  <div className="import">
                    <h5>SALE TẾT ĐÓN XUÂN</h5>
                    <p>ƯU ĐÃI LÊN ĐẾN 80% </p>
                  </div>
                </Row>
              </Container>
            </div>
            <div className="title">
              <h4>Gợi ý cho bạn</h4>
            </div>
            <div className="product-list-home">
              <Row>
                {data.slice(4, 12).map((item, index) => (
                  <Thumb key={index} product={item} />
                ))}
              </Row>
            </div>
            <div className="blog">
              <div className="title">
                <h4>TIN TỨC</h4>
                <Link to="/tin-tuc/">
                  <span>XEM THÊM</span>
                  <AiOutlineDoubleRight />
                </Link>
              </div>
              <Row>
                {news.slice(0, 3).map((item, index) => (
                  <Card_news4 key={index} news={item} />
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
