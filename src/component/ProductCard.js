import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

function ProductCard({ item }) {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <Card
      onClick={showDetail}
      key={item?.id}
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src={item.img} />
      <CardBody>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.choice == true ? "conscious choice" : ""}
        </CardSubtitle>
        <CardTitle tag="h5">{item.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          \ {item.price}
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.new == true ? "신상품" : ""}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
