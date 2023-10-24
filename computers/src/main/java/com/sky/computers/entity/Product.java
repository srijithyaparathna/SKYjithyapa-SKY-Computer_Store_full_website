package com.sky.computers.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "product")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {
    @Id
    @Column(name = "product_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int productId;

    @Column(name = "product_name", length = 100, nullable = false)
    private String productName;

    @Column(name = "product_description", length = 255, nullable = false)
    private String productDescription;

    @Column(name = "product_price", precision = 10, scale = 2, nullable = false)
    private BigDecimal productPrice;

    @Column(name = "product_quantity", nullable = false)
    private int productQuantity;

    @Column(name = "product_image_url", length = 255)
    private String productImage;

    @Column(name = "category_id")
    private String productCategory;

    @Column(name= "image_url")
    private String imageUrl;

}
