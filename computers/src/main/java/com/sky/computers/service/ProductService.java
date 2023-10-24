package com.sky.computers.service;

import com.sky.computers.dto.ProductSaveRequest;
import com.sky.computers.entity.Product;

public interface ProductService {


    Product saveProduct(ProductSaveRequest productSaveRequest);
}
