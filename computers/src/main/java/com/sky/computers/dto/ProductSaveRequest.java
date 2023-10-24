package com.sky.computers.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductSaveRequest {
    private String productName;
    private String productDescription;
    private BigDecimal productPrice;
    private int productQuantity;
    private String productImage;
    private String productCategory;
}
