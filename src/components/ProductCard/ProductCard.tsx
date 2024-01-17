import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  department: string;
  oldPrice?: number;
  //   currentPrice: number;
  description: string;
  price: number;
  discountPercentage: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category: string;
  thumbnail?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  category,
  price,
  oldPrice,
  discountPercentage,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 283,
        width: "100%",
        maxHeight: "100%",
        height: 400,
        aspectRatio: "1/1",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "space-between",
        dropShadow: "none",
        shadow: "none",
      }}
    >
      <CardMedia
        component="img"
        height="238px"
        width="183px"
        image={image}
        alt={title}
        style={{
          objectFit: "cover",
          height: "100%",
          maxHeight: "238px",
          maxWidth: "100%", // Ensure the image doesn't exceed the card width
          width: "100%",
          aspectRatio: "1/1",
        }}
      />
      <CardContent style={{ paddingLeft: "1rem" }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {category}
        </Typography>
        <div
          style={{ display: "flex", alignItems: "baseline", marginTop: "auto" }}
        >
          {oldPrice && (
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ textDecoration: "line-through" }}
            >
              ${(price * discountPercentage).toFixed(2)}
            </Typography>
          )}
          <Typography
            variant="h6"
            color="textPrimary"
            component="div"
            sx={{ color: "#23856D" }}
            style={{ marginLeft: "0.5rem" }}
          >
            ${price.toFixed(2)}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
